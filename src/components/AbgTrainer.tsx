import { useMemo, useState } from "react";

type AbgCase = {
  id: string;
  stem: string;
  ph: number;
  pco2: number;
  hco3: number;
  na?: number;
  cl?: number;
  alb?: number; // g/dL
  expected?: string; // short official read
};

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

function winterExpectedPco2(hco3: number) {
  // Expected PaCO2 = 1.5(HCO3) + 8 ± 2
  const center = 1.5 * hco3 + 8;
  return { center, low: center - 2, high: center + 2 };
}

function metabolicAlkExpectedPco2(hco3: number) {
  // Expected PaCO2 ≈ 0.7(HCO3−24) + 40 ± 2
  const center = 0.7 * (hco3 - 24) + 40;
  return { center, low: center - 2, high: center + 2 };
}

function calcAnionGap(na: number, cl: number, hco3: number) {
  return na - (cl + hco3);
}

function correctedAg(ag: number, alb: number) {
  // AGcorr = AG + 2.5(4 - albumin)
  return ag + 2.5 * (4 - alb);
}

function primaryProcess(ph: number, pco2: number, hco3: number) {
  const acidemia = ph < 7.35;
  const alkalemia = ph > 7.45;

  if (!acidemia && !alkalemia) {
    // Near-normal pH: look for mixed or chronic
    if (pco2 > 45 && hco3 > 26) return "Near-normal pH with ↑PaCO₂ and ↑HCO₃: consider chronic respiratory acidosis with metabolic compensation or mixed disorder.";
    if (pco2 < 35 && hco3 < 22) return "Near-normal pH with ↓PaCO₂ and ↓HCO₃: consider chronic respiratory alkalosis with metabolic compensation or mixed disorder.";
    return "Near-normal pH: consider mixed disorder or compensation.";
  }

  // Determine whether metabolic or respiratory is primary by direction
  if (acidemia) {
    if (hco3 < 22) return "Primary metabolic acidosis";
    if (pco2 > 45) return "Primary respiratory acidosis";
    return "Acidemia with unclear primary (consider mixed)";
  } else {
    if (hco3 > 26) return "Primary metabolic alkalosis";
    if (pco2 < 35) return "Primary respiratory alkalosis";
    return "Alkalemia with unclear primary (consider mixed)";
  }
}

function compensationCheck(ph: number, pco2: number, hco3: number) {
  const prim = primaryProcess(ph, pco2, hco3);

  if (prim.startsWith("Primary metabolic acidosis")) {
    const w = winterExpectedPco2(hco3);
    if (pco2 < w.low) return `Compensation: PaCO₂ below Winter range (${round1(w.low)}–${round1(w.high)}) → concurrent respiratory alkalosis.`;
    if (pco2 > w.high) return `Compensation: PaCO₂ above Winter range (${round1(w.low)}–${round1(w.high)}) → concurrent respiratory acidosis.`;
    return `Compensation: Appropriate (Winter ${round1(w.low)}–${round1(w.high)}).`;
  }

  if (prim.startsWith("Primary metabolic alkalosis")) {
    const e = metabolicAlkExpectedPco2(hco3);
    if (pco2 < e.low) return `Compensation: PaCO₂ below expected (${round1(e.low)}–${round1(e.high)}) → concurrent respiratory alkalosis.`;
    if (pco2 > e.high) return `Compensation: PaCO₂ above expected (${round1(e.low)}–${round1(e.high)}) → concurrent respiratory acidosis.`;
    return `Compensation: Appropriate (Expected ${round1(e.low)}–${round1(e.high)}).`;
  }

  // For respiratory disorders: keep board-simple
  if (prim.startsWith("Primary respiratory acidosis")) {
    return "Compensation: check acute vs chronic using HCO₃ rise (acute ~+1 per +10 PaCO₂; chronic ~+3–4 per +10).";
  }
  if (prim.startsWith("Primary respiratory alkalosis")) {
    return "Compensation: check acute vs chronic using HCO₃ drop (acute ~−2 per −10 PaCO₂; chronic ~−4–5 per −10).";
  }

  return "Compensation: evaluate mixed disorder (use full clinical context).";
}

const DRILLS: AbgCase[] = [
  { id: "d1", stem: "Shock/sepsis scenario", ph: 7.28, pco2: 28, hco3: 12, na: 140, cl: 102, alb: 3.0, expected: "Metabolic acidosis; appropriate respiratory compensation (Winter). Likely lactic acidosis." },
  { id: "d2", stem: "Vomiting/NG suction", ph: 7.52, pco2: 48, hco3: 38, expected: "Metabolic alkalosis with appropriate respiratory compensation." },
  { id: "d3", stem: "Opioid hypoventilation", ph: 7.30, pco2: 60, hco3: 29, expected: "Respiratory acidosis with partial metabolic compensation." },
  { id: "d4", stem: "Early sepsis/pain", ph: 7.48, pco2: 30, hco3: 22, expected: "Primary respiratory alkalosis." },
  { id: "d5", stem: "Large volume normal saline", ph: 7.33, pco2: 35, hco3: 18, na: 140, cl: 116, alb: 4.0, expected: "Non–anion gap (hyperchloremic) metabolic acidosis." },
  { id: "d6", stem: "Normal ABG", ph: 7.40, pco2: 40, hco3: 24, expected: "Normal." },
  { id: "d7", stem: "Severe AG acidosis", ph: 7.10, pco2: 20, hco3: 6, na: 140, cl: 100, alb: 3.5, expected: "Severe high anion gap metabolic acidosis (emergency)." },
  { id: "d8", stem: "Chronic CO2 retainer", ph: 7.38, pco2: 60, hco3: 35, expected: "Chronic respiratory acidosis with metabolic compensation." },
  { id: "d9", stem: "Mixed disorder clue", ph: 7.25, pco2: 50, hco3: 22, expected: "Acidemia: respiratory acidosis + possible metabolic component (evaluate clinically)." },
  { id: "d10", stem: "Severe metabolic alkalosis", ph: 7.60, pco2: 50, hco3: 49, expected: "Severe metabolic alkalosis (diuretics/gastric losses)." },
];

export default function AbgTrainer() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"guide" | "calc" | "drill">("guide");

  // Calculator inputs
  const [ph, setPh] = useState("7.28");
  const [pco2, setPco2] = useState("28");
  const [hco3, setHco3] = useState("12");
  const [na, setNa] = useState("140");
  const [cl, setCl] = useState("102");
  const [alb, setAlb] = useState("4.0");

  // Drill state
  const [drillIndex, setDrillIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  const n_ph = Number(ph);
  const n_pco2 = Number(pco2);
  const n_hco3 = Number(hco3);
  const n_na = Number(na);
  const n_cl = Number(cl);
  const n_alb = Number(alb);

  const prim = useMemo(() => primaryProcess(n_ph, n_pco2, n_hco3), [n_ph, n_pco2, n_hco3]);
  const comp = useMemo(() => compensationCheck(n_ph, n_pco2, n_hco3), [n_ph, n_pco2, n_hco3]);

  const ag = useMemo(() => {
    if (!Number.isFinite(n_na) || !Number.isFinite(n_cl) || !Number.isFinite(n_hco3)) return null;
    return calcAnionGap(n_na, n_cl, n_hco3);
  }, [n_na, n_cl, n_hco3]);

  const agCorr = useMemo(() => {
    if (ag == null) return null;
    if (!Number.isFinite(n_alb)) return null;
    return correctedAg(ag, n_alb);
  }, [ag, n_alb]);

  const cur = DRILLS[drillIndex];

  return (
    <div style={{ marginBottom: 12 }}>
      <button className="btn" onClick={() => setOpen(v => !v)}>
        {open ? "Hide ABG Trainer" : "ABG Trainer (Guide • Calculator • Drill)"}
      </button>

      {open ? (
        <div className="card" style={{ marginTop: 10 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
            <button className={mode === "guide" ? "chip chipActive" : "chip"} onClick={() => setMode("guide")}>
              Guide
            </button>
            <button className={mode === "calc" ? "chip chipActive" : "chip"} onClick={() => setMode("calc")}>
              Calculator
            </button>
            <button className={mode === "drill" ? "chip chipActive" : "chip"} onClick={() => setMode("drill")}>
              Drill
            </button>
          </div>

          {mode === "guide" ? (
            <div style={{ lineHeight: 1.65 }}>
              <h3 style={{ marginTop: 0 }}>ABG Board Method (6 Steps)</h3>
              <ol>
                <li><strong>pH</strong>: acidemia (&lt;7.35) vs alkalemia (&gt;7.45)</li>
                <li><strong>Primary</strong>: metabolic (HCO₃) vs respiratory (PaCO₂)</li>
                <li><strong>Compensation</strong> (never overcorrects)</li>
                <li><strong>If metabolic acidosis</strong>: compute <strong>Anion Gap</strong> (AG = Na − (Cl + HCO₃))</li>
                <li><strong>Correct AG for albumin</strong>: AGcorr = AG + 2.5(4 − albumin)</li>
                <li><strong>Delta–delta</strong> for mixed disorders: compare ΔAG and ΔHCO₃</li>
              </ol>

              <div style={{ marginTop: 10 }}>
                <div><strong>Winter’s (metabolic acidosis):</strong> Expected PaCO₂ = 1.5(HCO₃) + 8 ± 2</div>
                <div><strong>Metabolic alkalosis:</strong> Expected PaCO₂ ≈ 0.7(HCO₃−24) + 40 ± 2</div>
              </div>

              <div style={{ marginTop: 10 }}>
                <strong>Common surgical patterns:</strong>
                <ul>
                  <li>Shock/sepsis: high AG metabolic acidosis (lactate)</li>
                  <li>Large NS: hyperchloremic (non-AG) metabolic acidosis</li>
                  <li>Vomiting/NG suction: metabolic alkalosis (chloride-responsive)</li>
                  <li>Pain/early sepsis: respiratory alkalosis</li>
                  <li>Opioids/COPD: respiratory acidosis</li>
                </ul>
              </div>
            </div>
          ) : null}

          {mode === "calc" ? (
            <div>
              <h3 style={{ marginTop: 0 }}>ABG Calculator</h3>

              <div style={{ display: "grid", gap: 8 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <label>pH <input value={ph} onChange={e => setPh(e.target.value)} style={{ width: 90 }} /></label>
                  <label>PaCO₂ <input value={pco2} onChange={e => setPco2(e.target.value)} style={{ width: 90 }} /></label>
                  <label>HCO₃ <input value={hco3} onChange={e => setHco3(e.target.value)} style={{ width: 90 }} /></label>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <label>Na <input value={na} onChange={e => setNa(e.target.value)} style={{ width: 90 }} /></label>
                  <label>Cl <input value={cl} onChange={e => setCl(e.target.value)} style={{ width: 90 }} /></label>
                  <label>Albumin <input value={alb} onChange={e => setAlb(e.target.value)} style={{ width: 90 }} /></label>
                </div>
              </div>

              <div style={{ marginTop: 12, padding: 10, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12 }}>
                <div><strong>Primary:</strong> {prim}</div>
                <div style={{ marginTop: 6 }}><strong>Compensation:</strong> {comp}</div>

                {ag != null ? (
                  <div style={{ marginTop: 10 }}>
                    <div><strong>Anion gap (AG):</strong> {round1(ag)}</div>
                    {agCorr != null ? <div><strong>Corrected AG:</strong> {round1(agCorr)}</div> : null}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {mode === "drill" ? (
            <div>
              <h3 style={{ marginTop: 0 }}>ABG Drill (10 Cases)</h3>

              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <button className="btn" onClick={() => { setDrillIndex(i => Math.max(0, i - 1)); setReveal(false); }} disabled={drillIndex === 0}>
                  ◀ Prev
                </button>
                <div style={{ fontSize: 13, opacity: 0.75 }}>
                  Case {drillIndex + 1} / {DRILLS.length}
                </div>
                <button className="btn" onClick={() => { setDrillIndex(i => Math.min(DRILLS.length - 1, i + 1)); setReveal(false); }} disabled={drillIndex === DRILLS.length - 1}>
                  Next ▶
                </button>
              </div>

              <div style={{ marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12 }}>
                <div style={{ fontWeight: 700 }}>{cur.stem}</div>
                <div style={{ marginTop: 6 }}>
                  pH {cur.ph} / PaCO₂ {cur.pco2} / HCO₃ {cur.hco3}
                  {typeof cur.na === "number" && typeof cur.cl === "number" ? ` / Na ${cur.na} / Cl ${cur.cl}` : ""}
                  {typeof cur.alb === "number" ? ` / Alb ${cur.alb}` : ""}
                </div>

                {!reveal ? (
                  <button className="btn" style={{ marginTop: 10 }} onClick={() => setReveal(true)}>
                    Reveal Interpretation
                  </button>
                ) : (
                  <div style={{ marginTop: 10 }}>
                    <div><strong>Expected:</strong> {cur.expected}</div>
                    <div style={{ marginTop: 6, opacity: 0.9 }}>
                      <strong>Auto-read:</strong>{" "}
                      {primaryProcess(cur.ph, cur.pco2, cur.hco3)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}