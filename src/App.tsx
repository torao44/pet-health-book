import { useState, useEffect } from "react";
import { db, auth, googleProvider } from "./firebase";
import { ref, onValue, set, update } from "firebase/database";
import { onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";

// ============================================================
// バージョン情報
// ============================================================
const APP_VERSION = "1.9.0";
const VERSION_HISTORY = [
  { version: "1.9.0", date: "2026-10-07", notes: ["診療明細書のAI解析機能を追加（Gemini API）", "薬・注射の効果を自動解説"] },
  { version: "1.8.0", date: "2026-09-21", notes: ["フード記録にパッケージ写真を追加", "思い出ページの写真スワイプ対応", "思い出ページのプロフィール写真対応"] },
  { version: "1.7.0", date: "2026-09-15", notes: ["思い出ページ（隠し機能⭐）を追加", "ゴミ箱・バックアップ・リストア機能を追加", "ブラウザ/スマホの戻るボタン対応"] },
  { version: "1.6.0", date: "2026-09-01", notes: ["フォトアルバム機能を追加（1ペット7枚）", "支出集計機能を追加", "誕生日バナーを追加"] },
  { version: "1.5.0", date: "2026-08-15", notes: ["体重グラフにリスト表示・印刷機能を追加", "ペット詳細画面でスワイプ切り替え対応", "カテゴリ「その他」を「日記・その他」に変更"] },
  { version: "1.4.0", date: "2026-08-01", notes: ["体重比較グラフのバグ修正", "生年月日をプロフィールに表示", "マイクロチップ・保険カードを未入力時に非表示"] },
  { version: "1.3.0", date: "2026-07-15", notes: ["グループ共有機能を追加", "カレンダー表示を追加", "記録一覧の検索・フィルター機能"] },
  { version: "1.0.0", date: "2026-06-01", notes: ["初期リリース", "ペット管理・健康記録・体重グラフ"] },
];

// ============================================================
// Types
// ============================================================
interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  birthdate: string;
  color: string;
  icon: string;
  photo?: string;
  weight?: string;
  microchip?: string;
  insurance?: string;
  vet?: string;
  vetPhone?: string;
  vetAddress?: string;
  vetHours?: string;
  vetNote?: string;
  notes?: string;
  order?: number; // ★ 追加: 並び替え順
}

interface HealthRecord {
  id: number;
  petId: number;
  date: string;
  category: "病院" | "ワクチン" | "薬" | "体重" | "フード" | "日記・その他";
  title: string;
  description: string;
  weight?: string;
  nextDate?: string;
  cost?: string;
  foodPhoto?: string; // ★ フードのパッケージ写真（base64）
}

// ★ 追加: フォトアルバム用
interface PetPhoto {
  id: number;
  petId: number;
  date: string;
  caption: string;
  data: string; // base64
}

// ★ 思い出（旅立ったペット）
interface Memorial {
  id: number;
  name: string;
  species: string;
  birthdate: string;
  passedDate: string;
  note: string;
  color: string;
  profilePhoto?: string; // ★ プロフィール写真
  photos: { id: number; data: string; date: string }[];
}

interface AppState {
  pets: Pet[];
  records: HealthRecord[];
  photos: PetPhoto[];
  trash: HealthRecord[];
  memorials: Memorial[];
  nextPetId: number;
  nextRecordId: number;
  nextPhotoId: number;
  nextMemorialId: number;
}

type View = "home" | "petDetail" | "addPet" | "editPet" | "addRecord" | "editRecord" | "recordList" | "album" | "trash" | "memorial" | "memorialDetail" | "addMemorial" | "editMemorial";

const CATEGORY_ICONS: Record<HealthRecord["category"], string> = {
  病院: "🏥",   // ★ 変更: 診察→病院
  ワクチン: "💉",
  薬: "💊",
  体重: "⚖️",
  フード: "🍖",
  "日記・その他": "📝",
};

const CATEGORY_COLORS: Record<HealthRecord["category"], string> = {
  病院: "#EF4444",  // ★ 変更: 診察→病院
  ワクチン: "#8B5CF6",
  薬: "#3B82F6",
  体重: "#10B981",
  フード: "#F59E0B",
  "日記・その他": "#6B7280",
};

const SPECIES_ICONS: Record<string, string> = {
  猫: "🐱", 犬: "🐶", うさぎ: "🐰", ハムスター: "🐹",
  鳥: "🐦", 魚: "🐠", その他: "🐾",
};

const DEFAULT_STATE: AppState = {
  pets: [],
  records: [],
  photos: [],
  trash: [],
  memorials: [],
  nextPetId: 1,
  nextRecordId: 1,
  nextPhotoId: 1,
  nextMemorialId: 1,
};



// ============================================================
// ★ EXIF撮影日時の取得（JPEGのみ対応。取得できなければnullを返す）
function getExifDate(arrayBuffer: ArrayBuffer): string | null {
  try {
    const view = new DataView(arrayBuffer);
    if (view.getUint16(0, false) !== 0xFFD8) return null; // JPEGでない
    const length = view.byteLength;
    let offset = 2;
    while (offset < length) {
      const marker = view.getUint16(offset, false);
      offset += 2;
      if (marker === 0xFFE1) { // APP1 (EXIF)
        if (view.getUint32(offset + 2, false) !== 0x45786966) return null; // "Exif"
        const tiffOffset = offset + 8;
        const little = view.getUint16(tiffOffset, false) === 0x4949;
        const firstIFDOffset = view.getUint32(tiffOffset + 4, little);
        let dirOffset = tiffOffset + firstIFDOffset;
        const entries = view.getUint16(dirOffset, little);
        let exifSubIFDOffset = -1;
        for (let i = 0; i < entries; i++) {
          const entryOffset = dirOffset + 2 + i * 12;
          const tag = view.getUint16(entryOffset, little);
          if (tag === 0x8769) { // ExifIFD pointer
            exifSubIFDOffset = tiffOffset + view.getUint32(entryOffset + 8, little);
          }
        }
        // ExifサブIFD内のDateTimeOriginal (0x9003) を探す。なければメインIFDのDateTime(0x0132)を探す
        const searchIFD = (ifdOffset: number, targetTag: number): string | null => {
          if (ifdOffset < 0 || ifdOffset >= length) return null;
          const cnt = view.getUint16(ifdOffset, little);
          for (let i = 0; i < cnt; i++) {
            const eOffset = ifdOffset + 2 + i * 12;
            const tag = view.getUint16(eOffset, little);
            if (tag === targetTag) {
              const valueOffset = tiffOffset + view.getUint32(eOffset + 8, little);
              let str = "";
              for (let j = 0; j < 19; j++) {
                const code = view.getUint8(valueOffset + j);
                if (code === 0) break;
                str += String.fromCharCode(code);
              }
              return str; // "YYYY:MM:DD HH:MM:SS"
            }
          }
          return null;
        };
        let dateStr = exifSubIFDOffset > 0 ? searchIFD(exifSubIFDOffset, 0x9003) : null;
        if (!dateStr) dateStr = searchIFD(dirOffset, 0x0132);
        if (dateStr && dateStr.length >= 10) {
          const y = dateStr.slice(0, 4), m = dateStr.slice(5, 7), d = dateStr.slice(8, 10);
          if (/^\d{4}$/.test(y) && /^\d{2}$/.test(m) && /^\d{2}$/.test(d)) {
            return `${y}-${m}-${d}`;
          }
        }
        return null;
      } else if ((marker & 0xFF00) !== 0xFF00) {
        break;
      } else {
        offset += view.getUint16(offset, false);
      }
    }
    return null;
  } catch {
    return null;
  }
}


// ============================================================
// ★ Gemini API 連携（診療明細書のAI解析）
// ============================================================
const GEMINI_KEY_STORAGE = "pet-health-gemini-api-key";
const GEMINI_MODEL = "gemini-flash-latest"; // 常に最新のFlashモデルを指すエイリアス

function getGeminiApiKey(): string {
  return localStorage.getItem(GEMINI_KEY_STORAGE) || "";
}
function setGeminiApiKey(key: string) {
  if (key) localStorage.setItem(GEMINI_KEY_STORAGE, key);
  else localStorage.removeItem(GEMINI_KEY_STORAGE);
}

// base64データURLから「薬・注射の解説」をGeminiに依頼する
async function analyzeReceiptWithGemini(imageDataUrl: string): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) throw new Error("NO_KEY");

  const base64 = imageDataUrl.split(",")[1];
  const mimeMatch = imageDataUrl.match(/^data:(image\/\w+);/);
  const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

  const prompt = `これはペットの動物病院の診療明細書・処方箋の写真です。
以下の手順で日本語で回答してください。

1. 明細書に記載されている薬・注射・ワクチン・処置の項目を、記載されている金額（円）とセットですべて読み取ってください（なければ「記載なし」と書く）
2. それぞれの薬・注射について、どんな効果・目的があるものかを1〜2文で簡単に解説してください（獣医でも薬剤師でもないが一般的に知られている情報として、やさしい言葉で）
3. 診療内容（症状名・処置内容）がわかれば1〜2文で要約してください
4. 明細書に記載されている合計金額（税込）を読み取ってください（なければ各項目の金額を合計して「（概算）」と明記する。それも不可能なら「不明」と書く）

出力は以下の形式に厳密に従ってください。Markdown記法（#やアスタリスク**や-の箇条書き記号）は一切使わず、絵文字と改行だけで見やすく整形してください。前置きや断り書きは一切不要、本文のみ出力してください:

💊 薬剤名A（¥金額）
　効果の説明

💉 薬剤名B（¥金額）
　効果の説明

📋 診療内容
　要約文

💰 合計金額（税込）
　¥合計金額

もし画像が診療明細書でない、または文字が読み取れない場合は「診療明細書を読み取れませんでした。はっきり写った写真で再度お試しください。」とだけ出力してください。`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inline_data: { mime_type: mimeType, data: base64 } },
          ],
        }],
      }),
    }
  );

  if (!res.ok) {
    const errBody = await res.json().catch(() => null);
    const msg = errBody?.error?.message || `HTTPエラー ${res.status}`;
    throw new Error(msg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("AIからの応答が空でした");
  return text.trim();
}

const MIGRATION_KEY = "pet-health-migrated-v1";
function migrateRecords(records: HealthRecord[]): HealthRecord[] {
  const alreadyMigrated = localStorage.getItem(MIGRATION_KEY);
  if (alreadyMigrated) return records;
  const migrated = records.map(r => ({
    ...r,
    category: (r.category as string) === "診察" ? "病院" : r.category,
  })) as HealthRecord[];
  // マイグレーション済みフラグを立てる（次回以降はスキップ）
  localStorage.setItem(MIGRATION_KEY, "1");
  return migrated;
}

function calcAge(birthdate: string): string {
  if (!birthdate) return "";
  const birth = new Date(birthdate);
  const now = new Date();
  const years = now.getFullYear() - birth.getFullYear();
  const months = now.getMonth() - birth.getMonth();
  const totalMonths = years * 12 + months;
  if (totalMonths < 12) return `${totalMonths}ヶ月`;
  return `${Math.floor(totalMonths / 12)}歳${totalMonths % 12 > 0 ? totalMonths % 12 + "ヶ月" : ""}`;
}

// ============================================================
// Main App
// ============================================================
export default function App() {
  const [user, setUser] = useState<User | null | "loading">("loading");
  const [groupId, setGroupId] = useState<string | null | "loading">("loading");
  const [state, setState] = useState<AppState | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [view, setView] = useState<View>("home");
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const [editingPet, setEditingPet] = useState<Partial<Pet>>({});
  const [editingRecord, setEditingRecord] = useState<Partial<HealthRecord>>({});
  const [filterCategory, setFilterCategory] = useState<string>("すべて");
  const [toast, setToast] = useState<string>("");
  const [calendarRecords, setCalendarRecords] = useState<HealthRecord[]>([]);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [inviteInput, setInviteInput] = useState("");
  const [inviteError, setInviteError] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // ★ 追加: 検索
  const [searchDateFrom, setSearchDateFrom] = useState(""); // ★ 追加: 日付範囲From
  const [searchDateTo, setSearchDateTo] = useState("");   // ★ 追加: 日付範囲To
  const [searchHasCost, setSearchHasCost] = useState(false); // ★ 追加: 費用あり絞り込み
  const [showSearchFilter, setShowSearchFilter] = useState(false); // ★ 追加: 詳細フィルター開閉
  const [showWeightCompare, setShowWeightCompare] = useState(false);
  const [sortMode, setSortMode] = useState(false);
  const [birthdayDismissed, setBirthdayDismissed] = useState(false);
  const [showCostSummary, setShowCostSummary] = useState(false);
  const [albumPhoto, setAlbumPhoto] = useState<PetPhoto | null>(null);
  const [showVersionHistory, setShowVersionHistory] = useState(false); // ★ バージョン履歴
  const [showApiKeySettings, setShowApiKeySettings] = useState(false); // ★ Gemini APIキー設定
  const [geminiKeyInput, setGeminiKeyInput] = useState(getGeminiApiKey());
  const [aiAnalyzing, setAiAnalyzing] = useState(false); // ★ AI解析中
  const [aiResult, setAiResult] = useState<string | null>(null); // ★ AI解析結果（確認モーダル用）
  const [aiError, setAiError] = useState<string | null>(null);
  const [selectedMemorialId, setSelectedMemorialId] = useState<number | null>(null);
  const [editingMemorial, setEditingMemorial] = useState<Partial<Memorial>>({});
  const [memorialAlbumPhoto, setMemorialAlbumPhoto] = useState<{ data: string; date: string } | null>(null);
  const [memTheme, setMemTheme] = useState<"sakura" | "sky" | "dusk" | "night">("sakura"); // ★ 思い出テーマ
  const [showTimeline, setShowTimeline] = useState(false); // ★ 追加: タイムライン
  const [showStats, setShowStats] = useState(false);       // ★ 追加: 統計

  // ★ ブラウザ戻るボタン対応 ＋ リロード時に現在のページを復元
  const navigateTo = (nextView: View, petId?: number) => {
    const finalPetId = petId ?? selectedPetId;
    const hash = finalPetId !== null && finalPetId !== undefined
      ? `#${nextView}-${finalPetId}`
      : `#${nextView}`;
    window.history.pushState({ view: nextView, petId: finalPetId ?? null }, "", hash);
    // ★ setViewとsetSelectedPetIdを同時に更新して画面ちらつきを防止
    if (petId !== undefined) setSelectedPetId(petId);
    setView(nextView);
  };

  useEffect(() => {
    // 起動時：URLハッシュがあればそのページを復元、なければhome
    const hash = window.location.hash.replace(/^#/, "");
    let initialView: View = "home";
    let initialPetId: number | null = null;
    if (hash) {
      const match = hash.match(/^([a-zA-Z]+)(?:-(\d+))?$/);
      if (match) {
        const v = match[1] as View;
        const validViews: View[] = ["home", "petDetail", "addPet", "editPet", "addRecord", "editRecord", "recordList", "album", "trash"];
        if (validViews.includes(v)) {
          initialView = v;
          if (match[2]) initialPetId = Number(match[2]);
        }
      }
    }
    window.history.replaceState({ view: initialView, petId: initialPetId }, "", hash ? `#${hash}` : window.location.pathname);
    if (initialView !== "home") setView(initialView);
    if (initialPetId !== null) setSelectedPetId(initialPetId);

    const handlePop = (e: PopStateEvent) => {
      const st = e.state as { view: View; petId: number | null } | null;
      if (st) {
        setView(st.view);
        if (st.petId !== null) setSelectedPetId(st.petId);
      } else {
        setView("home");
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) { setGroupId(null); setState(null); }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user || user === "loading") return;
    const memberRef = ref(db, `pet-health-book/members/${user.uid}`);
    const unsub = onValue(memberRef, (snap) => {
      const gid = snap.val();
      setGroupId(gid || null);
    });
    return () => unsub();
  }, [user]);

  useEffect(() => {
    if (!groupId || groupId === "loading") return;
    const dataRef = ref(db, `pet-health-book/groups/${groupId}/data`);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        const rawRecords: HealthRecord[] = val.records
          ? (Array.isArray(val.records) ? val.records : Object.values(val.records))
          : [];
        const normalized: AppState = {
          ...val,
          pets: val.pets
            ? (Array.isArray(val.pets) ? val.pets : Object.values(val.pets))
            : [],
          records: migrateRecords(rawRecords),
          photos: val.photos
            ? (Array.isArray(val.photos) ? val.photos : Object.values(val.photos))
            : [],
          trash: val.trash
            ? (Array.isArray(val.trash) ? val.trash : Object.values(val.trash))
            : [],
          memorials: val.memorials
            ? (Array.isArray(val.memorials) ? val.memorials : Object.values(val.memorials))
            : [],
          nextPhotoId: val.nextPhotoId || 1,
          nextMemorialId: val.nextMemorialId || 1,
        };
        setState(normalized);
      } else {
        set(dataRef, DEFAULT_STATE);
        setState(DEFAULT_STATE);
      }
    }, (error) => {
      console.error("Firebase sync error:", error);
      showToast("⚠️ 同期エラー。オフラインで動作中");
      setState(DEFAULT_STATE);
    });
    return () => unsubscribe();
  }, [groupId]);

  async function createGroup() {
    if (!user || user === "loading") return;
    const newGroupId = Math.random().toString(36).slice(2, 10).toUpperCase();
    await set(ref(db, `pet-health-book/groups/${newGroupId}/info`), {
      createdBy: user.uid,
      createdAt: new Date().toISOString(),
    });
    await set(ref(db, `pet-health-book/members/${user.uid}`), newGroupId);
    setGroupId(newGroupId);
    showToast(`グループを作成しました 🎉`);
  }

  async function joinGroup() {
    if (!user || user === "loading") return;
    const code = inviteInput.trim().toUpperCase();
    if (!code) { setInviteError("招待コードを入力してください"); return; }
    const groupRef = ref(db, `pet-health-book/groups/${code}/info`);
    const snap = await new Promise<any>(resolve => onValue(groupRef, resolve, { onlyOnce: true }));
    if (!snap.val()) { setInviteError("招待コードが見つかりません"); return; }
    await set(ref(db, `pet-health-book/members/${user.uid}`), code);
    setGroupId(code);
    showToast(`グループに参加しました 🎉`);
  }

  async function leaveGroup() {
    if (!user || user === "loading") return;
    if (!confirm("このグループから抜けますか？（データは残ります）")) return;
    await set(ref(db, `pet-health-book/members/${user.uid}`), null);
    setGroupId(null);
    setState(null);
  }

  function saveToFirebase(newState: AppState) {
    if (!groupId || groupId === "loading") return;
    setSyncing(true);
    const dataRef = ref(db, `pet-health-book/groups/${groupId}/data`);
    update(dataRef, {
      pets: newState.pets,
      records: newState.records,
      photos: newState.photos,
      trash: newState.trash,
      memorials: newState.memorials || [],
      nextPetId: newState.nextPetId,
      nextRecordId: newState.nextRecordId,
      nextPhotoId: newState.nextPhotoId,
      nextMemorialId: newState.nextMemorialId || 1,
    })
      .then(() => setSyncing(false))
      .catch((err) => {
        console.error("Save error:", err);
        setSyncing(false);
        showToast("⚠️ 保存に失敗しました");
      });
  }

  function updateState(updater: (s: AppState) => AppState) {
    setState(prev => {
      if (!prev) return prev;
      const next = updater(prev);
      saveToFirebase(next);
      return next;
    });
  }

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  // ★ ペット並び替え関数
  function movePet(petId: number, direction: "up" | "down") {
    if (!state) return;
    const sorted = getSortedPets(state.pets);
    const idx = sorted.findIndex(p => p.id === petId);
    if (direction === "up" && idx === 0) return;
    if (direction === "down" && idx === sorted.length - 1) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    const newPets = sorted.map((p, i) => {
      if (i === idx) return { ...p, order: swapIdx };
      if (i === swapIdx) return { ...p, order: idx };
      return { ...p, order: i };
    });
    updateState(s => ({ ...s, pets: newPets }));
  }

  function getSortedPets(pets: Pet[]): Pet[] {
    return [...pets].sort((a, b) => {
      const ao = a.order !== undefined ? a.order : a.id;
      const bo = b.order !== undefined ? b.order : b.id;
      return ao - bo;
    });
  }

  if (user === "loading") return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 48 }}>🐾</div>
      <div style={{ color: "#9A7A5C", fontSize: 16 }}>読み込み中...</div>
    </div>
  );

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#FFF", borderRadius: 24, padding: "40px 32px", maxWidth: 360, width: "100%", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🐾</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#3D2B1A", margin: "0 0 8px" }}>ペット健康手帳</h1>
        <p style={{ color: "#9A7A5C", fontSize: 14, margin: "0 0 32px", lineHeight: 1.6 }}>
          大切な家族の健康を記録しよう。<br />Googleアカウントでログインしてください。
        </p>
        <button
          onClick={async () => {
            try {
              await signInWithPopup(auth, googleProvider);
            } catch (e: any) {
              console.error(e);
              alert("ログインに失敗しました: " + (e?.message || e));
            }
          }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", background: "#FFF", border: "1.5px solid #E0D5C8", borderRadius: 12, padding: "14px 20px", fontSize: 15, fontWeight: 600, color: "#3D2B1A", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Googleでログイン
        </button>
        <p style={{ color: "#BBA08A", fontSize: 12, marginTop: 20 }}>
          ログインした方のみデータにアクセスできます
        </p>
      </div>
    </div>
  );

  if (groupId === "loading") return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 48 }}>🐾</div>
      <div style={{ color: "#9A7A5C", fontSize: 16 }}>読み込み中...</div>
    </div>
  );

  if (!groupId) return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#FFF", borderRadius: 24, padding: "36px 28px", maxWidth: 380, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48 }}>🏠</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#3D2B1A", margin: "12px 0 6px" }}>グループを設定</h2>
          <p style={{ color: "#9A7A5C", fontSize: 13, lineHeight: 1.6 }}>
            家族で同じグループに入ると<br />データを共有できます
          </p>
        </div>
        <button onClick={createGroup} style={{ width: "100%", background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 12 }}>
          🆕 新しいグループを作る
        </button>
        <div style={{ textAlign: "center", color: "#BBA08A", fontSize: 13, margin: "4px 0 12px" }}>または</div>
        <div style={{ background: "#FFF8F0", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700, color: "#3D2B1A", fontSize: 14, marginBottom: 10 }}>👨‍👩‍👧 招待コードで参加</div>
          <input
            style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E8D5BC", fontSize: 16, letterSpacing: 4, textTransform: "uppercase", boxSizing: "border-box", textAlign: "center" }}
            placeholder="例: AB12CD34"
            value={inviteInput}
            onChange={e => { setInviteInput(e.target.value); setInviteError(""); }}
            maxLength={8}
          />
          {inviteError && <div style={{ color: "#EF4444", fontSize: 12, marginTop: 6 }}>{inviteError}</div>}
          <button onClick={joinGroup} style={{ width: "100%", background: "#3D2B1A", color: "#FFF", border: "none", borderRadius: 10, padding: "12px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 10 }}>
            参加する
          </button>
        </div>
        <button onClick={() => signOut(auth)} style={{ width: "100%", background: "none", border: "none", color: "#BBA08A", fontSize: 13, cursor: "pointer", marginTop: 20 }}>
          ログアウト
        </button>
      </div>
    </div>
  );

  if (!state) return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 48 }}>🐾</div>
      <div style={{ color: "#9A7A5C", fontSize: 16 }}>データを読み込み中...</div>
    </div>
  );

  // ★ URLハッシュからpetIdを補完してselectedPetを確実に取得
  const currentHashPetId = (() => {
    const match = window.location.hash.replace(/^#/, "").match(/^[a-zA-Z]+-(\d+)$/);
    return match ? Number(match[1]) : null;
  })();
  const effectivePetId = selectedPetId ?? currentHashPetId;
  const selectedPet = state.pets.find(p => p.id === effectivePetId) ?? null;

  // ★ カテゴリ＋検索の複合フィルター（日付・費用も対応）
  const petRecords = state.records
    .filter(r => r.petId === selectedPetId)
    .filter(r => filterCategory === "すべて" || r.category === filterCategory)
    .filter(r => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.date.includes(q) ||
        (r.cost && r.cost.includes(q))
      );
    })
    .filter(r => !searchDateFrom || r.date >= searchDateFrom)
    .filter(r => !searchDateTo || r.date <= searchDateTo)
    .filter(r => !searchHasCost || (!!r.cost && parseFloat(r.cost) > 0))
    .sort((a, b) => b.date.localeCompare(a.date));

  // ---------- Pet CRUD ----------
  function addPet() {
    const newOrder = state!.pets.length;
    const pet: Pet = {
      id: state!.nextPetId,
      name: editingPet.name || "名前未設定",
      species: editingPet.species || "その他",
      breed: editingPet.breed || "",
      birthdate: editingPet.birthdate || "",
      color: editingPet.color || "#C49A6C",
      icon: SPECIES_ICONS[editingPet.species || ""] || "🐾",
      photo: editingPet.photo || "",
      weight: editingPet.weight || "",
      microchip: editingPet.microchip || "",
      insurance: editingPet.insurance || "",
      vet: editingPet.vet || "",
      notes: editingPet.notes || "",
      order: newOrder, // ★ 追加
    };
    updateState(s => ({ ...s, pets: [...s.pets, pet], nextPetId: s.nextPetId + 1 }));
    showToast(`${pet.name}を追加しました 🎉`);
    navigateTo("home");
  }

  function updatePet() {
    updateState(s => ({
      ...s,
      pets: s.pets.map(p =>
        p.id === selectedPetId
          ? { ...p, ...editingPet, icon: SPECIES_ICONS[editingPet.species || p.species] || p.icon, photo: editingPet.photo ?? p.photo }
          : p
      ),
    }));
    showToast("プロフィールを更新しました ✅");
    navigateTo("petDetail");
  }

  function deletePet(id: number) {
    if (!confirm("このペットと全記録を削除しますか？")) return;
    updateState(s => ({
      ...s,
      pets: s.pets.filter(p => p.id !== id),
      records: s.records.filter(r => r.petId !== id),
    }));
    navigateTo("home");
    showToast("削除しました");
  }

  // ---------- Record CRUD ----------
  function addRecord() {
    const rec: HealthRecord = {
      id: state!.nextRecordId,
      petId: selectedPetId!,
      date: editingRecord.date || new Date().toISOString().slice(0, 10),
      category: (editingRecord.category as HealthRecord["category"]) || "日記・その他",
      title: editingRecord.title || "記録",
      description: editingRecord.description || "",
      weight: editingRecord.weight || "",
      nextDate: editingRecord.nextDate || "",
      cost: editingRecord.cost || "",
      foodPhoto: editingRecord.foodPhoto || "",
    };
    updateState(s => ({ ...s, records: [...s.records, rec], nextRecordId: s.nextRecordId + 1 }));
    showToast("記録を追加しました 📝");
    navigateTo("recordList");
  }

  function deleteRecord(id: number) {
    const rec = state!.records.find(r => r.id === id);
    if (!rec) return;
    const deletedAt = new Date().toISOString().slice(0, 10);
    updateState(s => ({
      ...s,
      records: s.records.filter(r => r.id !== id),
      trash: [...(s.trash || []), { ...rec, deletedAt }],
    }));
    showToast("ゴミ箱に移動しました 🗑️");
  }

  function restoreRecord(id: number) {
    const rec = state!.trash.find(r => r.id === id);
    if (!rec) return;
    const { deletedAt, ...restored } = rec as HealthRecord & { deletedAt?: string };
    updateState(s => ({
      ...s,
      records: [...s.records, restored],
      trash: s.trash.filter(r => r.id !== id),
    }));
    showToast("記録を復元しました ✅");
  }

  function deleteFromTrash(id: number) {
    if (!confirm("完全に削除しますか？元に戻せません。")) return;
    updateState(s => ({ ...s, trash: s.trash.filter(r => r.id !== id) }));
    showToast("完全に削除しました");
  }

  // ★ バックアップ
  function downloadBackup() {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pet-health-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("バックアップを保存しました 💾");
  }

  // ★ リストア
  function restoreBackup(file: File) {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target?.result as string) as AppState;
        if (!data.pets || !data.records) throw new Error("invalid");
        if (!confirm("現在のデータをバックアップで上書きしますか？")) return;
        updateState(() => ({ ...DEFAULT_STATE, ...data, trash: data.trash || [] }));
        showToast("リストア完了 ✅");
      } catch {
        showToast("ファイルが正しくありません ❌");
      }
    };
    reader.readAsText(file);
  }

  function updateRecord() {
    updateState(s => ({
      ...s,
      records: s.records.map(r =>
        r.id === editingRecord.id
          ? { ...r, ...editingRecord } as HealthRecord
          : r
      ),
    }));
    showToast("記録を更新しました ✅");
    navigateTo("recordList");
  }

  // ============================================================
  // Views
  // ============================================================

  // ---- Home ----
  if (view === "home") {
    const sortedPets = getSortedPets(state.pets);
    return (
      <Layout>
        <div style={{ background: "linear-gradient(135deg, #FFF5E9, #FDE8D0)", borderRadius: 20, padding: "24px 20px 20px", marginBottom: 20, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -10, right: -10, fontSize: 80, opacity: 0.08, lineHeight: 1 }}>🐾</div>
          <div style={{ position: "absolute", bottom: -10, left: -10, fontSize: 60, opacity: 0.06, lineHeight: 1 }}>🐱</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🐾</span>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#3D2B1A" }}>ペット健康手帳</h1>
            <button onClick={() => navigateTo("memorial")}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, opacity: 0.35, padding: "0 0 0 4px", lineHeight: 1, color: "#9A7A5C" }}
              title="">⭐</button>
          </div>
          <p style={{ margin: "0 0 14px", color: "#9A7A5C", fontSize: 13 }}>大切な家族の健康を記録しよう</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
            {user.photoURL && <img src={user.photoURL} alt="avatar" style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid #FFF" }} />}
            <span style={{ fontSize: 12, color: "#7A5C3A", fontWeight: 600 }}>{user.displayName || user.email}</span>
            <span style={{ color: "#C49A6C", fontSize: 10 }}>|</span>
            <button onClick={() => signOut(auth)} style={{ background: "none", border: "none", fontSize: 12, color: "#9A7A5C", cursor: "pointer", padding: 0 }}>ログアウト</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: "4px 12px", fontSize: 11, color: "#7A5C3A", fontWeight: 600, letterSpacing: 1, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              🏠 {groupId}
            </div>
            {syncing && <div style={{ fontSize: 11, color: "#9A7A5C", background: "#FFF", borderRadius: 20, padding: "4px 10px" }}>☁️ 同期中</div>}
            <button onClick={() => setShowVersionHistory(true)}
              style={{ background: "#FFF", border: "none", borderRadius: 20, padding: "4px 12px", fontSize: 11, color: "#9A7A5C", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              v{APP_VERSION}
            </button>
            <button onClick={() => { setGeminiKeyInput(getGeminiApiKey()); setShowApiKeySettings(true); }}
              style={{ background: getGeminiApiKey() ? "#E8F5E9" : "#FFF", border: getGeminiApiKey() ? "1px solid #86C98A" : "none", borderRadius: 20, padding: "4px 12px", fontSize: 11, color: getGeminiApiKey() ? "#2E7D32" : "#9A7A5C", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", fontWeight: getGeminiApiKey() ? 700 : 400 }}>
              {getGeminiApiKey() ? "✅ AI設定済み" : "🔑 AI設定"}
            </button>
            <button onClick={leaveGroup} style={{ background: "none", border: "none", fontSize: 11, color: "#BBA08A", cursor: "pointer", padding: 0 }}>グループを抜ける</button>
          </div>
        </div>

        {/* ★ 誕生日バナー */}
        {(() => {
          if (birthdayDismissed) return null;
          const today = new Date().toISOString().slice(5, 10); // "MM-DD"
          const birthdayPets = state.pets.filter(p => p.birthdate && p.birthdate.slice(5) === today);
          if (birthdayPets.length === 0) return null;
          return (
            <div style={{ background: "linear-gradient(135deg, #FFF0DC, #FFD9A0)", border: "2px solid #C49A6C", borderRadius: 16, padding: "16px 20px", marginBottom: 16, position: "relative" }}>
              <button onClick={() => setBirthdayDismissed(true)} style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              <div style={{ fontSize: 28, marginBottom: 6 }}>🎂🎉</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A", marginBottom: 4 }}>
                今日は{birthdayPets.map(p => p.name).join("・")}の誕生日！
              </div>
              <div style={{ fontSize: 13, color: "#7A5C3A" }}>
                {birthdayPets.map(p => `${p.name}（${calcAge(p.birthdate)}）`).join("、")}、お誕生日おめでとう🐾
              </div>
            </div>
          );
        })()}

        {/* ★ ホームアクションボタン行 */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, justifyContent: "flex-end", flexWrap: "wrap" }}>
          {state.pets.length >= 1 && (
            <button onClick={() => setShowTimeline(true)}
              style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
              📋 タイムライン
            </button>
          )}
          {state.pets.length >= 1 && (
            <button onClick={() => setShowStats(true)}
              style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
              📈 統計
            </button>
          )}
          {state.pets.length >= 1 && (
            <button onClick={() => setShowCostSummary(true)}
              style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
              💰 支出集計
            </button>
          )}
          {state.pets.length >= 2 && (
            <button
              onClick={() => setShowWeightCompare(true)}
              style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
              📊 体重比較
            </button>
          )}
          {state.pets.length >= 2 && (
            <button
              onClick={() => setSortMode(m => !m)}
              style={{ background: sortMode ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: sortMode ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
              {sortMode ? "✅ 完了" : "↕️ 並び替え"}
            </button>
          )}
          <button onClick={downloadBackup}
            style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
            💾 バックアップ
          </button>
          <label style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer" }}>
            📂 リストア
            <input type="file" accept=".json" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) restoreBackup(f); e.target.value = ""; }} />
          </label>
          <button onClick={() => navigateTo("trash")}
            style={{ background: "#FFF0DC", border: "none", borderRadius: 20, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#7A5C3A", cursor: "pointer", position: "relative" }}>
            🗑️ ゴミ箱{(state.trash || []).length > 0 && <span style={{ marginLeft: 4, background: "#EF4444", color: "#FFF", borderRadius: 10, padding: "1px 6px", fontSize: 11 }}>{state.trash.length}</span>}
          </button>
        </div>

        {/* ★ 並び替えモード説明 */}
        {sortMode && (
          <div style={{ background: "#FFF8EE", border: "1px solid #F0D9B0", borderRadius: 12, padding: "10px 14px", marginBottom: 12, fontSize: 13, color: "#7A5C3A", textAlign: "center" }}>
            ↑↓ ボタンでペットの順番を変更できます
          </div>
        )}

        {/* ★ ウォークスルー（ペット0匹のときのみ表示） */}
        {state.pets.length === 0 && <WalkthroughCard onStart={() => { setEditingPet({}); navigateTo("addPet"); }} />}

        <div style={styles.petGrid}>
          {sortedPets.map((pet, idx) => (
            <div key={pet.id} style={{ position: "relative" }}>
              <button style={styles.petCard} onClick={() => { if (!sortMode) { navigateTo("petDetail", pet.id); } }}>
                <div style={{ ...styles.petCardIcon, background: pet.color + "33", overflow: "hidden" }}>
                  {pet.photo
                    ? <img src={pet.photo} alt={pet.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                    : <span style={{ fontSize: 40 }}>{pet.icon}</span>
                  }
                </div>
                <div style={styles.petCardName}>{pet.name}</div>
                <div style={styles.petCardSub}>{pet.species}{pet.breed ? ` / ${pet.breed}` : ""}</div>
                {pet.birthdate && <div style={styles.petCardAge}>{calcAge(pet.birthdate)}</div>}
                <div style={styles.petCardRecords}>
                  記録 {state.records.filter(r => r.petId === pet.id).length}件
                </div>
              </button>
              {/* ★ 並び替えボタン */}
              {sortMode && (
                <div style={{ position: "absolute", top: 6, right: 6, display: "flex", flexDirection: "column", gap: 3 }}>
                  <button
                    onClick={() => movePet(pet.id, "up")}
                    disabled={idx === 0}
                    style={{ background: idx === 0 ? "#E8D5BC" : "#C49A6C", border: "none", borderRadius: 6, width: 26, height: 26, color: "#FFF", cursor: idx === 0 ? "default" : "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    ↑
                  </button>
                  <button
                    onClick={() => movePet(pet.id, "down")}
                    disabled={idx === sortedPets.length - 1}
                    style={{ background: idx === sortedPets.length - 1 ? "#E8D5BC" : "#C49A6C", border: "none", borderRadius: 6, width: 26, height: 26, color: "#FFF", cursor: idx === sortedPets.length - 1 ? "default" : "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    ↓
                  </button>
                </div>
              )}
            </div>
          ))}
          {/* ペットが0匹のときだけグリッド内にカードを表示 */}
          {!sortMode && state.pets.length === 0 && (
            <button style={styles.addPetCard} onClick={() => { setEditingPet({}); navigateTo("addPet"); }}>
              <span style={{ fontSize: 32 }}>➕</span>
              <div style={{ marginTop: 8, fontWeight: 600, color: "#C49A6C" }}>ペットを追加</div>
            </button>
          )}
        </div>

        {/* ★ 支出集計モーダル */}
        {showCostSummary && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowCostSummary(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>💰 支出集計</div>
                <button onClick={() => setShowCostSummary(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              <CostSummary pets={state.pets} records={state.records} />
            </div>
          </div>
        )}

        {/* ★ バージョン履歴モーダル */}
        {showVersionHistory && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowVersionHistory(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 500, maxHeight: "80vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>📋 バージョン履歴</div>
                  <div style={{ fontSize: 12, color: "#9A7A5C", marginTop: 2 }}>現在: v{APP_VERSION}</div>
                </div>
                <button onClick={() => setShowVersionHistory(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              {VERSION_HISTORY.map((v, i) => (
                <div key={v.version} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < VERSION_HISTORY.length - 1 ? "1px solid #F0E8DC" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ background: i === 0 ? "#C49A6C" : "#F0E8DC", color: i === 0 ? "#FFF" : "#7A5C3A", borderRadius: 10, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>
                      v{v.version}
                    </span>
                    <span style={{ fontSize: 12, color: "#9A7A5C" }}>{v.date}</span>
                    {i === 0 && <span style={{ fontSize: 11, color: "#C49A6C", fontWeight: 600 }}>最新</span>}
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {v.notes.map((note, j) => (
                      <li key={j} style={{ fontSize: 13, color: "#5C3A1E", marginBottom: 2 }}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ★ Gemini APIキー設定モーダル */}
        {showApiKeySettings && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowApiKeySettings(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 480, maxHeight: "85vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>🔑 AI機能の設定</div>
                <button onClick={() => setShowApiKeySettings(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>

              {getGeminiApiKey() && (
                <div style={{ background: "#E8F5E9", border: "1px solid #86C98A", borderRadius: 12, padding: "10px 14px", fontSize: 13, color: "#2E7D32", fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  ✅ APIキー登録済みです
                </div>
              )}

              <div style={{ background: "#FFF8ED", borderRadius: 12, padding: "12px 14px", fontSize: 12, color: "#7A5C3A", lineHeight: 1.6, marginBottom: 16 }}>
                診療明細書をAIで解析して薬の効果を解説する機能には、Googleの<b>Gemini API</b>のご自身のAPIキーが必要です。
                <br />キーは<b>この端末のブラウザにのみ</b>保存され、他の家族や他の機器には共有されません。
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, color: "#7A5C3A", marginBottom: 5, fontWeight: 600 }}>Gemini API Key</label>
                <input type="text" value={geminiKeyInput} onChange={e => setGeminiKeyInput(e.target.value)}
                  placeholder="AIza... を貼り付け"
                  style={{ width: "100%", border: "1px solid #E8D5BC", borderRadius: 10, padding: "10px 14px", fontSize: 13, boxSizing: "border-box", fontFamily: "monospace" }} />
              </div>

              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", fontSize: 13, color: "#C49A6C", fontWeight: 600, marginBottom: 16, textDecoration: "underline" }}>
                🔗 Google AI Studioで無料のAPIキーを取得する
              </a>

              <div style={{ display: "flex", gap: 10 }}>
                {geminiKeyInput && (
                  <button onClick={() => { setGeminiApiKey(""); setGeminiKeyInput(""); showToast("APIキーを削除しました"); }}
                    style={{ flex: 1, background: "#FFF0F0", color: "#EF4444", border: "none", borderRadius: 12, padding: "12px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                    削除
                  </button>
                )}
                <button onClick={() => { setGeminiApiKey(geminiKeyInput.trim()); showToast("APIキーを保存しました ✅"); setShowApiKeySettings(false); }}
                  style={{ flex: 2, background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 12, padding: "12px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                  保存する
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ★ 体重比較モーダル */}
        {showWeightCompare && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowWeightCompare(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 640, maxHeight: "85vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>📊 体重比較グラフ</div>
                <button onClick={() => setShowWeightCompare(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              <AllPetsWeightChart pets={state.pets} records={state.records} />
            </div>
          </div>
        )}

        {/* ★ タイムラインモーダル */}
        {showTimeline && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowTimeline(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>📋 タイムライン</div>
                <button onClick={() => setShowTimeline(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              <TimelineView pets={state.pets} records={state.records} />
            </div>
          </div>
        )}

        {/* ★ 統計モーダル */}
        {showStats && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setShowStats(false)}>
            <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>📈 統計</div>
                <button onClick={() => setShowStats(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              <StatsView pets={state.pets} records={state.records} />
            </div>
          </div>
        )}

        {/* ★ ペット追加FABボタン（ペットが1匹以上いるとき） */}
        {state.pets.length > 0 && !sortMode && (
          <button
            onClick={() => { setEditingPet({}); navigateTo("addPet"); }}
            style={{ position: "fixed", bottom: 28, right: 20, width: 52, height: 52, borderRadius: "50%", background: "#C49A6C", border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.22)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, fontSize: 26, color: "#FFF", fontWeight: 300, lineHeight: 1 }}
            title="ペットを追加"
          >
            ＋
          </button>
        )}

        <Toast message={toast} />
      </Layout>
    );
  }

  // ---- Pet Detail ----
  if (view === "petDetail" && selectedPet) {
    const petIndex = state.pets.findIndex(p => p.id === selectedPet.id);
    const prevPet = state.pets[petIndex - 1] ?? null;
    const nextPet = state.pets[petIndex + 1] ?? null;

    const handleTouchStart = (e: React.TouchEvent) => {
      (window as any)._swipeStartX = e.touches[0].clientX;
      (window as any)._swipeStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
      const startX = (window as any)._swipeStartX ?? null;
      const startY = (window as any)._swipeStartY ?? null;
      if (startX === null || startY === null) return;
      const diffX = startX - e.changedTouches[0].clientX;
      const diffY = startY - e.changedTouches[0].clientY;
      // 縦移動が横移動より大きい場合はスクロールとみなして無視
      if (Math.abs(diffY) > Math.abs(diffX)) return;
      if (Math.abs(diffX) < 60) return; // 60px未満は無視
      if (diffX > 0 && nextPet) { setSelectedPetId(nextPet.id); } // 左スワイプ→次のペット
      if (diffX < 0 && prevPet) { setSelectedPetId(prevPet.id); } // 右スワイプ→前のペット
    };

    return (
      <Layout>
        {/* スワイプインジケーター */}
        {state.pets.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 12 }}>
            {state.pets.map(p => (
              <button key={p.id} onClick={() => setSelectedPetId(p.id)}
                style={{ width: p.id === selectedPet.id ? 20 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", transition: "width 0.2s", background: p.id === selectedPet.id ? (selectedPet.color || "#C49A6C") : "#E8D5BC", padding: 0 }} />
            ))}
          </div>
        )}
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div style={{ ...styles.petBanner, background: `linear-gradient(135deg, ${selectedPet.color}44, ${selectedPet.color}22)` }}>
          {selectedPet.photo
            ? <img src={selectedPet.photo} alt={selectedPet.name} style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            : <span style={{ fontSize: 64 }}>{selectedPet.icon}</span>
          }
          <div>
            <h2 style={{ margin: 0, fontSize: 28, color: "#3D2B1A" }}>{selectedPet.name}</h2>
            <div style={{ color: "#7A5C3A", marginTop: 4 }}>
              {selectedPet.species}{selectedPet.breed ? ` / ${selectedPet.breed}` : ""}
              {selectedPet.birthdate && <span style={{ marginLeft: 12 }}>🎂 {selectedPet.birthdate}（{calcAge(selectedPet.birthdate)}）</span>}
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <IconBtn onClick={() => { setEditingPet({ ...selectedPet }); navigateTo("editPet"); }} title="編集">✏️</IconBtn>
            <IconBtn onClick={() => deletePet(selectedPet.id)} title="削除" danger>🗑️</IconBtn>
          </div>
        </div>

        <div style={styles.infoGrid}>
          <WeightSummaryCard records={state.records} petId={selectedPet.id} />
          <VetCard pet={selectedPet} onSave={(vetData) => {
            updateState(s => ({ ...s, pets: s.pets.map(p => p.id === selectedPet.id ? { ...p, ...vetData } : p) }));
            showToast("病院情報を更新しました ✅");
          }} />
          <CostCard records={state.records} petId={selectedPet.id} />
          {[
            { label: "マイクロチップ", value: selectedPet.microchip },
            { label: "保険", value: selectedPet.insurance },
          ].filter(item => item.value).map(item => (
            <div key={item.label} style={styles.infoCard}>
              <div style={styles.infoLabel}>{item.label}</div>
              <div style={styles.infoValue}>{item.value}</div>
            </div>
          ))}
        </div>

        {selectedPet.notes && (
          <div style={{ ...styles.notesBox, whiteSpace: "pre-wrap" }}>
            <span style={{ marginRight: 6 }}>📌</span><AutoLink text={selectedPet.notes} />
          </div>
        )}

        {/* ★ フォトアルバムセクション */}
        <div style={styles.sectionHeader}>
          <span>📷 フォトアルバム</span>
          {(() => {
            const count = (state.photos || []).filter(p => p.petId === selectedPet.id).length;
            if (count >= 7) return <span style={{ fontSize: 12, color: "#BBA08A" }}>7枚まで（{count}/7）</span>;
            return (
              <label style={{ fontSize: 13, color: "#C49A6C", fontWeight: 600, cursor: "pointer" }}>
                ＋ 追加（{count}/7）
                <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
              const file = e.target.files?.[0];
              if (!file) return;
              file.arrayBuffer().then(buf => {
                const exifDate = getExifDate(buf);
                const reader = new FileReader();
                reader.onload = ev => {
                  const img = new Image();
                  img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const maxW = 800;
                    const scale = Math.min(1, maxW / img.width);
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const data = canvas.toDataURL("image/jpeg", 0.75);
                    updateState(s => {
                      const petPhotos = (s.photos || []).filter(p => p.petId === selectedPet.id);
                      if (petPhotos.length >= 7) return s; // 7枚制限
                      return {
                        ...s,
                        photos: [...(s.photos || []), {
                          id: s.nextPhotoId || 1,
                          petId: selectedPet.id,
                          date: exifDate || new Date().toISOString().slice(0, 10),
                          caption: "",
                          data,
                        }],
                        nextPhotoId: (s.nextPhotoId || 1) + 1,
                      };
                    });
                    showToast("写真を追加しました 📷");
                  };
                  img.src = ev.target?.result as string;
                };
                reader.readAsDataURL(file);
              });
            }} />
          </label>
            );
          })()}
        </div>
        <AlbumGrid
          photos={(state.photos || []).filter(p => p.petId === selectedPet.id)}
          onPhotoClick={p => setAlbumPhoto(p)}
        />

        <div style={styles.sectionHeader}>
          <span>📊 カテゴリ別</span>
        </div>
        <div style={styles.categoryRow}>
          {(Object.keys(CATEGORY_ICONS) as HealthRecord["category"][]).map(cat => {
            const count = state.records.filter(r => r.petId === selectedPet.id && r.category === cat).length;
            return (
              <button key={cat} style={styles.catChip}
                onClick={() => { setFilterCategory(cat); setSearchQuery(""); navigateTo("recordList"); }}>
                <span>{CATEGORY_ICONS[cat]}</span>
                <span style={{ fontSize: 11, color: "#7A5C3A" }}>{cat}</span>
                <span style={{ ...styles.catCount, background: CATEGORY_COLORS[cat] }}>{count}</span>
              </button>
            );
          })}
        </div>

        <div style={styles.sectionHeader}>
          <span>📅 カレンダー</span>
          <button style={styles.linkBtn} onClick={() => { setFilterCategory("すべて"); setSearchQuery(""); navigateTo("recordList"); }}>一覧で見る →</button>
        </div>
        <PetCalendar
          records={state.records.filter(r => r.petId === selectedPet.id)}
          onDayClick={(recs) => {
            if (recs.length === 0) return;
            setCalendarRecords(recs);
            setShowCalendarModal(true);
          }}
        />

        </div>{/* end swipe wrapper */}

        <div style={styles.fab}>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={styles.fabBtnBack} onClick={() => navigateTo("home")}>← 戻る</button>
            <button style={styles.fabBtn} onClick={() => { setEditingRecord({ date: new Date().toISOString().slice(0, 10) }); navigateTo("addRecord"); }}>＋ 記録を追加</button>
          </div>
        </div>

        {showCalendarModal && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
            onClick={() => setShowCalendarModal(false)}>
            <div style={{ background: "#FDF6EE", borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 600, maxHeight: "70vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A" }}>
                  📋 {calendarRecords[0]?.date}の記録
                </div>
                <button onClick={() => setShowCalendarModal(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
              </div>
              {calendarRecords.map(r => (
                <RecordRow key={r.id} record={r}
                  onDelete={id => { deleteRecord(id); setShowCalendarModal(false); }}
                  onEdit={rec => { setEditingRecord({ ...rec }); setShowCalendarModal(false); navigateTo("editRecord"); }}
                  expanded />
              ))}
            </div>
          </div>
        )}

        {/* ★ 写真拡大モーダル */}
        {albumPhoto && (() => {
          const petPhotos = (state.photos || []).filter(p => p.petId === selectedPet.id).slice().reverse();
          const currentIdx = petPhotos.findIndex(p => p.id === albumPhoto.id);
          const prevPhoto = petPhotos[currentIdx - 1] ?? null;
          const nextPhoto = petPhotos[currentIdx + 1] ?? null;
          const handlePhotoTouchStart = (e: React.TouchEvent) => {
            (window as any)._photoSwipeStartX = e.touches[0].clientX;
            (window as any)._photoSwipeStartY = e.touches[0].clientY;
          };
          const handlePhotoTouchEnd = (e: React.TouchEvent) => {
            const startX = (window as any)._photoSwipeStartX ?? null;
            const startY = (window as any)._photoSwipeStartY ?? null;
            if (startX === null || startY === null) return;
            const diffX = startX - e.changedTouches[0].clientX;
            const diffY = startY - e.changedTouches[0].clientY;
            if (Math.abs(diffY) > Math.abs(diffX)) return;
            if (Math.abs(diffX) < 50) return;
            if (diffX > 0 && nextPhoto) setAlbumPhoto(nextPhoto);
            if (diffX < 0 && prevPhoto) setAlbumPhoto(prevPhoto);
          };
          return (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setAlbumPhoto(null)}>
            <div style={{ maxWidth: 560, width: "100%" }} onClick={e => e.stopPropagation()}
              onTouchStart={handlePhotoTouchStart} onTouchEnd={handlePhotoTouchEnd}>
              <img src={albumPhoto.data} alt="" style={{ width: "100%", borderRadius: 16, objectFit: "contain", maxHeight: "70vh" }} />
              {/* スワイプインジケーター */}
              {petPhotos.length > 1 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
                  {petPhotos.map((p, i) => (
                    <div key={p.id} onClick={() => setAlbumPhoto(p)}
                      style={{ width: i === currentIdx ? 18 : 7, height: 7, borderRadius: 4, background: i === currentIdx ? "#FFF" : "rgba(255,255,255,0.4)", cursor: "pointer", transition: "width 0.2s" }} />
                  ))}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                <span style={{ color: "#FFF", fontSize: 13 }}>{albumPhoto.date}</span>
                <button onClick={() => {
                  updateState(s => ({ ...s, photos: (s.photos||[]).filter(p => p.id !== albumPhoto.id) }));
                  setAlbumPhoto(null);
                  showToast("写真を削除しました");
                }}
                  style={{ background: "#EF4444", border: "none", borderRadius: 10, padding: "8px 16px", color: "#FFF", fontWeight: 700, cursor: "pointer", fontSize: 13 }}>
                  🗑️ 削除
                </button>
              </div>
            </div>
          </div>
          );
        })()}

        <Toast message={toast} />
      </Layout>
    );
  }

  // ---- Add/Edit Pet Form ----
  if (view === "addPet" || view === "editPet") {
    const isEdit = view === "editPet";
    return (
      <Layout>
        <BackBtn onClick={() => navigateTo(isEdit ? "petDetail" : "home")} />
        <h2 style={styles.formTitle}>{isEdit ? "プロフィール編集" : "新しいペットを追加"}</h2>
        <div style={styles.form}>
          <Field label="アイコン写真">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: editingPet.color ? editingPet.color + "33" : "#C49A6C33", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "2px dashed #C49A6C" }}>
                {editingPet.photo
                  ? <img src={editingPet.photo} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 36 }}>{SPECIES_ICONS[editingPet.species || ""] || "🐾"}</span>
                }
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "inline-block", background: "#C49A6C", color: "#FFF", borderRadius: 10, padding: "10px 16px", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>
                  📷 写真を選択
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = ev => {
                      const img = new Image();
                      img.onload = () => {
                        const canvas = document.createElement("canvas");
                        const size = 200;
                        canvas.width = size;
                        canvas.height = size;
                        const ctx = canvas.getContext("2d")!;
                        const min = Math.min(img.width, img.height);
                        const sx = (img.width - min) / 2;
                        const sy = (img.height - min) / 2;
                        ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
                        setEditingPet(p => ({ ...p, photo: canvas.toDataURL("image/jpeg", 0.7) }));
                      };
                      img.src = ev.target?.result as string;
                    };
                    reader.readAsDataURL(file);
                  }} />
                </label>
                {editingPet.photo && (
                  <button style={{ display: "block", marginTop: 8, background: "none", border: "none", color: "#EF4444", cursor: "pointer", fontSize: 13 }}
                    onClick={() => setEditingPet(p => ({ ...p, photo: "" }))}>
                    🗑️ 写真を削除
                  </button>
                )}
              </div>
            </div>
          </Field>
          <Field label="名前 *">
            <input style={styles.input} value={editingPet.name || ""} onChange={e => setEditingPet(p => ({ ...p, name: e.target.value }))} placeholder="例: じゅうべい" />
          </Field>
          <Field label="種類">
            <select style={styles.input} value={editingPet.species || ""} onChange={e => setEditingPet(p => ({ ...p, species: e.target.value }))}>
              <option value="">選択してください</option>
              {Object.keys(SPECIES_ICONS).map(s => <option key={s} value={s}>{SPECIES_ICONS[s]} {s}</option>)}
            </select>
          </Field>
          <Field label="品種">
            <input style={styles.input} value={editingPet.breed || ""} onChange={e => setEditingPet(p => ({ ...p, breed: e.target.value }))} placeholder="例: アメリカンショートヘア" />
          </Field>
          <Field label="生年月日">
            <input type="date" style={styles.input} value={editingPet.birthdate || ""} onChange={e => setEditingPet(p => ({ ...p, birthdate: e.target.value }))} />
          </Field>
          <Field label="体重 (kg)">
            <input type="number" step="0.1" style={styles.input} value={editingPet.weight || ""} onChange={e => setEditingPet(p => ({ ...p, weight: e.target.value }))} placeholder="例: 4.2" />
          </Field>
          <Field label="かかりつけ病院">
            <input style={styles.input} value={editingPet.vet || ""} onChange={e => setEditingPet(p => ({ ...p, vet: e.target.value }))} placeholder="例: ○○動物病院" />
          </Field>
          <Field label="マイクロチップ番号">
            <input style={styles.input} value={editingPet.microchip || ""} onChange={e => setEditingPet(p => ({ ...p, microchip: e.target.value }))} />
          </Field>
          <Field label="ペット保険">
            <input style={styles.input} value={editingPet.insurance || ""} onChange={e => setEditingPet(p => ({ ...p, insurance: e.target.value }))} placeholder="例: アニコム" />
          </Field>
          <Field label="テーマカラー">
            <input type="color" style={{ ...styles.input, height: 44, padding: 4 }} value={editingPet.color || "#C49A6C"} onChange={e => setEditingPet(p => ({ ...p, color: e.target.value }))} />
          </Field>
          <Field label="メモ">
            <textarea style={{ ...styles.input, height: 80, resize: "vertical" }} value={editingPet.notes || ""} onChange={e => setEditingPet(p => ({ ...p, notes: e.target.value }))} placeholder="アレルギー、好き嫌いなど" />
          </Field>
          <button style={styles.primaryBtn} onClick={isEdit ? updatePet : addPet}>
            {isEdit ? "✅ 更新する" : "🎉 追加する"}
          </button>
        </div>
        <Toast message={toast} />
      </Layout>
    );
  }

  // ---- Add Record Form ----
  if (view === "addRecord" && selectedPet) return (
    <Layout>
      <BackBtn onClick={() => navigateTo("petDetail")} />
      <h2 style={styles.formTitle}>記録を追加</h2>
      <p style={{ textAlign: "center", color: "#7A5C3A", marginTop: -16, marginBottom: 24 }}>
        {selectedPet.icon} {selectedPet.name}
      </p>
      <div style={styles.form}>
        <Field label="日付 *">
          <input type="date" style={styles.input} value={editingRecord.date || ""} onChange={e => setEditingRecord(r => ({ ...r, date: e.target.value }))} />
        </Field>
        <Field label="カテゴリ">
          <div style={styles.catSelector}>
            {(Object.keys(CATEGORY_ICONS) as HealthRecord["category"][]).map(cat => (
              <button key={cat}
                style={{ ...styles.catOption, background: editingRecord.category === cat ? CATEGORY_COLORS[cat] + "33" : "#FFF7EE", border: editingRecord.category === cat ? `2px solid ${CATEGORY_COLORS[cat]}` : "2px solid transparent" }}
                onClick={() => setEditingRecord(r => ({ ...r, category: cat }))}>
                <span>{CATEGORY_ICONS[cat]}</span>
                <span style={{ fontSize: 12 }}>{cat}</span>
              </button>
            ))}
          </div>
        </Field>
        <Field label="タイトル *">
          <input style={styles.input} value={editingRecord.title || ""} onChange={e => setEditingRecord(r => ({ ...r, title: e.target.value }))} placeholder="例: 年次健診" />
        </Field>
        <Field label="詳細メモ">
          <textarea style={{ ...styles.input, height: 100, resize: "vertical" }} value={editingRecord.description || ""} onChange={e => setEditingRecord(r => ({ ...r, description: e.target.value }))} placeholder="診断内容、投薬量、気づいたことなど" />
        </Field>
        {(editingRecord.category === "病院" || editingRecord.category === "ワクチン" || editingRecord.category === "薬") && (
          <Field label="📋 診療明細書・処方箋のAI解析">
            <label style={{ display: "block", background: "#F0F8FF", border: "1px dashed #93C5FD", borderRadius: 10, padding: "14px", textAlign: "center", cursor: aiAnalyzing ? "default" : "pointer", color: "#1E40AF", fontSize: 13, fontWeight: 600, opacity: aiAnalyzing ? 0.6 : 1 }}>
              {aiAnalyzing ? "🔄 AIが解析中..." : "📷 明細書を撮影してAIに解析させる"}
              <input type="file" accept="image/*" capture="environment" disabled={aiAnalyzing} style={{ display: "none" }} onChange={e => {
                const file = e.target.files?.[0]; if (!file) return;
                if (!getGeminiApiKey()) { setShowApiKeySettings(true); return; }
                const reader = new FileReader();
                reader.onload = async ev => {
                  const img = new Image();
                  img.onload = async () => {
                    const canvas = document.createElement("canvas");
                    const scale = Math.min(1, 1200 / img.width);
                    canvas.width = img.width * scale; canvas.height = img.height * scale;
                    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
                    setAiAnalyzing(true); setAiError(null);
                    try {
                      const result = await analyzeReceiptWithGemini(dataUrl);
                      setAiResult(result);
                    } catch (err: any) {
                      setAiError(err.message || "解析に失敗しました");
                    } finally {
                      setAiAnalyzing(false);
                    }
                  };
                  img.src = ev.target?.result as string;
                };
                reader.readAsDataURL(file);
                e.target.value = "";
              }} />
            </label>
            <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 4 }}>※ 薬・注射の名前を読み取り、効果を解説します（要Gemini APIキー）</div>
          </Field>
        )}
        {editingRecord.category === "体重" && (
          <Field label="体重 (kg)">
            <input type="number" step="0.1" style={styles.input} value={editingRecord.weight || ""} onChange={e => setEditingRecord(r => ({ ...r, weight: e.target.value }))} placeholder="例: 4.2" />
          </Field>
        )}
        {editingRecord.category === "フード" && (
          <Field label="📷 パッケージ写真">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {editingRecord.foodPhoto && (
                <div style={{ position: "relative" }}>
                  <img src={editingRecord.foodPhoto} alt="" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, border: "2px solid #E8D5BC" }} />
                  <button onClick={() => setEditingRecord(r => ({ ...r, foodPhoto: "" }))}
                    style={{ position: "absolute", top: -6, right: -6, background: "#EF4444", border: "none", borderRadius: "50%", width: 20, height: 20, color: "#FFF", fontSize: 12, cursor: "pointer", lineHeight: "20px", padding: 0 }}>✕</button>
                </div>
              )}
              <label style={{ flex: 1, background: "#FFF0DC", border: "1px dashed #C49A6C", borderRadius: 10, padding: "14px", textAlign: "center", cursor: "pointer", color: "#7A5C3A", fontSize: 13, fontWeight: 600 }}>
                {editingRecord.foodPhoto ? "📷 写真を変更" : "📷 写真を追加"}
                <input type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={e => {
                  const file = e.target.files?.[0]; if (!file) return;
                  const reader = new FileReader();
                  reader.onload = ev => {
                    const img = new Image();
                    img.onload = () => {
                      const canvas = document.createElement("canvas");
                      const scale = Math.min(1, 800 / img.width);
                      canvas.width = img.width * scale; canvas.height = img.height * scale;
                      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                      setEditingRecord(r => ({ ...r, foodPhoto: canvas.toDataURL("image/jpeg", 0.75) }));
                    };
                    img.src = ev.target?.result as string;
                  };
                  reader.readAsDataURL(file);
                }} />
              </label>
            </div>
          </Field>
        )}
        <Field label="次回予定日">
          <input type="date" style={styles.input} value={editingRecord.nextDate || ""} onChange={e => setEditingRecord(r => ({ ...r, nextDate: e.target.value }))} />
        </Field>
        <Field label="費用（円）">
          <input type="number" style={styles.input} value={editingRecord.cost || ""} onChange={e => setEditingRecord(r => ({ ...r, cost: e.target.value }))} placeholder="例: 3500" min="0" />
        </Field>
        <button style={styles.primaryBtn} onClick={addRecord}>📝 記録する</button>
      </div>
      <AiResultModal
        aiResult={aiResult} aiError={aiError}
        onClose={() => { setAiResult(null); setAiError(null); }}
        onAppend={text => setEditingRecord(r => ({ ...r, description: (r.description ? r.description + "\n\n" : "") + text }))}
      />
      <Toast message={toast} />
    </Layout>
  );

  // ---- Edit Record Form ----
  if (view === "editRecord" && selectedPet) return (
    <Layout>
      <BackBtn onClick={() => navigateTo("recordList")} />
      <h2 style={styles.formTitle}>記録を編集</h2>
      <p style={{ textAlign: "center", color: "#7A5C3A", marginTop: -16, marginBottom: 24 }}>
        {selectedPet.icon} {selectedPet.name}
      </p>
      <div style={styles.form}>
        <Field label="日付 *">
          <input type="date" style={styles.input} value={editingRecord.date || ""} onChange={e => setEditingRecord(r => ({ ...r, date: e.target.value }))} />
        </Field>
        <Field label="カテゴリ">
          <div style={styles.catSelector}>
            {(Object.keys(CATEGORY_ICONS) as HealthRecord["category"][]).map(cat => (
              <button key={cat}
                style={{ ...styles.catOption, background: editingRecord.category === cat ? CATEGORY_COLORS[cat] + "33" : "#FFF7EE", border: editingRecord.category === cat ? `2px solid ${CATEGORY_COLORS[cat]}` : "2px solid transparent" }}
                onClick={() => setEditingRecord(r => ({ ...r, category: cat }))}>
                <span>{CATEGORY_ICONS[cat]}</span>
                <span style={{ fontSize: 12 }}>{cat}</span>
              </button>
            ))}
          </div>
        </Field>
        <Field label="タイトル *">
          <input style={styles.input} value={editingRecord.title || ""} onChange={e => setEditingRecord(r => ({ ...r, title: e.target.value }))} placeholder="例: 年次健診" />
        </Field>
        <Field label="詳細メモ">
          <textarea style={{ ...styles.input, height: 100, resize: "vertical" }} value={editingRecord.description || ""} onChange={e => setEditingRecord(r => ({ ...r, description: e.target.value }))} placeholder="診断内容、投薬量、気づいたことなど" />
        </Field>
        {(editingRecord.category === "病院" || editingRecord.category === "ワクチン" || editingRecord.category === "薬") && (
          <Field label="📋 診療明細書・処方箋のAI解析">
            <label style={{ display: "block", background: "#F0F8FF", border: "1px dashed #93C5FD", borderRadius: 10, padding: "14px", textAlign: "center", cursor: aiAnalyzing ? "default" : "pointer", color: "#1E40AF", fontSize: 13, fontWeight: 600, opacity: aiAnalyzing ? 0.6 : 1 }}>
              {aiAnalyzing ? "🔄 AIが解析中..." : "📷 明細書を撮影してAIに解析させる"}
              <input type="file" accept="image/*" capture="environment" disabled={aiAnalyzing} style={{ display: "none" }} onChange={e => {
                const file = e.target.files?.[0]; if (!file) return;
                if (!getGeminiApiKey()) { setShowApiKeySettings(true); return; }
                const reader = new FileReader();
                reader.onload = async ev => {
                  const img = new Image();
                  img.onload = async () => {
                    const canvas = document.createElement("canvas");
                    const scale = Math.min(1, 1200 / img.width);
                    canvas.width = img.width * scale; canvas.height = img.height * scale;
                    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
                    setAiAnalyzing(true); setAiError(null);
                    try {
                      const result = await analyzeReceiptWithGemini(dataUrl);
                      setAiResult(result);
                    } catch (err: any) {
                      setAiError(err.message || "解析に失敗しました");
                    } finally {
                      setAiAnalyzing(false);
                    }
                  };
                  img.src = ev.target?.result as string;
                };
                reader.readAsDataURL(file);
                e.target.value = "";
              }} />
            </label>
            <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 4 }}>※ 薬・注射の名前を読み取り、効果を解説します（要Gemini APIキー）</div>
          </Field>
        )}
        {editingRecord.category === "体重" && (
          <Field label="体重 (kg)">
            <input type="number" step="0.1" style={styles.input} value={editingRecord.weight || ""} onChange={e => setEditingRecord(r => ({ ...r, weight: e.target.value }))} placeholder="例: 4.2" />
          </Field>
        )}
        {editingRecord.category === "フード" && (
          <Field label="📷 パッケージ写真">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {editingRecord.foodPhoto && (
                <div style={{ position: "relative" }}>
                  <img src={editingRecord.foodPhoto} alt="" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, border: "2px solid #E8D5BC" }} />
                  <button onClick={() => setEditingRecord(r => ({ ...r, foodPhoto: "" }))}
                    style={{ position: "absolute", top: -6, right: -6, background: "#EF4444", border: "none", borderRadius: "50%", width: 20, height: 20, color: "#FFF", fontSize: 12, cursor: "pointer", lineHeight: "20px", padding: 0 }}>✕</button>
                </div>
              )}
              <label style={{ flex: 1, background: "#FFF0DC", border: "1px dashed #C49A6C", borderRadius: 10, padding: "14px", textAlign: "center", cursor: "pointer", color: "#7A5C3A", fontSize: 13, fontWeight: 600 }}>
                {editingRecord.foodPhoto ? "📷 写真を変更" : "📷 写真を追加"}
                <input type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={e => {
                  const file = e.target.files?.[0]; if (!file) return;
                  const reader = new FileReader();
                  reader.onload = ev => {
                    const img = new Image();
                    img.onload = () => {
                      const canvas = document.createElement("canvas");
                      const scale = Math.min(1, 800 / img.width);
                      canvas.width = img.width * scale; canvas.height = img.height * scale;
                      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                      setEditingRecord(r => ({ ...r, foodPhoto: canvas.toDataURL("image/jpeg", 0.75) }));
                    };
                    img.src = ev.target?.result as string;
                  };
                  reader.readAsDataURL(file);
                }} />
              </label>
            </div>
          </Field>
        )}
        <Field label="次回予定日">
          <input type="date" style={styles.input} value={editingRecord.nextDate || ""} onChange={e => setEditingRecord(r => ({ ...r, nextDate: e.target.value }))} />
        </Field>
        <Field label="費用（円）">
          <input type="number" style={styles.input} value={editingRecord.cost || ""} onChange={e => setEditingRecord(r => ({ ...r, cost: e.target.value }))} placeholder="例: 3500" min="0" />
        </Field>
        <button style={styles.primaryBtn} onClick={updateRecord}>✅ 更新する</button>
      </div>
      <AiResultModal
        aiResult={aiResult} aiError={aiError}
        onClose={() => { setAiResult(null); setAiError(null); }}
        onAppend={text => setEditingRecord(r => ({ ...r, description: (r.description ? r.description + "\n\n" : "") + text }))}
      />
      <Toast message={toast} />
    </Layout>
  );

  // ---- Record List ----
  // ---- Trash ----
  if (view === "trash") {
    const trashItems = (state.trash || []).slice().sort((a, b) =>
      ((b as any).deletedAt || "").localeCompare((a as any).deletedAt || "")
    );
    return (
      <Layout>
        <BackBtn onClick={() => navigateTo("home")} />
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#3D2B1A", margin: "0 0 16px" }}>🗑️ ゴミ箱</h2>
        {trashItems.length === 0
          ? <div style={{ textAlign: "center", padding: "48px 0", color: "#BBA08A" }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>🗑️</div>
              <div>ゴミ箱は空です</div>
            </div>
          : trashItems.map(rec => {
              const pet = state.pets.find(p => p.id === rec.petId);
              return (
                <div key={rec.id} style={{ background: "#FFF", borderRadius: 14, padding: "14px 16px", marginBottom: 10, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1A" }}>{CATEGORY_ICONS[rec.category]} {rec.title}</span>
                      <div style={{ fontSize: 12, color: "#9A7A5C", marginTop: 2 }}>
                        {pet?.name} ・ {rec.date} ・ 削除日: {(rec as any).deletedAt || "—"}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => restoreRecord(rec.id)}
                        style={{ background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        ↩️ 復元
                      </button>
                      <button onClick={() => deleteFromTrash(rec.id)}
                        style={{ background: "#EF4444", color: "#FFF", border: "none", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        完全削除
                      </button>
                    </div>
                  </div>
                  {rec.description && <div style={{ fontSize: 12, color: "#7A5C3A", whiteSpace: "pre-wrap" }}>{rec.description}</div>}
                </div>
              );
            })
        }
      </Layout>
    );
  }

  // ---- Memorial ----
  const MEM_THEMES = [
    { key: "sakura",  label: "🌸 桜",   bg: "linear-gradient(160deg, #FFF0F5 0%, #FFE4EF 100%)", text: "#5C2D4A", sub: "#A07080", card: "rgba(255,255,255,0.6)", btn: "rgba(200,140,170,0.2)", btnText: "#7A3A5A" },
    { key: "sky",     label: "☁️ 空",   bg: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 100%)", text: "#1E3A5F", sub: "#6080A0", card: "rgba(255,255,255,0.6)", btn: "rgba(140,170,220,0.2)", btnText: "#2A4A7A" },
    { key: "dusk",    label: "🌅 夕暮れ", bg: "linear-gradient(160deg, #FFF7ED 0%, #FDE8CC 100%)", text: "#5C3010", sub: "#A07848", card: "rgba(255,255,255,0.6)", btn: "rgba(210,160,100,0.2)", btnText: "#7A4A18" },
    { key: "night",   label: "🌙 夜",   bg: "linear-gradient(160deg, #1a1a2e 0%, #2d1f3d 100%)", text: "#E8D5F0", sub: "#9A86AA", card: "rgba(255,255,255,0.07)", btn: "rgba(200,180,220,0.15)", btnText: "#C9B8D8" },
  ] as const;
  const th = MEM_THEMES.find(t => t.key === memTheme) || MEM_THEMES[0];
  const memBg = th.bg;
  const memCard = { background: th.card, borderRadius: 16, padding: "16px 18px", marginBottom: 12, backdropFilter: "blur(4px)" } as React.CSSProperties;

  if (view === "memorial") {
    const memorials = state.memorials || [];
    return (
      <div style={{ minHeight: "100vh", background: memBg, fontFamily: "system-ui,'Hiragino Sans',sans-serif", padding: "28px 16px 80px", transition: "background 0.4s" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 22, marginBottom: 2 }}>🌈</div>
              <div style={{ color: th.text, fontWeight: 700, fontSize: 18 }}>思い出</div>
              <div style={{ color: th.sub, fontSize: 12, marginTop: 2 }}>虹の橋を渡った子たちへ</div>
            </div>
            <button onClick={() => navigateTo("home")}
              style={{ background: th.btn, border: "none", borderRadius: 20, padding: "8px 16px", color: th.btnText, fontSize: 13, cursor: "pointer" }}>
              ✕ 閉じる
            </button>
          </div>

          {/* テーマ切り替え */}
          <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
            {MEM_THEMES.map(t => (
              <button key={t.key} onClick={() => setMemTheme(t.key)}
                style={{ background: t.key === memTheme ? th.btn : "transparent", border: `1px solid ${th.sub}40`, borderRadius: 16, padding: "5px 12px", fontSize: 12, color: t.key === memTheme ? th.btnText : th.sub, cursor: "pointer", fontWeight: t.key === memTheme ? 700 : 400 }}>
                {t.label}
              </button>
            ))}
          </div>

          {memorials.length === 0
            ? <div style={{ textAlign: "center", padding: "48px 0", color: th.sub }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🌸</div>
                <div style={{ color: th.sub, fontSize: 14 }}>思い出を追加してください</div>
              </div>
            : memorials.map(m => (
                <div key={m.id} style={{ ...memCard, cursor: "pointer" }}
                  onClick={() => { setSelectedMemorialId(m.id); navigateTo("memorialDetail"); }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: m.color || "#6B5B8B", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                      {m.profilePhoto
                        ? <img src={m.profilePhoto} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : (SPECIES_ICONS[m.species] || "🐾")}
                    </div>
                    <div>
                      <div style={{ color: th.text, fontWeight: 700, fontSize: 16 }}>{m.name}</div>
                      <div style={{ color: th.sub, fontSize: 12, marginTop: 2 }}>
                        {m.birthdate && `${m.birthdate} 生まれ`}{m.passedDate && ` 〜 ${m.passedDate}`}
                      </div>
                    </div>
                  </div>
                  {m.photos?.length > 0 && (
                    <div style={{ display: "flex", gap: 6, marginTop: 10, overflow: "hidden" }}>
                      {m.photos.slice(0, 3).map((p, i) => (
                        <img key={i} src={p.data} alt="" style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8, opacity: 0.85 }} />
                      ))}
                    </div>
                  )}
                </div>
              ))
          }

          <button onClick={() => { setEditingMemorial({}); navigateTo("addMemorial"); }}
            style={{ width: "100%", marginTop: 8, background: th.btn, border: `1px dashed ${th.sub}60`, borderRadius: 16, padding: "14px", color: th.btnText, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            ＋ 思い出を追加
          </button>
        </div>
      </div>
    );
  }

  if (view === "memorialDetail") {
    const m = (state.memorials || []).find(x => x.id === selectedMemorialId);
    if (!m) { navigateTo("memorial"); return null; }
    return (
      <div style={{ minHeight: "100vh", background: memBg, fontFamily: "system-ui,'Hiragino Sans',sans-serif", padding: "28px 16px 80px" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button onClick={() => navigateTo("memorial")}
              style={{ background: th.btn, border: "none", borderRadius: 20, padding: "8px 16px", color: th.btnText, fontSize: 13, cursor: "pointer" }}>
              ← 戻る
            </button>
            <button onClick={() => { setEditingMemorial({ ...m }); navigateTo("editMemorial"); }}
              style={{ background: th.btn, border: "none", borderRadius: 20, padding: "8px 16px", color: th.btnText, fontSize: 13, cursor: "pointer" }}>
              ✏️ 編集
            </button>
          </div>

          <div style={{ textAlign: "center", marginBottom: 24 }}>
            {/* プロフィール写真（タップで変更） */}
            <label style={{ display: "inline-block", cursor: "pointer" }}>
              <div style={{ width: 88, height: 88, borderRadius: "50%", background: m.color || "#6B5B8B", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, margin: "0 auto 4px", border: `3px solid ${th.sub}40` }}>
                {m.profilePhoto
                  ? <img src={m.profilePhoto} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : (SPECIES_ICONS[m.species] || "🐾")}
              </div>
              <div style={{ fontSize: 11, color: th.sub, marginBottom: 10 }}>📷 タップして写真を変更</div>
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
                const file = e.target.files?.[0]; if (!file) return;
                const reader = new FileReader();
                reader.onload = ev => {
                  const img = new Image();
                  img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const size = Math.min(img.width, img.height);
                    canvas.width = 200; canvas.height = 200;
                    const ctx = canvas.getContext("2d")!;
                    const sx = (img.width - size) / 2, sy = (img.height - size) / 2;
                    ctx.drawImage(img, sx, sy, size, size, 0, 0, 200, 200);
                    const profilePhoto = canvas.toDataURL("image/jpeg", 0.8);
                    updateState(s => ({ ...s, memorials: s.memorials.map(x => x.id === m.id ? { ...x, profilePhoto } : x) }));
                  };
                  img.src = ev.target?.result as string;
                };
                reader.readAsDataURL(file);
              }} />
            </label>
            <div style={{ color: th.text, fontWeight: 700, fontSize: 22 }}>{m.name}</div>
            <div style={{ color: th.sub, fontSize: 13, marginTop: 6 }}>
              {m.birthdate && `${m.birthdate} 生まれ`}{m.passedDate && ` 〜 ${m.passedDate} 旅立ち`}
            </div>
          </div>

          {m.note && (
            <div style={{ ...memCard, color: th.text, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
              {m.note}
            </div>
          )}

          {/* フォトアルバム */}
          {(m.photos?.length > 0) && (
            <>
              <div style={{ color: th.sub, fontSize: 13, fontWeight: 600, marginBottom: 10, marginTop: 16 }}>📷 写真</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                {m.photos.map((p, i) => (
                  <div key={i} style={{ aspectRatio: "1", borderRadius: 10, overflow: "hidden", cursor: "pointer" }}
                    onClick={() => setMemorialAlbumPhoto(p)}>
                    <img src={p.data} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 写真追加ボタン */}
          {(m.photos?.length || 0) < 7 && (
            <label style={{ display: "block", marginTop: 12, textAlign: "center", background: th.btn, border: `1px dashed ${th.sub}60`, borderRadius: 12, padding: "12px", color: th.sub, fontSize: 13, cursor: "pointer" }}>
              ＋ 写真を追加（{m.photos?.length || 0}/7）
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
                const file = e.target.files?.[0]; if (!file) return;
                // ★ EXIFから撮影日を取得してから画像を圧縮
                const bufReader = new FileReader();
                bufReader.onload = bufEv => {
                  const exifDate = getExifDate(bufEv.target?.result as ArrayBuffer);
                  const imgReader = new FileReader();
                  imgReader.onload = ev => {
                    const img = new Image();
                    img.onload = () => {
                      const canvas = document.createElement("canvas");
                      const scale = Math.min(1, 800 / img.width);
                      canvas.width = img.width * scale; canvas.height = img.height * scale;
                      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
                      const data = canvas.toDataURL("image/jpeg", 0.75);
                      const date = exifDate || new Date().toISOString().slice(0, 10);
                      const newPhoto = { id: Date.now(), data, date };
                      updateState(s => ({ ...s, memorials: s.memorials.map(x => x.id === m.id ? { ...x, photos: [...(x.photos || []), newPhoto] } : x) }));
                    };
                    img.src = ev.target?.result as string;
                  };
                  imgReader.readAsDataURL(file);
                };
                bufReader.readAsArrayBuffer(file);
              }} />
            </label>
          )}

          <button onClick={() => { if (!confirm(`${m.name}の思い出を削除しますか？`)) return; updateState(s => ({ ...s, memorials: s.memorials.filter(x => x.id !== m.id) })); navigateTo("memorial"); }}
            style={{ width: "100%", marginTop: 24, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 12, padding: "12px", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            🗑️ この思い出を削除
          </button>
        </div>

        {/* 写真拡大（スワイプ対応） */}
        {memorialAlbumPhoto && (() => {
          const photos = m.photos || [];
          const currentIdx = photos.findIndex(p => p.data === memorialAlbumPhoto.data);
          const goTo = (idx: number) => setMemorialAlbumPhoto(photos[idx]);
          const handleTouchStart = (e: React.TouchEvent) => { (window as any)._mSwipeX = e.touches[0].clientX; };
          const handleTouchEnd = (e: React.TouchEvent) => {
            const diff = ((window as any)._mSwipeX ?? 0) - e.changedTouches[0].clientX;
            if (Math.abs(diff) < 50) return;
            if (diff > 0 && currentIdx < photos.length - 1) goTo(currentIdx + 1);
            if (diff < 0 && currentIdx > 0) goTo(currentIdx - 1);
          };
          return (
            <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
              onClick={() => setMemorialAlbumPhoto(null)}
              onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div style={{ maxWidth: 500, width: "100%", position: "relative" }} onClick={e => e.stopPropagation()}>
                <img src={memorialAlbumPhoto.data} alt="" style={{ width: "100%", borderRadius: 16, maxHeight: "65vh", objectFit: "contain" }} />

                {/* ドットインジケーター */}
                {photos.length > 1 && (
                  <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
                    {photos.map((_, i) => (
                      <div key={i} onClick={e => { e.stopPropagation(); goTo(i); }}
                        style={{ width: i === currentIdx ? 20 : 8, height: 8, borderRadius: 4, background: i === currentIdx ? "#E8D5F0" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "width 0.2s" }} />
                    ))}
                  </div>
                )}

                {/* 左右矢印 */}
                {currentIdx > 0 && (
                  <button onClick={e => { e.stopPropagation(); goTo(currentIdx - 1); }}
                    style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 40, height: 40, color: "#FFF", fontSize: 18, cursor: "pointer" }}>‹</button>
                )}
                {currentIdx < photos.length - 1 && (
                  <button onClick={e => { e.stopPropagation(); goTo(currentIdx + 1); }}
                    style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 40, height: 40, color: "#FFF", fontSize: 18, cursor: "pointer" }}>›</button>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                  <span style={{ color: "#9A86AA", fontSize: 12 }}>{memorialAlbumPhoto.date}　{photos.length > 1 && `${currentIdx + 1} / ${photos.length}`}</span>
                  <button onClick={() => {
                    updateState(s => ({ ...s, memorials: s.memorials.map(x => x.id === selectedMemorialId ? { ...x, photos: x.photos.filter(p => p.data !== memorialAlbumPhoto.data) } : x) }));
                    setMemorialAlbumPhoto(null);
                  }} style={{ background: "rgba(239,68,68,0.3)", border: "none", borderRadius: 10, padding: "8px 14px", color: "#FCA5A5", fontSize: 13, cursor: "pointer" }}>🗑️ 削除</button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    );
  }

  if (view === "addMemorial" || view === "editMemorial") {
    const isEdit = view === "editMemorial";
    const MEMORIAL_COLORS = ["#6B5B8B", "#8B5B6B", "#5B6B8B", "#5B8B6B", "#8B7B5B", "#7B5B8B"];
    return (
      <div style={{ minHeight: "100vh", background: memBg, fontFamily: "system-ui,'Hiragino Sans',sans-serif", padding: "28px 16px 80px" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <button onClick={() => navigateTo(isEdit ? "memorialDetail" : "memorial")}
              style={{ background: th.btn, border: "none", borderRadius: 20, padding: "8px 16px", color: th.btnText, fontSize: 13, cursor: "pointer" }}>← 戻る</button>
            <div style={{ color: th.text, fontWeight: 700, fontSize: 16 }}>{isEdit ? "思い出を編集" : "思い出を追加"}</div>
            <div style={{ width: 60 }} />
          </div>

          {[
            { label: "名前", key: "name", type: "text", placeholder: "例：たまちゃん" },
            { label: "種類", key: "species", type: "text", placeholder: "例：猫" },
            { label: "生年月日", key: "birthdate", type: "date", placeholder: "" },
            { label: "旅立った日", key: "passedDate", type: "date", placeholder: "" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: 14 }}>
              <label style={{ display: "block", color: th.sub, fontSize: 12, marginBottom: 5 }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                value={(editingMemorial as any)[f.key] || ""}
                onChange={e => setEditingMemorial(m => ({ ...m, [f.key]: e.target.value }))}
                style={{ width: "100%", background: th.card, border: `1px solid ${th.sub}40`, borderRadius: 10, padding: "10px 14px", color: th.text, fontSize: 14, boxSizing: "border-box" }} />
            </div>
          ))}

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", color: th.sub, fontSize: 12, marginBottom: 5 }}>メモ・思い出</label>
            <textarea rows={4} placeholder="その子との思い出を残してください..."
              value={editingMemorial.note || ""}
              onChange={e => setEditingMemorial(m => ({ ...m, note: e.target.value }))}
              style={{ width: "100%", background: th.card, border: `1px solid ${th.sub}40`, borderRadius: 10, padding: "10px 14px", color: th.text, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", color: th.sub, fontSize: 12, marginBottom: 8 }}>カラー</label>
            <div style={{ display: "flex", gap: 10 }}>
              {MEMORIAL_COLORS.map(c => (
                <div key={c} onClick={() => setEditingMemorial(m => ({ ...m, color: c }))}
                  style={{ width: 32, height: 32, borderRadius: "50%", background: c, cursor: "pointer", border: editingMemorial.color === c ? `3px solid ${th.text}` : "3px solid transparent" }} />
              ))}
            </div>
          </div>

          <button onClick={() => {
            if (!editingMemorial.name) return;
            if (isEdit) {
              updateState(s => ({ ...s, memorials: s.memorials.map(x => x.id === selectedMemorialId ? { ...x, ...editingMemorial } as Memorial : x) }));
              navigateTo("memorialDetail");
            } else {
              const newM: Memorial = {
                id: state!.nextMemorialId || 1,
                name: editingMemorial.name || "",
                species: editingMemorial.species || "猫",
                birthdate: editingMemorial.birthdate || "",
                passedDate: editingMemorial.passedDate || "",
                note: editingMemorial.note || "",
                color: editingMemorial.color || "#6B5B8B",
                photos: [],
              };
              updateState(s => ({ ...s, memorials: [...(s.memorials || []), newM], nextMemorialId: (s.nextMemorialId || 1) + 1 }));
              navigateTo("memorial");
            }
          }}
            style={{ width: "100%", background: th.btn, border: "none", borderRadius: 14, padding: "14px", color: th.btnText, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            {isEdit ? "✅ 更新する" : "🌸 追加する"}
          </button>
        </div>
      </div>
    );
  }

  if (view === "recordList" && selectedPet) return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ margin: 0, fontSize: 20, color: "#3D2B1A" }}>
          {selectedPet.icon} {selectedPet.name}の記録
        </h2>
      </div>

      {/* ★ 検索バー */}
      <div style={{ position: "relative", marginBottom: 8 }}>
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "#BBA08A", pointerEvents: "none" }}>🔍</span>
        <input
          style={{ ...styles.input, paddingLeft: 36, paddingRight: searchQuery ? 36 : 14 }}
          placeholder="タイトル・メモ・日付・費用で検索..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, color: "#BBA08A", cursor: "pointer", padding: 2 }}>
            ✕
          </button>
        )}
      </div>

      {/* ★ 詳細フィルター */}
      <div style={{ marginBottom: 14 }}>
        <button onClick={() => setShowSearchFilter(f => !f)}
          style={{ background: "none", border: "none", fontSize: 12, color: (searchDateFrom || searchDateTo || searchHasCost) ? "#C49A6C" : "#9A7A5C", cursor: "pointer", fontWeight: 600, padding: "4px 0", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ display: "inline-block", transform: showSearchFilter ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▶</span>
          詳細フィルター{(searchDateFrom || searchDateTo || searchHasCost) ? " ●" : ""}
        </button>
        {showSearchFilter && (
          <div style={{ background: "#FFF", borderRadius: 12, padding: "12px 14px", marginTop: 6, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#7A5C3A", display: "block", marginBottom: 4 }}>📅 日付（から）</label>
                <input type="date" style={{ ...styles.input, fontSize: 13, padding: "7px 10px" }} value={searchDateFrom} onChange={e => setSearchDateFrom(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#7A5C3A", display: "block", marginBottom: 4 }}>📅 日付（まで）</label>
                <input type="date" style={{ ...styles.input, fontSize: 13, padding: "7px 10px" }} value={searchDateTo} onChange={e => setSearchDateTo(e.target.value)} />
              </div>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: "#5C3A1E" }}>
              <input type="checkbox" checked={searchHasCost} onChange={e => setSearchHasCost(e.target.checked)}
                style={{ width: 16, height: 16, accentColor: "#C49A6C" }} />
              💰 費用が記録されている記録のみ
            </label>
            {(searchDateFrom || searchDateTo || searchHasCost) && (
              <button onClick={() => { setSearchDateFrom(""); setSearchDateTo(""); setSearchHasCost(false); }}
                style={{ background: "none", border: "1px solid #E8D5BC", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "#9A7A5C", cursor: "pointer" }}>
                フィルターをリセット
              </button>
            )}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {["すべて", ...Object.keys(CATEGORY_ICONS)].map(cat => (
          <button key={cat}
            style={{ ...styles.filterChip, background: filterCategory === cat ? "#C49A6C" : "#FFF0DC", color: filterCategory === cat ? "#FFF" : "#7A5C3A" }}
            onClick={() => setFilterCategory(cat)}>
            {cat !== "すべて" && CATEGORY_ICONS[cat as HealthRecord["category"]] + " "}{cat}
          </button>
        ))}
      </div>

      {/* 検索結果件数 */}
      {(searchQuery || filterCategory !== "すべて" || searchDateFrom || searchDateTo || searchHasCost) && (
        <div style={{ fontSize: 12, color: "#9A7A5C", marginBottom: 12, paddingLeft: 4 }}>
          {petRecords.length}件の記録
          {searchQuery && <span> 「{searchQuery}」</span>}
          {filterCategory !== "すべて" && <span> [{filterCategory}]</span>}
          {(searchDateFrom || searchDateTo) && <span> [{searchDateFrom || "〜"}〜{searchDateTo || "〜"}]</span>}
          {searchHasCost && <span> [費用あり]</span>}
        </div>
      )}

      {petRecords.length === 0
        ? <EmptyState icon="📭" msg={searchQuery ? "検索結果がありません" : "該当する記録がありません"} />
        : petRecords.map(r => <RecordRow key={r.id} record={r} onDelete={deleteRecord} onEdit={rec => { setEditingRecord({ ...rec }); navigateTo("editRecord"); }} expanded />)
      }

      {/* ★ FABボタン（固定）: 戻る＋記録追加 */}
      <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 12, zIndex: 100 }}>
        <button
          style={{ background: "#FFF", color: "#7A5C3A", border: "1.5px solid #E8D5BC", borderRadius: 30, padding: "14px 22px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", whiteSpace: "nowrap" }}
          onClick={() => navigateTo("petDetail")}>
          ← 戻る
        </button>
        <button
          style={{ background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 30, padding: "14px 22px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(196,154,108,0.4)", whiteSpace: "nowrap" }}
          onClick={() => { setEditingRecord({ date: new Date().toISOString().slice(0, 10) }); navigateTo("addRecord"); }}>
          ＋ 記録を追加
        </button>
      </div>

      <Toast message={toast} />
    </Layout>
  );

  return <div style={{ padding: 40, textAlign: "center" }}>読み込み中...</div>;
}

// ============================================================
// ★ 新規コンポーネント: ウォークスルーカード（ペット0匹のとき）
// ============================================================
function WalkthroughCard({ onStart }: { onStart: () => void }) {
  const steps = [
    {
      icon: "🐾",
      title: "ペットを登録する",
      desc: "名前・種類・生年月日・写真などのプロフィールを登録します。複数のペットを管理できます。",
    },
    {
      icon: "📝",
      title: "健康記録をつける",
      desc: "病院・ワクチン・薬・体重・フードなどをカテゴリごとに記録。カレンダーで一覧確認できます。",
    },
    {
      icon: "⚖️",
      title: "体重の変化を確認する",
      desc: "体重記録をグラフで可視化。3匹まとめて比較グラフも見られます。",
    },
    {
      icon: "👨‍👩‍👧",
      title: "家族と共有する",
      desc: "グループコードを共有するだけで、家族全員がリアルタイムでデータを閲覧・更新できます。",
    },
  ];

  return (
    <div style={{ marginBottom: 28 }}>
      {/* ウェルカムメッセージ */}
      <div style={{ background: "linear-gradient(135deg, #FFF0DC, #FDE8D0)", borderRadius: 16, padding: "20px 20px 16px", marginBottom: 16, textAlign: "center", border: "1.5px dashed #C49A6C" }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A", marginBottom: 6 }}>
          ペット健康手帳へようこそ！
        </div>
        <div style={{ fontSize: 13, color: "#7A5C3A", lineHeight: 1.7 }}>
          大切なペットの健康情報を家族みんなで管理できます。<br />
          まずはペットを登録してみましょう。
        </div>
        <button
          onClick={onStart}
          style={{ marginTop: 14, background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 24, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 3px 12px rgba(196,154,108,0.4)" }}>
          🐾 最初のペットを登録する
        </button>
      </div>

      {/* 機能紹介カード */}
      <div style={{ fontSize: 12, fontWeight: 700, color: "#9A7A5C", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, paddingLeft: 4 }}>
        できること
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ background: "#FFF", borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 14, boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{step.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#3D2B1A", marginBottom: 3 }}>
                <span style={{ background: "#C49A6C", color: "#FFF", borderRadius: 10, fontSize: 10, fontWeight: 700, padding: "1px 7px", marginRight: 7 }}>
                  {i + 1}
                </span>
                {step.title}
              </div>
              <div style={{ fontSize: 13, color: "#7A5C3A", lineHeight: 1.6 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#BBA08A" }}>
        ペットを登録すると、この案内は消えます
      </div>
    </div>
  );
}

// ============================================================
// ★ 新規コンポーネント: 全ペット体重比較グラフ
// ============================================================
const PET_CHART_COLORS = ["#C49A6C", "#EF4444", "#3B82F6", "#10B981", "#8B5CF6"];

function AllPetsWeightChart({ pets, records }: { pets: Pet[]; records: HealthRecord[] }) {
  const [period, setPeriod] = useState<1 | 3 | 6 | 0>(3); // 0=全期間
  const [showList, setShowList] = useState(false);

  const cutoffDate = (() => {
    if (period === 0) return "";
    const d = new Date();
    d.setMonth(d.getMonth() - period);
    return d.toISOString().slice(0, 10);
  })();

  // ペットごとの体重データを整理
  const petData = pets.map((pet, idx) => {
    const wrs = records
      .filter(r => r.petId === pet.id && r.category === "体重" && r.weight)
      .filter(r => period === 0 || r.date >= cutoffDate)
      .map(r => ({ date: r.date, kg: parseFloat(r.weight!) }))
      .filter(r => !isNaN(r.kg))
      .sort((a, b) => a.date.localeCompare(b.date));
    return { pet, data: wrs, color: PET_CHART_COLORS[idx % PET_CHART_COLORS.length] };
  }).filter(pd => pd.data.length > 0);

  if (petData.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", color: "#9A7A5C" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>⚖️</div>
        <div>体重記録がありません</div>
        <div style={{ fontSize: 12, marginTop: 8 }}>各ペットの「体重」カテゴリで記録を追加してください</div>
      </div>
    );
  }

  // 全データから共通のスケールを計算
  const allDates = petData.flatMap(pd => pd.data.map(d => d.date)).sort();
  const allKgs = petData.flatMap(pd => pd.data.map(d => d.kg));
  const minDate = allDates[0];
  const maxDate = allDates[allDates.length - 1];
  const minKg = Math.min(...allKgs);
  const maxKg = Math.max(...allKgs);

  const W = 520, H = 220, PL = 52, PR = 16, PT = 20, PB = 36;
  const gW = W - PL - PR;
  const gH = H - PT - PB;
  const kgRange = maxKg - minKg || 0.5;
  const kgPad = kgRange * 0.15;
  const yMin = minKg - kgPad;
  const yMax = maxKg + kgPad;

  const dateToX = (date: string): number => {
    if (minDate === maxDate) return PL + gW / 2;
    const tMin = new Date(minDate).getTime();
    const tMax = new Date(maxDate).getTime();
    const t = (new Date(date).getTime() - tMin) / (tMax - tMin);
    return PL + t * gW;
  };
  const kgToY = (kg: number): number => PT + (1 - (kg - yMin) / (yMax - yMin)) * gH;

  const yTicks = Array.from({ length: 4 }, (_, i) => yMin + (yMax - yMin) * (i / 3));

  return (
    <div>
      {/* 期間切り替え */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, justifyContent: "center" }}>
        {([1, 3, 6, 0] as const).map(p => (
          <button key={p}
            onClick={() => setPeriod(p)}
            style={{ background: period === p ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, color: period === p ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
            {p === 0 ? "全期間" : `${p}ヶ月`}
          </button>
        ))}
      </div>

      {/* 凡例 */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12, justifyContent: "center" }}>
        {petData.map(pd => (
          <div key={pd.pet.id} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#3D2B1A" }}>
            <div style={{ width: 28, height: 3, background: pd.color, borderRadius: 2 }} />
            <span style={{ fontWeight: 600 }}>{pd.pet.name}</span>
            {pd.data.length > 0 && (
              <span style={{ color: "#9A7A5C", fontSize: 12 }}>
                ({pd.data[pd.data.length - 1].kg.toFixed(2)}kg)
              </span>
            )}
          </div>
        ))}
      </div>

      {/* グラフ */}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
        {/* グリッド */}
        {yTicks.map((y, i) => (
          <g key={i}>
            <line x1={PL} y1={kgToY(y)} x2={PL + gW} y2={kgToY(y)} stroke="#F0E8DC" strokeWidth="1" />
            <text x={PL - 6} y={kgToY(y) + 4} textAnchor="end" fontSize="9" fill="#9A7A5C">{y.toFixed(2)}</text>
          </g>
        ))}
        {/* 軸 */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + gH} stroke="#E8D5BC" strokeWidth="1" />
        <line x1={PL} y1={PT + gH} x2={PL + gW} y2={PT + gH} stroke="#E8D5BC" strokeWidth="1" />
        {/* 各ペットの折れ線 */}
        {petData.map(pd => {
          if (pd.data.length === 0) return null;
          const pts = pd.data.map(d => `${dateToX(d.date)},${kgToY(d.kg)}`).join(" ");
          return (
            <g key={pd.pet.id}>
              <polyline points={pts} fill="none" stroke={pd.color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              {pd.data.map((d, i) => (
                <circle key={i} cx={dateToX(d.date)} cy={kgToY(d.kg)} r="4" fill={pd.color} stroke="#FFF" strokeWidth="1.5" />
              ))}
            </g>
          );
        })}
        {/* X軸ラベル */}
        {minDate && (
          <>
            <text x={PL} y={H - 4} textAnchor="start" fontSize="9" fill="#9A7A5C">{minDate.slice(5)}</text>
            {minDate !== maxDate && <text x={PL + gW} y={H - 4} textAnchor="end" fontSize="9" fill="#9A7A5C">{maxDate.slice(5)}</text>}
          </>
        )}
      </svg>

      {/* データなしペット */}
      {pets.filter(p => !petData.find(pd => pd.pet.id === p.id)).length > 0 && (
        <div style={{ fontSize: 12, color: "#BBA08A", textAlign: "center", marginTop: 8 }}>
          ※ {pets.filter(p => !petData.find(pd => pd.pet.id === p.id)).map(p => p.name).join("・")} は体重記録なし
        </div>
      )}

      {/* リストボタン */}
      {petData.length > 0 && (
        <button onClick={() => setShowList(v => !v)}
          style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, background: "none", border: "none", cursor: "pointer", color: "#C49A6C", fontWeight: 700, fontSize: 14, padding: "4px 0" }}>
          <span style={{ fontSize: 12, display: "inline-block", transform: showList ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▶</span>
          📋 リスト
        </button>
      )}

      {/* ペット別リスト */}
      {showList && petData.map(pd => {
        const rows = pd.data.slice().reverse();
        return (
          <div key={pd.pet.id} style={{ marginTop: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: pd.color }} />
              <span style={{ fontWeight: 700, fontSize: 14, color: "#3D2B1A" }}>{pd.pet.name}</span>
              <span style={{ fontSize: 12, color: "#9A7A5C" }}>{rows.length}件</span>
            </div>
            <div style={{ border: "1px solid #E8D5BC", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: "#FDF6EE", padding: "6px 12px", fontSize: 11, fontWeight: 700, color: "#7A5C3A", gap: 8 }}>
                <span>日付</span>
                <span style={{ textAlign: "right", minWidth: 70 }}>体重</span>
                <span style={{ textAlign: "right", minWidth: 56 }}>前回比</span>
              </div>
              {rows.map((r, i, arr) => {
                const prev = arr[i + 1];
                const diff = prev ? r.kg - prev.kg : null;
                return (
                  <div key={r.date} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", padding: "8px 12px", fontSize: 13, gap: 8, borderTop: "1px solid #F0E8DC", background: i % 2 === 0 ? "#FFF" : "#FFFBF7", alignItems: "center" }}>
                    <span style={{ color: "#5C3A1E" }}>{r.date}</span>
                    <span style={{ fontWeight: 700, color: "#3D2B1A", textAlign: "right", minWidth: 70 }}>{r.kg.toFixed(2)} kg</span>
                    <span style={{ fontSize: 11, textAlign: "right", minWidth: 56, fontWeight: 600, color: diff === null ? "#BBA08A" : diff > 0 ? "#EF4444" : diff < 0 ? "#3B82F6" : "#BBA08A" }}>
                      {diff === null ? "—" : diff > 0 ? `▲${diff.toFixed(2)}` : diff < 0 ? `▼${Math.abs(diff).toFixed(2)}` : "±0.00"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// Sub Components（既存のまま）
// ============================================================
function PetCalendar({ records, onDayClick }: {
  records: HealthRecord[];
  onDayClick: (recs: HealthRecord[]) => void;
}) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const recordsByDate: Record<string, HealthRecord[]> = {};
  records.forEach(r => {
    if (!recordsByDate[r.date]) recordsByDate[r.date] = [];
    recordsByDate[r.date].push(r);
  });

  const monthStr = `${year}-${String(month + 1).padStart(2, "0")}`;
  const todayStr = today.toISOString().slice(0, 10);

  const prevMonth = () => { if (month === 0) { setYear(y => y - 1); setMonth(11); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setYear(y => y + 1); setMonth(0); } else setMonth(m => m + 1); };

  const jumpToOldest = () => {
    const dates = records.map(r => r.date).filter(Boolean).sort();
    if (dates.length === 0) return;
    const oldest = dates[0];
    setYear(parseInt(oldest.slice(0, 4)));
    setMonth(parseInt(oldest.slice(5, 7)) - 1);
  };

  const jumpToToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  };

  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();
  const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div style={{ background: "#FFF", borderRadius: 16, padding: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <button onClick={prevMonth} style={{ background: "#FFF0DC", border: "none", borderRadius: 10, fontSize: 18, cursor: "pointer", color: "#C49A6C", padding: "8px 14px", fontWeight: 700, lineHeight: 1 }}>‹</button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A" }}>{year}年 {month + 1}月</div>
        </div>
        <button onClick={nextMonth} style={{ background: "#FFF0DC", border: "none", borderRadius: 10, fontSize: 18, cursor: "pointer", color: "#C49A6C", padding: "8px 14px", fontWeight: 700, lineHeight: 1 }}>›</button>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, justifyContent: "center" }}>
        <button onClick={jumpToOldest} style={{ background: "none", border: "1px solid #E8D5BC", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#7A5C3A", cursor: "pointer" }}>
          ⏮ 最古の記録
        </button>
        {!isCurrentMonth && (
          <button onClick={jumpToToday} style={{ background: "#C49A6C", border: "none", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#FFF", cursor: "pointer", fontWeight: 600 }}>
            今月へ戻る
          </button>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 4 }}>
        {WEEKDAYS.map((d, i) => (
          <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: i === 0 ? "#EF4444" : i === 6 ? "#3B82F6" : "#9A7A5C", padding: "4px 0" }}>{d}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = `${monthStr}-${String(day).padStart(2, "0")}`;
          const dayRecs = recordsByDate[dateStr] || [];
          const isToday = dateStr === todayStr;
          const dow = (firstDay + i) % 7;
          const hasRecs = dayRecs.length > 0;
          const cats = [...new Set(dayRecs.map(r => r.category))].slice(0, 3);
          return (
            <div key={day}
              onClick={() => onDayClick(dayRecs)}
              style={{
                borderRadius: 10, padding: "6px 2px 4px", textAlign: "center",
                cursor: hasRecs ? "pointer" : "default",
                background: isToday ? "#C49A6C22" : hasRecs ? "#FFF7EE" : "transparent",
                border: isToday ? "2px solid #C49A6C" : hasRecs ? "1px solid #F0D9B0" : "1px solid transparent",
                minHeight: 52, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, transition: "background .15s",
              }}>
              <div style={{ fontSize: 13, fontWeight: isToday ? 700 : 400, color: dow === 0 ? "#EF4444" : dow === 6 ? "#3B82F6" : "#3D2B1A" }}>{day}</div>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
                {cats.map(cat => (
                  <span key={cat} style={{ fontSize: 11, background: CATEGORY_COLORS[cat as HealthRecord["category"]] + "33", borderRadius: 4, padding: "0 2px", lineHeight: 1.4 }}>
                    {CATEGORY_ICONS[cat as HealthRecord["category"]]}
                  </span>
                ))}
              </div>
              {dayRecs.length > 0 && (
                <div style={{ fontSize: 9, color: "#C49A6C", fontWeight: 700 }}>{dayRecs.length}件</div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid #F0E8DC" }}>
        {(Object.keys(CATEGORY_ICONS) as HealthRecord["category"][]).map(cat => (
          <div key={cat} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "#7A5C3A" }}>
            <span>{CATEGORY_ICONS[cat]}</span>{cat}
          </div>
        ))}
      </div>
    </div>
  );
}

// ★ テキスト中のURLを自動リンク化するコンポーネント
function AutoLink({ text, style }: { text: string; style?: React.CSSProperties }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return (
    <span style={style}>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer"
            style={{ color: "#C49A6C", textDecoration: "underline", wordBreak: "break-all" }}
            onClick={e => e.stopPropagation()}>
            {part}
          </a>
        ) : part
      )}
    </span>
  );
}

function VetCard({ pet, onSave }: { pet: Pet; onSave: (data: Partial<Pet>) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    vet: pet.vet || "", vetPhone: pet.vetPhone || "", vetAddress: pet.vetAddress || "",
    vetHours: pet.vetHours || "", vetNote: pet.vetNote || "",
  });
  const hasInfo = pet.vet || pet.vetPhone || pet.vetAddress;
  function handleSave() { onSave(form); setShowModal(false); }

  // 電話番号から数字・ハイフンだけ抽出してtel:リンク用に整形
  const telHref = pet.vetPhone
    ? "tel:" + pet.vetPhone.replace(/[^\d+]/g, "")
    : "";

  return (
    <>
      <div style={{ ...styles.infoCard, cursor: "pointer" }} onClick={() => {
        setForm({ vet: pet.vet || "", vetPhone: pet.vetPhone || "", vetAddress: pet.vetAddress || "", vetHours: pet.vetHours || "", vetNote: pet.vetNote || "" });
        setShowModal(true);
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={styles.infoLabel}>かかりつけ病院</div>
          <span style={{ fontSize: 11, color: "#C49A6C" }}>✏️ 編集</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#3D2B1A", marginTop: 4 }}>{pet.vet || "—"}</div>
        {pet.vetPhone && (
          <div style={{ fontSize: 12, color: "#7A5C3A", marginTop: 3 }}>
            📞{" "}
            <a href={telHref} onClick={e => e.stopPropagation()}
              style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 600 }}>
              {pet.vetPhone}
            </a>
          </div>
        )}
        {pet.vetAddress && (
          <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 2 }}>
            📍{" "}
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pet.vetAddress)}`}
              target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ color: "#3B82F6", textDecoration: "none" }}>
              {pet.vetAddress}
            </a>
          </div>
        )}
        {pet.vetHours && <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 2 }}>🕐 {pet.vetHours}</div>}
        {pet.vetNote && (
          <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 2 }}>
            📝 <AutoLink text={pet.vetNote} />
          </div>
        )}
        {!hasInfo && <div style={{ fontSize: 12, color: "#BBA08A", marginTop: 4 }}>タップして追加</div>}
      </div>
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
          onClick={() => setShowModal(false)}>
          <div style={{ background: "#FDF6EE", borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflowY: "auto" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#3D2B1A" }}>🏥 病院情報を編集</div>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { key: "vet", label: "病院名", placeholder: "例: アシスト動物病院", icon: "🏥" },
                { key: "vetPhone", label: "電話番号", placeholder: "例: 03-1234-5678", icon: "📞" },
                { key: "vetAddress", label: "住所", placeholder: "例: 東京都渋谷区...", icon: "📍" },
                { key: "vetHours", label: "診療時間", placeholder: "例: 9:00〜19:00 (水休)", icon: "🕐" },
                { key: "vetNote", label: "メモ", placeholder: "担当医の名前など", icon: "📝" },
              ].map(({ key, label, placeholder, icon }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#5C3A1E", marginBottom: 5 }}>{icon} {label}</label>
                  {key === "vetNote" ? (
                    <textarea style={{ ...styles.input, height: 72, resize: "vertical" }} value={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder} />
                  ) : (
                    <input style={styles.input} value={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder} />
                  )}
                </div>
              ))}
            </div>
            <button style={{ ...styles.primaryBtn, marginTop: 20 }} onClick={handleSave}>✅ 保存する</button>
          </div>
        </div>
      )}
    </>
  );
}

function WeightSummaryCard({ records, petId }: { records: HealthRecord[]; petId: number }) {
  const [showChart, setShowChart] = useState(false);
  const [period, setPeriod] = useState<3 | 6 | 12 | 24 | 0>(3);
  const [showList, setShowList] = useState(false);

  const cutoff = (() => {
    if (period === 0) return "";
    const d = new Date();
    d.setMonth(d.getMonth() - period);
    return d.toISOString().slice(0, 10);
  })();

  const allWeightRecords = records
    .filter(r => r.petId === petId && r.category === "体重" && r.weight)
    .map(r => ({ date: r.date, kg: parseFloat(r.weight!) }))
    .filter(r => !isNaN(r.kg))
    .sort((a, b) => a.date.localeCompare(b.date));

  const weightRecords = allWeightRecords.filter(r => period === 0 || r.date >= cutoff);
  const displayRecords = weightRecords.length > 0 ? weightRecords : allWeightRecords;

  if (allWeightRecords.length === 0) {
    return (
      <div style={styles.infoCard}>
        <div style={styles.infoLabel}>体重（最新）</div>
        <div style={styles.infoValue}>—</div>
      </div>
    );
  }

  const latest = allWeightRecords[allWeightRecords.length - 1];
  const maxRec = displayRecords.reduce((a, b) => a.kg >= b.kg ? a : b);
  const minRec = displayRecords.reduce((a, b) => a.kg <= b.kg ? a : b);

  const handlePrint = () => {
    const rows = displayRecords.slice().reverse().map((r, i, arr) => {
      const prev = arr[i + 1];
      const diff = prev ? r.kg - prev.kg : null;
      const diffStr = diff === null ? "—" : diff > 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2);
      return `<tr>
        <td>${r.date}</td>
        <td style="text-align:right;font-weight:600;">${r.kg.toFixed(2)} kg</td>
        <td style="text-align:right;color:${diff === null ? "#666" : diff > 0 ? "#EF4444" : diff < 0 ? "#3B82F6" : "#666"};">${diffStr}</td>
      </tr>`;
    }).join("");
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<html><head><meta charset="utf-8"><title>体重記録</title>
      <style>body{font-family:'Hiragino Sans',sans-serif;padding:24px;color:#3D2B1A;}
      table{width:100%;border-collapse:collapse;font-size:14px;}
      th{background:#FDF6EE;color:#7A5C3A;padding:8px 12px;border:1px solid #E8D5BC;text-align:left;}
      td{padding:8px 12px;border:1px solid #E8D5BC;}tr:nth-child(even){background:#FFFBF7;}
      @media print{button{display:none;}}</style></head>
      <body><h2>⚖️ 体重記録</h2>
      <p style="color:#9A7A5C;font-size:13px;">${displayRecords.length}件</p>
      <table><thead><tr><th>日付</th><th style="text-align:right;">体重</th><th style="text-align:right;">前回比</th></tr></thead>
      <tbody>${rows}</tbody></table>
      <p style="margin-top:16px;font-size:12px;color:#BBA08A;">印刷日: ${new Date().toLocaleDateString("ja-JP")}</p>
      <button onclick="window.print()" style="margin-top:12px;padding:10px 24px;background:#C49A6C;color:#FFF;border:none;border-radius:8px;font-size:15px;cursor:pointer;">🖨️ 印刷する</button>
      </body></html>`);
    win.document.close();
  };

  const PERIOD_LABELS_W: Record<number, string> = { 3: "3ヶ月", 6: "6ヶ月", 12: "1年", 24: "2年", 0: "全期間" };

  return (
    <>
      {/* コンパクトカード */}
      <div style={styles.infoCard}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={styles.infoLabel}>体重（最新）</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setShowChart(true)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#C49A6C", fontWeight: 600, padding: 0 }}>📈 グラフ</button>
            <button onClick={() => setShowList(true)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#C49A6C", fontWeight: 600, padding: 0 }}>📋 リスト</button>
          </div>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#3D2B1A", margin: "4px 0" }}>{latest.kg.toFixed(2)} kg</div>
        <div style={{ fontSize: 11, color: "#9A7A5C", marginTop: 2 }}>最終: {latest.date}</div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <div style={{ flex: 1, background: "#FFF0F0", borderRadius: 8, padding: "5px 8px" }}>
            <div style={{ fontSize: 10, color: "#EF4444", fontWeight: 700 }}>▲ 最高</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1A" }}>{maxRec.kg.toFixed(2)} kg</div>
            <div style={{ fontSize: 10, color: "#9A7A5C" }}>{maxRec.date}</div>
          </div>
          <div style={{ flex: 1, background: "#F0F8FF", borderRadius: 8, padding: "5px 8px" }}>
            <div style={{ fontSize: 10, color: "#3B82F6", fontWeight: 700 }}>▼ 最低</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1A" }}>{minRec.kg.toFixed(2)} kg</div>
            <div style={{ fontSize: 10, color: "#9A7A5C" }}>{minRec.date}</div>
          </div>
        </div>
      </div>

      {/* グラフモーダル */}
      {showChart && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          onClick={() => setShowChart(false)}>
          <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflow: "auto" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A" }}>📈 体重グラフ</div>
              <button onClick={() => setShowChart(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
            </div>
            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {([3, 6, 12, 24, 0] as const).map(p => (
                <button key={p} onClick={() => setPeriod(p)}
                  style={{ background: period === p ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: period === p ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
                  {PERIOD_LABELS_W[p]}
                </button>
              ))}
            </div>
            {displayRecords.length < 2
              ? <div style={{ textAlign: "center", padding: "32px 0", color: "#9A7A5C" }}>データが2件以上になるとグラフが表示されます</div>
              : <>
                  <WeightLineChart data={displayRecords} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "#9A7A5C" }}>
                    <span>{displayRecords[0].date}</span>
                    <span>{displayRecords.length}件</span>
                    <span>{displayRecords[displayRecords.length - 1].date}</span>
                  </div>
                </>
            }
          </div>
        </div>
      )}

      {/* リストモーダル */}
      {showList && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          onClick={() => setShowList(false)}>
          <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 600, maxHeight: "85vh", overflow: "auto" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A" }}>📋 体重リスト</div>
              <button onClick={() => setShowList(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
            </div>
            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {([3, 6, 12, 24, 0] as const).map(p => (
                <button key={p} onClick={() => setPeriod(p)}
                  style={{ background: period === p ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: period === p ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
                  {PERIOD_LABELS_W[p]}
                </button>
              ))}
            </div>
            <div style={{ border: "1px solid #E8D5BC", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: "#FDF6EE", padding: "7px 14px", fontSize: 12, fontWeight: 700, color: "#7A5C3A", gap: 8 }}>
                <span>日付</span>
                <span style={{ textAlign: "right", minWidth: 70 }}>体重</span>
                <span style={{ textAlign: "right", minWidth: 56 }}>前回比</span>
              </div>
              {displayRecords.slice().reverse().map((r, i, arr) => {
                const prev = arr[i + 1];
                const diff = prev ? r.kg - prev.kg : null;
                return (
                  <div key={r.date} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", padding: "9px 14px", fontSize: 13, gap: 8, borderTop: "1px solid #F0E8DC", background: i % 2 === 0 ? "#FFF" : "#FFFBF7", alignItems: "center" }}>
                    <span style={{ color: "#5C3A1E" }}>{r.date}</span>
                    <span style={{ fontWeight: 700, color: "#3D2B1A", textAlign: "right", minWidth: 70 }}>{r.kg.toFixed(2)} kg</span>
                    <span style={{ fontSize: 12, textAlign: "right", minWidth: 56, fontWeight: 600, color: diff === null ? "#BBA08A" : diff > 0 ? "#EF4444" : diff < 0 ? "#3B82F6" : "#BBA08A" }}>
                      {diff === null ? "—" : diff > 0 ? `▲${diff.toFixed(2)}` : diff < 0 ? `▼${Math.abs(diff).toFixed(2)}` : "±0.00"}
                    </span>
                  </div>
                );
              })}
            </div>
            <button onClick={handlePrint}
              style={{ width: "100%", background: "#3D2B1A", color: "#FFF", border: "none", borderRadius: 12, padding: "12px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              🖨️ 印刷用ページを開く
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function WeightLineChart({ data }: { data: { date: string; kg: number }[] }) {
  const W = 520, H = 200, PL = 48, PR = 16, PT = 16, PB = 32;
  const gW = W - PL - PR; const gH = H - PT - PB;
  const kgs = data.map(d => d.kg);
  const minKg = Math.min(...kgs); const maxKg = Math.max(...kgs);
  const range = maxKg - minKg || 0.1; const padded = range * 0.15;
  const yMin = minKg - padded; const yMax = maxKg + padded;
  const toX = (i: number) => PL + (i / (data.length - 1)) * gW;
  const toY = (kg: number) => PT + (1 - (kg - yMin) / (yMax - yMin)) * gH;
  const points = data.map((d, i) => `${toX(i)},${toY(d.kg)}`).join(" ");
  const fillPath = `M${toX(0)},${toY(data[0].kg)} ` + data.map((d, i) => `L${toX(i)},${toY(d.kg)}`).join(" ") + ` L${toX(data.length - 1)},${PT + gH} L${toX(0)},${PT + gH} Z`;
  const yTicks = Array.from({ length: 4 }, (_, i) => yMin + (yMax - yMin) * (i / 3));
  const xLabels = [0, Math.floor((data.length - 1) / 2), data.length - 1].filter((v, i, a) => a.indexOf(v) === i);
  const maxIdx = data.indexOf(data.reduce((a, b) => a.kg >= b.kg ? a : b));
  const minIdx = data.indexOf(data.reduce((a, b) => a.kg <= b.kg ? a : b));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
      {yTicks.map((y, i) => (
        <g key={i}>
          <line x1={PL} y1={toY(y)} x2={PL + gW} y2={toY(y)} stroke="#F0E8DC" strokeWidth="1" />
          <text x={PL - 6} y={toY(y) + 4} textAnchor="end" fontSize="9" fill="#9A7A5C">{y.toFixed(2)}</text>
        </g>
      ))}
      <path d={fillPath} fill="#C49A6C22" />
      <polyline points={points} fill="none" stroke="#C49A6C" strokeWidth="2" strokeLinejoin="round" />
      <circle cx={toX(maxIdx)} cy={toY(data[maxIdx].kg)} r="5" fill="#EF4444" />
      <text x={toX(maxIdx)} y={toY(data[maxIdx].kg) - 8} textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="bold">▲{data[maxIdx].kg.toFixed(2)}</text>
      <circle cx={toX(minIdx)} cy={toY(data[minIdx].kg)} r="5" fill="#3B82F6" />
      <text x={toX(minIdx)} y={toY(data[minIdx].kg) + 16} textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="bold">▼{data[minIdx].kg.toFixed(2)}</text>
      <circle cx={toX(data.length - 1)} cy={toY(data[data.length - 1].kg)} r="4" fill="#C49A6C" stroke="#FFF" strokeWidth="2" />
      {xLabels.map(i => (
        <text key={i} x={toX(i)} y={H - 4} textAnchor="middle" fontSize="9" fill="#9A7A5C">{data[i].date.slice(5)}</text>
      ))}
      <line x1={PL} y1={PT} x2={PL} y2={PT + gH} stroke="#E8D5BC" strokeWidth="1" />
      <line x1={PL} y1={PT + gH} x2={PL + gW} y2={PT + gH} stroke="#E8D5BC" strokeWidth="1" />
    </svg>
  );
}

// ============================================================
// ★ タイムラインビュー（全ペット横断・時系列）
// ============================================================
function TimelineView({ pets, records }: { pets: Pet[]; records: HealthRecord[] }) {
  const [period, setPeriod] = useState<"today" | "week" | "month" | "all">("week");

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const weekAgo = new Date(now); weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(now); monthAgo.setMonth(monthAgo.getMonth() - 1);

  const filtered = records
    .filter(r => {
      if (period === "today") return r.date === todayStr;
      if (period === "week") return r.date >= weekAgo.toISOString().slice(0, 10);
      if (period === "month") return r.date >= monthAgo.toISOString().slice(0, 10);
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  // 日付ごとにグループ化
  const grouped: Record<string, HealthRecord[]> = {};
  filtered.forEach(r => {
    if (!grouped[r.date]) grouped[r.date] = [];
    grouped[r.date].push(r);
  });
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  const periodLabels = [
    { key: "today", label: "今日" },
    { key: "week", label: "今週" },
    { key: "month", label: "今月" },
    { key: "all", label: "全期間" },
  ] as const;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {periodLabels.map(({ key, label }) => (
          <button key={key} onClick={() => setPeriod(key)}
            style={{ background: period === key ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, color: period === key ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
            {label}
          </button>
        ))}
      </div>

      {dates.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0", color: "#9A7A5C" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>📭</div>
          <div>この期間の記録はありません</div>
        </div>
      ) : dates.map(date => {
        const recs = grouped[date];
        const isToday = date === todayStr;
        const yesterday = new Date(now); yesterday.setDate(yesterday.getDate() - 1);
        const isYesterday = date === yesterday.toISOString().slice(0, 10);
        const dateLabel = isToday ? "今日" : isYesterday ? "昨日" : date;

        return (
          <div key={date} style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: isToday ? "#C49A6C" : "#7A5C3A",
                background: isToday ? "#FFF0DC" : "#F0E8DC", borderRadius: 20, padding: "3px 10px" }}>
                {dateLabel}
              </div>
              <div style={{ flex: 1, height: 1, background: "#F0E8DC" }} />
            </div>
            {recs.map(r => {
              const pet = pets.find(p => p.id === r.petId);
              return (
                <div key={r.id} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, background: "#FFFBF7", borderRadius: 12, padding: "10px 14px", border: "1px solid #F0E8DC" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{CATEGORY_ICONS[r.category]}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#3D2B1A" }}>{r.title}</span>
                      {pet && (
                        <span style={{ fontSize: 11, background: (pet.color || "#C49A6C") + "33", color: "#5C3A1E", borderRadius: 10, padding: "1px 7px", fontWeight: 600 }}>
                          {pet.icon} {pet.name}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: "#9A7A5C", marginTop: 2 }}>
                      {r.category}
                      {r.weight && ` · ⚖️ ${r.weight}kg`}
                      {r.cost && ` · 💰 ¥${Number(r.cost).toLocaleString()}`}
                    </div>
                    {r.description && (
                      <div style={{ fontSize: 12, color: "#7A5C3A", marginTop: 3, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {r.description.length > 60 ? r.description.slice(0, 60) + "…" : r.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// ★ 統計ビュー（ペット別・年間サマリー）
// ============================================================
function StatsView({ pets, records }: { pets: Pet[]; records: HealthRecord[] }) {
  const [selectedPetId, setSelectedPetId] = useState<number | "all">("all");
  const [year, setYear] = useState(new Date().getFullYear());

  const years = Array.from(new Set(records.map(r => Number(r.date.slice(0, 4))))).sort((a, b) => b - a);
  const allYears = years.length > 0 ? years : [year];

  const targetRecords = records.filter(r => {
    const matchPet = selectedPetId === "all" || r.petId === selectedPetId;
    const matchYear = Number(r.date.slice(0, 4)) === year;
    return matchPet && matchYear;
  });

  const stats = {
    total: targetRecords.length,
    hospital: targetRecords.filter(r => r.category === "病院").length,
    vaccine: targetRecords.filter(r => r.category === "ワクチン").length,
    medicine: targetRecords.filter(r => r.category === "薬").length,
    weight: targetRecords.filter(r => r.category === "体重" && r.weight).length,
    food: targetRecords.filter(r => r.category === "フード").length,
    diary: targetRecords.filter(r => r.category === "日記・その他").length,
    totalCost: targetRecords.reduce((s, r) => s + (parseFloat(r.cost || "0") || 0), 0),
  };

  // 体重の最新/平均
  const weightData = targetRecords
    .filter(r => r.category === "体重" && r.weight)
    .map(r => parseFloat(r.weight!))
    .filter(n => !isNaN(n));
  const avgWeight = weightData.length > 0
    ? (weightData.reduce((s, n) => s + n, 0) / weightData.length).toFixed(2)
    : null;

  const statItems = [
    { icon: "🏥", label: "病院", value: stats.hospital, unit: "回", color: "#EF4444" },
    { icon: "💉", label: "ワクチン", value: stats.vaccine, unit: "回", color: "#8B5CF6" },
    { icon: "💊", label: "薬", value: stats.medicine, unit: "回", color: "#3B82F6" },
    { icon: "⚖️", label: "体重記録", value: stats.weight, unit: "回", color: "#10B981" },
    { icon: "🍖", label: "フード", value: stats.food, unit: "回", color: "#F59E0B" },
    { icon: "📝", label: "日記", value: stats.diary, unit: "件", color: "#6B7280" },
  ];

  return (
    <div>
      {/* ペット選択 */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <button onClick={() => setSelectedPetId("all")}
          style={{ background: selectedPetId === "all" ? "#3D2B1A" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, color: selectedPetId === "all" ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
          全員
        </button>
        {pets.map(pet => (
          <button key={pet.id} onClick={() => setSelectedPetId(pet.id)}
            style={{ background: selectedPetId === pet.id ? (pet.color || "#C49A6C") : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, color: selectedPetId === pet.id ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
            {pet.icon} {pet.name}
          </button>
        ))}
      </div>

      {/* 年選択 */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {allYears.map(y => (
          <button key={y} onClick={() => setYear(y)}
            style={{ background: y === year ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, color: y === year ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
            {y}年
          </button>
        ))}
      </div>

      {/* 合計カード */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        <div style={{ background: "linear-gradient(135deg, #FFF5E9, #FFE8CC)", borderRadius: 14, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "#9A7A5C", fontWeight: 600, marginBottom: 4 }}>総記録数</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#3D2B1A" }}>{stats.total}<span style={{ fontSize: 13, fontWeight: 400 }}>件</span></div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #FFF5E9, #FFE8CC)", borderRadius: 14, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "#9A7A5C", fontWeight: 600, marginBottom: 4 }}>総支出</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#3D2B1A" }}>¥{stats.totalCost.toLocaleString()}</div>
        </div>
        {avgWeight && (
          <div style={{ background: "#F0FDF4", borderRadius: 14, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "#9A7A5C", fontWeight: 600, marginBottom: 4 }}>平均体重</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#3D2B1A" }}>{avgWeight}<span style={{ fontSize: 13, fontWeight: 400 }}>kg</span></div>
          </div>
        )}
      </div>

      {/* カテゴリ別 */}
      <div style={{ fontSize: 12, fontWeight: 700, color: "#9A7A5C", marginBottom: 10, paddingLeft: 2 }}>カテゴリ別</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {statItems.map(item => (
          <div key={item.label} style={{ background: "#FFF", borderRadius: 12, padding: "12px 10px", textAlign: "center", border: "1px solid #F0E8DC" }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
            <div style={{ fontSize: 11, color: "#9A7A5C", marginBottom: 2 }}>{item.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: item.value > 0 ? item.color : "#D0C0B0" }}>
              {item.value}<span style={{ fontSize: 11, fontWeight: 400, color: "#9A7A5C" }}>{item.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {targetRecords.length === 0 && (
        <div style={{ textAlign: "center", padding: "32px 0", color: "#9A7A5C", marginTop: 12 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📊</div>
          <div>{year}年の記録がありません</div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ★ 支出集計（全ペット合計・ホーム用）
// ============================================================
function CostSummary({ pets, records }: { pets: Pet[]; records: HealthRecord[] }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const years = Array.from(new Set(records.filter(r => r.cost).map(r => Number(r.date.slice(0, 4))))).sort((a, b) => b - a);
  if (!years.includes(year) && years.length > 0) { /* noop */ }
  const allYears = years.length > 0 ? years : [year];

  const costRecords = records.filter(r => r.cost && Number(r.date.slice(0, 4)) === year);
  const total = costRecords.reduce((sum, r) => sum + (parseFloat(r.cost || "0") || 0), 0);

  return (
    <div>
      {/* 年選択 */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {allYears.map(y => (
          <button key={y} onClick={() => setYear(y)}
            style={{ background: y === year ? "#C49A6C" : "#FFF0DC", border: "none", borderRadius: 16, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: y === year ? "#FFF" : "#7A5C3A", cursor: "pointer" }}>
            {y}年
          </button>
        ))}
      </div>

      {/* 合計 */}
      <div style={{ background: "linear-gradient(135deg, #FFF5E9, #FFE8CC)", borderRadius: 16, padding: "16px 20px", marginBottom: 16, textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#9A7A5C", marginBottom: 4 }}>{year}年 合計支出</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#3D2B1A" }}>¥{total.toLocaleString()}</div>
        <div style={{ fontSize: 12, color: "#9A7A5C", marginTop: 4 }}>{costRecords.length}件の記録</div>
      </div>

      {/* ペット別内訳 */}
      {pets.map(pet => {
        const petCosts = costRecords.filter(r => r.petId === pet.id);
        const petTotal = petCosts.reduce((sum, r) => sum + (parseFloat(r.cost || "0") || 0), 0);
        if (petCosts.length === 0) return null;
        return (
          <div key={pet.id} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: pet.color || "#C49A6C" }} />
                <span style={{ fontWeight: 700, fontSize: 14, color: "#3D2B1A" }}>{pet.name}</span>
              </div>
              <span style={{ fontWeight: 700, color: "#C49A6C" }}>¥{petTotal.toLocaleString()}</span>
            </div>
            {/* カテゴリ別 */}
            {(["病院","ワクチン","薬","フード","日記・その他"] as HealthRecord["category"][]).map(cat => {
              const catTotal = petCosts.filter(r => r.category === cat).reduce((s, r) => s + (parseFloat(r.cost||"0")||0), 0);
              if (catTotal === 0) return null;
              return (
                <div key={cat} style={{ display: "flex", justifyContent: "space-between", padding: "5px 12px", fontSize: 13, color: "#5C3A1E" }}>
                  <span>{CATEGORY_ICONS[cat]} {cat}</span>
                  <span>¥{catTotal.toLocaleString()}</span>
                </div>
              );
            })}
          </div>
        );
      })}

      {costRecords.length === 0 && (
        <div style={{ textAlign: "center", padding: "32px 0", color: "#9A7A5C" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>💸</div>
          <div>{year}年の支出記録がありません</div>
          <div style={{ fontSize: 12, marginTop: 4 }}>記録追加時に「費用」を入力すると集計されます</div>
        </div>
      )}
    </div>
  );
}

// ★ 支出カード（ペット詳細用）
function CostCard({ records, petId }: { records: HealthRecord[]; petId: number }) {
  const petRecords = records.filter(r => r.petId === petId && r.cost);
  const year = new Date().getFullYear();
  const thisYear = petRecords.filter(r => Number(r.date.slice(0, 4)) === year);
  const total = thisYear.reduce((s, r) => s + (parseFloat(r.cost||"0")||0), 0);
  const allTime = petRecords.reduce((s, r) => s + (parseFloat(r.cost||"0")||0), 0);

  return (
    <div style={styles.infoCard}>
      <div style={styles.infoLabel}>💰 支出</div>
      {petRecords.length === 0
        ? <div style={styles.infoValue}>—</div>
        : <>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#3D2B1A", margin: "4px 0" }}>¥{total.toLocaleString()}</div>
          <div style={{ fontSize: 11, color: "#9A7A5C" }}>{year}年（{thisYear.length}件）</div>
          <div style={{ fontSize: 11, color: "#BBA08A", marginTop: 3 }}>累計 ¥{allTime.toLocaleString()}</div>
        </>
      }
    </div>
  );
}

// ★ フォトアルバムグリッド
function AlbumGrid({ photos, onPhotoClick }: { photos: PetPhoto[]; onPhotoClick: (p: PetPhoto) => void; }) {
  if (photos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "28px 0", color: "#BBA08A", fontSize: 14 }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>📷</div>
        <div>「＋ 追加」から写真を追加できます</div>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
      {photos.slice().reverse().map(photo => (
        <div key={photo.id} style={{ position: "relative", aspectRatio: "1", borderRadius: 12, overflow: "hidden", cursor: "pointer" }}
          onClick={() => onPhotoClick(photo)}>
          <img src={photo.data} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.5))", padding: "8px 6px 4px", fontSize: 10, color: "#FFF" }}>
            {photo.date}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FDF6EE", fontFamily: "system-ui, 'Hiragino Sans', sans-serif" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "20px 16px 80px" }}>
        {children}
      </div>
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return <button style={styles.backBtn} onClick={onClick}>← 戻る</button>;
}

function IconBtn({ onClick, title, danger, children }: { onClick: () => void; title: string; danger?: boolean; children: React.ReactNode }) {
  return (
    <button title={title} style={{ background: danger ? "#FEE2E2" : "#FFF0DC", border: "none", borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 18 }} onClick={onClick}>
      {children}
    </button>
  );
}

// ★ AI解析結果・エラーの確認モーダル
function AiResultModal({
  aiResult, aiError, onClose, onAppend,
}: {
  aiResult: string | null;
  aiError: string | null;
  onClose: () => void;
  onAppend: (text: string) => void;
}) {
  if (!aiResult && !aiError) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 400, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={onClose}>
      <div style={{ background: "#FFF", borderRadius: 20, padding: 24, width: "100%", maxWidth: 480, maxHeight: "80vh", overflowY: "auto" }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#3D2B1A" }}>
            {aiError ? "⚠️ 解析エラー" : "🤖 AI解析結果"}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9A7A5C" }}>✕</button>
        </div>

        {aiError ? (
          <div style={{ background: "#FFF0F0", borderRadius: 12, padding: "14px 16px", color: "#B91C1C", fontSize: 13, lineHeight: 1.6 }}>
            {aiError === "NO_KEY" ? "Gemini APIキーが設定されていません。「🔑 AI設定」から設定してください。" : aiError}
          </div>
        ) : (
          <>
            <div style={{ background: "#F7F3EC", borderRadius: 12, padding: "14px 16px", fontSize: 13, color: "#3D2B1A", lineHeight: 1.7, whiteSpace: "pre-wrap", marginBottom: 16 }}>
              {aiResult}
            </div>
            <button onClick={() => { onAppend(aiResult!); onClose(); }}
              style={{ width: "100%", background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 12, padding: "13px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              ＋ 詳細メモに追記する
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontWeight: 600, color: "#5C3A1E", marginBottom: 6, fontSize: 14 }}>{label}</label>
      {children}
    </div>
  );
}

function RecordRow({ record, onDelete, onEdit, expanded }: { record: HealthRecord; onDelete: (id: number) => void; onEdit: (record: HealthRecord) => void; expanded?: boolean }) {
  const [open, setOpen] = useState(!!expanded);
  const [showFoodPhoto, setShowFoodPhoto] = useState(false);
  return (
    <div style={styles.recordCard} onClick={() => setOpen(o => !o)}>
      <div style={styles.recordHeader}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ ...styles.catBadge, background: CATEGORY_COLORS[record.category] }}>
            {CATEGORY_ICONS[record.category]}
          </span>
          <div>
            <div style={{ fontWeight: 600, color: "#3D2B1A" }}>{record.title}</div>
            <div style={{ fontSize: 12, color: "#9A7A5C" }}>{record.date}{record.category && ` · ${record.category}`}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {record.foodPhoto && (
            <img src={record.foodPhoto} alt="フード" onClick={e => { e.stopPropagation(); setShowFoodPhoto(true); }}
              style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 8, border: "2px solid #F59E0B", cursor: "pointer" }} />
          )}
          {record.nextDate && <span style={styles.nextDateBadge}>📅 {record.nextDate}</span>}
          <button style={{ ...styles.deleteBtn, opacity: 0.7 }} onClick={e => { e.stopPropagation(); onEdit(record); }}>✏️</button>
          <button style={styles.deleteBtn} onClick={e => { e.stopPropagation(); onDelete(record.id); }}>🗑️</button>
        </div>
      </div>
      {open && (record.description || record.weight || record.foodPhoto) && (
        <div style={styles.recordBody}>
          {record.weight && <div style={{ marginBottom: 4 }}>⚖️ {record.weight} kg</div>}
          {record.foodPhoto && (
            <img src={record.foodPhoto} alt="パッケージ" onClick={e => { e.stopPropagation(); setShowFoodPhoto(true); }}
              style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 10, marginBottom: 8, cursor: "pointer" }} />
          )}
          {record.description && <div style={{ color: "#5C3A1E", whiteSpace: "pre-wrap" }}><AutoLink text={record.description} /></div>}
        </div>
      )}
      {/* フード写真拡大 */}
      {showFoodPhoto && record.foodPhoto && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          onClick={e => { e.stopPropagation(); setShowFoodPhoto(false); }}>
          <img src={record.foodPhoto} alt="" style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 16, objectFit: "contain" }} />
        </div>
      )}
    </div>
  );
}

function EmptyState({ icon, msg }: { icon: string; msg: string }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 20px", color: "#9A7A5C" }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>{icon}</div>
      <div>{msg}</div>
    </div>
  );
}

function Toast({ message }: { message: string }) {
  if (!message) return null;
  return <div style={styles.toast}>{message}</div>;
}

// ============================================================
// Styles
// ============================================================
const styles: Record<string, React.CSSProperties> = {
  header: { textAlign: "center", paddingTop: 32, paddingBottom: 24 },
  logo: { fontSize: 48, marginBottom: 8 },
  title: { margin: 0, fontSize: 28, fontWeight: 700, color: "#3D2B1A" },
  subtitle: { margin: "8px 0 0", color: "#9A7A5C" },
  syncBadge: { display: "inline-block", marginTop: 8, fontSize: 12, color: "#9A7A5C", background: "#F0E8DC", borderRadius: 20, padding: "4px 12px" },
  petGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 },
  petCard: { background: "#FFF", borderRadius: 16, border: "none", padding: "20px 16px", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "transform .15s", textAlign: "center", width: "100%" },
  petCardIcon: { borderRadius: "50%", width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" },
  petCardName: { fontWeight: 700, fontSize: 16, color: "#3D2B1A" },
  petCardSub: { fontSize: 12, color: "#9A7A5C", marginTop: 2 },
  petCardAge: { fontSize: 12, color: "#C49A6C", marginTop: 4 },
  petCardRecords: { fontSize: 11, color: "#BBA08A", marginTop: 6 },
  addPetCard: { background: "#FFF7EE", borderRadius: 16, border: "2px dashed #C49A6C", padding: "20px 16px", cursor: "pointer", textAlign: "center", minHeight: 140, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  petBanner: { borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, marginBottom: 20 },
  infoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 },
  infoCard: { background: "#FFF", borderRadius: 12, padding: "12px 16px" },
  infoLabel: { fontSize: 11, color: "#9A7A5C", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 },
  infoValue: { fontSize: 14, color: "#3D2B1A", fontWeight: 500 },
  notesBox: { background: "#FFFBF0", border: "1px solid #F0D9B0", borderRadius: 12, padding: "12px 16px", marginBottom: 20, color: "#5C3A1E", fontSize: 14 },
  sectionHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, fontWeight: 700, color: "#3D2B1A" },
  linkBtn: { background: "none", border: "none", color: "#C49A6C", cursor: "pointer", fontSize: 14, fontWeight: 600 },
  categoryRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 },
  catChip: { background: "#FFF", border: "none", borderRadius: 10, padding: "8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", minWidth: 60, fontSize: 18 },
  catCount: { fontSize: 11, color: "#FFF", borderRadius: 10, padding: "1px 7px", fontWeight: 700 },
  recordCard: { background: "#FFF", borderRadius: 14, marginBottom: 10, overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", cursor: "pointer" },
  recordHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" },
  catBadge: { width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 },
  nextDateBadge: { fontSize: 11, background: "#FFF0DC", color: "#7A5C3A", borderRadius: 8, padding: "3px 8px" },
  deleteBtn: { background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.6, padding: "4px 6px" },
  recordBody: { padding: "0 16px 14px", fontSize: 14, borderTop: "1px solid #FDF0E4", marginTop: 4, paddingTop: 12 },
  fab: { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)" },
  fabBtn: { background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 30, padding: "14px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
  fabBtnBack: { background: "#FFF", color: "#3D2B1A", border: "none", borderRadius: 30, padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
  form: { background: "#FFF", borderRadius: 16, padding: "24px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  formTitle: { textAlign: "center", color: "#3D2B1A", marginBottom: 24 },
  input: { width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E8D5BC", background: "#FFFBF7", fontSize: 15, color: "#3D2B1A", boxSizing: "border-box" },
  catSelector: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 },
  catOption: { border: "2px solid transparent", borderRadius: 12, padding: "10px 8px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontSize: 20, transition: "all .15s" },
  filterChip: { border: "none", borderRadius: 20, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 },
  primaryBtn: { background: "#C49A6C", color: "#FFF", border: "none", borderRadius: 12, padding: "14px", fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 8 },
  backBtn: { background: "none", border: "none", color: "#C49A6C", cursor: "pointer", fontSize: 15, fontWeight: 600, marginBottom: 16, padding: 0 },
  toast: { position: "fixed", bottom: 80, left: "50%", transform: "translateX(-50%)", background: "#3D2B1A", color: "#FFF", borderRadius: 24, padding: "12px 24px", fontSize: 14, fontWeight: 600, zIndex: 1000, boxShadow: "0 4px 20px rgba(0,0,0,0.3)", whiteSpace: "nowrap" },
};
