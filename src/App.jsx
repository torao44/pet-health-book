import { useState, useEffect } from "react";

// ── パレット & スタイル定数 ──────────────────────────────
const C = {
  cream: "#FDF6EE",
  sand: "#F0E6D3",
  brown: "#8B5E3C",
  brownLight: "#C49A6C",
  brownDark: "#5C3A1E",
  sage: "#7C9E8A",
  sageDark: "#4F7A62",
  blush: "#E8A598",
  sky: "#8BB8D0",
  text: "#3A2A1A",
  textMid: "#7A6050",
  textLight: "#B09070",
  white: "#FFFFFF",
  red: "#D95F5F",
};

const CATEGORIES = [
  { id: "weight", label: "体重・体温", icon: "⚖️", color: C.sage },
  { id: "visit", label: "通院・診察", icon: "🏥", color: C.sky },
  { id: "vaccine", label: "ワクチン", icon: "💉", color: C.blush },
  { id: "medicine", label: "お薬・投薬", icon: "💊", color: C.brownLight },
  { id: "food", label: "食事・食欲", icon: "🍽️", color: C.sageDark },
];

const CAT_COLORS = ["#C49A6C", "#7C9E8A", "#8BB8D0", "#E8A598", "#A48AB0", "#D4A057"];

// ── ローカルストレージ ──────────────────────────────────
const STORAGE_KEY = "pet-health-book-v1";
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
function saveData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

// ── 初期データ ─────────────────────────────────────────
const defaultPets = [
  { id: 1, name: "じゅうべい", species: "猫", breed: "", birthdate: "", color: CAT_COLORS[0], icon: "🐱" },
  { id: 2, name: "ぽんちゃん", species: "猫", breed: "", birthdate: "", color: CAT_COLORS[1], icon: "🐱" },
];

function initState() {
  const saved = loadData();
  if (saved) return saved;
  return {
    pets: defaultPets,
    records: [],
    nextPetId: 3,
    nextRecordId: 1,
  };
}

// ── ユーティリティ ─────────────────────────────────────
function today() {
  return new Date().toISOString().slice(0, 10);
}
function fmtDate(d) {
  if (!d) return "—";
  const [y, m, dd] = d.split("-");
  return `${y}年${m}月${dd}日`;
}
function calcAge(birthdate) {
  if (!birthdate) return null;
  const birth = new Date(birthdate);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  if (months < 0) { years--; months += 12; }
  return years > 0 ? `${years}歳${months}ヶ月` : `${months}ヶ月`;
}

// ── スタイル生成 ──────────────────────────────────────
const s = {
  app: {
    minHeight: "100vh",
    background: C.cream,
    fontFamily: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
    color: C.text,
  },
  header: {
    background: C.brownDark,
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  headerTitle: {
    color: C.cream,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.04em",
    margin: 0,
  },
  container: {
    maxWidth: 680,
    margin: "0 auto",
    padding: "16px 12px 80px",
  },
  // ペットタブ
  petTabs: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
    overflowX: "auto",
    paddingBottom: 4,
  },
  petTab: (active, color) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 24,
    border: `2px solid ${color}`,
    background: active ? color : C.white,
    color: active ? C.white : color,
    fontWeight: active ? 700 : 500,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.15s",
    flexShrink: 0,
  }),
  addPetBtn: {
    padding: "8px 14px",
    borderRadius: 24,
    border: `2px dashed ${C.brownLight}`,
    background: "transparent",
    color: C.brownLight,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  // カード
  card: {
    background: C.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: "0 2px 8px rgba(90,50,20,0.08)",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: C.brownDark,
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  // ペットプロフィール
  petProfile: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 16,
  },
  petAvatar: (color) => ({
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    flexShrink: 0,
    boxShadow: `0 2px 8px ${color}66`,
  }),
  // カテゴリーボタン
  catGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: 10,
    marginBottom: 16,
  },
  catBtn: (active, color) => ({
    padding: "10px 8px",
    borderRadius: 12,
    border: `2px solid ${color}`,
    background: active ? color : C.cream,
    color: active ? C.white : C.brownDark,
    cursor: "pointer",
    textAlign: "center",
    fontSize: 13,
    fontWeight: active ? 700 : 500,
    transition: "all 0.15s",
  }),
  // フォーム
  formGroup: { marginBottom: 12 },
  label: { display: "block", fontSize: 13, color: C.textMid, marginBottom: 4, fontWeight: 600 },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: `1.5px solid ${C.sand}`,
    borderRadius: 10,
    fontSize: 15,
    background: C.cream,
    color: C.text,
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    border: `1.5px solid ${C.sand}`,
    borderRadius: 10,
    fontSize: 15,
    background: C.cream,
    color: C.text,
    boxSizing: "border-box",
    outline: "none",
    minHeight: 80,
    resize: "vertical",
  },
  btnPrimary: (color) => ({
    padding: "12px 24px",
    borderRadius: 12,
    border: "none",
    background: color || C.brownDark,
    color: C.white,
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    marginTop: 4,
  }),
  btnSecondary: {
    padding: "10px 20px",
    borderRadius: 12,
    border: `2px solid ${C.sand}`,
    background: C.white,
    color: C.textMid,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  // 記録リスト
  recordItem: (catColor) => ({
    borderLeft: `4px solid ${catColor}`,
    padding: "12px 14px",
    marginBottom: 10,
    background: C.cream,
    borderRadius: "0 12px 12px 0",
    position: "relative",
  }),
  recordDate: { fontSize: 12, color: C.textLight, marginBottom: 4 },
  recordBody: { fontSize: 14, color: C.text, lineHeight: 1.6 },
  deleteBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    background: "none",
    border: "none",
    color: C.textLight,
    cursor: "pointer",
    fontSize: 16,
    padding: "2px 6px",
    borderRadius: 6,
  },
  // ナビ
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: C.white,
    borderTop: `1px solid ${C.sand}`,
    display: "flex",
    justifyContent: "space-around",
    padding: "8px 0 12px",
    zIndex: 100,
    boxShadow: "0 -2px 8px rgba(90,50,20,0.08)",
  },
  navBtn: (active) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: "4px 16px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: active ? C.brownDark : C.textLight,
    fontSize: 20,
  }),
  navLabel: (active) => ({
    fontSize: 10,
    fontWeight: active ? 700 : 400,
    color: active ? C.brownDark : C.textLight,
  }),
  // バッジ
  badge: (color) => ({
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 10,
    background: color + "33",
    color: color,
    fontSize: 12,
    fontWeight: 700,
    marginRight: 4,
  }),
  emptyMsg: {
    textAlign: "center",
    color: C.textLight,
    padding: "32px 0",
    fontSize: 14,
  },
  // モーダル
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 200,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modal: {
    background: C.white,
    borderRadius: "20px 20px 0 0",
    width: "100%",
    maxWidth: 680,
    padding: 24,
    maxHeight: "80vh",
    overflowY: "auto",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: C.brownDark,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
};

// ── フォームフィールド定義 ─────────────────────────────
const FORM_FIELDS = {
  weight: [
    { key: "weight", label: "体重 (kg)", type: "text", placeholder: "例: 4.2" },
    { key: "temp", label: "体温 (℃)", type: "text", placeholder: "例: 38.5" },
    { key: "note", label: "メモ", type: "textarea", placeholder: "様子など..." },
  ],
  visit: [
    { key: "clinic", label: "病院名", type: "text", placeholder: "例: ○○動物病院" },
    { key: "reason", label: "受診理由", type: "text", placeholder: "例: 定期検診" },
    { key: "result", label: "診察結果", type: "textarea", placeholder: "診断内容・指示など..." },
    { key: "cost", label: "費用 (円)", type: "text", placeholder: "例: 3500" },
    { key: "next", label: "次回予定", type: "date" },
  ],
  vaccine: [
    { key: "vaccineName", label: "ワクチン名", type: "text", placeholder: "例: 混合ワクチン5種" },
    { key: "clinic", label: "接種場所", type: "text", placeholder: "例: ○○動物病院" },
    { key: "nextDue", label: "次回接種予定日", type: "date" },
    { key: "note", label: "メモ", type: "textarea", placeholder: "副反応など..." },
  ],
  medicine: [
    { key: "medicineName", label: "薬品名", type: "text", placeholder: "例: ビオフェルミン" },
    { key: "dosage", label: "用量・用法", type: "text", placeholder: "例: 1日2回 0.5錠" },
    { key: "period", label: "投薬期間", type: "text", placeholder: "例: 7日間" },
    { key: "note", label: "メモ", type: "textarea", placeholder: "注意事項など..." },
  ],
  food: [
    { key: "appetite", label: "食欲", type: "select", options: ["普通", "良好", "少なめ", "食べず"] },
    { key: "foodName", label: "フード名", type: "text", placeholder: "例: ロイヤルカナン" },
    { key: "amount", label: "食事量", type: "text", placeholder: "例: 50g × 2回" },
    { key: "note", label: "メモ", type: "textarea", placeholder: "様子など..." },
  ],
};

function summarizeRecord(cat, data) {
  switch (cat.id) {
    case "weight": {
      const parts = [];
      if (data.weight) parts.push(`体重 ${data.weight}kg`);
      if (data.temp) parts.push(`体温 ${data.temp}℃`);
      if (data.note) parts.push(data.note);
      return parts.join("　");
    }
    case "visit": {
      const parts = [];
      if (data.clinic) parts.push(data.clinic);
      if (data.reason) parts.push(data.reason);
      if (data.result) parts.push(data.result);
      if (data.cost) parts.push(`¥${data.cost}`);
      if (data.next) parts.push(`次回: ${fmtDate(data.next)}`);
      return parts.join("　");
    }
    case "vaccine": {
      const parts = [];
      if (data.vaccineName) parts.push(data.vaccineName);
      if (data.clinic) parts.push(data.clinic);
      if (data.nextDue) parts.push(`次回: ${fmtDate(data.nextDue)}`);
      if (data.note) parts.push(data.note);
      return parts.join("　");
    }
    case "medicine": {
      const parts = [];
      if (data.medicineName) parts.push(data.medicineName);
      if (data.dosage) parts.push(data.dosage);
      if (data.period) parts.push(data.period);
      if (data.note) parts.push(data.note);
      return parts.join("　");
    }
    case "food": {
      const parts = [];
      if (data.appetite) parts.push(`食欲: ${data.appetite}`);
      if (data.foodName) parts.push(data.foodName);
      if (data.amount) parts.push(data.amount);
      if (data.note) parts.push(data.note);
      return parts.join("　");
    }
    default: return "";
  }
}

// ── メインアプリ ──────────────────────────────────────
export default function App() {
  const [state, setState] = useState(initState);
  const [tab, setTab] = useState("home"); // home | records | add
  const [activePetId, setActivePetId] = useState(state.pets[0]?.id || null);
  const [showAddPet, setShowAddPet] = useState(false);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({});
  const [recordDate, setRecordDate] = useState(today());
  const [newPetData, setNewPetData] = useState({ name: "", species: "猫", breed: "", birthdate: "", icon: "🐱", color: CAT_COLORS[2] });

  // データ保存
  useEffect(() => { saveData(state); }, [state]);

  const activePet = state.pets.find(p => p.id === activePetId);
  const activeCat = CATEGORIES.find(c => c.id === activeCategory);

  // 記録追加
  function addRecord() {
    if (!activePetId) return;
    const newRecord = {
      id: state.nextRecordId,
      petId: activePetId,
      category: activeCategory,
      date: recordDate,
      data: { ...formData },
      summary: summarizeRecord(activeCat, formData),
    };
    setState(s => ({ ...s, records: [newRecord, ...s.records], nextRecordId: s.nextRecordId + 1 }));
    setFormData({});
    setRecordDate(today());
    setShowAddRecord(false);
    setTab("records");
  }

  // 記録削除
  function deleteRecord(id) {
    setState(s => ({ ...s, records: s.records.filter(r => r.id !== id) }));
  }

  // ペット追加
  function addPet() {
    if (!newPetData.name.trim()) return;
    const pet = { ...newPetData, id: state.nextPetId };
    setState(s => ({ ...s, pets: [...s.pets, pet], nextPetId: s.nextPetId + 1 }));
    setActivePetId(pet.id);
    setNewPetData({ name: "", species: "猫", breed: "", birthdate: "", icon: "🐱", color: CAT_COLORS[state.pets.length % CAT_COLORS.length] });
    setShowAddPet(false);
  }

  // ペット記録フィルター
  const petRecords = state.records.filter(r =>
    r.petId === activePetId && (filterCategory === "all" || r.category === filterCategory)
  );

  // 最新記録（ホーム用）
  const recentRecords = state.records.filter(r => r.petId === activePetId).slice(0, 5);

  // 次回予定（ワクチン・通院）
  const upcoming = state.records.filter(r => {
    if (r.petId !== activePetId) return false;
    const next = r.data.nextDue || r.data.next;
    return next && next >= today();
  }).sort((a, b) => {
    const da = a.data.nextDue || a.data.next;
    const db = b.data.nextDue || b.data.next;
    return da.localeCompare(db);
  }).slice(0, 3);

  return (
    <div style={s.app}>
      {/* ヘッダー */}
      <header style={s.header}>
        <h1 style={s.headerTitle}>🐾 ペット健康手帳</h1>
        <button
          style={{ background: C.brownLight, border: "none", color: C.white, borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          onClick={() => { setShowAddRecord(true); setTab("add"); }}
        >＋ 記録する</button>
      </header>

      <div style={s.container}>
        {/* ペットタブ */}
        <div style={s.petTabs}>
          {state.pets.map(pet => (
            <button
              key={pet.id}
              style={s.petTab(activePetId === pet.id, pet.color)}
              onClick={() => setActivePetId(pet.id)}
            >
              <span>{pet.icon}</span>
              <span>{pet.name}</span>
            </button>
          ))}
          <button style={s.addPetBtn} onClick={() => setShowAddPet(true)}>＋ 追加</button>
        </div>

        {/* ホーム */}
        {tab === "home" && activePet && (
          <>
            {/* プロフィール */}
            <div style={s.card}>
              <div style={s.petProfile}>
                <div style={s.petAvatar(activePet.color)}>{activePet.icon}</div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: C.brownDark }}>{activePet.name}</div>
                  <div style={{ fontSize: 13, color: C.textMid, marginTop: 2 }}>
                    {activePet.species}{activePet.breed ? ` / ${activePet.breed}` : ""}
                    {activePet.birthdate ? ` / ${calcAge(activePet.birthdate)}` : ""}
                  </div>
                  {activePet.birthdate && (
                    <div style={{ fontSize: 12, color: C.textLight }}>{fmtDate(activePet.birthdate)} 生まれ</div>
                  )}
                </div>
              </div>
              {/* 記録サマリー */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
                {CATEGORIES.map(cat => {
                  const count = state.records.filter(r => r.petId === activePetId && r.category === cat.id).length;
                  return (
                    <div key={cat.id} style={{ textAlign: "center", padding: "8px 4px", background: C.cream, borderRadius: 10 }}>
                      <div style={{ fontSize: 18 }}>{cat.icon}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: cat.color }}>{count}</div>
                      <div style={{ fontSize: 10, color: C.textLight }}>件</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 次回予定 */}
            {upcoming.length > 0 && (
              <div style={s.card}>
                <div style={s.cardTitle}>📅 次回予定</div>
                {upcoming.map(r => {
                  const cat = CATEGORIES.find(c => c.id === r.category);
                  const d = r.data.nextDue || r.data.next;
                  return (
                    <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 20 }}>{cat.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: C.brownDark }}>{fmtDate(d)}</div>
                        <div style={{ fontSize: 12, color: C.textMid }}>{cat.label} {r.data.vaccineName || r.data.reason || ""}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 最近の記録 */}
            <div style={s.card}>
              <div style={{ ...s.cardTitle, justifyContent: "space-between" }}>
                <span>📋 最近の記録</span>
                <button style={{ ...s.btnSecondary, padding: "4px 12px", fontSize: 12 }} onClick={() => setTab("records")}>すべて見る</button>
              </div>
              {recentRecords.length === 0
                ? <div style={s.emptyMsg}>まだ記録がありません<br />右上の「＋ 記録する」から始めましょう</div>
                : recentRecords.map(r => {
                    const cat = CATEGORIES.find(c => c.id === r.category);
                    return (
                      <div key={r.id} style={s.recordItem(cat.color)}>
                        <div style={s.recordDate}>{fmtDate(r.date)}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                          <span style={s.badge(cat.color)}>{cat.icon} {cat.label}</span>
                        </div>
                        <div style={s.recordBody}>{r.summary || "（メモなし）"}</div>
                      </div>
                    );
                  })
              }
            </div>
          </>
        )}

        {/* 記録一覧 */}
        {tab === "records" && activePet && (
          <>
            <div style={s.card}>
              <div style={s.cardTitle}>📋 記録一覧 — {activePet.name}</div>
              {/* カテゴリーフィルター */}
              <div style={{ display: "flex", gap: 6, marginBottom: 14, overflowX: "auto", paddingBottom: 4 }}>
                <button
                  style={{ ...s.petTab(filterCategory === "all", C.brownDark), fontSize: 12, padding: "6px 12px" }}
                  onClick={() => setFilterCategory("all")}
                >すべて</button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    style={{ ...s.petTab(filterCategory === cat.id, cat.color), fontSize: 12, padding: "6px 12px" }}
                    onClick={() => setFilterCategory(cat.id)}
                  >{cat.icon} {cat.label}</button>
                ))}
              </div>
              {petRecords.length === 0
                ? <div style={s.emptyMsg}>該当する記録がありません</div>
                : petRecords.map(r => {
                    const cat = CATEGORIES.find(c => c.id === r.category);
                    return (
                      <div key={r.id} style={s.recordItem(cat.color)}>
                        <button style={s.deleteBtn} onClick={() => deleteRecord(r.id)} title="削除">×</button>
                        <div style={s.recordDate}>{fmtDate(r.date)}</div>
                        <span style={s.badge(cat.color)}>{cat.icon} {cat.label}</span>
                        <div style={{ ...s.recordBody, marginTop: 6 }}>{r.summary || "（メモなし）"}</div>
                        {/* 詳細展開 */}
                        {Object.entries(r.data).map(([k, v]) => v ? (
                          <div key={k} style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>
                            <span style={{ color: C.textLight }}>{FORM_FIELDS[r.category]?.find(f => f.key === k)?.label || k}:</span> {v}
                          </div>
                        ) : null)}
                      </div>
                    );
                  })
              }
            </div>
          </>
        )}
      </div>

      {/* ボトムナビ */}
      <nav style={s.bottomNav}>
        {[
          { id: "home", icon: "🏠", label: "ホーム" },
          { id: "records", icon: "📋", label: "記録一覧" },
        ].map(n => (
          <button key={n.id} style={s.navBtn(tab === n.id)} onClick={() => setTab(n.id)}>
            <span>{n.icon}</span>
            <span style={s.navLabel(tab === n.id)}>{n.label}</span>
          </button>
        ))}
        <button
          style={s.navBtn(false)}
          onClick={() => { setShowAddRecord(true); }}
        >
          <span style={{ fontSize: 28, lineHeight: 1 }}>⊕</span>
          <span style={s.navLabel(false)}>記録する</span>
        </button>
      </nav>

      {/* 記録追加モーダル */}
      {showAddRecord && (
        <div style={s.overlay} onClick={() => setShowAddRecord(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <div style={s.modalTitle}>
              ✏️ {activePet?.name} の記録を追加
            </div>
            {/* カテゴリー選択 */}
            <div style={{ marginBottom: 16 }}>
              <div style={s.label}>カテゴリー</div>
              <div style={s.catGrid}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    style={s.catBtn(activeCategory === cat.id, cat.color)}
                    onClick={() => { setActiveCategory(cat.id); setFormData({}); }}
                  >
                    <div style={{ fontSize: 20, marginBottom: 2 }}>{cat.icon}</div>
                    <div>{cat.label}</div>
                  </button>
                ))}
              </div>
            </div>
            {/* 日付 */}
            <div style={s.formGroup}>
              <label style={s.label}>日付</label>
              <input style={s.input} type="date" value={recordDate} onChange={e => setRecordDate(e.target.value)} />
            </div>
            {/* フィールド */}
            {(FORM_FIELDS[activeCategory] || []).map(field => (
              <div key={field.key} style={s.formGroup}>
                <label style={s.label}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    style={s.textarea}
                    placeholder={field.placeholder}
                    value={formData[field.key] || ""}
                    onChange={e => setFormData(f => ({ ...f, [field.key]: e.target.value }))}
                  />
                ) : field.type === "select" ? (
                  <select
                    style={s.input}
                    value={formData[field.key] || ""}
                    onChange={e => setFormData(f => ({ ...f, [field.key]: e.target.value }))}
                  >
                    <option value="">選択してください</option>
                    {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : (
                  <input
                    style={s.input}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key] || ""}
                    onChange={e => setFormData(f => ({ ...f, [field.key]: e.target.value }))}
                  />
                )}
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button style={s.btnSecondary} onClick={() => setShowAddRecord(false)}>キャンセル</button>
              <button style={{ ...s.btnPrimary(activeCat?.color), flex: 1, marginTop: 0 }} onClick={addRecord}>保存する</button>
            </div>
          </div>
        </div>
      )}

      {/* ペット追加モーダル */}
      {showAddPet && (
        <div style={s.overlay} onClick={() => setShowAddPet(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <div style={s.modalTitle}>🐾 ペットを追加</div>
            {/* アイコン選択 */}
            <div style={s.formGroup}>
              <div style={s.label}>アイコン</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["🐱","🐶","🐰","🐹","🐦","🐠","🐍","🐢"].map(ic => (
                  <button key={ic} style={{
                    fontSize: 28, background: newPetData.icon === ic ? C.sand : "none",
                    border: `2px solid ${newPetData.icon === ic ? C.brownLight : C.sand}`,
                    borderRadius: 10, padding: "6px 10px", cursor: "pointer"
                  }} onClick={() => setNewPetData(d => ({ ...d, icon: ic }))}>{ic}</button>
                ))}
              </div>
            </div>
            {/* カラー */}
            <div style={s.formGroup}>
              <div style={s.label}>カラー</div>
              <div style={{ display: "flex", gap: 8 }}>
                {CAT_COLORS.map(col => (
                  <button key={col} style={{
                    width: 32, height: 32, borderRadius: "50%", background: col, border: `3px solid ${newPetData.color === col ? C.brownDark : "transparent"}`, cursor: "pointer"
                  }} onClick={() => setNewPetData(d => ({ ...d, color: col }))} />
                ))}
              </div>
            </div>
            {[
              { key: "name", label: "名前 *", placeholder: "例: たろう" },
              { key: "species", label: "種類", placeholder: "例: 猫, 犬" },
              { key: "breed", label: "品種", placeholder: "例: ロシアンブルー" },
            ].map(f => (
              <div key={f.key} style={s.formGroup}>
                <label style={s.label}>{f.label}</label>
                <input style={s.input} placeholder={f.placeholder} value={newPetData[f.key]}
                  onChange={e => setNewPetData(d => ({ ...d, [f.key]: e.target.value }))} />
              </div>
            ))}
            <div style={s.formGroup}>
              <label style={s.label}>誕生日</label>
              <input style={s.input} type="date" value={newPetData.birthdate}
                onChange={e => setNewPetData(d => ({ ...d, birthdate: e.target.value }))} />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button style={s.btnSecondary} onClick={() => setShowAddPet(false)}>キャンセル</button>
              <button style={{ ...s.btnPrimary(C.brownDark), flex: 1, marginTop: 0 }} onClick={addPet}>追加する</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
