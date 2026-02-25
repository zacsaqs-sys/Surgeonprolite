import { useMemo, useState, type CSSProperties } from "react";

type Mode = "chole" | "cholangitis";
type Dx = "Not met" | "Suspected" | "Definite";
type Severity =
  | "Unclear"
  | "Grade I (Mild)"
  | "Grade II (Moderate)"
  | "Grade III (Severe)";

function num(v: string): number | null {
  const s = (v ?? "").trim();
  if (s === "") return null;
  const x = Number(s);
  return Number.isFinite(x) ? x : null;
}

function fmt(n: number | null, dp = 1) {
  if (n === null) return "—";
  return Number.isFinite(n) ? n.toFixed(dp) : "—";
}

export default function TokyoGuidelineTool() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("cholangitis"); // start with cholangitis

  // -------------------------
  // Shared VS/Labs (minimal)
  // -------------------------
  const [tempC, setTempC] = useState("");
  const [hr, setHr] = useState("");
  const [sbp, setSbp] = useState("");
  const [rr, setRr] = useState("");

  const [wbc, setWbc] = useState(""); // accept 18000 or 18
  const [cr, setCr] = useState("");
  const [plt, setPlt] = useState("");
  const [inr, setInr] = useState("");

  // -------------------------
  // CHOLE inputs
  // -------------------------
  const [localSign, setLocalSign] = useState(false); // RUQ pain/Murphy
  const [imagingChole, setImagingChole] = useState(false); // GB wall thick/perichole/stone etc.
  const [symptomsOver72h, setSymptomsOver72h] = useState(false);
  const [ruqMass, setRuqMass] = useState(false);

  // -------------------------
  // CHOLANGITIS inputs (TG-style simplified)
  // -------------------------
  const [painRUQ, setPainRUQ] = useState(false);
  const [jaundice, setJaundice] = useState(false);
  const [alteredSensorium, setAlteredSensorium] = useState(false); // Reynolds
  const [hypotensionClin, setHypotensionClin] = useState(false); // Reynolds / shock hint

  const [tbili, setTbili] = useState(""); // mg/dL
  const [alpOrGgtHigh, setAlpOrGgtHigh] = useState(false); // cholestasis marker toggle
  const [imagingObstruction, setImagingObstruction] = useState(false); // CBD dilation/stone/stricture

  const reset = () => {
    setTempC(""); setHr(""); setSbp(""); setRr("");
    setWbc(""); setCr(""); setPlt(""); setInr("");

    setLocalSign(false); setImagingChole(false); setSymptomsOver72h(false); setRuqMass(false);

    setPainRUQ(false); setJaundice(false); setAlteredSensorium(false); setHypotensionClin(false);
    setTbili(""); setAlpOrGgtHigh(false); setImagingObstruction(false);
  };

  const out = useMemo(() => {
    const T = num(tempC);
    const HR = num(hr);
    const SBP = num(sbp);
    const RR = num(rr);

    const WBC = num(wbc);
    const Cr = num(cr);
    const Plt = num(plt);
    const INR = num(inr);

    const bili = num(tbili);

    // -------------------------
    // Normalize WBC input
    // - if user types 18 (meaning 18 x10^9/L), treat as 18000
    // -------------------------
    const WBCabs =
      WBC === null ? null :
      WBC <= 200 ? WBC * 1000 : WBC;

    // -------------------------
    // Systemic inflammation proxy (Tokyo A)
    // -------------------------
    const fever = T !== null && T >= 38;
    const wbcHigh = WBCabs !== null && WBCabs >= 12000;
    const wbcVeryHigh = WBCabs !== null && WBCabs >= 18000;
    const wbcLow = WBCabs !== null && WBCabs <= 4000;

    const systemic = fever || wbcHigh || wbcLow;

    // -------------------------
    // Organ dysfunction proxy (Tokyo Grade III anchors)
    // -------------------------
    const cv = (SBP !== null && SBP < 90) || hypotensionClin;
    const renal = Cr !== null && Cr > 2.0;
    const heme = Plt !== null && Plt < 100000;
    const hepatic = INR !== null && INR > 1.5;
    const neuro = alteredSensorium;

    const organDysfunction = cv || renal || heme || hepatic || neuro;

    // -------------------------
    // Antibiotic suggestions (adult typical) – keep simple
    // -------------------------
    const abxMild =
      "Ceftriaxone 1–2 g IV q24h + Metronidazole 500 mg IV/PO q8h (alternative: Ampicillin–Sulbactam 3 g IV q6h).";
    const abxModSev =
      "Piperacillin–Tazobactam 4.5 g IV q6–8h (alternative: Ceftriaxone 2 g IV q24h + Metronidazole 500 mg q8h). Consider Carbapenem if ESBL risk.";

    // -------------------------
    // CHOLECYSTITIS (Tokyo)
    // Dx: Suspected = Local + Systemic
    // Definite = Local + Systemic + Imaging
    // Severity: III = organ dysfunction; II = any of: WBC>18k, >72h, RUQ mass
    // -------------------------
    if (mode === "chole") {
      let dx: Dx = "Not met";
      if (localSign && systemic) dx = "Suspected";
      if (localSign && systemic && imagingChole) dx = "Definite";

      const grade2 = wbcVeryHigh || symptomsOver72h || ruqMass;

      let severity: Severity = "Unclear";
      if (dx === "Not met") severity = "Unclear";
      else if (organDysfunction) severity = "Grade III (Severe)";
      else if (grade2) severity = "Grade II (Moderate)";
      else severity = "Grade I (Mild)";

      // Management blocks
      let disposition = "";
      let route = "";
      let procedure = "";
      let abxPlan = "";

      if (dx === "Not met") {
        disposition = "Complete diagnostic criteria (clinical + labs + imaging).";
        route = "Supportive care as needed.";
        procedure = "No Tokyo chole diagnosis yet.";
        abxPlan = "";
      } else if (severity === "Grade I (Mild)") {
        disposition = "Admit to surgical ward.";
        route = "IV antibiotics → oral once improving; analgesia + IV fluids PRN.";
        procedure = "Early laparoscopic cholecystectomy during same admission (preferred).";
        abxPlan = abxMild;
      } else if (severity === "Grade II (Moderate)") {
        disposition = "Admit; close monitoring.";
        route = "IV antibiotics + supportive care; optimize comorbidities.";
        procedure =
          "Early lap chole if expertise/resources available; if poor surgical candidate or unstable → gallbladder drainage (e.g., percutaneous cholecystostomy) then interval chole.";
        abxPlan = abxModSev;
      } else if (severity === "Grade III (Severe)") {
        disposition = "ICU / high-dependency.";
        route = "Sepsis resuscitation + broad IV antibiotics (adjust to renal function/local antibiogram).";
        procedure =
          "Urgent gallbladder drainage (percutaneous cholecystostomy) after stabilization → delayed definitive cholecystectomy.";
        abxPlan = abxModSev;
      }

      const rationale: string[] = [];
      rationale.push(`Local sign (RUQ pain/Murphy): ${localSign ? "Yes" : "No"}.`);
      rationale.push(`Systemic inflammation: ${systemic ? "Yes" : "No"} (Temp≥38 or WBC high/low).`);
      rationale.push(`Imaging supportive: ${imagingChole ? "Yes" : "No"}.`);
      rationale.push(`Dx level: ${dx}.`);

      if (dx !== "Not met") {
        if (organDysfunction) {
          const flags: string[] = [];
          if (cv) flags.push("CV (SBP<90/shock)");
          if (renal) flags.push("Renal (Cr>2)");
          if (heme) flags.push("Heme (Plt<100k)");
          if (hepatic) flags.push("Hepatic (INR>1.5)");
          if (neuro) flags.push("Neuro (AMS)");
          rationale.push(`Severity Grade III because organ dysfunction present: ${flags.join(", ")}.`);
        } else if (grade2) {
          const mods: string[] = [];
          if (wbcVeryHigh) mods.push("WBC>18k");
          if (symptomsOver72h) mods.push("Symptoms>72h");
          if (ruqMass) mods.push("RUQ mass");
          rationale.push(`Severity Grade II because modifiers present: ${mods.join(", ")}.`);
        } else {
          rationale.push("Severity Grade I because definite/suspected without Grade II/III features.");
        }
      }

      const noteParts: string[] = [];
      if (!imagingChole) noteParts.push("If not yet done: RUQ ultrasound is typical first-line imaging.");
      if (dx !== "Not met" && severity !== "Grade I (Mild)") noteParts.push("Early source control is key when moderate/severe.");

      const plan =
        `${disposition} ${route} ${procedure}`;

      const abx = dx === "Not met" ? "" : abxPlan;

      return {
        title: "Acute Cholecystitis (Tokyo)",
        diagnosis: dx === "Not met" ? "Not met" : `${dx} Acute Cholecystitis`,
        severity,
        plan,
        abx,
        note: noteParts.join(" "),
        rationale: rationale.join(" "),
        derived: {
          temp: fmt(T, 1),
          wbc: WBCabs === null ? "—" : `${Math.round(WBCabs)}`,
          sbp: fmt(SBP, 0),
          cr: fmt(Cr, 2),
          plt: fmt(Plt, 0),
          inr: fmt(INR, 2)
        }
      };
    }

    // -------------------------
    // CHOLANGITIS (Tokyo TG-style)
    // A) systemic inflammation
    // B) cholestasis (jaundice or bili≥2 or cholestasis labs)
    // C) imaging obstruction
    // Suspected: A + (B or C)
    // Definite: A + B + C
    //
    // Severity:
    // Grade III: organ dysfunction
    // Grade II: ≥2 modifiers (practical proxy): WBC abnormal OR T≥39 OR bili≥5 OR HR≥120
    // Grade I: dx met without II/III
    // -------------------------
    const cholestasis =
      jaundice ||
      (bili !== null && bili >= 2) ||
      alpOrGgtHigh;

    const imaging = imagingObstruction;

    let dx: Dx = "Not met";
    if (systemic && (cholestasis || imaging)) dx = "Suspected";
    if (systemic && cholestasis && imaging) dx = "Definite";

    const wbcBad = WBCabs !== null && (WBCabs > 12000 || WBCabs < 4000);
    const feverHigh = T !== null && T >= 39;
    const biliHigh = bili !== null && bili >= 5;
    const tachy = HR !== null && HR >= 120;

    const grade2Count = [wbcBad, feverHigh, biliHigh, tachy].filter(Boolean).length;
    const grade2 = grade2Count >= 2;

    let severity: Severity = "Unclear";
    if (dx === "Not met") severity = "Unclear";
    else if (organDysfunction) severity = "Grade III (Severe)";
    else if (grade2) severity = "Grade II (Moderate)";
    else severity = "Grade I (Mild)";

    // Management
    let disposition = "";
    let route = "";
    let procedure = "";
    let abxPlan = "";

    if (dx === "Not met") {
      disposition = "Complete criteria/work-up.";
      route =
        "Need evidence of systemic inflammation + cholestasis and/or imaging obstruction to apply Tokyo cholangitis criteria.";
      procedure = "Consider RUQ US / CT / MRCP depending on availability.";
      abxPlan = "";
    } else if (severity === "Grade I (Mild)") {
      disposition = "Admit.";
      route = "IV antibiotics + supportive care.";
      procedure =
        "Assess for obstruction; ERCP if persistent obstruction or failure to improve on antibiotics.";
      abxPlan = abxMild;
    } else if (severity === "Grade II (Moderate)") {
      disposition = "Admit; close monitoring.";
      route = "IV antibiotics mandatory.";
      procedure =
        "Early biliary drainage (ERCP) within 24–48 hours (earlier if worsening).";
      abxPlan = abxModSev;
    } else if (severity === "Grade III (Severe)") {
      disposition = "ICU / high-dependency.";
      route = "Sepsis resuscitation + broad IV antibiotics.";
      procedure =
        "URGENT biliary drainage (ERCP / PTBD) ASAP after stabilization.";
      abxPlan = abxModSev;
    }

    // Charcot/Reynolds board hints
    const charcot = systemic && painRUQ && jaundice;
    const reynolds = charcot && (alteredSensorium || hypotensionClin || (SBP !== null && SBP < 90));

    const noteParts: string[] = [];
    if (charcot) noteParts.push("Charcot triad likely.");
    if (reynolds) noteParts.push("Reynolds pentad features present → treat as severe until proven otherwise.");
    if (!imaging) noteParts.push("No imaging obstruction selected—consider US/CT/MRCP to confirm CBD dilation/stone.");

    // Rationale (Tokyo style: show A/B/C + severity basis)
    const rationale: string[] = [];
    rationale.push(`A) Systemic inflammation: ${systemic ? "Yes" : "No"} (Temp≥38 or WBC high/low).`);
    rationale.push(`B) Cholestasis: ${cholestasis ? "Yes" : "No"} (jaundice, bili≥2, or cholestasis labs toggle).`);
    rationale.push(`C) Imaging obstruction: ${imaging ? "Yes" : "No"} (CBD dilated/stone/stricture).`);
    if (dx === "Suspected") rationale.push("Dx Suspected because A + (B or C) met.");
    if (dx === "Definite") rationale.push("Dx Definite because A + B + C met.");
    if (dx === "Not met") rationale.push("Dx Not met because required A plus B/C not satisfied.");

    if (dx !== "Not met") {
      if (organDysfunction) {
        const flags: string[] = [];
        if (cv) flags.push("CV (SBP<90/shock)");
        if (renal) flags.push("Renal (Cr>2)");
        if (heme) flags.push("Heme (Plt<100k)");
        if (hepatic) flags.push("Hepatic (INR>1.5)");
        if (neuro) flags.push("Neuro (AMS)");
        rationale.push(`Severity Grade III because organ dysfunction present: ${flags.join(", ")}.`);
      } else if (grade2) {
        const mods: string[] = [];
        if (wbcBad) mods.push("WBC abnormal");
        if (feverHigh) mods.push("Temp≥39");
        if (biliHigh) mods.push("Bili≥5");
        if (tachy) mods.push("HR≥120");
        rationale.push(`Severity Grade II because ≥2 modifiers present: ${mods.join(", ")}.`);
      } else {
        rationale.push("Severity Grade I because Dx met without Grade II/III features.");
      }
    }

    const plan =
      `${disposition} ${route} ${procedure}`;

    const abx = dx === "Not met" ? "" : abxPlan;

    return {
      title: "Acute Cholangitis (Tokyo)",
      diagnosis: dx === "Not met" ? "Not met" : `${dx} Acute Cholangitis`,
      severity,
      plan,
      abx,
      note: noteParts.join(" "),
      rationale: rationale.join(" "),
      derived: {
        temp: fmt(T, 1),
        wbc: WBCabs === null ? "—" : `${Math.round(WBCabs)}`,
        sbp: fmt(SBP, 0),
        tbili: fmt(bili, 1),
        cr: fmt(Cr, 2),
        plt: fmt(Plt, 0),
        inr: fmt(INR, 2)
      }
    };
  }, [
    mode,
    tempC, hr, sbp, rr, wbc, cr, plt, inr,
    localSign, imagingChole, symptomsOver72h, ruqMass,
    painRUQ, jaundice, alteredSensorium, hypotensionClin,
    tbili, alpOrGgtHigh, imagingObstruction
  ]);

  return (
    <div style={{ padding: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid rgba(0,0,0,0.12)",
          background: "#fff",
          cursor: "pointer"
        }}
      >
        <div style={{ fontWeight: 900 }}>Tokyo Guideline Tool</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{open ? "Hide ▲" : "Open ▼"}</div>
      </button>

      {!open ? null : (
        <div style={card}>
          {/* Mode switch */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
            <button type="button" onClick={() => setMode("cholangitis")} style={modeBtn(mode === "cholangitis")}>
              Cholangitis (Jaundice/Obstruction)
            </button>
            <button type="button" onClick={() => setMode("chole")} style={modeBtn(mode === "chole")}>
              Cholecystitis (RUQ pain/Murphy)
            </button>

            <button type="button" onClick={reset} style={btnSm}>
              Reset
            </button>
          </div>

          <div style={{ fontWeight: 900, marginBottom: 6 }}>{out.title}</div>

          {/* Shared VS/Labs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10 }}>
            <Field label="Temp (°C)" value={tempC} setValue={setTempC} ph="38.5" />
            <Field label="HR" value={hr} setValue={setHr} ph="110" />
            <Field label="SBP" value={sbp} setValue={setSbp} ph="90" />
            <Field label="RR" value={rr} setValue={setRr} ph="24" />

            <Field label="WBC" value={wbc} setValue={setWbc} ph="18000 or 18" />
            <Field label="Creatinine" value={cr} setValue={setCr} ph="2.1" />
            <Field label="Platelets" value={plt} setValue={setPlt} ph="90000" />
            <Field label="INR" value={inr} setValue={setInr} ph="1.6" />
          </div>

          {/* Mode-specific inputs */}
          <div style={{ marginTop: 10, display: "grid", gap: 6 }}>
            {mode === "chole" ? (
              <>
                <Chk checked={localSign} setChecked={setLocalSign} label="Local sign (RUQ pain / Murphy)" />
                <Chk
                  checked={imagingChole}
                  setChecked={setImagingChole}
                  label="Imaging positive (GB wall thickening/pericholecystic fluid/stone)"
                />
                <Chk checked={symptomsOver72h} setChecked={setSymptomsOver72h} label="Symptoms > 72 hours" />
                <Chk checked={ruqMass} setChecked={setRuqMass} label="Palpable RUQ mass" />
              </>
            ) : (
              <>
                <Chk checked={painRUQ} setChecked={setPainRUQ} label="RUQ pain" />
                <Chk checked={jaundice} setChecked={setJaundice} label="Jaundice" />
                <Chk checked={alteredSensorium} setChecked={setAlteredSensorium} label="Altered sensorium (Reynolds)" />
                <Chk checked={hypotensionClin} setChecked={setHypotensionClin} label="Hypotension/shock features (Reynolds)" />
                <Field label="Total bilirubin (mg/dL)" value={tbili} setValue={setTbili} ph="e.g. 6" />
                <Chk checked={alpOrGgtHigh} setChecked={setAlpOrGgtHigh} label="Cholestasis labs high (ALP/GGT/ALT/AST) toggle" />
                <Chk checked={imagingObstruction} setChecked={setImagingObstruction} label="Imaging obstruction (CBD dilated/stone/stricture)" />
              </>
            )}
          </div>

          {/* Output */}
          <div style={{ marginTop: 12, borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: 12 }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <div>
                <div style={lbl}>Diagnosis</div>
                <div style={{ fontWeight: 900 }}>{out.diagnosis}</div>
              </div>
              <div>
                <div style={lbl}>Severity</div>
                <div style={{ fontWeight: 900 }}>{out.severity}</div>
              </div>
            </div>

            {/* ✅ Rationale */}
            {out.rationale ? (
              <div style={box}>
                <strong>Rationale (why this result):</strong> {out.rationale}
              </div>
            ) : null}

            {/* Notes */}
            {out.note ? (
              <div style={box}>
                <strong>Notes / Board hints:</strong> {out.note}
              </div>
            ) : null}

            {/* Derived quick view */}
            <div style={{ marginTop: 10, padding: 10, borderRadius: 12, background: "#fafafa" }}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Quick values</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8, fontSize: 13 }}>
                <div>Temp: <strong>{out.derived.temp}</strong></div>
                <div>WBC: <strong>{out.derived.wbc}</strong></div>
                <div>SBP: <strong>{out.derived.sbp}</strong></div>
                {"tbili" in out.derived ? <div>T bili: <strong>{(out.derived as any).tbili}</strong></div> : null}
                <div>Cr: <strong>{out.derived.cr}</strong></div>
                <div>Plt: <strong>{out.derived.plt}</strong></div>
                <div>INR: <strong>{out.derived.inr}</strong></div>
              </div>
            </div>

            {/* Management */}
            <div style={{ marginTop: 10 }}>
              <div style={lbl}>Management</div>
              <div style={{ marginTop: 4 }}>{out.plan}</div>
            </div>

            {/* Antibiotics */}
            {out.abx ? (
              <div style={{ marginTop: 10 }}>
                <div style={lbl}>Antibiotic dosing (adult typical)</div>
                <div style={{ marginTop: 4 }}>{out.abx}</div>
                <div style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                  Adjust for renal function, allergies, pregnancy, and local antibiogram. If pediatric, use mg/kg.
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------
// Small UI helpers
// -------------------------
function Field({
  label,
  value,
  setValue,
  ph
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  ph?: string;
}) {
  return (
    <div>
      <div style={lbl}>{label}</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={ph} style={inp} />
    </div>
  );
}

function Chk({
  checked,
  setChecked,
  label
}: {
  checked: boolean;
  setChecked: (v: boolean) => void;
  label: string;
}) {
  return (
    <label style={chk}>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      {label}
    </label>
  );
}

const card: CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 12,
  background: "#fff",
  color: "#111"
};

const box: CSSProperties = {
  marginTop: 10,
  padding: 10,
  borderRadius: 12,
  background: "#fafafa"
};

const lbl: CSSProperties = { fontSize: 12, opacity: 0.7 };

const inp: CSSProperties = {
  width: "100%",
  padding: "10px 10px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.14)",
  outline: "none"
};

const chk: CSSProperties = {
  display: "flex",
  gap: 8,
  alignItems: "center",
  fontSize: 14
};

const btnSm: CSSProperties = {
  marginLeft: "auto",
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.14)",
  background: "#fff",
  cursor: "pointer",
  fontWeight: 700
};

function modeBtn(active: boolean): CSSProperties {
  return {
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.14)",
    background: active ? "#111" : "#fff",
    color: active ? "#fff" : "#111",
    cursor: "pointer",
    fontWeight: 800
  };
}