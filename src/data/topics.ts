console.log("TOPICS FILE LOADED ✅");
import type { Topic } from "../types/content";

console.log("TOPICS FILE LOADED ✅");

export const TOPICS: Topic[] = [
  {
  id: "systemic-response-to-injury",
  title: "CHAPTER II: SYSTEMIC RESPONSE TO INJURY & METABOLIC SUPPORT",
  subtitle: "Schwartz 11th backbone — surgical physiology every examiner expects",
  sections: [
    {
      id: "overview",
      title: "1) High-Yield Overview",
      content: [
        "Core concept (Schwartz foundation):",
        "• All major surgical stress (trauma, sepsis, burns, major operations) triggers coordinated neuroendocrine, immune-inflammatory, and metabolic adaptations.",
        "• Goal: preserve perfusion + maintain energy substrate delivery to survive and heal.",
        "",
        "Exam framing:",
        "• Response is adaptive early; becomes maladaptive when excessive/prolonged → organ dysfunction + catabolism.",
        "",
        "Three simultaneous systems activated:",
        "• Neuroendocrine stress response",
        "• Innate immune activation",
        "• Metabolic substrate mobilization",
        "",
        "Board line:",
        "• Surgical injury produces a hypermetabolic, catabolic state mediated by cytokines + stress hormones aimed at maintaining perfusion and substrate delivery."
      ],
      qna: []
    },

    {
      id: "ebb-flow",
      title: "2) Ebb vs Flow Phase (VERY HIGH-YIELD)",
      content: [
        "EBB phase (0–24h; immediately after injury):",
        "• Goal: preserve circulation/perfusion",
        "• ↓ Cardiac output, ↓ O2 consumption, ↓ metabolic rate",
        "• Hypothermia, lactic acidosis",
        "• Insulin resistance begins",
        "Clinical meaning: prioritize perfusion over metabolism.",
        "Management focus: resuscitation, oxygenation, hemorrhage control.",
        "",
        "FLOW phase (after resuscitation):",
        "Early flow (catabolic):",
        "• Hypermetabolism, ↑ CO, ↑ O2 consumption",
        "• Proteolysis, lipolysis, hyperglycemia",
        "Late flow (anabolic):",
        "• Tissue repair, protein synthesis, regain lean body mass",
        "",
        "Exam pearl:",
        "• Burn patients may remain in flow phase for weeks–months."
      ],
      qna: []
    },

    {
      id: "damps-prrs",
      title: "3) Detection of Injury — DAMPs & PRRs",
      content: [
        "DAMPs (damage-associated molecular patterns) released by injured tissue:",
        "• DNA fragments, ATP, heat shock proteins, mitochondrial products (conceptual examples)",
        "",
        "PRRs (pattern recognition receptors) detect DAMPs:",
        "• Toll-like receptors (TLRs) are classic exam targets",
        "",
        "Result: cytokine cascade activation → systemic inflammatory response features.",
        "",
        "Major cytokines to remember:",
        "• TNF-α",
        "• IL-1",
        "• IL-6 (key exam cytokine; acute phase response driver)",
        "",
        "Cytokine effects:",
        "• Fever, catabolism, acute-phase reactants, endothelial activation"
      ],
      qna: []
    },

    {
      id: "neuroendocrine",
      title: "4) Neuroendocrine Response",
      content: [
        "Triggered via hypothalamic activation → sympathetic + HPA axis.",
        "",
        "Hormones increased and key effects:",
        "• Catecholamines: tachycardia, glycogenolysis, lipolysis",
        "• Cortisol: protein catabolism, insulin resistance, immunomodulation",
        "• Glucagon: gluconeogenesis",
        "• ADH: water retention",
        "• Aldosterone: sodium retention",
        "",
        "Net effect:",
        "• Maintain BP/perfusion + provide glucose substrate",
        "• Cost: muscle wasting + immunosuppression when prolonged",
        "",
        "Exam pearl:",
        "• Persistent cortisol elevation → immune dysfunction + loss of lean body mass."
      ],
      qna: []
    },

    {
      id: "insulin-resistance",
      title: "5) Surgical Insulin Resistance (Clinical Application)",
      content: [
        "Occurs even in non-diabetics after injury/major operation.",
        "",
        "Mechanism (board-level):",
        "• Cytokines + cortisol/catecholamines impair insulin signaling → reduced peripheral glucose uptake + increased hepatic glucose output.",
        "",
        "Results:",
        "• Hyperglycemia",
        "• Immune dysfunction → infections ↑",
        "• Poor wound healing",
        "",
        "Clinical target (ICU/surgical patients):",
        "• Aim glucose ~140–180 mg/dL (avoid overly tight control due to hypoglycemia risk)."
      ],
      qna: []
    },

    {
      id: "fuel-utilization",
      title: "6) Metabolic Fuel Utilization After Injury",
      content: [
        "Early: glycogen depletion (within ~24 hours).",
        "",
        "Then substrates shift:",
        "Protein metabolism:",
        "• Skeletal muscle proteolysis → amino acids for gluconeogenesis + acute phase proteins",
        "Fat metabolism:",
        "• Lipolysis increases → free fatty acids used for energy",
        "",
        "Key exam concept:",
        "• Body sacrifices muscle to maintain glucose for brain, immune system, and wound healing."
      ],
      qna: []
    },

    {
      id: "nutrition",
      title: "7) Nutrition in Surgical Patients (High-Yield)",
      content: [
        "Timing:",
        "• Start enteral nutrition within 24–48 hours if the gut works.",
        "",
        "Why enteral is preferred:",
        "• Maintains gut mucosal integrity",
        "• Reduces bacterial translocation",
        "• Lowers infectious complications",
        "",
        "Enteral vs Parenteral:",
        "• Enteral: preferred when feasible",
        "• TPN: reserve for nonfunctional GI tract or when enteral cannot meet needs",
        "",
        "Common indications for TPN (board-level):",
        "• Nonfunctional GI tract, short bowel syndrome, severe ileus, high-output fistula (contextual).",
        "",
        "Protein needs (high-yield):",
        "• Severe stress: ~1.5–2.0 g/kg/day",
        "• Major burns: up to ~2.0–2.5 g/kg/day"
      ],
      qna: []
    },

    // ✅ Dedicated MCQ TAB (always visible)
    {
      id: "mcqs",
      title: "MCQs (Systemic Response) — High Yield",
      content: [],
      qna: [
        {
          id: "sr-1",
          question:
            "After major trauma (post-resuscitation), the dominant metabolic pattern is:",
          choices: [
            { id: "a", text: "Anabolic state with protein synthesis predominance" },
            { id: "b", text: "Hypometabolic state with decreased oxygen consumption (ebb phase)" },
            {
              id: "c",
              text: "Hypermetabolic catabolic state with proteolysis and hyperglycemia (flow phase)"
            },
            { id: "d", text: "Ketotic starvation physiology identical to prolonged fasting" }
          ],
          answerId: "c",
          explanation:
            "After resuscitation, patients enter the flow phase characterized by hypermetabolism, catabolism (proteolysis/lipolysis), and stress hyperglycemia; ebb phase is the early shock/hypometabolic period."
        },
        {
          id: "sr-2",
          question:
            "Which cytokine is most associated with the acute-phase response and is a high-yield exam mediator after injury?",
          choices: [
            { id: "a", text: "IL-2" },
            { id: "b", text: "IL-6" },
            { id: "c", text: "IL-10" },
            { id: "d", text: "Interferon-γ" }
          ],
          answerId: "b",
          explanation:
            "IL-6 is a key driver of acute-phase reactants and systemic inflammatory features after tissue injury; commonly tested alongside TNF-α and IL-1."
        },
        {
          id: "sr-3",
          question:
            "Best initial nutrition strategy in a stable postoperative patient with a functional GI tract:",
          choices: [
            { id: "a", text: "Immediate total parenteral nutrition (TPN) for all patients" },
            { id: "b", text: "NPO for 5 days to reduce anastomotic stress" },
            { id: "c", text: "Early enteral feeding within 24–48 hours when feasible" },
            { id: "d", text: "High-dose glucose infusion to suppress catabolism" }
          ],
          answerId: "c",
          explanation:
            "Enteral feeding is preferred when the gut works and is associated with better gut barrier function and fewer infections compared with routine early TPN."
        },
        {
          id: "sr-4",
          question:
            "The most clinically relevant consequence of stress-induced insulin resistance is:",
          choices: [
            { id: "a", text: "Hypoglycemia requiring routine dextrose infusion" },
            { id: "b", text: "Hyperglycemia associated with infection risk and impaired wound healing" },
            { id: "c", text: "Primary adrenal insufficiency" },
            { id: "d", text: "Immediate switch to ketone utilization as primary fuel" }
          ],
          answerId: "b",
          explanation:
            "Stress hyperglycemia (from cytokines and counter-regulatory hormones) worsens immune function and wound healing; most guidelines target moderate control (often ~140–180 mg/dL) rather than tight control."
        }
      ]
    },

    // ✅ ADVANCED Q&A as its OWN SECTION (NOT inside mcqs.qna)
    {
      id: "systemic-response-hard-qa",
      title: "Advanced Board Q&A — Systemic Response to Injury (High-Difficulty)",
      content: [
        "These questions test physiologic reasoning — not memorization.",
        "Focus: hormonal response, metabolism, nutrition timing, ICU decision-making."
      ],
      qna: [
        {
          id: "sri-q1",
          question:
            "A trauma patient develops persistent hyperglycemia despite no history of diabetes. What is the PRIMARY physiologic driver?",
          choices: [
            { id: "a", text: "Pancreatic beta-cell failure" },
            { id: "b", text: "Peripheral insulin resistance mediated by catecholamines and cortisol" },
            { id: "c", text: "Excess glucagon suppression" },
            { id: "d", text: "Reduced hepatic glucose production" }
          ],
          answerId: "b",
          explanation:
            "Surgical stress causes catecholamine, cortisol, and inflammatory cytokine release → insulin resistance + increased gluconeogenesis. Stress hyperglycemia is adaptive early."
        },
        {
          id: "sri-q2",
          question:
            "Which metabolic substrate becomes the PRIMARY fuel for immune cells and enterocytes during severe injury?",
          choices: [
            { id: "a", text: "Glucose" },
            { id: "b", text: "Ketones" },
            { id: "c", text: "Glutamine" },
            { id: "d", text: "Fatty acids" }
          ],
          answerId: "c",
          explanation:
            "Glutamine becomes conditionally essential during stress. It fuels lymphocytes, macrophages, and intestinal mucosa — key Schwartz concept."
        },
        {
          id: "sri-q3",
          question:
            "During the early 'ebb phase' after major trauma, which physiologic pattern is expected?",
          choices: [
            { id: "a", text: "Hyperthermia and increased oxygen consumption" },
            { id: "b", text: "Decreased metabolic rate and reduced cardiac output" },
            { id: "c", text: "Accelerated protein synthesis" },
            { id: "d", text: "Marked lipogenesis" }
          ],
          answerId: "b",
          explanation:
            "Ebb phase (first 12–24h): hypometabolic state with decreased CO, oxygen consumption, and temperature. Goal = survival and perfusion preservation."
        },
        {
          id: "sri-q4",
          question: "What marks the transition from ebb phase to flow phase?",
          choices: [
            { id: "a", text: "Normalization of lactate and restoration of perfusion" },
            { id: "b", text: "Onset of renal failure" },
            { id: "c", text: "Development of fever" },
            { id: "d", text: "Initiation of enteral feeding" }
          ],
          answerId: "a",
          explanation:
            "Adequate resuscitation and restoration of tissue perfusion shift metabolism into the hypermetabolic flow phase."
        },
        {
          id: "sri-q5",
          question:
            "Why does aggressive early overfeeding worsen outcomes in critically ill patients?",
          choices: [
            { id: "a", text: "Suppresses immune response" },
            { id: "b", text: "Increases CO2 production and ventilatory demand" },
            { id: "c", text: "Causes hypoglycemia" },
            { id: "d", text: "Reduces nitrogen loss" }
          ],
          answerId: "b",
          explanation:
            "Overfeeding increases lipogenesis and CO2 production → difficult ventilator weaning. Board favorite ICU physiology question."
        },
        {
          id: "sri-q6",
          question:
            "Persistent muscle wasting after injury occurs primarily because:",
          choices: [
            { id: "a", text: "Reduced protein intake" },
            { id: "b", text: "Increased protein synthesis exceeds breakdown" },
            { id: "c", text: "Stress hormones drive proteolysis for gluconeogenesis" },
            { id: "d", text: "Renal amino acid loss" }
          ],
          answerId: "c",
          explanation:
            "Catecholamines and cortisol stimulate skeletal muscle proteolysis to supply amino acids for hepatic gluconeogenesis and acute-phase proteins."
        },
        {
          id: "sri-q7",
          question:
            "Early enteral feeding after major surgery improves outcomes primarily by:",
          choices: [
            { id: "a", text: "Providing calories earlier" },
            { id: "b", text: "Reducing bacterial translocation and preserving gut integrity" },
            { id: "c", text: "Preventing insulin resistance" },
            { id: "d", text: "Increasing anabolic hormone release" }
          ],
          answerId: "b",
          explanation:
            "Gut mucosal integrity preservation reduces bacterial translocation and systemic inflammation — a central Schwartz principle."
        },
        {
          id: "sri-q8",
          question:
            "Which hormone is MOST responsible for increased resting energy expenditure in the flow phase?",
          choices: [
            { id: "a", text: "Insulin" },
            { id: "b", text: "Catecholamines" },
            { id: "c", text: "Aldosterone" },
            { id: "d", text: "Growth hormone suppression" }
          ],
          answerId: "b",
          explanation:
            "Sympathetic activation drives hypermetabolism, tachycardia, and increased oxygen consumption."
        },
        {
          id: "sri-q9",
          question:
            "A septic patient has normal serum albumin but significant edema. Mechanism?",
          choices: [
            { id: "a", text: "Renal sodium loss" },
            { id: "b", text: "Increased capillary permeability from cytokine activation" },
            { id: "c", text: "Decreased oncotic pressure" },
            { id: "d", text: "Excess ADH suppression" }
          ],
          answerId: "b",
          explanation:
            "Inflammatory mediators cause endothelial leak → third spacing despite normal oncotic pressure."
        },
        {
          id: "sri-q10",
          question:
            "Which metabolic change BEST explains negative nitrogen balance after trauma?",
          choices: [
            { id: "a", text: "Reduced hepatic protein production" },
            { id: "b", text: "Accelerated skeletal muscle proteolysis" },
            { id: "c", text: "Increased renal filtration" },
            { id: "d", text: "Reduced caloric intake alone" }
          ],
          answerId: "b",
          explanation:
            "Negative nitrogen balance reflects catabolic muscle breakdown exceeding synthesis."
        }
      ]
    }
  ]
},
    {
  id: "fluids-electrolytes-surgical-patient",
  title: "CHAPTER III. FLUID & ELECTROLYTE MANAGEMENT OF THE SURGICAL PATIENT",
  subtitle:
    "Schwartz 11e backbone + modern periop principles + electrolyte emergencies + ABG drill + board MCQs",
  sections: [
    {
      id: "body-fluids-core",
      title: "1) Body Fluids (TBW, Compartments, Osmoles)",
      content: [
        "A) Total Body Water (TBW)",
        "• Adult male TBW ≈ 60% body weight.",
        "• Example: 70-kg male → TBW = 0.6 × 70 = 42 L.",
        "",
        "B) Fluid Compartments (70-kg male example)",
        "• TBW = 42 L",
        "• ICF ≈ 2/3 TBW = ~28 L (≈ 40% body weight)",
        "• ECF ≈ 1/3 TBW = ~14 L (≈ 20% body weight)",
        "   - Interstitial ~10.5 L (≈ 15% body weight)",
        "   - Plasma ~3.5 L (≈ 5% body weight)",
        "",
        "C) Composition of Fluid Compartments",
        "• ECF: Na high; Cl/HCO3 major anions.",
        "• ICF: K high; phosphate/proteins major anions.",
        "• Maintained by Na/K ATPase.",
        "",
        "D) Osmolality and Effective Osmoles",
        "• Calculated serum osmolality ≈ 2(Na) + Glucose/18 + BUN/2.8 (normal ~275–295).",
        "• Effective osmoles (drive water shifts/tonicity): mainly Na and glucose.",
        "• Urea is an ineffective osmole: freely permeable across membranes → affects osmolality but not sustained tonicity.",
        "",
        "Key safety concept:",
        "• Rapid tonicity shifts can cause cerebral edema (too fast lowering Na) or osmotic demyelination (too fast raising Na after chronic hyponatremia)."
      ],
      mcqs: [
        {
          id: "fe-1",
          question: "In a 70-kg adult male, estimated total body water (TBW) is:",
          options: [
            { id: "a", text: "28 L" },
            { id: "b", text: "35 L" },
            { id: "c", text: "42 L" },
            { id: "d", text: "49 L" }
          ],
          answerId: "c",
          explanation:
            "TBW in adult males ≈ 60% body weight. 0.6 × 70 kg = 42 L."
        },
        {
          id: "fe-2",
          question:
            "Which solute is considered an ineffective osmole across cell membranes?",
          options: [
            { id: "a", text: "Sodium" },
            { id: "b", text: "Glucose" },
            { id: "c", text: "Urea" },
            { id: "d", text: "Mannitol" }
          ],
          answerId: "c",
          explanation:
            "Urea diffuses freely across cell membranes; it raises osmolality but does not sustain tonicity gradients."
        }
      ]
    },
    {
      id: "normal-exchange",
      title: "2) Normal Exchange of Fluid & Electrolytes (surgical framing)",
      content: [
        "What Schwartz wants you to understand (simple surgical framing):",
        "• Every day, the body matches intake (oral/IV) to output (urine + GI + skin/lungs).",
        "• Kidneys are the main controller of ECF volume + Na balance.",
        "• ADH controls free water balance (serum Na/tonicity).",
        "",
        "Normal output buckets (board concept, not exact numbers):",
        "• Urine: the adjustable component (kidney-controlled).",
        "• Insensible: skin + lungs (increases with fever, burns, tachypnea).",
        "• GI losses: vomiting/NG suction/diarrhea/drains/fistulas (variable, often large).",
        "",
        "Surgery-specific triggers of derangement:",
        "• Stress response → ADH + aldosterone/catecholamines → water and sodium retention.",
        "• NPO + bowel prep + third spacing + blood loss → intravascular depletion.",
        "• Large IV fluids → edema and dilutional electrolyte changes."
      ]
    },

    {
      id: "classification-changes",
      title: "3) Classification of Body Fluid Changes (how examiners think)",
      content: [
        "Three ways to classify problems (Schwartz-style):",
        "",
        "A) Volume (ECF volume) problems",
        "• Hypovolemia: loss of isotonic fluid (bleeding, GI losses, third spacing).",
        "• Hypervolemia: excess isotonic fluid (heart/renal failure, excess IV fluids).",
        "",
        "B) Concentration (tonicity) problems = serum sodium disorders",
        "• Hyponatremia = hypotonicity (usually excess water relative to Na).",
        "• Hypernatremia = hypertonicity (usually water loss or inadequate intake).",
        "",
        "C) Composition problems",
        "• Abnormal specific electrolytes (K, Mg, Ca, phosphate) and acid–base disorders.",
        "",
        "Board shortcut (safe):",
        "• Volume problems → think Na content (isotonic losses/gains).",
        "• Concentration problems → think water balance/ADH.",
        "• Composition problems → think specific organ/pathology (kidney, GI, endocrine, drugs)."
      ]
    },

    {
      id: "crystalloid-distribution",
      title: "4) Why only 1/4 of isotonic crystalloid stays intravascular",
      content: [
        "Core concept:",
        "• Isotonic crystalloids distribute within ECF (plasma + interstitial), not into ICF.",
        "",
        "ECF partition (approx):",
        "• Plasma ~ 1/4 of ECF",
        "• Interstitial ~ 3/4 of ECF",
        "",
        "Therefore, 1 L isotonic crystalloid distributes as:",
        "• ~250 mL to plasma (intravascular)",
        "• ~750 mL to interstitial",
        "",
        "Clinical implication:",
        "• Large volumes of crystalloid are needed if used alone for hemorrhage; definitive hemorrhage control and blood products are essential in true blood loss.",
        "",
        "Practical surgical caution:",
        "• Too much crystalloid → bowel wall edema, anastomotic edema, pulmonary edema, delayed GI recovery.",
        "• Large-volume NS → hyperchloremic metabolic acidosis (non–anion gap)."
      ],
      mcqs: [
        {
          id: "fe-3",
          question:
            "After 1 liter of isotonic crystalloid infusion, approximately how much remains intravascular?",
          options: [
            { id: "a", text: "1000 mL" },
            { id: "b", text: "750 mL" },
            { id: "c", text: "500 mL" },
            { id: "d", text: "250 mL" }
          ],
          answerId: "d",
          explanation:
            "Isotonic crystalloid distributes in ECF; plasma is ~1/4 of ECF → ~250 mL stays intravascular."
        },
        {
          id: "fe-4",
          question:
            "The '1/4 intravascular' rule explains why 3–4 L crystalloid may be required to replace:",
          options: [
            { id: "a", text: "1 L urine output" },
            { id: "b", text: "1 L blood loss" },
            { id: "c", text: "1 L insensible loss" },
            { id: "d", text: "1 L oral intake deficit" }
          ],
          answerId: "b",
          explanation:
            "Crystalloid quickly equilibrates into interstitium; only ~25% remains intravascular."
        }
      ]
    },
    {
      id: "volume-control",
      title: "5) Volume Control (Hypovolemia vs Hypervolemia — surgical approach)",
      content: [
        "A) Hypovolemia (ECF volume depletion)",
        "Common surgical causes:",
        "• Hemorrhage, third spacing (peritonitis, pancreatitis, obstruction), vomiting/NG suction, diarrhea, high drain/fistula losses.",
        "",
        "Clinical endpoints (boards):",
        "• Mentation, HR, BP (including orthostatics), capillary refill, urine output, lactate/acid-base, skin perfusion.",
        "• Urine output target (adult): ~0.5 mL/kg/hr (rough guide).",
        "",
        "Resuscitation priorities (safe):",
        "• Treat shock cause: control bleeding/source control.",
        "• Use isotonic crystalloids initially if appropriate; escalate to blood products for hemorrhagic shock as indicated.",
        "",
        "B) Hypervolemia (ECF volume overload)",
        "Causes:",
        "• Renal failure, heart failure, excess IV fluids, cirrhosis with ascites (effective arterial underfilling).",
        "",
        "Management (board framing):",
        "• Stop unnecessary fluids, restrict Na/water as appropriate, diuretics if responsive, treat underlying heart/renal disease."
      ]
    },

    {
      id: "concentration-changes",
      title: "6) Concentration Changes (Hyponatremia & Hypernatremia — must-pass)",
      content: [
        "Core: Serum sodium reflects water balance (tonicity) more than total body sodium.",
        "",
        "Hyponatremia broad buckets:",
        "• Hypovolemic hyponatremia: Na loss > water loss (GI losses + hypotonic replacement, diuretics).",
        "• Euvolemic hyponatremia: SIADH (pain, nausea, CNS disease, postop), adrenal insufficiency.",
        "• Hypervolemic hyponatremia: CHF/cirrhosis/renal failure (water retention).",
        "",
        "Hypernatremia broad buckets:",
        "• Water loss (insensible losses, diabetes insipidus, osmotic diuresis) or inadequate intake.",
        "",
        "Board safety rule:",
        "• Correct chronic disorders slowly; treat severe neurologic symptoms urgently but within safe limits."
      ]
    },

    {
      id: "hyponatremia-severe-correction",
      title: "7) Severe Symptomatic Hyponatremia: 70-kg Correction Math + Safety",
      content: [
        "Scenario: 70-kg male, Na = 115, neurologic symptoms (e.g., seizures).",
        "",
        "Step 1: TBW",
        "• TBW = 0.6 × 70 = 42 L",
        "",
        "Step 2: Estimate Na rise with 3% saline (Na ≈ 513 mEq/L)",
        "• ΔNa per 1 L ≈ (Na_infusate − Na_serum) / (TBW + 1)",
        "• ≈ (513 − 115) / (42 + 1) = 398/43 ≈ 9.2 mEq per liter",
        "",
        "Practical meaning:",
        "• 100 mL (0.1 L) of 3% saline raises Na by ~0.9 mEq (approx).",
        "",
        "Immediate target in severe symptoms:",
        "• Raise Na by 4–6 mEq promptly to stop seizures/coma.",
        "",
        "Safety limit:",
        "• Do NOT exceed ~8–10 mEq rise in 24 hours (avoid overcorrection).",
        "",
        "Why rapid correction is dangerous:",
        "• Too rapid rise after chronic hyponatremia → osmotic demyelination (brain cell shrinkage).",
        "• Too rapid lowering in hypernatremia → cerebral edema.",
        "",
        "Board note:",
        "• Urea is ineffective osmole: it does not sustain tonicity gradients because it crosses membranes freely."
      ],
      mcqs: [
        {
          id: "fe-5",
          question: "A 70-kg patient has Na 115 with seizures. Initial management is:",
          options: [
            { id: "a", text: "D5W infusion" },
            { id: "b", text: "0.45% saline" },
            { id: "c", text: "3% hypertonic saline bolus" },
            { id: "d", text: "Fluid restriction only" }
          ],
          answerId: "c",
          explanation:
            "Severe symptomatic hyponatremia requires 3% saline bolus to raise Na by 4–6 mEq acutely and stop neurologic symptoms."
        },
        {
          id: "fe-6",
          question: "Maximum recommended sodium correction in 24 hours (typical) is:",
          options: [
            { id: "a", text: "4 mEq/L" },
            { id: "b", text: "6 mEq/L" },
            { id: "c", text: "8–10 mEq/L" },
            { id: "d", text: "15 mEq/L" }
          ],
          answerId: "c",
          explanation:
            "Overcorrection increases risk of osmotic demyelination; typical limit is ≤8–10 mEq/L per 24 hours."
        },
        {
          id: "fe-7",
          question: "Rapid overcorrection of chronic hyponatremia can lead to:",
          options: [
            { id: "a", text: "Cerebral edema" },
            { id: "b", text: "Osmotic demyelination syndrome" },
            { id: "c", text: "Pulmonary embolism" },
            { id: "d", text: "Metabolic alkalosis" }
          ],
          answerId: "b",
          explanation:
            "Rapid rise in extracellular sodium causes water to leave brain cells → osmotic demyelination."
        }
      ]
    },

    {
      id: "hypernatremia-correction",
      title: "8) Hypernatremia (surgical essentials + safe correction)",
      content: [
        "Core: Hypernatremia is usually water deficit.",
        "",
        "Common surgical causes:",
        "• Poor access to water (ICU, elderly), insensible losses (fever, burns), osmotic diuresis, diabetes insipidus.",
        "",
        "Clinical danger:",
        "• Brain adapts to chronic hypernatremia; rapid lowering → cerebral edema.",
        "",
        "Safe principle:",
        "• Correct chronic hypernatremia gradually (board rule: avoid rapid drops).",
        "• Use hypotonic fluids (e.g., enteral water, D5W, 0.45% saline depending on context/volume status).",
        "",
        "Volume status matters:",
        "• If hypovolemic hypernatremia: first restore intravascular volume with isotonic fluid, then correct free water deficit."
      ]
    },

    {
      id: "composition-changes-overview",
      title: "9) Composition Changes (Etiology & Diagnosis — exam approach)",
      content: [
        "Composition changes = specific electrolyte abnormalities (K, Mg, Ca, phosphate) + acid-base disorders.",
        "",
        "Exam approach:",
        "1) Identify which electrolyte is abnormal and severity.",
        "2) Look for ECG danger (especially K and Ca).",
        "3) Identify source (GI loss, renal loss, endocrine, drugs).",
        "4) Treat life-threatening effects first, then correct deficit/excess, then treat cause."
      ]
    },

    {
      id: "potassium-hypokalemia-repletion",
      title: "10) Potassium: Hypokalemia, ECG, and Replacement Rates",
      content: [
        "Hypokalemia key features:",
        "• Ileus (smooth muscle dysfunction)",
        "• Arrhythmias",
        "• ECG: U waves (classic)",
        "",
        "Replacement principles:",
        "• Use IV KCl cautiously; NEVER IV push.",
        "• Peripheral IV: typically max 10 mEq/hr.",
        "• Central line: up to 20 mEq/hr with continuous monitoring in severe cases.",
        "",
        "Practical note:",
        "• If K remains refractory, check and correct magnesium."
      ],
      mcqs: [
        {
          id: "fe-8",
          question: "Hypokalemia is associated with which ECG finding?",
          options: [
            { id: "a", text: "Peaked T waves" },
            { id: "b", text: "U waves" },
            { id: "c", text: "Shortened QT interval" },
            { id: "d", text: "Short PR interval" }
          ],
          answerId: "b",
          explanation:
            "Hypokalemia classically produces U waves and predisposes to arrhythmias."
        },
        {
          id: "fe-9",
          question: "Maximum IV potassium infusion rate via peripheral line is generally:",
          options: [
            { id: "a", text: "5 mEq/hr" },
            { id: "b", text: "10 mEq/hr" },
            { id: "c", text: "20 mEq/hr" },
            { id: "d", text: "40 mEq/hr" }
          ],
          answerId: "b",
          explanation:
            "Peripheral IV K replacement is typically limited to 10 mEq/hr to reduce phlebitis risk."
        },
        {
          id: "fe-10",
          question: "With central line and continuous monitoring, IV KCl may be infused up to:",
          options: [
            { id: "a", text: "10 mEq/hr" },
            { id: "b", text: "15 mEq/hr" },
            { id: "c", text: "20 mEq/hr" },
            { id: "d", text: "30 mEq/hr routinely" }
          ],
          answerId: "c",
          explanation:
            "Central access with monitoring allows up to 20 mEq/hr in severe hypokalemia."
        }
      ]
    },
    {
      id: "hyperkalemia-emergency",
      title: "11) Hyperkalemia Emergency (must-know algorithm)",
      content: [
        "When to panic:",
        "• ECG changes (peaked T waves → PR prolongation → QRS widening → sine wave).",
        "• Severe K elevation or rapid rise (renal failure, tissue breakdown).",
        "",
        "Board algorithm (sequence matters):",
        "1) Stabilize myocardium: IV calcium (gluconate peripherally; chloride via central line).",
        "2) Shift K into cells: insulin + glucose; beta-agonist; consider bicarbonate if acidotic.",
        "3) Remove K: diuretics if producing urine; GI binders; dialysis if refractory/renal failure.",
        "",
        "Always:",
        "• Stop K sources (IV fluids, meds), check magnesium, check renal function."
      ]
    },

    {
      id: "magnesium-calcium-phosphate",
      title: "12) Magnesium, Calcium, Phosphate (high-yield surgical pearls)",
      content: [
        "Magnesium:",
        "• Low Mg → refractory hypokalemia and arrhythmias.",
        "• Common in malnutrition, alcoholism, diarrhea, diuretics.",
        "",
        "Calcium:",
        "• Low Ca → perioral numbness, tetany, QT prolongation.",
        "• After massive transfusion (citrate) and pancreatitis can contribute.",
        "",
        "Phosphate:",
        "• Low phosphate → weakness, respiratory failure; common in refeeding syndrome.",
        "• Treat carefully especially in malnourished patients."
      ]
    },

    {
      id: "acid-base-deep-mastery",
      title: "13) Acid–Base Deep Mastery (Surgery-Focused Framework)",
      content: [
        "6-step ABG approach:",
        "1) pH: acidemia (<7.35) vs alkalemia (>7.45).",
        "2) Primary process: metabolic (HCO3) vs respiratory (PaCO2).",
        "3) Compensation check (no overcompensation).",
        "   - Metabolic acidosis: Winter’s formula Expected PaCO2 = 1.5(HCO3) + 8 ± 2.",
        "   - Metabolic alkalosis: Expected PaCO2 ≈ 0.7(HCO3−24) + 40 ± 2.",
        "4) If metabolic acidosis: compute Anion Gap (AG = Na − (Cl + HCO3)).",
        "5) Correct AG for albumin: AGcorr = AG + 2.5(4 − albumin).",
        "6) Delta-delta for mixed disorders: compare ΔAG and ΔHCO3.",
        "",
        "Common surgical patterns:",
        "• Lactic acidosis (shock/sepsis): AG metabolic acidosis → treat perfusion + source control.",
        "• Normal saline load: hyperchloremic (non-AG) metabolic acidosis → switch to balanced fluids.",
        "• Vomiting/NG suction: metabolic alkalosis (often chloride-responsive) → NS + KCl if volume depleted.",
        "• Early sepsis/pain: respiratory alkalosis may precede metabolic acidosis."
      ],
      mcqs: [
        {
          id: "fe-11",
          question: "Winter’s formula is used to evaluate compensation in:",
          options: [
            { id: "a", text: "Metabolic alkalosis" },
            { id: "b", text: "Respiratory acidosis" },
            { id: "c", text: "Metabolic acidosis" },
            { id: "d", text: "Respiratory alkalosis" }
          ],
          answerId: "c",
          explanation:
            "Winter’s formula estimates expected PaCO2 in metabolic acidosis."
        },
        {
          id: "fe-12",
          question: "Anion gap is calculated as:",
          options: [
            { id: "a", text: "Na + K − Cl − HCO3" },
            { id: "b", text: "Na − (Cl + HCO3)" },
            { id: "c", text: "Cl − (Na + HCO3)" },
            { id: "d", text: "HCO3 − (Na + Cl)" }
          ],
          answerId: "b",
          explanation: "Standard anion gap = Na − (Cl + HCO3)."
        },
        {
          id: "fe-13",
          question:
            "Large-volume normal saline resuscitation most commonly causes:",
          options: [
            { id: "a", text: "Metabolic alkalosis" },
            { id: "b", text: "Respiratory alkalosis" },
            { id: "c", text: "Hyperchloremic metabolic acidosis" },
            { id: "d", text: "High anion gap metabolic acidosis" }
          ],
          answerId: "c",
          explanation:
            "High chloride load decreases strong ion difference → non–anion gap (hyperchloremic) metabolic acidosis."
        }
      ]
    },

    {
      id: "parenteral-solutions",
      title: "14) Parenteral Solutions (what to choose and why)",
      content: [
        "Key IV fluids (board-relevant):",
        "• Isotonic crystalloids (NS, balanced crystalloids): expand ECF (1/4 intravascular).",
        "• Hypertonic saline (3%): raises serum Na/tonicity; used for severe symptomatic hyponatremia.",
        "• D5W: behaves as free water after glucose metabolized (used for free water replacement).",
        "",
        "Surgical selection principle:",
        "• Resuscitation of hypovolemia → isotonic fluid (balanced preferred for large volumes).",
        "• Free water deficit (hypernatremia) → D5W/enteral water (after stabilizing intravascular volume if needed).",
        "• Symptomatic severe hyponatremia → 3% saline (careful limits)."
      ]
    },

    {
      id: "alternative-resuscitative-fluids",
      title: "15) Alternative Resuscitative Fluids (overview)",
      content: [
        "Conceptual bucket:",
        "• Blood products for hemorrhage (not crystalloids alone).",
        "• Colloids exist, but routine use varies; what boards usually want is physiology + avoid edema/overload.",
        "",
        "Board-safe message:",
        "• In true hemorrhagic shock: prioritize hemorrhage control + appropriate blood product resuscitation."
      ]
    },

    {
      id: "life-threatening-electrolytes",
      title: "16) Correction of Life-Threatening Electrolyte Abnormalities (one-page algorithms)",
      content: [
        "A) Hyperkalemia with ECG changes:",
        "• Calcium → insulin/glucose → beta-agonist → remove K (diuretic/binder/dialysis).",
        "",
        "B) Severe symptomatic hyponatremia (seizures/coma):",
        "• 3% saline to raise Na by 4–6 mEq quickly; limit total 24h correction to ~8–10 mEq.",
        "",
        "C) Severe hypocalcemia with symptoms:",
        "• IV calcium; treat cause (massive transfusion citrate, pancreatitis, hypoparathyroid).",
        "",
        "D) Refeeding syndrome risk:",
        "• Replace phosphate, magnesium, potassium; start nutrition slowly; monitor closely."
      ]
    },

    {
      id: "periop-fluids-preop",
      title: "17) Preoperative Fluid Therapy (simple exam approach)",
      content: [
        "Pre-op goals:",
        "• Correct hypovolemia and major electrolyte derangements before anesthesia when feasible.",
        "• Identify ongoing losses (vomiting, NG suction, diarrhea, drains).",
        "",
        "NPO does not automatically mean massive deficit:",
        "• Focus on clinical volume status rather than routine large 'NPO replacement' boluses.",
        "",
        "If bowel obstruction / third spacing suspected:",
        "• Anticipate large ECF deficit → isotonic resuscitation + electrolyte correction + NG decompression as indicated."
      ]
    },

    {
      id: "periop-fluids-intraop",
      title: "18) Intraoperative Fluid Therapy (principles that pass boards)",
      content: [
        "Intra-op goals:",
        "• Maintain perfusion and oxygen delivery while avoiding fluid overload.",
        "",
        "Board framing:",
        "• Replace measured losses (blood loss, urine) and anticipate third spacing in major abdominal surgery.",
        "• Avoid unnecessary large crystalloid loads (edema/ileus/resp issues).",
        "",
        "If significant bleeding:",
        "• Shift thinking from crystalloid to blood products and hemorrhage control."
      ]
    },

    {
      id: "periop-fluids-postop",
      title: "19) Postoperative Fluid Therapy (what Schwartz emphasizes clinically)",
      content: [
        "Post-op physiology:",
        "• ADH surge (pain, nausea, stress) → water retention → risk of dilutional hyponatremia.",
        "",
        "Practical principles:",
        "• Avoid excess hypotonic fluids early postop unless clearly indicated.",
        "• Reassess daily: weight, I/O, urine output, electrolytes, exam.",
        "• Replace ongoing GI losses appropriately (e.g., NG output often chloride-rich → metabolic alkalosis risk)."
      ]
    },

    {
      id: "eras-fluids",
      title: "20) Fluid Management in ERAS Pathways (exam-friendly takeaways)",
      content: [
        "ERAS theme:",
        "• Avoid both hypovolemia and fluid overload.",
        "",
        "Board-level points:",
        "• Goal-directed / restrictive-to-euvolemic strategies reduce complications vs liberal overload in many colorectal pathways.",
        "• Early oral intake when appropriate reduces IV fluid need.",
        "• Watch for postoperative hyponatremia risk from stress/ADH if hypotonic fluids are given."
      ]
    },

    {
      id: "special-postop-patients",
      title: "21) Special Considerations: Neurologic, Malnourished (Refeeding), ARF, Cancer",
      content: [
        "Neurologic patients:",
        "• Tonicity matters; avoid rapid sodium shifts; severe symptomatic hyponatremia needs controlled hypertonic therapy.",
        "",
        "Malnourished / Refeeding syndrome:",
        "• Risk: hypophosphatemia, hypokalemia, hypomagnesemia → arrhythmias + respiratory failure.",
        "• Start nutrition slowly; replace phosphate/Mg/K proactively; monitor closely.",
        "",
        "Acute renal failure patients:",
        "• Limited ability to excrete K and water → hyperkalemia and volume overload risk.",
        "• Avoid potassium-containing fluids when unsafe; dialysis may be needed.",
        "",
        "Cancer patients:",
        "• SIADH (certain tumors/chemo), malnutrition, vomiting, renal dysfunction → complex mixed problems; treat life threats first."
      ]
    },

    {
      id: "acid-base-quick-drill",
      title: "22) Quick ABG Drill – 10 Rapid Board Interpretations",
      content: [
        "Use sequence: pH → primary → compensation → (if metabolic acidosis) anion gap → mixed disorder.",
        "",
        "Case 1: pH 7.28 / PaCO2 28 / HCO3 12",
        "• Metabolic acidosis; Winter expected ~26 ±2 → actual 28 appropriate.",
        "",
        "Case 2: pH 7.52 / PaCO2 48 / HCO3 38",
        "• Metabolic alkalosis; expected PaCO2 about 50 ±2 → appropriate.",
        "",
        "Case 3: pH 7.30 / PaCO2 60 / HCO3 29",
        "• Respiratory acidosis with partial compensation.",
        "",
        "Case 4: pH 7.48 / PaCO2 30 / HCO3 22",
        "• Respiratory alkalosis (common in early sepsis/pain/anxiety).",
        "",
        "Case 5: pH 7.25 / PaCO2 25 / HCO3 11 / AG 22",
        "• High anion gap metabolic acidosis (shock/lactate common).",
        "",
        "Case 6: pH 7.40 / PaCO2 40 / HCO3 24",
        "• Normal ABG.",
        "",
        "Case 7: pH 7.33 / PaCO2 35 / HCO3 18 / AG 10",
        "• Non–anion gap metabolic acidosis (diarrhea or large-volume NS).",
        "",
        "Case 8: pH 7.60 / PaCO2 50 / HCO3 49",
        "• Severe metabolic alkalosis (diuretics/gastric losses).",
        "",
        "Case 9: pH 7.10 / PaCO2 20 / HCO3 6 / AG 28",
        "• Severe high AG metabolic acidosis (emergency).",
        "",
        "Case 10: pH 7.38 / PaCO2 60 / HCO3 35",
        "• Chronic respiratory acidosis with metabolic compensation (COPD pattern)."
      ],
      mcqs: [
        {
          id: "fe-14",
          question:
            "In metabolic acidosis, if measured PaCO2 is higher than Winter’s expected, this indicates:",
          options: [
            { id: "a", text: "Additional respiratory alkalosis" },
            { id: "b", text: "Additional respiratory acidosis" },
            { id: "c", text: "Appropriate compensation" },
            { id: "d", text: "Normal finding always" }
          ],
          answerId: "b",
          explanation:
            "PaCO2 higher than expected suggests hypoventilation → concurrent respiratory acidosis."
        },
        {
          id: "fe-15",
          question: "Vomiting/NG suction most classically causes:",
          options: [
            { id: "a", text: "High anion gap metabolic acidosis" },
            { id: "b", text: "Hyperchloremic metabolic acidosis" },
            { id: "c", text: "Metabolic alkalosis" },
            { id: "d", text: "Respiratory acidosis" }
          ],
          answerId: "c",
          explanation:
            "Loss of gastric H+ and Cl− classically produces metabolic alkalosis (often chloride-responsive)."
        },
        {
          id: "fe-16",
          question: "Postoperative hyponatremia is commonly due to:",
          options: [
            { id: "a", text: "Aldosterone suppression" },
            { id: "b", text: "ADH surge causing water retention" },
            { id: "c", text: "Hyperkalemia" },
            { id: "d", text: "Primary adrenal insufficiency" }
          ],
          answerId: "b",
          explanation:
            "Post-op stress, pain, nausea → ADH increase → free water retention → dilutional hyponatremia."
        },
        {
          id: "fe-17",
          question:
            "First-line temporizing treatment for hyperkalemia with ECG changes is:",
          options: [
            { id: "a", text: "Furosemide" },
            { id: "b", text: "Calcium gluconate" },
            { id: "c", text: "Sodium polystyrene sulfonate" },
            { id: "d", text: "Spironolactone" }
          ],
          answerId: "b",
          explanation:
            "Calcium immediately stabilizes myocardium and reduces risk of fatal arrhythmias."
        },
        {
          id: "fe-18",
          question: "Rapid correction of hypernatremia most risks:",
          options: [
            { id: "a", text: "Cerebral edema" },
            { id: "b", text: "Osmotic demyelination syndrome" },
            { id: "c", text: "Metabolic alkalosis" },
            { id: "d", text: "Hypoglycemia" }
          ],
          answerId: "a",
          explanation:
            "Brain adapts to high Na; rapid lowering causes water influx → cerebral edema."
        },
        {
          id: "fe-19",
          question:
            "Why do balanced crystalloids often outperform large-volume normal saline in many surgical patients?",
          options: [
            { id: "a", text: "They are hypotonic and expand ICF" },
            { id: "b", text: "They reduce hyperchloremic metabolic acidosis risk" },
            { id: "c", text: "They contain higher potassium than plasma" },
            { id: "d", text: "They eliminate need for blood products in hemorrhage" }
          ],
          answerId: "b",
          explanation:
            "Normal saline chloride load can cause hyperchloremic metabolic acidosis; balanced fluids reduce this risk."
        },
                {
          id: "fe-20",
          question: "The '1/4 intravascular' rule is best explained by:",
          options: [
            { id: "a", text: "Crystalloid distributes into ICF" },
            { id: "b", text: "Crystalloid stays entirely in plasma" },
            { id: "c", text: "Crystalloid distributes across ECF; plasma is ~25% of ECF" },
            { id: "d", text: "Crystalloid is rapidly excreted unchanged" }
          ],
          answerId: "c",
          explanation:
            "Isotonic crystalloids distribute in ECF. Since plasma is ~1/4 of ECF, only about 25% remains intravascular."
        }
      ]
    }
  ]
},
{
  id: "hemostasis-surgical-bleeding-transfusion",
  title: "CHAPTER IV. HEMOSTASIS, SURGICAL BLEEDING, AND TRANSFUSION",
  subtitle:
    "Schwartz 11e backbone + modern trauma/transfusion principles + TEG/ROTEM + DIC/TIC + MTP decision tree + CERES/RITE/ABSITE Qs",
  sections: [
    {
      id: "biology-of-hemostasis",
      title: "1) Biology of Hemostasis (Schwartz Backbone)",
      content: [
        "Hemostasis = balanced interaction of:",
        "• Vessel wall (vasoconstriction/endothelium)",
        "• Platelets (primary hemostasis)",
        "• Coagulation cascade (secondary hemostasis)",
        "• Fibrinolysis (clot regulation/breakdown)",
        "",
        "Board frame:",
        "• Surgical bleeding is often multifactorial (technical + physiology + dilution + drugs).",
        "• ALWAYS: surgical source first, then physiology, then labs/TEG-guided products.",
        "",
        "A) Vascular constriction (immediate)",
        "• Neurogenic reflex + endothelin + local smooth muscle spasm → ↓ blood flow.",
        "• Impaired by shock and hypothermia → worse hemorrhage.",
        "",
        "B) Platelet function (primary hemostasis)",
        "1) Adhesion: vWF bridges platelet to collagen via GpIb.",
        "2) Activation: ADP + TXA2 release → recruit/activate platelets.",
        "3) Aggregation: fibrinogen bridges platelets via GpIIb/IIIa.",
        "",
        "Bleeding pattern (primary hemostasis failure):",
        "• Petechiae, mucosal bleeding, diffuse oozing from surfaces.",
        "",
        "C) Coagulation (secondary hemostasis)",
        "• Goal: thrombin generation → fibrin formation → stabilized clot.",
        "",
        "Intrinsic vs Extrinsic (exam picture—ASCII):",
        "                INTRINSIC PATHWAY",
        "        XII → XI → IX → VIII",
        "                     ↓",
        "                 Factor X",
        "                     ↓",
        "EXTRINSIC PATHWAY → VII",
        "                     ↓",
        "                COMMON PATHWAY",
        "           X → V → II (Thrombin)",
        "                     ↓",
        "              I (Fibrinogen)",
        "                     ↓",
        "                 FIBRIN CLOT",
        "",
        "Lab correlation:",
        "• Intrinsic: aPTT",
        "• Extrinsic: PT/INR",
        "• Common: affects both",
        "",
        "D) Fibrinolysis",
        "• tPA → plasminogen → plasmin → fibrin breakdown.",
        "• Trauma: hyperfibrinolysis can drive uncontrollable bleeding (TXA helps early)."
      ]
    },
    {
      id: "normal-labs",
      title: "2) Normal Lab Values (High-Yield)",
      content: [
        "Use these as your mental anchors (adult):",
        "",
        "CBC / Platelets:",
        "• Platelets: 150,000–400,000 /µL",
        "• Hemoglobin: Male ~13–17 g/dL; Female ~12–15 g/dL",
        "",
        "Coagulation labs:",
        "• PT: ~11–13.5 sec",
        "• INR: ~0.8–1.2",
        "• aPTT: ~25–35 sec",
        "• Fibrinogen: ~200–400 mg/dL",
        "",
        "Exam warning:",
        "• ‘Normal’ ranges vary slightly per lab—use these as the standard board ranges."
      ]
    },
    {
      id: "inr-not-bleeding-risk",
      title: "3) INR ≠ Whole Bleeding Risk: What to Request Instead?",
      content: [
        "Key concept:",
        "• INR measures plasma clotting factor activity (mainly extrinsic/common), NOT:",
        "  - platelet function",
        "  - clot strength",
        "  - fibrinolysis",
        "  - whole-blood interaction on cellular surfaces",
        "",
        "Classic scenario:",
        "• Liver disease/trauma: INR may be elevated yet bleeding risk is not predicted reliably by INR alone.",
        "",
        "What to request then?",
        "✅ TEG (Thromboelastography) or ROTEM",
        "• Provides global, functional assessment:",
        "  - clot initiation",
        "  - clot kinetics/strength (platelet + fibrinogen contribution)",
        "  - fibrinolysis (hyperfibrinolysis)",
        "",
        "Practical approach (OR/ICU):",
        "• If bleeding + INR abnormal: also check platelet count, fibrinogen, and use TEG/ROTEM if available."
      ]
    },
    {
      id: "trauma-lethal-diamond",
      title: "4) Trauma Coagulopathy: Lethal Triad → Lethal Diamond",
      content: [
        "LETHAL TRIAD:",
        "• Hypothermia",
        "• Acidosis",
        "• Coagulopathy",
        "",
        "LETHAL DIAMOND (add hypocalcemia):",
        "• Hypothermia + Acidosis + Coagulopathy + Hypocalcemia",
        "",
        "Why hypocalcemia matters:",
        "• Citrate in transfused blood binds calcium.",
        "• Calcium is required in multiple coagulation steps AND supports myocardial contractility.",
        "• Low ionized calcium → worse clotting + hypotension.",
        "",
        "Board phrasing:",
        "• ‘Prevent and reverse the lethal diamond while controlling hemorrhage.’"
      ]
    },
    {
      id: "transfusion-basics-complications",
      title: "5) Transfusion Basics + TACO/TRALI (Must-Know Definitions)",
      content: [
        "Blood components (what they fix):",
        "• PRBC: oxygen delivery",
        "• FFP: clotting factors",
        "• Platelets: primary hemostasis",
        "• Cryoprecipitate: fibrinogen (and factor VIII/vWF in small amounts; exam focus = fibrinogen)",
        "",
        "Restrictive transfusion thresholds (common exam anchors):",
        "• Stable adult: transfuse PRBC when Hb <7 g/dL",
        "• Cardiovascular disease/ischemia risk: consider <8 g/dL",
        "",
        "Transfusion reactions—know these two cold:",
        "",
        "TACO = Transfusion-Associated Circulatory Overload",
        "• Path: volume overload → cardiogenic pulmonary edema",
        "• Clues: JVP/CVP up, hypertension, S3, responds to diuretics",
        "",
        "TRALI = Transfusion-Related Acute Lung Injury",
        "• Path: immune-mediated lung injury → non-cardiogenic pulmonary edema",
        "• Timing: usually within 6 hours of transfusion",
        "• Clues: acute hypoxemia, bilateral infiltrates, NOT volume overload; supportive ventilation",
        "",
        "Board move:",
        "• Stop transfusion + assess. Differentiate TRALI vs TACO clinically."
      ]
    },
    {
      id: "dic-tic-deep-dive",
      title: "6) DIC & Trauma-Induced Coagulopathy (Deep Dive — Board Favorite)",
      content: [
        "A) DIC (Disseminated Intravascular Coagulation)",
        "Core idea:",
        "• Systemic coagulation activation → microthrombi + consumption of platelets/factors → bleeding.",
        "",
        "Common causes surgeons must recall:",
        "• Sepsis (major), severe trauma, obstetric catastrophe, malignancy, shock states",
        "",
        "Typical labs (classic pattern):",
        "• Platelets ↓",
        "• PT/INR ↑",
        "• aPTT ↑",
        "• Fibrinogen ↓",
        "• D-dimer ↑↑",
        "",
        "Management priorities:",
        "1) Treat the underlying cause (source control, infection control, etc.)",
        "2) If bleeding/procedures needed: replace what’s missing (guided by labs/TEG):",
        "   • Platelets if low with bleeding/procedure",
        "   • Cryo/fibrinogen if low",
        "   • FFP if factor deficiency with bleeding",
        "",
        "B) Trauma-Induced Coagulopathy (TIC)",
        "Key idea:",
        "• Can occur EARLY (not just dilutional). Endothelial injury + shock physiology can drive hypocoagulability and/or hyperfibrinolysis.",
        "",
        "Practical trauma hemostasis approach:",
        "• Control hemorrhage + balanced resuscitation + warming + correct acidosis + correct calcium + fibrinogen early.",
        "",
        "TXA (board staple):",
        "• Consider early in significant traumatic bleeding—benefit is time-sensitive (best early)."
      ]
    },
    {
      id: "mtp-decision-tree",
      title: "7) Massive Transfusion Protocol (MTP) Decision Tree — Oral Boards Weapon",
      content: [
        "Trigger/recognize massive hemorrhage (common definitions):",
        "• ≥10 units PRBC in 24 hours OR",
        "• ≥4 units PRBC in 1 hour with ongoing bleeding OR",
        "• Hemodynamic instability with suspected ongoing major hemorrhage",
        "",
        "DECISION TREE (say this in orals):",
        "",
        "STEP 1 — Call it early",
        "• ‘This is massive hemorrhage. Activate MTP now.’",
        "",
        "STEP 2 — Control hemorrhage + damage control mindset",
        "• Direct pressure / packing / clamp / temporary closure as needed.",
        "• Early surgical/IR hemorrhage control.",
        "",
        "STEP 3 — Balanced resuscitation",
        "• Use balanced products: PRBC : Plasma : Platelets ≈ 1 : 1 : 1",
        "• Avoid large crystalloids (dilution, edema, acidosis).",
        "",
        "STEP 4 — Prevent the lethal DIAMOND in parallel",
        "• Warm patient (active warming, warm fluids)",
        "• Correct acidosis (perfusion + hemorrhage control)",
        "• Correct coagulopathy (products guided by labs/TEG)",
        "• Correct hypocalcemia (monitor ionized Ca; replace as needed)",
        "",
        "STEP 5 — Lab/TEG-guided fine tuning",
        "• CBC, PT/INR, aPTT, fibrinogen (+ TEG/ROTEM if available)",
        "• If fibrinogen low → cryo/fibrinogen replacement",
        "• If platelet low/dysfunction → platelets",
        "• If hyperfibrinolysis → consider TXA",
        "",
        "Board finishing line:",
        "• ‘My goal is hemostatic resuscitation + definitive hemorrhage control while reversing the lethal diamond.’"
      ]
    },
    {
      id: "oral-board-questions",
      title: "8) 5 Oral Board Questions (with Model Answers)",
      content: [
        "ORAL Q1 — Post-op diffuse oozing after major operation",
        "Stem: Patient in PACU with diffuse oozing from drains/incision; vitals borderline; no obvious surgical source.",
        "Model answer:",
        "• ‘I will first assess for surgical bleeding and hemodynamic instability.’",
        "• CBC, PT/INR, aPTT, fibrinogen; consider TEG/ROTEM.",
        "• Correct hypothermia, acidosis; replace targeted products (platelets/cryo/FFP) guided by results.",
        "",
        "ORAL Q2 — Liver disease patient with INR 2.0 needs urgent surgery",
        "Model answer:",
        "• ‘INR alone does not fully reflect bleeding risk. I will request fibrinogen + platelet count + TEG/ROTEM if available.’",
        "• Optimize: platelets if low, fibrinogen replacement if low, and factor replacement if actively bleeding/major procedure; avoid blind over-transfusion.",
        "",
        "ORAL Q3 — Trauma patient cold and bleeding in ED",
        "Model answer:",
        "• Activate MTP; balanced transfusion (1:1:1).",
        "• Aggressive warming + control hemorrhage.",
        "• Monitor/correct ionized calcium (lethal diamond).",
        "• Labs/TEG-guided adjustments; consider TXA early if indicated.",
        "",
        "ORAL Q4 — Uremic patient persistent oozing despite normal platelet count",
        "Model answer:",
        "• Platelet dysfunction (uremia).",
        "• Treat with DDAVP; consider dialysis; reserve platelets for severe bleeding/procedure (effect can be limited).",
        "",
        "ORAL Q5 — Acute respiratory distress after transfusion",
        "Model answer:",
        "• Stop transfusion; supportive care; differentiate TRALI vs TACO:",
        "  - TRALI: hypoxemia, bilateral infiltrates, not fluid overloaded, within 6 hours → ventilatory support.",
        "  - TACO: volume overload signs → diuretics, slow transfusions in future."
      ]
    },
    {
      id: "mcq-20",
      title: "9) 20 High-Yield MCQs (CERES / RITE / ABSITE Style) + Rationales",
      content: [
        "MCQ 1",
        "Most common cause of postoperative hemorrhage is:",
        "A. DIC  B. Technical bleeding  C. Hemophilia  D. Hyperfibrinolysis",
        "Answer: B",
        "Rationale: In surgery, always suspect technical source first.",
        "",
        "MCQ 2",
        "von Willebrand factor is most critical for platelet:",
        "A. Aggregation  B. Adhesion  C. Activation  D. Fibrinolysis",
        "Answer: B",
        "Rationale: vWF bridges platelet adhesion to collagen via GpIb.",
        "",
        "MCQ 3",
        "GpIIb/IIIa is required for platelet:",
        "A. Adhesion  B. Aggregation  C. Activation  D. Vasoconstriction",
        "Answer: B",
        "Rationale: Fibrinogen bridges platelets via GpIIb/IIIa (aggregation).",
        "",
        "MCQ 4",
        "Which factor primarily affects PT/INR when deficient?",
        "A. VIII  B. IX  C. VII  D. XI",
        "Answer: C",
        "Rationale: Factor VII is the extrinsic pathway factor measured by PT/INR.",
        "",
        "MCQ 5",
        "A patient has isolated prolonged aPTT. Most likely deficiency is:",
        "A. VII  B. VIII  C. X  D. V",
        "Answer: B",
        "Rationale: Intrinsic pathway factors raise aPTT; classic is factor VIII (hemophilia A).",
        "",
        "MCQ 6",
        "First coagulation abnormality often seen in massive hemorrhage is low:",
        "A. Platelets  B. Factor VII  C. Fibrinogen  D. Protein C",
        "Answer: C",
        "Rationale: Fibrinogen commonly drops early and predicts bleeding.",
        "",
        "MCQ 7",
        "Cryoprecipitate is primarily given to replace:",
        "A. Platelets  B. Fibrinogen  C. Vitamin K  D. Factor VII",
        "Answer: B",
        "Rationale: Exam focus: cryo = fibrinogen replacement.",
        "",
        "MCQ 8",
        "Lethal diamond includes all EXCEPT:",
        "A. Hypothermia  B. Acidosis  C. Hyperkalemia  D. Coagulopathy",
        "Answer: C",
        "Rationale: Lethal diamond = hypothermia, acidosis, coagulopathy, hypocalcemia.",
        "",
        "MCQ 9",
        "Hypocalcemia during massive transfusion is primarily due to:",
        "A. Hemolysis  B. Citrate binding calcium  C. Dilution of albumin  D. Hyperventilation",
        "Answer: B",
        "Rationale: Citrate chelation lowers ionized calcium.",
        "",
        "MCQ 10",
        "A stable adult without cardiac disease should generally receive PRBC when Hb is:",
        "A. <10  B. <9  C. <8  D. <7",
        "Answer: D",
        "Rationale: Restrictive threshold commonly used: Hb <7 g/dL.",
        "",
        "MCQ 11",
        "Which test best assesses global clot formation and fibrinolysis?",
        "A. PT/INR  B. aPTT  C. TEG/ROTEM  D. D-dimer alone",
        "Answer: C",
        "Rationale: Viscoelastic testing evaluates whole-clot dynamics.",
        "",
        "MCQ 12",
        "INR does not fully reflect bleeding risk in liver disease because it does NOT assess:",
        "A. Factor VII  B. Platelet function and clot strength  C. Vitamin K status  D. Extrinsic pathway",
        "Answer: B",
        "Rationale: INR is plasma-based; does not capture platelets/clot strength/fibrinolysis.",
        "",
        "MCQ 13",
        "TRALI stands for:",
        "A. Transfusion-Related Acute Lung Injury",
        "B. Transfusion-Related Antibody Lung Ischemia",
        "C. Transfusion-Related Airway Laryngeal Inflammation",
        "D. Transfusion-Related Acute Lobar Infection",
        "Answer: A",
        "Rationale: TRALI = immune-mediated non-cardiogenic pulmonary edema within ~6 hours.",
        "",
        "MCQ 14",
        "TACO stands for:",
        "A. Transfusion-Associated Cardiac Occlusion",
        "B. Transfusion-Associated Circulatory Overload",
        "C. Transfusion-Activated Coagulation Outcome",
        "D. Transfusion-Associated Capillary Occlusion",
        "Answer: B",
        "Rationale: TACO = volume overload; treat with diuresis/support.",
        "",
        "MCQ 15",
        "Best immediate step when acute respiratory distress occurs during transfusion:",
        "A. Give diuretics only",
        "B. Continue transfusion slowly",
        "C. Stop transfusion and assess",
        "D. Give vitamin K",
        "Answer: C",
        "Rationale: Stop transfusion first, then evaluate (TRALI/TACO/hemolysis).",
        "",
        "MCQ 16",
        "Massive transfusion resuscitation strategy classically targets ratio closest to:",
        "A. 4:1:1  B. 2:1:1  C. 1:1:1  D. 1:2:1",
        "Answer: C",
        "Rationale: Balanced hemostatic resuscitation commonly taught as 1:1:1.",
        "",
        "MCQ 17",
        "Classic DIC laboratory pattern is:",
        "A. Platelets ↑, PT ↓, fibrinogen ↑, D-dimer ↓",
        "B. Platelets ↓, PT ↑, fibrinogen ↓, D-dimer ↑",
        "C. Platelets normal, PT normal, fibrinogen normal, D-dimer normal",
        "D. Platelets ↓, PT ↓, fibrinogen ↑, D-dimer ↓",
        "Answer: B",
        "Rationale: Consumption + fibrinolysis → thrombocytopenia, prolonged PT/aPTT, low fibrinogen, high D-dimer.",
        "",
        "MCQ 18",
        "Uremic bleeding is primarily due to:",
        "A. Thrombocytopenia",
        "B. Platelet dysfunction",
        "C. Factor VII deficiency",
        "D. Hyperfibrinogenemia",
        "Answer: B",
        "Rationale: Uremia causes platelet dysfunction; DDAVP can help.",
        "",
        "MCQ 19",
        "Intraoperative diffuse oozing with fibrinogen 120 mg/dL: best next product is:",
        "A. PRBC  B. Platelets  C. Cryoprecipitate  D. Vitamin K",
        "Answer: C",
        "Rationale: Replace fibrinogen with cryo (or fibrinogen concentrate).",
        "",
        "MCQ 20",
        "When evaluating unexpected bleeding, the FIRST priority is to:",
        "A. Send TEG immediately only",
        "B. Give FFP empirically",
        "C. Identify/secure surgical source and stabilize patient",
        "D. Give platelets empirically",
        "Answer: C",
        "Rationale: Technical bleeding is most common; stabilize and assess source first."
      ]
    }
  ]
},
{
  id: "shock-master-review",
  title: "CHAPTER V. SHOCK",
  subtitle: "Schwartz backbone + modern guidelines + oral boards + CERES/RITE mastery",
  sections: [

/* =========================================================
   I. EVOLUTION IN UNDERSTANDING SHOCK
========================================================= */
{
  id: "shock-evolution",
  title: "I. Evolution in Understanding Shock",
  content: [
"Schwartz Concept (VERY IMPORTANT EXAM LINE)",
"Shock is NOT hypotension — it is inadequate cellular oxygen utilization.",

"Modern definition:",
"Acute circulatory failure resulting in inadequate tissue perfusion and cellular hypoxia.",

"Historical Progression:",
"• Early 1900s — BP collapse",
"• WWII — Blood loss model",
"• 1970–90s — Oxygen delivery (DO₂)",
"• Modern — Cellular + inflammatory + mitochondrial dysfunction",

"Modern Challenge:",
"Patients may have normal BP but still be in shock.",
"Examples: compensated hemorrhage, early septic shock.",
"Lactate elevation precedes hypotension.",

"EXAM PEARL:",
"Hypotension is a LATE finding in shock."
]
},

/* =========================================================
   II. PATHOPHYSIOLOGY
========================================================= */
{
  id: "shock-pathophysiology",
  title: "II. Pathophysiology of Shock",
  content: [
"Shock = mismatch between Oxygen Delivery (DO₂) and Oxygen Consumption (VO₂).",

"DO₂ = CO × CaO₂",
"CO = cardiac output",
"CaO₂ = oxygen content",

"Cellular consequences:",
"• Anaerobic metabolism",
"• Lactate production",
"• ATP depletion",
"• Na/K pump failure",
"• Cellular edema",
"• Mitochondrial dysfunction",

"Result → Multiple Organ Dysfunction Syndrome (MODS)."
]
},

/* =========================================================
   III. NEUROENDOCRINE RESPONSE
========================================================= */
{
  id: "shock-neuroendocrine",
  title: "III. Neuroendocrine Response to Hemorrhage",
  content: [
"Afferent signals:",
"• Baroreceptors",
"• Chemoreceptors",
"• Renal perfusion sensors",

"↓ Stretch → Sympathetic activation.",

"Efferent response:",
"• ↑ Catecholamines",
"• ↑ HR and contractility",
"• Peripheral vasoconstriction",

"Hormonal response:",
"ADH → water retention",
"RAAS → vasoconstriction + sodium retention",
"Cortisol → glucose mobilization",

"Circulatory redistribution:",
"Perfusion preserved to brain and heart.",
"Reduced perfusion to skin, gut, kidney.",

"ORAL BOARD LINE:",
"Splanchnic hypoperfusion drives gut barrier failure → systemic inflammation.",

"Expanded Explanation:",
"Mesenteric vasoconstriction causes mucosal ischemia.",
"Loss of tight junctions allows bacterial translocation.",
"Endotoxin release triggers cytokine storm (TNF-α, IL-1, IL-6).",
"This amplifies systemic inflammation and contributes to MODS.",

"High-yield statement:",
"The gut acts as the motor of multiple organ failure in prolonged shock."
]
},

/* =========================================================
   IV. METABOLIC EFFECTS
========================================================= */
{
  id: "shock-metabolic",
  title: "IV. Metabolic Effects",
  content: [
"Shock produces a hypermetabolic state.",
"• Insulin resistance",
"• Hyperglycemia",
"• Lipolysis",
"• Proteolysis",

"Purpose: provide metabolic substrate for survival."
]
},

/* =========================================================
   V. CELLULAR HYPOPERFUSION
========================================================= */
{
  id: "shock-cellular",
  title: "V. Cellular Hypoperfusion",
  content: [
"Oxygen debt accumulates when oxygen delivery is inadequate.",
"Persistent oxygen debt leads to organ failure.",

"Resuscitation goal:",
"Repay oxygen debt EARLY."
]
},

/* =========================================================
   VI. IMMUNE RESPONSE
========================================================= */
{
  id: "shock-inflammatory",
  title: "VI. Immune and Inflammatory Response",
  content: [
"Shock behaves as a systemic inflammatory disease.",

"Cytokines:",
"TNF-α, IL-1, IL-6 → vasodilation, capillary leak, myocardial depression.",

"Complement activation:",
"Endothelial injury and microthrombosis.",

"Neutrophil activation:",
"ROS production → tissue damage → ARDS.",

"EXAM PEARL:",
"Organ failure in shock is largely inflammatory-mediated."
]
},

/* =========================================================
   VII. FORMS OF SHOCK
========================================================= */
{
  id: "shock-types",
  title: "VII. Forms of Shock",
  content: [
"Hypovolemic Shock:",
"↓ preload, ↓ CO, ↑ SVR.",
"Cold clammy skin, tachycardia.",
"ATLS: bleeding control, 1:1:1 transfusion, early TXA.",

"Traumatic Shock:",
"Combination hemorrhage + inflammation + tissue injury.",
"Early trauma-induced coagulopathy.",

"Septic Shock:",
"Infection + vasopressor needed for MAP ≥65 + lactate >2.",
"Warm extremities early.",
"SSC 2024 bundle:",
"Lactate, cultures, antibiotics, 30 mL/kg fluids, norepinephrine.",

"Cardiogenic Shock:",
"Pump failure.",
"Pulmonary edema, high CVP.",
"Treat with inotropes and revascularization.",

"Obstructive Shock:",
"Tension pneumothorax, tamponade, massive PE.",
"Treatment = relieve obstruction.",

"Neurogenic Shock:",
"Hypotension + bradycardia + warm skin.",
"Loss of sympathetic tone."
]
},

/* =========================================================
   VIII. HEMODYNAMIC COMPARISON
========================================================= */
{
  id: "shock-hemodynamics",
  title: "Hemodynamic Profiles (Exam Favorite)",
  content: [
"Hypovolemic: ↓CO ↑SVR ↓CVP ↓PCWP (empty tank).",
"Septic early: ↑CO ↓SVR warm shock.",
"Septic late: ↓CO ↓SVR myocardial depression.",
"Cardiogenic: ↓CO ↑SVR ↑CVP ↑PCWP (pump failure).",
"Obstructive: ↓CO ↑CVP mechanical block.",
"Neurogenic: ↓SVR + bradycardia.",

"Memory Trick:",
"Cold shock → HIGH SVR",
"Warm shock → LOW SVR",

"Oral Board Pearl:",
"Shock classification depends on whether the problem is volume, pump, vessel tone, or obstruction."
]
},

/* =========================================================
   IX. ENDPOINTS OF RESUSCITATION
========================================================= */
{
  id: "shock-endpoints",
  title: "VIII. Endpoints of Resuscitation",
  content: [
"Clinical:",
"• Mental status",
"• Urine output >0.5 mL/kg/hr",
"• Capillary refill",

"Laboratory:",
"Lactate clearance — BEST global marker.",
"Base deficit — severity indicator.",
"ScvO₂ — oxygen balance.",

"Modern resuscitation ≠ BP normalization."
]
},

/* =========================================================
   X. ORAL BOARD CASES + MCQs
========================================================= */
{
  id: "shock-exam-questions",
  title: "IX–X. Oral Boards & High-Yield MCQs",
  content: [
"Case: Trauma patient normal BP but lactate 5 → compensated hemorrhagic shock.",
"Case: Warm hypotensive septic patient → norepinephrine after fluids.",
"Case: Hypotension + JVD + clear lungs → cardiac tamponade.",
"Case: Hypotension + bradycardia → neurogenic shock.",

"MCQ Pearls:",
"Earliest hemorrhagic sign = tachycardia.",
"Best resuscitation endpoint = lactate clearance.",
"First vasopressor septic shock = norepinephrine."
]
}

]
},
{
  id: "surgical-infections-master-review",
  title: "CHAPTER VI. SURGICAL INFECTIONS",
  subtitle: "Schwartz 11e backbone + modern guidelines + oral boards depth + CERES/RITE MCQs",
  sections: [

    /* =========================================================
       I. HISTORICAL BACKGROUND
    ========================================================= */
    {
      id: "si-historical-background",
      title: "I. Historical Background (Why Surgeons Care)",
      content: [
        "Before antisepsis:",
        "• Postoperative infection mortality >50%",
        "• Surgery limited mainly to amputations",
        "",
        "Major revolutions:",
        "• Semmelweis — hand washing ↓ puerperal sepsis",
        "• Lister — antiseptic surgery (carbolic acid)",
        "• Pasteur — germ theory",
        "• Antibiotics era — ↓ mortality but NOT elimination",
        "",
        "⭐ Schwartz Core Principle:",
        "Surgery became possible because infection became controllable — but infection remains the primary cause of postoperative morbidity.",
        "",
        "Modern problem:",
        "Antibiotic resistance + invasive procedures = infections returning as major surgical threat."
      ]
    },

    /* =========================================================
       II. PATHOGENESIS OF INFECTION (HIGH-YIELD CORE)
    ========================================================= */
    {
      id: "si-pathogenesis",
      title: "II. Pathogenesis of Infection (High-Yield Core)",
      content: [
        "Infection occurs when:",
        "Bacterial load × virulence  >  Host defense",
        "",
        "This equation is repeatedly tested conceptually."
      ]
    },

    /* =========================================================
       II-A. HOST DEFENSES (SCHWARTZ FOUNDATION)
    ========================================================= */
    {
      id: "si-host-defenses",
      title: "Host Defenses (Schwartz Foundation)",
      content: [
        "1) Mechanical barriers:",
        "• Skin",
        "• Mucosa",
        "• Gastric acid",
        "• Normal flora",
        "",
        "Surgery disrupts ALL of these simultaneously.",
        "",
        "2) Innate immunity (first-line defense):",
        "• Neutrophils",
        "• Macrophages",
        "• Complement",
        "• Cytokines",
        "",
        "Key mechanism: phagocytosis + oxidative killing.",
        "",
        "3) Adaptive immunity:",
        "• T cells",
        "• B cells",
        "• Antibody production",
        "",
        "Less important early in surgical infections.",
        "",
        "⭐ ORAL BOARD PEARL:",
        "Most surgical infections occur due to failure of innate immunity rather than adaptive immunity."
      ]
    },

    /* =========================================================
       WHY SURGERY PREDISPOSES TO INFECTION
    ========================================================= */
    {
      id: "si-why-surgery-predisposes",
      title: "Why Surgery Predisposes to Infection",
      content: [
        "Schwartz emphasizes three simultaneous insults:",
        "1) Tissue injury → ischemia",
        "2) Foreign material (sutures, prosthesis)",
        "3) Dead space/fluid collection"
      ]
    },

    /* =========================================================
       BIOFILM FORMATION (VERY HIGH-YIELD MODERN CONCEPT)
    ========================================================= */
    {
      id: "si-biofilm",
      title: "Biofilm Formation (Very High-Yield Modern Concept)",
      content: [
        "Bacteria attach to surfaces → produce extracellular matrix.",
        "",
        "Effects:",
        "• Antibiotics poorly penetrate",
        "• Immune cells ineffective",
        "• Chronic infection develops",
        "",
        "Examples:",
        "• Mesh infection",
        "• Prosthetic joint infection",
        "• Central lines",
        "",
        "⭐ BOARD LINE:",
        "Presence of foreign body lowers infective dose by >10,000-fold."
      ]
    },

    /* =========================================================
       III. DEFINITIONS (EXAM FAVORITE)
    ========================================================= */
    {
      id: "si-definitions",
      title: "III. Definitions (Exam Favorite)",
      content: [
        "Colonization: organisms present without tissue invasion.",
        "Contamination: transient organisms introduced.",
        "Infection: microbial invasion causing host response.",
        "",
        "SIRS (know but less emphasized now): ≥2 of:",
        "• HR >90",
        "• RR >20",
        "• Temp abnormal",
        "• WBC abnormal",
        "",
        "Sepsis (Sepsis-3 — IMPORTANT): infection + organ dysfunction.",
        "Measured using: SOFA score increase ≥2.",
        "",
        "Septic shock:",
        "• Vasopressor required for MAP ≥65",
        "• Lactate >2 despite fluids."
      ]
    },

    /* =========================================================
       IV. MICROBIOLOGY OF SURGICAL INFECTIONS
    ========================================================= */
    {
      id: "si-microbiology",
      title: "IV. Microbiology of Surgical Infections",
      content: [
        "A) Bacteria (MOST IMPORTANT)",
        "",
        "Gram positive (common in clean surgery):",
        "• Staph aureus",
        "• Staph epidermidis",
        "Associated with: skin flora and prosthetics.",
        "",
        "Gram negative (common intra-abdominal):",
        "• E. coli",
        "• Klebsiella",
        "• Enterobacter",
        "Cause endotoxin-mediated sepsis.",
        "",
        "Anaerobes (key abdominal pathogens):",
        "• Bacteroides fragilis",
        "",
        "⭐ EXAM PEARL:",
        "Mixed aerobic + anaerobic infection is typical of intra-abdominal sepsis.",
        "",
        "B) Fungi:",
        "Candida species — risk factors:",
        "• Prolonged antibiotics",
        "• TPN",
        "• ICU stay",
        "• Perforated viscus",
        "Guideline concept: not all Candida needs treatment — only invasive infection.",
        "",
        "C) Viruses:",
        "Important mainly for immunosuppressed/transplant patients."
      ]
    },

    /* =========================================================
       V. PREVENTION & TREATMENT — GENERAL PRINCIPLES
    ========================================================= */
    {
      id: "si-prevention-treatment",
      title: "V. Prevention and Treatment of Surgical Infections",
      content: [
        "CORE SCHWARTZ PRINCIPLE:",
        "Antibiotics DO NOT cure surgical infections without source control.",
        "",
        "This is one of the most tested oral-board concepts."
      ]
    },

    /* =========================================================
       V-A. SOURCE CONTROL (MOST IMPORTANT SECTION)
    ========================================================= */
    {
      id: "si-source-control",
      title: "Source Control (Most Important Section)",
      content: [
        "Definition: physical elimination of infection focus.",
        "",
        "Methods:",
        "• Drainage of abscess",
        "• Debridement",
        "• Removal of necrotic tissue",
        "• Control of leak/perforation",
        "• Removal of infected device",
        "",
        "⭐ ORAL BOARD LINE:",
        "Persistent sepsis despite antibiotics indicates inadequate source control.",
        "",
        "Timing principle:",
        "Early source control (<24 hrs) ↓ mortality dramatically."
      ]
    },

    /* =========================================================
       V-B. APPROPRIATE USE OF ANTIMICROBIALS
    ========================================================= */
    {
      id: "si-antimicrobials",
      title: "Appropriate Use of Antimicrobial Agents",
      content: [
        "Goals:",
        "• Reduce bacterial load",
        "• Prevent spread",
        "• Adjunct to surgery",
        "",
        "Surgical prophylaxis (VERY TESTED):",
        "Timing: within 60 minutes before incision (vancomycin/fluoroquinolone: 120 min).",
        "Duration: NOT >24 hrs in most surgeries.",
        "",
        "Empiric therapy principles:",
        "Cover based on infection site, likely organisms, and patient risk factors.",
        "Then: de-escalate after cultures."
      ]
    },

    /* =========================================================
       VI. INFECTIONS OF SIGNIFICANCE IN SURGICAL PATIENTS
    ========================================================= */
    {
      id: "si-infections-significance",
      title: "VI. Infections of Significance in Surgical Patients",
      content: [
        "1) Surgical Site Infection (SSI)",
        "Types:",
        "• Superficial — skin/subcutaneous",
        "• Deep — fascia/muscle",
        "• Organ-space — intra-abdominal",
        "",
        "Risk factors:",
        "• Diabetes",
        "• Obesity",
        "• Hypothermia",
        "• Poor oxygenation",
        "",
        "WHO guideline emphasis:",
        "Maintain normothermia + glucose control.",
        "",
        "2) Intra-abdominal infection:",
        "Usually polymicrobial.",
        "Key concept: abscess = surgical disease.",
        "Treatment: drainage + antibiotics.",
        "",
        "3) Skin and soft tissue infection:",
        "Spectrum: cellulitis → abscess → necrotizing infection.",
        "",
        "Necrotizing soft tissue infection (EXTREMELY TESTED):",
        "Clues:",
        "• Pain out of proportion",
        "• Rapid progression",
        "• Skin anesthesia",
        "• Systemic toxicity",
        "Management: immediate surgical debridement (do NOT wait imaging)."
      ]
    },

    /* =========================================================
       VII. POSTOPERATIVE NOSOCOMIAL INFECTIONS
    ========================================================= */
    {
      id: "si-nosocomial",
      title: "VII. Postoperative Nosocomial Infections",
      content: [
        "Common:",
        "• Pneumonia",
        "• Catheter UTI",
        "• Line infection",
        "• C. difficile colitis",
        "",
        "Prevention:",
        "• Early mobilization",
        "• Pulmonary toilet",
        "• Remove catheters ASAP"
      ]
    },

    /* =========================================================
       VIII. SEPSIS (SURGEON VERSION)
    ========================================================= */
    {
      id: "si-sepsis-surgeon",
      title: "VIII. Sepsis (Surgeon Version)",
      content: [
        "Sepsis management priorities:",
        "1) Early antibiotics",
        "2) Source control",
        "3) Fluid resuscitation",
        "4) Vasopressors if needed",
        "",
        "Failure to control source = mortality driver."
      ]
    },

    /* =========================================================
       IX. RESISTANT ORGANISMS
    ========================================================= */
    {
      id: "si-resistant-organisms",
      title: "IX. Resistant Organisms (Very Modern Exam Area)",
      content: [
        "Examples:",
        "• MRSA",
        "• VRE",
        "• ESBL",
        "• CRE",
        "",
        "Risk factors:",
        "• Prolonged hospitalization",
        "• Prior antibiotics",
        "• ICU exposure",
        "",
        "Principle:",
        "Use narrow therapy whenever possible."
      ]
    },

    /* =========================================================
       X. BLOOD-BORNE PATHOGENS
    ========================================================= */
    {
      id: "si-blood-borne",
      title: "X. Blood-Borne Pathogens (Surgeon Safety)",
      content: [
        "Major concerns:",
        "• HBV",
        "• HCV",
        "• HIV",
        "",
        "Post-exposure:",
        "Immediate washing + prophylaxis."
      ]
    },

    /* =========================================================
       XI. BIOLOGIC WARFARE AGENTS
    ========================================================= */
    {
      id: "si-biowarfare",
      title: "XI. Biologic Warfare Agents (Lower Yield but Tested)",
      content: [
        "Anthrax (Bacillus anthracis): painless black eschar.",
        "Plague (Yersinia pestis): rapid septicemia + pneumonia.",
        "Smallpox: centrifugal vesicular rash.",
        "Tularemia (Francisella tularensis): ulceroglandular disease."
      ]
    },

    /* =========================================================
       ORAL BOARD QUESTIONS (REAL STYLE)
    ========================================================= */
    {
      id: "si-oral-boards",
      title: "Oral Board Questions (How They Ask)",
      content: [
        "Case 1:",
        "Patient septic POD5 after colectomy despite antibiotics.",
        "Most important step?",
        "CT scan looking for abscess → source control.",
        "",
        "Case 2:",
        "Patient receives prophylactic antibiotics for 5 days after clean hernia repair.",
        "Correct?",
        "No — increases resistance without benefit.",
        "",
        "Case 3:",
        "Severe pain, minimal skin findings, systemic toxicity.",
        "Diagnosis?",
        "Necrotizing fasciitis → immediate OR."
      ]
    },

    /* =========================================================
       HIGH-YIELD MCQs (CERES/RITE STYLE)
    ========================================================= */
    {
      id: "si-mcqs",
      title: "High-Yield MCQs (CERES/RITE Style)",
      content: [
        "Q1: Most important principle in treating surgical infection?",
        "A. Broad antibiotics",
        "B. Source control",
        "C. ICU monitoring",
        "D. Fluids",
        "✅ Answer: B",
        "",
        "Q2: Best prevention of SSI?",
        "✅ Antibiotics within 60 minutes before incision.",
        "",
        "Q3: Persistent sepsis despite antibiotics indicates:",
        "✅ Undrained source.",
        "",
        "Q4: Most common organism SSI clean surgery?",
        "✅ Staphylococcus aureus."
      ]
    },

    /* =========================================================
       TOP-THE-EXAM PEARLS
    ========================================================= */
    {
      id: "si-pearls",
      title: "Top-the-Exam Pearls",
      content: [
        "• Infection = bacteria vs host balance.",
        "• Source control saves lives.",
        "• Abscess requires drainage.",
        "• Foreign bodies promote biofilm.",
        "• Antibiotics are adjuncts, not definitive therapy.",
        "• Necrotizing infection → operate immediately."
      ]
    }

  ]
},
{
  id: "trauma-initial-eval-resuscitation-master",
  title: "CHAPTER VII: TRAUMA",
  subtitle: "Schwartz backbone + ATLS 11 (xABCDE) + modern DCR/MTP + TBI targets + Oral Boards + CERES/RITE MCQs",
  sections: [

    /* =========================================================
       INTRODUCTION
    ========================================================= */
    {
      id: "trauma-introduction",
      title: "Introduction (Schwartz Framing)",
      content: [
        "Trauma care is time-critical physiology, not diagnosis collecting.",
        "Early preventable deaths: airway obstruction + exsanguination.",
        "Later preventable deaths: secondary brain injury, sepsis/MODS, missed injuries.",
        "",
        "Core surgeon mindset:",
        "Treat life threats in order of time-to-death. Reassess continuously."
      ]
    },

    /* =========================================================
       INITIAL EVALUATION & RESUSCITATION — ATLS 11: xABCDE
    ========================================================= */
    {
      id: "trauma-initial-eval",
      title: "Initial Evaluation & Resuscitation (ATLS 11: xABCDE)",
      content: [
        "ATLS 11 emphasizes xABCDE: control catastrophic hemorrhage BEFORE airway.",
        "",
        "x — Catastrophic hemorrhage (do FIRST):",
        "• Direct pressure / wound packing (hemostatic gauze if available)",
        "• Tourniquet for life-threatening extremity bleeding",
        "• Pelvic binder early for suspected unstable pelvic fracture",
        "",
        "Oral board line:",
        "“I control life-threatening external hemorrhage immediately because airway won’t matter if the patient exsanguinates.”",
        "",
        "A — Airway with C-spine protection:",
        "Board triggers to intubate:",
        "• GCS ≤ 8",
        "• Airway compromise / facial burns / expanding neck hematoma",
        "• Hypoventilation or inability to protect airway",
        "",
        "Pearl:",
        "Do not chase a perfect airway while catastrophic hemorrhage is uncontrolled (xABC logic).",
        "",
        "B — Breathing & ventilation (name the killers):",
        "Immediate life threats to rule out/treat in primary survey:",
        "• Tension pneumothorax",
        "• Massive hemothorax",
        "• Open pneumothorax",
        "• Flail chest with pulmonary contusion",
        "• Airway disruption (rare, fatal)",
        "",
        "Board move set (what you do NOW):",
        "• Tension PTX → decompression then chest tube",
        "• Massive hemothorax → chest tube + activate MTP ± OR",
        "",
        "C — Circulation with hemorrhage control (DCR + MTP):",
        "Goal: restore perfusion WITHOUT worsening coagulopathy.",
        "",
        "Damage Control Resuscitation (DCR) pillars:",
        "1) Permissive hypotension (SELECT patients; DO NOT apply in TBI)",
        "2) Hemostatic resuscitation: early blood products, avoid large crystalloids",
        "3) Correct hypothermia + acidosis + coagulopathy (lethal triad/diamond)",
        "",
        "Massive Transfusion Protocol (MTP):",
        "• Early activation when hemorrhagic shock suspected",
        "• Balanced component therapy often targets ~1:1:1 (plasma:platelets:RBC) early",
        "",
        "Tranexamic Acid (TXA) — trauma hemorrhage (high-yield):",
        "• Give as early as possible; benefit is time-dependent (ideally within 3 hours of injury).",
        "• Dose (common trauma protocol): TXA 1 g IV over 10 minutes, then 1 g IV infusion over 8 hours.",
        "",
        "Board line:",
        "“If hypotensive with suspected hemorrhage, I activate MTP early, minimize crystalloids, correct hypothermia, and consider early TXA.”",
        "",
        "D — Disability (neuro):",
        "• GCS, pupils, lateralizing signs",
        "• Check glucose (hypoglycemia can mimic TBI)",
        "",
        "Hard rule (boards): avoid hypoxia and hypotension in TBI — prevent secondary brain injury.",
        "",
        "E — Exposure/Environment:",
        "• Fully expose to avoid missed injuries",
        "• Prevent hypothermia aggressively (warm room, forced-air warming, warmed fluids)"
      ]
    },

    /* =========================================================
       PRIMARY SURVEY / SECONDARY SURVEY
    ========================================================= */
    {
      id: "trauma-primary-secondary",
      title: "Primary Survey vs Secondary Survey",
      content: [
        "Primary survey = find and treat immediate life threats (xABCDE).",
        "Secondary survey = head-to-toe exam + AMPLE history + complete reassessment.",
        "",
        "Secondary survey pearls (missed injury prevention):",
        "• Repeat vitals and repeat exam after interventions",
        "• Pain control helps exam (but monitor neuro status in TBI)",
        "",
        "Mechanism and patterns (exam pattern recognition):",
        "• High-speed MVC → aortic injury risk, pelvic fracture, solid organ injury",
        "• Fall from height → calcaneus/spine, pelvic ring, head injury",
        "• Stab vs GSW → different trajectory/cavitation logic"
      ]
    },

    /* =========================================================
       REGIONAL ASSESSMENT & SPECIAL DIAGNOSTIC TESTS
    ========================================================= */
    {
      id: "trauma-diagnostics",
      title: "Regional Assessment & Special Diagnostic Tests",
      content: [
        "FAST/eFAST = triage tool for unstable vs stable workup.",
        "• Unstable + positive FAST → OR / damage control pathway",
        "• Stable → CT with contrast (CT is a stability privilege)",
        "",
        "Oral board trap:",
        "Ordering CT in an unstable patient with ongoing hemorrhage."
      ]
    },

    /* =========================================================
       GENERAL PRINCIPLES OF MANAGEMENT
    ========================================================= */
    {
      id: "trauma-general-principles",
      title: "General Principles of Management (Trauma Surgery Decision Logic)",
      content: [
        "Operate for PHYSIOLOGY, not for perfect imaging.",
        "• Persistent hemodynamic instability despite resuscitation → source control for bleeding.",
        "",
        "Damage Control Surgery (DCS): indication is physiologic exhaustion, not just a big injury.",
        "Classic triggers:",
        "• Hypothermia",
        "• Acidosis",
        "• Coagulopathy",
        "• Massive transfusion / ongoing bleeding",
        "",
        "DCS steps:",
        "1) Abbreviated operation: stop bleeding + limit contamination",
        "2) Temporary closure",
        "3) ICU resuscitation",
        "4) Planned re-exploration"
      ]
    },

    /* =========================================================
       TRANSFUSION PRACTICES
    ========================================================= */
    {
      id: "trauma-transfusion",
      title: "Transfusion Practices (Modern DCR/MTP High-Yield)",
      content: [
        "Old approach: multiple liters crystalloids first.",
        "Modern approach: early blood products + MTP to avoid dilutional coagulopathy and hypothermia.",
        "",
        "Why balanced transfusion matters (exam physiology):",
        "• RBC = oxygen carrying capacity",
        "• Plasma = clotting factors",
        "• Platelets = primary hemostasis",
        "RBC alone → dilutional coagulopathy → continued bleeding.",
        "",
        "TXA dosing reminder (trauma hemorrhage):",
        "• TXA 1 g IV over 10 minutes, then 1 g IV infusion over 8 hours.",
        "• Give early; benefit declines after 3 hours post-injury."
      ]
    },

    /* =========================================================
       PROPHYLACTIC MEASURES
    ========================================================= */
    {
      id: "trauma-prophylaxis",
      title: "Prophylactic Measures (What Gets Asked)",
      content: [
        "• Tetanus prophylaxis (wounds)",
        "• Early VTE prophylaxis once bleeding risk acceptable (institutional protocols vary)",
        "• Antibiotics for open fractures (time-sensitive) and penetrating hollow viscus injury (short targeted courses; avoid prolonged ‘just because’)"
      ]
    },

    /* =========================================================
       TREATMENT OF SPECIFIC INJURIES — HEAD/C-SPINE/CHEST/ABD/PELVIS/EXT
    ========================================================= */
    {
      id: "trauma-specific-injuries",
      title: "Treatment of Specific Injuries (Exam Essentials)",
      content: [
        "A) Head injuries (TBI) — board-critical: prevent secondary injury.",
        "Core priorities:",
        "• Avoid hypoxia",
        "• Avoid hypotension",
        "• Avoid extremes of PaCO₂ (routine hyperventilation is not recommended; reserve for impending herniation as a temporizing measure).",
        "",
        "Common board targets (high-yield):",
        "• SBP thresholds (to reduce mortality):",
        "  - Age 50–69: maintain SBP ≥ 100 mmHg",
        "  - Age 15–49 or >70: maintain SBP ≥ 110 mmHg",
        "• ICP treatment threshold: treat ICP > 22 mmHg",
        "• CPP target: commonly aim CPP 60–70 mmHg (avoid overaggressive CPP that increases ARDS risk).",
        "",
        "Oral board lines:",
        "“Even a single episode of hypotension or hypoxia worsens TBI outcome—so I prioritize oxygenation and perfusion early.”",
        "“I avoid routine hyperventilation; I use it only as a short bridge if herniation is suspected while definitive therapy is arranged.”",
        "",
        "B) Cervical spine injuries:",
        "• Immobilize initially",
        "• Document neuro exam before and after interventions",
        "• Hypotension + bradycardia in high cord injury → consider neurogenic shock",
        "",
        "C) Chest injuries (do the killers fast):",
        "Primary killers:",
        "• Tension pneumothorax",
        "• Massive hemothorax",
        "• Open pneumothorax",
        "• Flail chest",
        "• Tamponade",
        "• Airway disruption",
        "",
        "D) Abdominal injuries:",
        "Decision hinges on hemodynamic stability, peritonitis, CT findings, and serial exams.",
        "• Blunt solid organ injury: stable → non-operative monitoring/IR as indicated; unstable → operative control (often DCS).",
        "",
        "E) Pelvic fracture hemorrhage control (big oral board trap):",
        "Minimal pathway:",
        "1) Pelvic binder early",
        "2) Activate MTP",
        "3) If unstable: OR-based hemorrhage control (e.g., preperitoneal pelvic packing where used) ± external fixation depending on resources",
        "4) Angioembolization when arterial source suspected/confirmed and patient can reach IR",
        "",
        "F) Extremity vascular injuries + compartment syndrome:",
        "Hard signs → OR:",
        "• Pulsatile bleeding",
        "• Expanding hematoma",
        "• Bruit/thrill",
        "• Distal ischemia",
        "",
        "Compartment syndrome (don’t miss):",
        "• Pain out of proportion",
        "• Pain on passive stretch",
        "• Tense compartment",
        "Treatment: fasciotomy (do not delay)."
      ]
    },

    /* =========================================================
       SURGICAL ICU MANAGEMENT
    ========================================================= */
    {
      id: "trauma-icu",
      title: "Surgical ICU Management",
      content: [
        "Postinjury resuscitation (avoid the ‘second hit’):",
        "• Stop ongoing bleeding",
        "• Correct coagulopathy",
        "• Ventilator strategy for contusion/ARDS risk",
        "• Avoid fluid overload (worsens pulmonary edema/ACS)",
        "",
        "Abdominal Compartment Syndrome (ACS) — crisp definition:",
        "• Intra-abdominal hypertension (IAH): IAP ≥ 12 mmHg",
        "• ACS: sustained IAP > 20 mmHg + new organ dysfunction",
        "",
        "Management ladder:",
        "• Measure bladder pressure",
        "• Optimize sedation/analgesia, evacuate intraluminal contents, adjust fluids/diuresis when appropriate",
        "• If ACS with organ failure → decompressive laparotomy + temporary abdominal closure (damage control principles)"
      ]
    },

    /* =========================================================
       SPECIAL POPULATIONS
    ========================================================= */
    {
      id: "trauma-special-populations",
      title: "Special Populations",
      content: [
        "Pregnant trauma:",
        "• Mother first (best fetal resuscitation is maternal resuscitation)",
        "• Left uterine displacement",
        "• Rh immunoglobulin when indicated",
        "• Fetal monitoring when viable gestational age",
        "",
        "Geriatric trauma:",
        "• ‘Normal vitals’ can be misleading (beta-blockers, low reserve)",
        "• Lower threshold for imaging/admission",
        "• Anticoagulants complicate head injury decisions",
        "",
        "Pediatric trauma:",
        "• Strong compensation until sudden crash",
        "• Consider non-accidental trauma when pattern inconsistent"
      ]
    },

    /* =========================================================
       ORAL BOARD QUESTIONS
    ========================================================= */
    {
      id: "trauma-oral-boards",
      title: "Oral Board Questions (How Consultants Ask)",
      content: [
        "1) “Walk me through ATLS in one minute.”",
        "Answer: xABCDE with catastrophic hemorrhage control first.",
        "",
        "2) “Unstable pelvic fracture—what’s your sequence?”",
        "Binder + MTP + OR-based hemorrhage control (PPP where used) ± angioembolization depending on physiology/resources.",
        "",
        "3) “Why not 3 liters LR first?”",
        "Large crystalloids → dilutional coagulopathy + hypothermia → worse bleeding; modern DCR uses early blood products/MTP.",
        "",
        "4) “FAST positive, hypotensive—CT?”",
        "No. OR. CT is for stable patients.",
        "",
        "5) “TBI + hypotension—permissive hypotension?”",
        "No. Avoid hypotension in TBI; protect perfusion and oxygenation."
      ]
    },

    /* =========================================================
       HIGH-YIELD MCQs
    ========================================================= */
    {
      id: "trauma-mcqs",
      title: "High-Yield MCQs (CERES/RITE Style)",
      content: [
        "Q1. ATLS 11 sequence emphasizes:",
        "A) ABCDE",
        "B) CABDE",
        "C) xABCDE",
        "D) EABCDE",
        "✅ Answer: C",
        "",
        "Q2. Hypotensive trauma patient with suspected hemorrhage and poor response to initial fluids — next best step:",
        "A) CT pan-scan",
        "B) Start MTP / hemostatic resuscitation",
        "C) Wait for labs",
        "D) D5W infusion",
        "✅ Answer: B",
        "",
        "Q3. Abdominal compartment syndrome is defined as:",
        "A) IAP > 12 only",
        "B) IAP > 20 with new organ dysfunction",
        "C) IAP > 15 with tachycardia",
        "D) Any increased abdominal girth",
        "✅ Answer: B",
        "",
        "Q4. In TBI, which is most critical to avoid?",
        "A) Mild tachycardia",
        "B) Hypotension and hypoxia",
        "C) Mild fever",
        "D) Bradycardia alone",
        "✅ Answer: B",
        "",
        "Q5. Unstable pelvic fracture initial hemorrhage control measure:",
        "A) Pelvic binder early",
        "B) Immediate laparotomy always",
        "C) CT angiography first",
        "D) Observation",
        "✅ Answer: A",
        "",
        "Q6. TXA standard trauma regimen is:",
        "A) 10 g bolus",
        "B) 1 g IV over 10 min then 1 g infusion over 8 hours",
        "C) 500 mg IM only",
        "D) Oral TXA 1 g",
        "✅ Answer: B"
      ]
    },

    /* =========================================================
       TOP-THE-EXAM MEMORY MAP
    ========================================================= */
    {
      id: "trauma-exam-map",
      title: "Top-the-Exam Memory Map (Fast Recall)",
      content: [
        "• ATLS 11 = xABCDE (bleeding first).",
        "• Trauma hypotension + suspected bleed = MTP early; minimize crystalloids; prevent hypothermia.",
        "• TBI: never tolerate hypotension/hypoxia; treat ICP >22; target CPP ~60–70; avoid routine hyperventilation.",
        "• Pelvis: binder + MTP + OR-based control (PPP where used) ± IR.",
        "• ACS: IAP >20 + organ dysfunction; measure bladder pressure; decompress if ACS with organ failure."
      ]
    }

  ]
},
{
  id: "burns-master-review",
  title: "CHAPTER VIII. BURNS",
  subtitle:
    "Schwartz 11e backbone + ATLS 11th + ABA guidelines + Oral Boards + CERES/RITE MCQs",
  sections: [

/* =========================================================
I. BACKGROUND
========================================================= */
{
id: "burn-background",
title: "I. Background (Schwartz Foundation)",
content: [
"Burn injury is BOTH a local wound and a systemic inflammatory disease.",
"",
"Major causes:",
"• Thermal (most common)",
"• Electrical",
"• Chemical",
"• Radiation",
"",
"Schwartz Concept:",
"Burns >20% TBSA trigger systemic inflammatory response → capillary leak → burn shock.",
"",
"Key board idea:",
"Early mortality = shock and inhalation injury.",
"Late mortality = infection and organ failure."
]
},

/* =========================================================
II. INITIAL EVALUATION — ATLS 11th
========================================================= */
{
id: "burn-initial-evaluation",
title: "II. Initial Evaluation (ATLS 11th Edition)",
content: [
"ATLS PRIMARY SURVEY ALWAYS FIRST.",

"A — Airway with C-spine:",
"• Look for inhalation injury:",
"  - hoarseness",
"  - soot",
"  - singed nasal hairs",
"  - enclosed fire exposure",
"→ EARLY INTUBATION if suspected.",

"B — Breathing:",
"• Assess chest wall restriction.",
"• Circumferential burns may require escharotomy.",

"C — Circulation:",
"• Control bleeding.",
"• Burn shock develops from plasma leakage.",
"• Insert TWO large-bore IV lines through unburned skin if possible.",

"D — Disability:",
"Assess GCS, CO poisoning suspicion.",

"E — Exposure:",
"Fully undress patient; prevent hypothermia immediately."
]
},

/* =========================================================
III. BURN CLASSIFICATION
========================================================= */
{
id: "burn-classification",
title: "III. Burn Classification (Severity)",
content: [
"Minor Burn:",
"• <10% TBSA adult",
"",
"Moderate Burn:",
"• 10–20% TBSA",
"",
"Major Burn (ABA Referral Criteria):",
"• >20% TBSA adults",
"• Any inhalation injury",
"• Face, hands, feet, genitalia burns",
"• Electrical or chemical burns",
"",
"⭐ ORAL BOARD LINE:",
'“Burn center referral is based on physiology and location, not TBSA alone.”'
]
},

/* =========================================================
IV. BURN DEPTH
========================================================= */
{
id: "burn-depth",
title: "IV. Burn Depth",
content: [
"Superficial:",
"• Epidermis only",
"• Painful, no blisters",

"Superficial partial thickness:",
"• Blisters, moist, very painful",

"Deep partial thickness:",
"• Pale, less pain",
"• Often requires grafting",

"Full thickness:",
"• Dry, leathery, painless",
"• Requires excision + graft",

"Fourth degree:",
"• Muscle/bone involvement."
]
},

/* =========================================================
V. PROGNOSIS — BAUX SCORE (VERY HIGH YIELD)
========================================================= */
{
id: "burn-baux",
title: "V. Prognosis — Baux Score & Revised Baux",
content: [
"CLASSIC BAUX SCORE:",
"Mortality ≈ Age + %TBSA burned.",

"",
"REVISED BAUX SCORE (MODERN STANDARD):",
"Revised Baux = Age + TBSA + 17 (if inhalation injury).",

"",
"Interpretation:",
"• <80 → good survival",
"• 80–100 → moderate risk",
"• >100 → high mortality",

"",
"⭐ EXAM PEARL:",
"Inhalation injury dramatically worsens survival.",

"",
"ORAL BOARD LINE:",
'“Revised Baux integrates physiologic injury burden rather than burn size alone.”'
]
},

/* =========================================================
VI. RESUSCITATION — UPDATED (ATLS 11 + ABA)
========================================================= */
{
id: "burn-resuscitation",
title: "VI. Fluid Resuscitation (UPDATED GUIDELINES)",
content: [
"Indication:",
"• Adults ≥20% TBSA",

"",
"PARKLAND FORMULA (STARTING POINT ONLY):",
"4 mL × kg × %TBSA (LR).",

"",
"Administration:",
"• 1/2 first 8 hours from TIME OF BURN",
"• Remaining over next 16 hours.",

"",
"MODERN UPDATE (VERY IMPORTANT):",
"Formula is ONLY INITIAL ESTIMATE.",
"Resuscitation is TITRATED to endpoints.",

"",
"Targets (ABA / ATLS 11):",
"• Urine output ≥0.5 mL/kg/hr adults",
"• MAP ≥60–65 mmHg",
"• Lactate improving",

"",
"Avoid Fluid Creep:",
"Excess fluid causes:",
"• abdominal compartment syndrome",
"• pulmonary edema",
"• extremity compartment syndrome",

"",
"⭐ BOARD LINE:",
'“Urine output — not formula — guides burn resuscitation.”'
]
},

/* =========================================================
VII. INHALATION INJURY
========================================================= */
{
id: "burn-inhalation",
title: "VII. Inhalation Injury & Ventilator Strategy",
content: [
"Types:",
"• Thermal airway injury",
"• Chemical pneumonitis",
"• Carbon monoxide poisoning",

"",
"Diagnosis:",
"Bronchoscopy = gold standard.",

"",
"Management:",
"• Early intubation",
"• Lung protective ventilation",
"• Low tidal volume strategy",

"",
"CO Poisoning:",
"Pulse oximetry unreliable.",
"Treat with 100% oxygen."
]
},

/* =========================================================
VIII. BURN WOUND MANAGEMENT
========================================================= */
{
id: "burn-wound",
title: "VIII. Burn Wound Treatment",
content: [
"Initial:",
"• Gentle cleansing",
"• Debridement",
"• Topical antimicrobials",

"",
"Early excision & grafting:",
"Improves survival and reduces infection.",

"",
"⭐ SCHWARTZ PRINCIPLE:",
"Burn wound becomes infected tissue if not excised."
]
},

/* =========================================================
IX. NUTRITION (VERY TESTED)
========================================================= */
{
id: "burn-nutrition",
title: "IX. Nutrition",
content: [
"Burns create extreme hypermetabolism.",
"Energy expenditure may double.",

"",
"Principles:",
"• Early enteral feeding (<6–12 hrs)",
"• High protein requirement",

"",
"Benefits:",
"• preserves gut barrier",
"• reduces infection",
"• decreases catabolism."
]
},

/* =========================================================
X. COMPLICATIONS
========================================================= */
{
id: "burn-complications",
title: "X. Complications in Burn Care",
content: [
"Early:",
"• Burn shock",
"• ARDS",
"• Acute kidney injury",

"",
"Late:",
"• Sepsis (most common death cause)",
"• Multiorgan failure"
]
},

/* =========================================================
XI. SURGERY & WOUND COVERAGE
========================================================= */
{
id: "burn-surgery",
title: "XI. Surgery & Wound Coverage",
content: [
"Indications:",
"• Full thickness burns",
"• Non-healing deep partial burns",

"",
"Options:",
"• Split-thickness skin graft",
"• Dermal substitutes",
"• Flap coverage (complex areas)"
]
},

/* =========================================================
XII. REHABILITATION & LATE COMPLICATIONS
========================================================= */
{
id: "burn-rehab",
title: "XII. Rehabilitation & Late Complications",
content: [
"Major problems:",
"• Hypertrophic scars",
"• Contractures",
"• Heterotopic ossification",

"",
"Management:",
"• Early physiotherapy",
"• Pressure garments",
"• Splinting"
]
},

/* =========================================================
XIII. ORAL BOARD QUESTIONS
========================================================= */
{
id: "burn-orals",
title: "Oral Board Questions",
content: [
"Case 1:",
"30% TBSA burn arrives 3 hrs post injury.",
"Next step?",
"→ Start LR using Parkland and titrate to urine output.",

"",
"Case 2:",
"Enclosed-space fire victim hoarse but stable.",
"→ Early intubation.",

"",
"Case 3:",
"Massive fluids but oliguria.",
"→ Assess compartment syndrome or under-resuscitation."
]
},

/* =========================================================
XIV. HIGH-YIELD MCQs
========================================================= */
{
id: "burn-mcqs",
title: "High-Yield MCQs",
content: [
"Q1: Best endpoint of burn resuscitation?",
"✅ Urine output.",

"",
"Q2: Revised Baux adds what variable?",
"✅ Inhalation injury.",

"",
"Q3: Most common late cause of death in burns?",
"✅ Sepsis.",

"",
"Q4: Early excision reduces:",
"✅ Infection and mortality."
]
}

]
},
{
  id: "wound-healing-complete",
  title: "CHAPTER IX: WOUND HEALING",
  subtitle: "Schwartz Principles of Surgery 11th Ed — Full Surgical & Board Integration",
  sections: [

/* =========================================================
   HISTORY & FUNDAMENTAL PRINCIPLES
========================================================= */
{
id: "history",
title: "1) History and Fundamental Concepts",
content: [
"Wound healing has evolved from empirical surgical observation into a molecularly defined biologic process.",
"",
"Historical milestones:",
"• Ancient surgery emphasized drainage and avoidance of infection.",
"• Lister introduced antisepsis → dramatically improved outcomes.",
"• Modern understanding recognizes healing as regulated cellular signaling rather than passive scar formation.",
"",
"Core Principle:",
"• Healing restores tissue integrity but rarely restores original structure completely.",
"",
"Ultimate surgical truth:",
"• Adequate perfusion and oxygenation determine healing success more than closure technique.",
"",
"Key surgical objective:",
"• Convert contaminated, ischemic, or unstable wounds into an environment capable of progressing through normal healing phases."
]
},

/* =========================================================
   PHASES OF HEALING
========================================================= */
{
id: "phases",
title: "2) Phases of Wound Healing (Cellular Timeline)",
content: [
"Wound healing proceeds through overlapping biologic phases:",
"",
"PHASE 1 — HEMOSTASIS (Immediate)",
"• Platelet activation.",
"• Fibrin clot formation.",
"• Release of PDGF and TGF-β.",
"• Scaffold creation for cell migration.",
"",
"PHASE 2 — INFLAMMATION (Day 0–4)",
"Dominant cells:",
"• Neutrophils (first 24–48 hours).",
"• Macrophages (key regulatory cell).",
"",
"Macrophage functions:",
"• Phagocytosis.",
"• Cytokine release.",
"• Growth factor signaling.",
"• Transition to proliferative phase.",
"",
"BOARD PEARL:",
"Failure of macrophage activity = failure of healing.",
"",
"PHASE 3 — PROLIFERATION (Day 4–21)",
"Processes:",
"• Fibroblast proliferation.",
"• Angiogenesis (VEGF-mediated).",
"• Granulation tissue formation.",
"• Collagen type III deposition.",
"",
"Granulation tissue characteristics:",
"• Red, moist, bleeds easily.",
"• Indicates adequate perfusion.",
"",
"PHASE 4 — MATRIX SYNTHESIS",
"• Extracellular matrix production.",
"• Fibronectin deposition.",
"• Proteoglycan formation.",
"",
"PHASE 5 — MATURATION / REMODELING (Weeks to Months)",
"• Collagen III replaced by collagen I.",
"• Cross-linking increases tensile strength.",
"• Capillary regression occurs.",
"",
"Tensile strength recovery:",
"• 1 week → 10%",
"• 3 weeks → 20–30%",
"• 3 months → ~80%",
"• Never reaches 100%."
]
},

/* =========================================================
   EPITHELIALIZATION & CONTRACTION
========================================================= */
{
id: "epithelialization",
title: "3) Epithelialization and Wound Contraction",
content: [
"Epithelialization:",
"• Keratinocytes migrate across wound surface.",
"• Requires moist environment.",
"• Migration rate ≈ 1 mm/day.",
"",
"Wound contraction:",
"• Mediated by MYOFIBROBLASTS.",
"• Reduces wound surface area significantly.",
"",
"Clinical significance:",
"• Major mechanism of secondary intention healing.",
"",
"Failure mechanisms:",
"• Infection.",
"• Excessive tension.",
"• Poor perfusion."
]
},

/* =========================================================
   GROWTH FACTORS
========================================================= */
{
id: "growth-factors",
title: "4) Growth Factors in Normal Healing",
content: [
"Major growth factors and roles:",
"",
"PDGF:",
"• Chemotaxis for fibroblasts and macrophages.",
"",
"TGF-β:",
"• Collagen synthesis.",
"• Scar formation regulation.",
"",
"VEGF:",
"• Angiogenesis.",
"• Endothelial proliferation.",
"",
"FGF:",
"• Fibroblast proliferation.",
"",
"EGF:",
"• Epithelial migration.",
"",
"KEY EXAM POINT:",
"Macrophages coordinate healing by releasing most growth factors.",
"",
"Steroids impair healing by:",
"• Inhibiting macrophage signaling.",
"• Reducing fibroblast activity.",
"• Decreasing collagen deposition."
]
},

/* =========================================================
   CONNECTIVE TISSUE DISORDERS
========================================================= */
{
id: "connective-disorders",
title: "5) Heritable Disorders Affecting Healing",
content: [
"Ehlers-Danlos Syndrome:",
"• Collagen synthesis defect.",
"• Hyperextensible skin.",
"• Poor wound strength.",
"",
"Osteogenesis Imperfecta:",
"• Type I collagen defect.",
"• Bone fragility.",
"",
"Epidermolysis Bullosa:",
"• Basement membrane adhesion defect.",
"• Severe blistering with minimal trauma.",
"",
"Acrodermatitis Enteropathica:",
"• Zinc deficiency.",
"• Impaired epithelialization.",
"",
"BOARD PEARL:",
"Zinc deficiency delays wound healing."
]
},

/* =========================================================
   HEALING IN SPECIFIC TISSUES
========================================================= */
{
id: "tissue-healing",
title: "6) Healing in Specific Tissues",
content: [
"Gastrointestinal tract:",
"• Rapid healing due to excellent blood supply.",
"• Anastomotic strength dependent on submucosa.",
"",
"Bone:",
"• Regenerates via osteoblast activity.",
"",
"Cartilage:",
"• Poor healing (avascular).",
"",
"Tendon:",
"• Slow remodeling.",
"",
"Nerve:",
"• Regeneration ≈ 1 mm/day.",
"",
"Fetal wounds:",
"• Heal without scar formation."
]
},

/* =========================================================
   FACTORS AFFECTING HEALING
========================================================= */
{
id: "factors",
title: "7) Factors Affecting Wound Healing",
content: [
"LOCAL FACTORS:",
"• Infection (MOST IMPORTANT).",
"• Ischemia.",
"• Foreign bodies.",
"• Radiation injury.",
"• Excess tension.",
"",
"SYSTEMIC FACTORS:",
"• Diabetes mellitus.",
"• Smoking (vasoconstriction).",
"• Malnutrition.",
"• Steroid therapy.",
"• Hypoxia.",
"",
"Critical physiologic requirement:",
"• Tissue oxygen tension >30 mmHg required for collagen synthesis."
]
},

/* =========================================================
   CHRONIC WOUNDS & BIOFILM
========================================================= */
{
id: "chronic-wounds",
title: "8) Chronic Wounds and Biofilm",
content: [
"Definition:",
"• Wounds failing to progress beyond inflammatory phase.",
"",
"Pathophysiology:",
"• Persistent inflammation.",
"• Impaired angiogenesis.",
"• Elevated protease activity.",
"",
"Biofilm:",
"• Structured bacterial community.",
"• Resistant to antibiotics and host immunity.",
"",
"Management principle:",
"• Repeated surgical debridement required.",
"• Antibiotics alone ineffective."
]
},

/* =========================================================
   WOUND MANAGEMENT
========================================================= */
{
id: "treatment",
title: "9) Treatment of Wounds",
content: [
"Local care:",
"• Irrigation.",
"• Debridement.",
"• Tension reduction.",
"",
"Antibiotics:",
"• Only indicated when infection present.",
"",
"Dressings:",
"• Hydrocolloid — shallow wounds.",
"• Foam — moderate exudate.",
"• Alginate — heavy drainage.",
"• Negative Pressure Therapy — complex wounds.",
"",
"Skin substitutes:",
"• Cellular and tissue-based products stimulate healing.",
"",
"Oxygen therapy:",
"• Hyperbaric oxygen improves leukocyte killing and collagen formation.",
"",
"Indications:",
"• Diabetic ulcers.",
"• Radiation injury.",
"• Chronic ischemic wounds."
]
},

/* =========================================================
   BOARD TRAPS
========================================================= */
{
id: "board-traps",
title: "10) Board Exam Traps",
content: [
"• Macrophage = MOST important healing cell.",
"• Infection = MOST common cause of wound failure.",
"• Collagen III → early; Collagen I → late.",
"• Anastomotic strength depends on SUBMUCOSA.",
"• Antibiotics do NOT replace debridement.",
"• Wounds never regain 100% strength."
]
}

]
},
{
  id: "oncology-surgical-practice",
  title: "CHAPTER X: ONCOLOGY AND SURGICAL PRACTICE",
  subtitle: "Schwartz 11th Edition + Modern Oncology + Oral Boards Logic",
  sections: [
    {
      id: "overview",
      title: "1) Oncology in Surgical Practice",
      content: [
        "Modern cancer care is multidisciplinary.",
        "",
        "Core team:",
        "• Surgical oncologist",
        "• Medical oncologist",
        "• Radiation oncologist",
        "• Pathologist",
        "• Radiologist",
        "• Reconstruction specialists",
        "",
        "SURGEON'S ROLE:",
        "• Establish diagnosis (tissue is the issue).",
        "• Ensure correct staging BEFORE definitive surgery (unless emergent).",
        "• Determine resectability and operability (patient fitness).",
        "• Achieve oncologic resection goals (margin + nodal strategy).",
        "• Coordinate perioperative integration of systemic therapy/radiation.",
        "• Manage complications and long-term surgical issues (obstruction, bleeding, access, stomas).",
        "",
        "BOARD PRINCIPLE:",
        "• Surgery controls LOCAL disease.",
        "• Systemic therapy treats MICROMETASTATIC disease (cancer behaves systemic early).",
        "",
        "Board one-liner:",
        "• 'Right operation at the right time' depends on staging + biology, not just anatomy."
      ]
    },

    {
      id: "epidemiology",
      title: "2) Cancer Epidemiology (Practical)",
      content: [
        "Why surgeons should care:",
        "• Epidemiology explains risk, screening, and why patients present late (resource limitation).",
        "",
        "Major global contributors:",
        "• Tobacco (largest preventable cause).",
        "• Infection-related cancers (HPV, HBV, H. pylori).",
        "• Obesity and diet.",
        "",
        "Board framing:",
        "• Screening reduces mortality only when early detection changes management/outcome."
      ]
    },

    {
      id: "hallmarks",
      title: "3) Hallmarks of Cancer (EXTREMELY HIGH YIELD)",
      content: [
        "Classic hallmarks:",
        "1. Self-sufficiency in growth signals.",
        "2. Insensitivity to growth inhibition.",
        "3. Resistance to apoptosis.",
        "4. Unlimited replicative potential.",
        "5. Sustained angiogenesis.",
        "6. Tissue invasion and metastasis.",
        "",
        "Additional modern hallmarks:",
        "• Immune evasion.",
        "• Metabolic reprogramming.",
        "",
        "ORAL BOARD LINE:",
        "Cancer behaves as a systemic disease early in its evolution."
      ]
    },

    {
      id: "cell-cycle",
      title: "4) Cell Cycle Dysregulation & Transformation (Deep + Exam Logic)",
      content: [
        "Normal regulation:",
        "• G1 → S → G2 → M checkpoints prevent replication of damaged DNA.",
        "",
        "Key checkpoint concept (most tested):",
        "• G1/S is the critical 'commitment' step: if the cell passes it, it replicates DNA.",
        "",
        "Cancer initiation occurs when:",
        "• Proto-oncogenes ACTIVATE → growth signaling stuck ON (accelerator).",
        "• Tumor suppressor genes INACTIVATE → checkpoints/brakes fail.",
        "",
        "p53 (guardian of the genome):",
        "• Detects DNA damage → pauses cell cycle for repair OR triggers apoptosis if irreparable.",
        "• Loss of p53 → damaged cells survive and accumulate mutations → GENOMIC INSTABILITY.",
        "",
        "RB pathway (G1/S gatekeeper):",
        "• RB normally blocks cell-cycle progression.",
        "• RB dysfunction removes the G1/S brake → uncontrolled proliferation.",
        "",
        "Why this matters clinically:",
        "• Genomic instability → tumor heterogeneity → resistance to chemo/targeted therapy over time."
      ]
    },

    {
      id: "oncogenes",
      title: "5) Oncogenes vs Tumor Suppressors (Deep Explanation + Board Traps)",
      content: [
        "Big picture:",
        "• Oncogenes = ACCELERATOR stuck ON (gain of function).",
        "• Tumor suppressors = BRAKES fail (loss of function).",
        "",
        "Oncogenes (gain of function) — ONE hit is often enough (dominant at cellular level):",
        "• RAS: intracellular signal switch; mutation locks growth signaling ON even without receptor signal.",
        "  - Clinical pearl: KRAS mutation predicts lack of response to anti-EGFR therapy in colorectal cancer.",
        "• MYC: transcription factor driving proliferation/metabolism; overactivity → unchecked growth.",
        "• HER2 (ERBB2): receptor overexpression/amplification → increased growth signaling.",
        "  - Clinical pearl: HER2 positivity creates a TARGETABLE vulnerability (e.g., trastuzumab in breast/GEJ).",
        "",
        "Tumor suppressors (loss of function) — TWO-HIT hypothesis applies:",
        "• Meaning: both alleles must be lost/inactivated for full loss of function.",
        "• Why: one normal allele can still produce protective protein (recessive at cellular level).",
        "",
        "Classic tumor suppressors:",
        "• TP53: triggers cell-cycle arrest/repair or apoptosis. Loss → survival of damaged cells → genomic instability.",
        "• APC: regulates β-catenin/Wnt pathway. Loss → adenoma formation and progression (colon cancer biology).",
        "  - Clinical correlation: APC germline mutation → FAP → early screening/prophylactic surgery discussion.",
        "• PTEN: inhibits PI3K/AKT survival pathway. Loss → anti-apoptotic survival advantage.",
        "",
        "Hereditary cancer logic (ORAL BOARDS FAVORITE):",
        "• Sporadic: needs 2 hits over time → later onset.",
        "• Hereditary: patient is born with first hit → only one additional hit needed → younger onset/multiple tumors.",
        "",
        "Exam answer line:",
        "• 'Cancer develops when growth pathways are activated AND checkpoint/apoptosis pathways are lost.'"
      ]
    },

    {
      id: "metastasis",
      title: "6) Invasion, EMT and Metastasis (Step-by-Step Clinical Translation)",
      content: [
        "Metastasis is a biologic program, not just tumor size.",
        "",
        "Core steps (high yield):",
        "1. Loss of cell adhesion (detach from neighbors).",
        "2. Basement membrane degradation (proteases).",
        "3. Local invasion through stroma.",
        "4. Intravasation into vessels/lymphatics.",
        "5. Survival in circulation (immune evasion/shear stress).",
        "6. Extravasation into distant tissue.",
        "7. Colonization (growth in new microenvironment).",
        "",
        "Epithelial–Mesenchymal Transition (EMT):",
        "• Tumor cells shift from 'stuck epithelial' → 'mobile mesenchymal' phenotype.",
        "• EMT enables invasion and early dissemination.",
        "",
        "Why surgeons care (oral boards):",
        "• Explains why early systemic therapy is needed in many cancers (micromets).",
        "",
        "Common spread patterns (anatomic + exam):",
        "• Colon → liver (portal drainage).",
        "• Sarcoma → lung (hematogenous spread).",
        "• Ovarian → peritoneum (transcoelomic spread)."
      ]
    },

    {
      id: "angiogenesis",
      title: "7) Tumor Angiogenesis",
      content: [
        "Driven primarily by VEGF.",
        "",
        "Diffusion limit concept:",
        "• Tumors generally cannot grow beyond ~1–2 mm without new blood supply.",
        "",
        "Clinical translation:",
        "• Anti-VEGF strategies aim to disrupt tumor vascular support (tumor control, not a 'surgery substitute')."
      ]
    },

    {
      id: "genetics",
      title: "8) Hereditary Cancer Syndromes (What a Surgeon Must Recognize)",
      content: [
        "Why it matters:",
        "• Earlier onset, multiple primaries, family clustering → screening and prophylactic surgery decisions.",
        "",
        "Key examples:",
        "• APC mutation → Familial Adenomatous Polyposis.",
        "• RET mutation → MEN2 (medullary thyroid cancer risk).",
        "• PTEN mutation → Cowden syndrome (breast/thyroid/endometrial spectrum).",
        "",
        "BOARD FAVORITE CLINICAL CLUE:",
        "Young patient + multiple tumors or strong family history → suspect hereditary syndrome and refer/genetic counseling."
      ]
    },

    {
      id: "carcinogens",
      title: "9) Cancer Etiology (High-Yield Categories)",
      content: [
        "Chemical carcinogens:",
        "• Tobacco nitrosamines (multiple cancer risks).",
        "",
        "Physical carcinogens:",
        "• UV radiation.",
        "• Ionizing radiation.",
        "",
        "Viral carcinogens:",
        "• HPV → cervical, anogenital, oropharyngeal.",
        "• HBV/HCV → hepatocellular carcinoma.",
        "• EBV → lymphoma and other associations."
      ]
    },

    {
      id: "staging",
      title: "10) Diagnosis and Staging (Exam Sequencing)",
      content: [
        "TNM system:",
        "• T — primary tumor extent.",
        "• N — nodal involvement.",
        "• M — distant metastasis.",
        "",
        "Stage determines:",
        "• Prognosis.",
        "• Treatment sequencing (who needs neoadjuvant vs upfront surgery).",
        "",
        "Board rule:",
        "• Never operate without proper staging unless emergent (bleeding/obstruction/perforation).",
        "",
        "Margin language (use in orals):",
        "• R0 = microscopically negative margin (curative intent).",
        "• R1 = microscopic residual disease.",
        "• R2 = gross residual disease (usually palliative/debulking intent)."
      ]
    },

    {
      id: "tumor-markers",
      title: "11) Tumor Markers (How to Answer in Orals)",
      content: [
        "Key principle:",
        "• Tumor markers are NOT diagnostic alone — they support monitoring, recurrence detection, and sometimes response.",
        "",
        "Common markers:",
        "• CEA → colorectal monitoring (trend matters more than one value).",
        "• CA 19-9 → pancreatic/biliary (interpret with cholestasis).",
        "• AFP → HCC and germ cell tumors.",
        "• PSA → prostate.",
        "",
        "Board trap answer:",
        "• 'Markers assist; definitive diagnosis is tissue + staging imaging.'"
      ]
    },

    {
      id: "surgery",
      title: "12) Surgical Management Principles",
      content: [
        "Primary goal (curative intent):",
        "• R0 resection (negative microscopic margins).",
        "",
        "Regional lymph node basin:",
        "• Provides staging and prognostic information.",
        "• Can be therapeutic in selected cancers depending on biology (understand cancer-specific practice).",
        "",
        "When to consider metastasectomy (exam framework):",
        "• Limited metastatic burden.",
        "• Controlled/controllable primary tumor.",
        "• Resectable disease with acceptable morbidity.",
        "• Adequate physiologic reserve.",
        "",
        "Palliative surgery indications (do not miss in orals):",
        "• Obstruction, perforation, bleeding, uncontrolled infection, or symptom relief when systemic control is limited."
      ]
    },

    {
      id: "systemic",
      title: "13) Systemic Cancer Therapy (What Surgeons Must Know)",
      content: [
        "Why systemic therapy matters:",
        "• Treats micrometastatic disease and improves long-term control in many solid tumors.",
        "",
        "Chemotherapy (principles):",
        "• Targets rapidly dividing cells; combination regimens reduce resistance.",
        "• Toxicity affects high-turnover tissues (marrow, GI mucosa, hair).",
        "",
        "Hormonal therapy:",
        "• Breast and prostate cancers (tumor growth driven by hormones).",
        "",
        "Targeted therapy:",
        "• Blocks specific drivers (e.g., HER2, EGFR, VEGF).",
        "• Response depends on mutation/biomarker profile.",
        "",
        "Immunotherapy:",
        "• Checkpoint inhibitors restore immune recognition; responses can be durable in selected tumors.",
        "",
        "Resistance (exam concept):",
        "• Tumor heterogeneity + clonal selection → intrinsic/acquired resistance over time."
      ]
    },

    {
      id: "radiation",
      title: "14) Radiation Therapy",
      content: [
        "Mechanism:",
        "• DNA damage (double-strand breaks) leading to cell death.",
        "",
        "Roles:",
        "• Definitive local control (selected cancers).",
        "• Neoadjuvant/downstaging (improves resectability/margins in certain settings).",
        "• Adjuvant (reduce local recurrence).",
        "• Palliation (pain/bleeding/control).",
        "",
        "Side effects (surgical relevance):",
        "• Fibrosis and poor tissue planes.",
        "• Impaired wound healing.",
        "• Increased infection risk in irradiated fields.",
        "• Long-term risk of secondary malignancy."
      ]
    },
{
id: "oncology-core-mcqs",
title: "16) Core Oncology Principles — Board Style MCQs",
mcqs: [

{
id: "onc_core_1",
question: "Most important determinant of prognosis in cancer patients?",
options: [
{ id: "a", text: "Tumor size" },
{ id: "b", text: "Histologic grade" },
{ id: "c", text: "Stage at diagnosis" },
{ id: "d", text: "Tumor marker level" }
],
answerId: "c",
explanation:
"Across malignancies, stage at diagnosis is the strongest predictor of survival because it reflects disease spread and resectability."
},

{
id: "onc_core_2",
question: "Primary goal of curative oncologic surgery?",
options: [
{ id: "a", text: "Debulking tumor mass" },
{ id: "b", text: "Achieve R0 resection" },
{ id: "c", text: "Remove lymph nodes only" },
{ id: "d", text: "Reduce symptoms" }
],
answerId: "b",
explanation:
"Curative surgery requires complete tumor removal with microscopically negative margins (R0 resection)."
},

{
id: "onc_core_3",
question: "Why is cancer considered a systemic disease early in its evolution?",
options: [
{ id: "a", text: "Tumors grow rapidly" },
{ id: "b", text: "Micrometastatic spread occurs before detection" },
{ id: "c", text: "Tumor markers increase early" },
{ id: "d", text: "Radiation causes dissemination" }
],
answerId: "b",
explanation:
"Circulating tumor cells may disseminate early, explaining the need for systemic therapy even after local surgery."
},

{
id: "onc_core_4",
question: "What must ALWAYS be completed before definitive oncologic surgery?",
options: [
{ id: "a", text: "Chemotherapy" },
{ id: "b", text: "Radiation therapy" },
{ id: "c", text: "Complete staging workup" },
{ id: "d", text: "Tumor marker measurement only" }
],
answerId: "c",
explanation:
"Proper staging determines treatment sequencing and prevents inappropriate surgery."
},

{
id: "onc_core_5",
question: "Main purpose of lymph node dissection in cancer surgery?",
options: [
{ id: "a", text: "Pain reduction" },
{ id: "b", text: "Prevent bleeding" },
{ id: "c", text: "Accurate staging and prognosis" },
{ id: "d", text: "Cosmetic improvement" }
],
answerId: "c",
explanation:
"Lymph node evaluation provides staging accuracy and guides need for adjuvant therapy."
},

{
id: "onc_core_6",
question: "Which mutation type characterizes oncogenes?",
options: [
{ id: "a", text: "Loss of function mutation" },
{ id: "b", text: "Gain of function mutation" },
{ id: "c", text: "Chromosomal deletion only" },
{ id: "d", text: "Epigenetic silencing only" }
],
answerId: "b",
explanation:
"Oncogenes arise from activation of proto-oncogenes leading to continuous growth signaling."
},

{
id: "onc_core_7",
question: "The TWO-HIT hypothesis applies to which gene category?",
options: [
{ id: "a", text: "Oncogenes" },
{ id: "b", text: "Tumor suppressor genes" },
{ id: "c", text: "Growth factors" },
{ id: "d", text: "Tumor markers" }
],
answerId: "b",
explanation:
"Both alleles of tumor suppressor genes must be inactivated before loss of growth control occurs."
},

{
id: "onc_core_8",
question: "Tumors cannot grow beyond approximately what size without angiogenesis?",
options: [
{ id: "a", text: "0.1 mm" },
{ id: "b", text: "1–2 mm" },
{ id: "c", text: "1 cm" },
{ id: "d", text: "5 cm" }
],
answerId: "b",
explanation:
"Diffusion limits oxygen delivery; angiogenesis is required for continued tumor growth."
},

{
id: "onc_core_9",
question: "Primary role of neoadjuvant therapy?",
options: [
{ id: "a", text: "Prevent diagnosis" },
{ id: "b", text: "Shrink tumor before surgery" },
{ id: "c", text: "Replace surgery" },
{ id: "d", text: "Avoid staging" }
],
answerId: "b",
explanation:
"Neoadjuvant therapy improves resectability, treats micrometastases early, and increases R0 resection rates."
},

{
id: "onc_core_10",
question: "Tumor markers are primarily used for:",
options: [
{ id: "a", text: "Screening the general population" },
{ id: "b", text: "Definitive cancer diagnosis" },
{ id: "c", text: "Monitoring treatment response and recurrence" },
{ id: "d", text: "Determining tumor margins" }
],
answerId: "c",
explanation:
"Tumor markers lack specificity for diagnosis but are valuable for surveillance trends."
},

{
id: "onc_core_11",
question: "Main mechanism of radiation therapy in cancer treatment?",
options: [
{ id: "a", text: "Hormonal suppression" },
{ id: "b", text: "DNA double-strand breaks" },
{ id: "c", text: "Immune activation only" },
{ id: "d", text: "Protein synthesis inhibition" }
],
answerId: "b",
explanation:
"Ionizing radiation damages DNA leading to tumor cell death."
},

{
id: "onc_core_12",
question: "Which principle best describes modern cancer care?",
options: [
{ id: "a", text: "Surgery alone cures most cancers" },
{ id: "b", text: "Radiation replaces surgery" },
{ id: "c", text: "Multidisciplinary treatment approach" },
{ id: "d", text: "Chemotherapy is always first" }
],
answerId: "c",
explanation:
"Modern oncology integrates surgery, systemic therapy, and radiation through multidisciplinary planning."
}
]
},
    {
      id: "oral-boards",
      title: "15) Oral Board Surgical Logic (How to Answer Like a Consultant)",
      content: [
        "Examiner evaluates:",
        "1) Do you confirm diagnosis (tissue) and stage properly?",
        "2) Do you know when surgery is NOT first (biology-driven sequencing)?",
        "3) Do you integrate MDT planning (med onc/rad onc/path/rads)?",
        "4) Do you state intent: curative vs palliative?",
        "",
        "Correct reasoning sequence (say this out loud in orals):",
        "• Diagnosis → Staging → Resectability/Operability → Intent → Multidisciplinary plan → Surgery timing.",
        "",
        "High-yield consultant line:",
        "• 'The right first step is often staging and biology assessment—not the knife.'"
      ]
    }
  ]
},
{
  id: "transplantation-master",
  title: "CHAPTER XI: TRANSPLANTATION & IMMUNOSUPPRESSED SURGICAL PATIENT",
  subtitle: "Schwartz 11th + PSGS Board Logic (High-Impact Low-Frequency Topic)",
  sections: [
    {
      id: "core",
      title: "1) Core Surgical Principle",
      content: [
        "Transplantation questions test complication recognition — NOT operative technique.",
        "",
        "Major causes of morbidity:",
        "• Rejection",
        "• Infection",
        "• Immunosuppression toxicity",
        "",
        "BOARD LINE:",
        "All transplant patients must be treated as IMMUNOCOMPROMISED surgical patients.",
        "",
        "Exam mindset:",
        "Deterioration = infection or rejection until proven otherwise."
      ]
    },
    {
      id: "rejection",
      title: "2) Types of Transplant Rejection (ULTRA HIGH YIELD)",
      content: [
        "HYPERACUTE:",
        "• Minutes–hours.",
        "• Preformed antibodies.",
        "• Complement activation → thrombosis.",
        "• Treatment: graft removal.",
        "",
        "MEMORY:",
        "Hyperacute = organ dies immediately.",
        "",
        "ACUTE:",
        "• Days–weeks.",
        "• T-cell mediated.",
        "• Diagnosis: biopsy.",
        "• Treatment: HIGH-DOSE STEROIDS.",
        "",
        "CHRONIC:",
        "• Months–years.",
        "• Progressive fibrosis and vascular narrowing.",
        "• Irreversible.",
        "",
        "MEMORY:",
        "Acute responds, Chronic closes vessels."
      ]
    },
    {
      id: "immunosuppression",
      title: "3) Immunosuppressive Drugs — Mechanism + Memory Tricks",
      content: [
        "Goal: block T-cell activation pathway.",
        "",
        "CALCINEURIN INHIBITORS:",
        "Tacrolimus / Cyclosporine",
        "• Block IL-2 transcription.",
        "• Prevent T-cell activation.",
        "",
        "MEMORY:",
        "TACRO tackles T-cells.",
        "",
        "SIDE EFFECT:",
        "• NEPHROTOXICITY ⭐⭐⭐",
        "",
        "ANTIMETABOLITES:",
        "Mycophenolate / Azathioprine",
        "• Inhibit DNA synthesis of lymphocytes.",
        "",
        "MEMORY:",
        "No DNA → no immune army.",
        "",
        "SIDE EFFECT:",
        "• Bone marrow suppression.",
        "",
        "STEROIDS:",
        "• Cytokine suppression.",
        "• Anti-inflammatory.",
        "",
        "MEMORY:",
        "Steroids silence immune alarms.",
        "",
        "mTOR INHIBITORS:",
        "Sirolimus",
        "• Blocks cell-cycle progression.",
        "",
        "EXAM FAVORITE:",
        "POOR WOUND HEALING.",
        "",
        "MEMORY:",
        "SIRO = Slow Incision Repair Operation."
      ]
    },
    {
      id: "complications",
      title: "4) Surgical Complications in Transplant Patients",
      content: [
        "INFECTION (MOST COMMON EXAM SCENARIO):",
        "• Opportunistic organisms.",
        "• Fever may be absent.",
        "",
        "WOUND COMPLICATIONS:",
        "• Dehiscence.",
        "• Delayed healing.",
        "",
        "MALIGNANCY:",
        "• Post-transplant lymphoproliferative disorder (PTLD).",
        "",
        "BOARD PEARL:",
        "Normal inflammatory response is blunted."
      ]
    },
    {
      id: "acute-abdomen",
      title: "5) Transplant Patient with Acute Abdomen",
      content: [
        "Management principles:",
        "1. Assume infection early.",
        "2. Early CT scan.",
        "3. Broad-spectrum antibiotics immediately.",
        "4. Low threshold for exploration.",
        "",
        "ORAL BOARD SAFE LINE:",
        "\"Because the patient is immunosuppressed, I will avoid observation and proceed with early imaging and intervention.\""
      ]
    },
    {
      id: "immunosuppressed-algorithm",
      title: "6) Immunosuppressed Surgical Patient Algorithm (VERY HIGH YIELD)",
      content: [
        "Applies to:",
        "• Transplant patients",
        "• Chemotherapy patients",
        "• Chronic steroid users",
        "• Advanced malignancy",
        "",
        "KEY DIFFERENCE:",
        "Classic infection signs may be absent.",
        "",
        "RED FLAGS:",
        "• Mild pain with severe disease.",
        "• No fever despite sepsis.",
        "• Normal WBC does NOT exclude infection.",
        "",
        "SURGICAL APPROACH:",
        "",
        "STEP 1 — Assume infection.",
        "STEP 2 — Early imaging (CT preferred).",
        "STEP 3 — Start antibiotics early.",
        "STEP 4 — Early senior surgical decision.",
        "",
        "NEVER SAY IN ORALS:",
        "\"Observe first.\"",
        "",
        "BOARD MEMORY:",
        "Weak immune system → act EARLY, not late."
      ]
    },
    {
      id: "mcqs",
      title: "7) PSGS-Style Transplant MCQs",
      mcqs: [
        {
          id: "tx1",
          question: "Graft failure immediately after reperfusion is most likely due to:",
          options: [
            { id: "a", text: "Acute rejection" },
            { id: "b", text: "Hyperacute rejection" },
            { id: "c", text: "Chronic rejection" },
            { id: "d", text: "Drug toxicity" }
          ],
          answerId: "b",
          explanation:
            "Hyperacute rejection occurs within minutes due to preformed antibodies causing thrombosis."
        },
        {
          id: "tx2",
          question: "Which immunosuppressive drug most commonly causes nephrotoxicity?",
          options: [
            { id: "a", text: "Mycophenolate" },
            { id: "b", text: "Tacrolimus" },
            { id: "c", text: "Prednisone" },
            { id: "d", text: "Sirolimus" }
          ],
          answerId: "b",
          explanation:
            "Calcineurin inhibitors cause dose-dependent renal vasoconstriction."
        },
        {
          id: "tx3",
          question: "Delayed wound healing after transplant surgery is associated with:",
          options: [
            { id: "a", text: "Tacrolimus" },
            { id: "b", text: "Sirolimus" },
            { id: "c", text: "Azathioprine" },
            { id: "d", text: "Antibiotics" }
          ],
          answerId: "b",
          explanation:
            "mTOR inhibitors inhibit fibroblast proliferation leading to impaired wound healing."
        },
        {
          id: "tx4",
          question: "Best initial management of abdominal pain in a transplant recipient?",
          options: [
            { id: "a", text: "Observation" },
            { id: "b", text: "Wait for fever" },
            { id: "c", text: "Early imaging and antibiotics" },
            { id: "d", text: "Discharge with analgesics" }
          ],
          answerId: "c",
          explanation:
            "Immunosuppressed patients deteriorate quickly and lack classic infection signs."
        },
        {
          id: "tx5",
          question: "Acute rejection is primarily mediated by:",
          options: [
            { id: "a", text: "Antibodies" },
            { id: "b", text: "T-cells" },
            { id: "c", text: "Fibrosis" },
            { id: "d", text: "Ischemia" }
          ],
          answerId: "b",
          explanation:
            "Acute rejection results from T-cell mediated immune activation against donor tissue."
        }
      ]
    }
  ]
},
{
  id: "hemodynamic-monitoring",
  title: "CHAPTER XII: PHYSIOLOGIC MONITORING OF THE SURGICAL PATIENT",
  subtitle: "Schwartz 11th + ABSITE High-Yield Physiology + PSGS Decision Logic",
  sections: [

/* =========================================================
CORE PRINCIPLE
========================================================= */
{
id: "overview",
title: "1) Core Concept — Why Monitoring Exists",
content: [
"Goal of monitoring is NOT measurement — it is optimization of oxygen delivery (DO₂).",
"",
"Oxygen delivery equation:",
"DO₂ = Cardiac Output × Arterial Oxygen Content.",
"",
"Shock occurs when oxygen delivery fails to meet tissue demand.",
"",
"BOARD PEARL:",
"Normal blood pressure DOES NOT equal adequate perfusion.",
"",
"Clinical endpoints of perfusion:",
"• Mental status",
"• Urine output",
"• Lactate clearance",
"• Mixed venous oxygen saturation"
]
},

/* =========================================================
ARTERIAL PRESSURE
========================================================= */
{
id: "arterial-pressure",
title: "2) Arterial Blood Pressure Monitoring",
content: [
"Noninvasive BP:",
"• Intermittent.",
"• Less accurate in shock or vasoconstriction.",
"",
"Invasive arterial line:",
"• Beat-to-beat monitoring.",
"• Required in unstable or vasopressor patients.",
"",
"EXAM TRAP:",
"MAP is primary determinant of organ perfusion.",
"",
"Target MAP:",
"≈ 65 mmHg in most shock states."
]
},

/* =========================================================
CARDIAC OUTPUT PHYSIOLOGY
========================================================= */
{
id: "cardiac-output",
title: "3) Determinants of Cardiac Output",
content: [
"CO = HR × Stroke Volume.",
"",
"Stroke volume determined by:",
"• Preload",
"• Afterload",
"• Contractility.",
"",
"Key principle:",
"Giving fluids only helps if patient is PRELOAD RESPONSIVE."
]
},

/* =========================================================
PULMONARY ARTERY CATHETER
========================================================= */
{
id: "pac",
title: "4) Pulmonary Artery Catheter (Swan-Ganz)",
content: [
"Measures:",
"• Cardiac output (thermodilution).",
"• Pulmonary artery pressures.",
"• Pulmonary capillary wedge pressure (PCWP).",
"• Mixed venous oxygen saturation (SvO₂).",
"",
"PCWP approximates LEFT ATRIAL PRESSURE.",
"",
"IMPORTANT:",
"PAC improves diagnostic understanding but has NOT improved mortality outcomes.",
"",
"ABSITE FAVORITE:",
"Use declining role — replaced by less invasive monitoring."
]
},

/* =========================================================
PRELOAD RESPONSIVENESS
========================================================= */
{
id: "preload",
title: "5) Assessing Preload Responsiveness (ULTRA HIGH YIELD)",
content: [
"Static measures (CVP, PCWP) are POOR predictors of fluid responsiveness.",
"",
"Dynamic measures are superior:",
"• Pulse pressure variation.",
"• Stroke volume variation.",
"• Passive leg raise test.",
"",
"BOARD PEARL:",
"Best test of fluid responsiveness = physiologic response to preload change."
]
},

/* =========================================================
OXYGEN DELIVERY
========================================================= */
{
id: "oxygen-delivery",
title: "6) Oxygen Delivery & Mixed Venous Oximetry",
content: [
"SvO₂ reflects balance between oxygen delivery and consumption.",
"",
"Low SvO₂ indicates:",
"• Low cardiac output",
"• Hypovolemia",
"• Increased metabolic demand",
"",
"High SvO₂ may indicate:",
"• Sepsis (impaired extraction).",
"",
"EXAM TRAP:",
"High SvO₂ in septic shock DOES NOT mean adequate perfusion."
]
},

/* =========================================================
RESPIRATORY MONITORING
========================================================= */
{
id: "resp-monitoring",
title: "7) Respiratory Monitoring",
content: [
"Peak airway pressure:",
"• Increased by airway resistance.",
"",
"Plateau pressure:",
"• Reflects lung compliance.",
"",
"Plateau pressure >30 cmH₂O → risk of ventilator lung injury.",
"",
"Capnography:",
"• Measures end-tidal CO₂.",
"• Sudden drop suggests PE, cardiac arrest, or disconnection."
]
},

/* =========================================================
RENAL & NEURO MONITORING
========================================================= */
{
id: "organ-monitoring",
title: "8) Organ Perfusion Monitoring",
content: [
"Urine output:",
"• Most sensitive bedside perfusion marker.",
"• Target ≥0.5 mL/kg/hr.",
"",
"Bladder pressure:",
"• Surrogate for intra-abdominal pressure.",
"• Elevated → abdominal compartment syndrome.",
"",
"Intracranial pressure:",
"CPP = MAP − ICP.",
"Maintain CPP >60 mmHg."
]
},

/* =========================================================
ABSITE / PSGS MCQs
========================================================= */
{
id: "monitoring-mcqs",
title: "9) ABSITE / PSGS High-Yield MCQs",
mcqs: [

{
id: "hm1",
question: "Best predictor of fluid responsiveness in a ventilated ICU patient?",
options: [
{ id: "a", text: "Central venous pressure" },
{ id: "b", text: "Pulmonary capillary wedge pressure" },
{ id: "c", text: "Pulse pressure variation" },
{ id: "d", text: "Mean arterial pressure" }
],
answerId: "c",
explanation:
"Dynamic indices outperform static preload measurements for predicting fluid responsiveness."
},

{
id: "hm2",
question: "Pulmonary capillary wedge pressure most closely estimates:",
options: [
{ id: "a", text: "Right atrial pressure" },
{ id: "b", text: "Left atrial pressure" },
{ id: "c", text: "Pulmonary vascular resistance" },
{ id: "d", text: "Systemic vascular resistance" }
],
answerId: "b",
explanation:
"PCWP approximates left atrial pressure and LV preload."
},

{
id: "hm3",
question: "High mixed venous oxygen saturation in septic shock indicates:",
options: [
{ id: "a", text: "Adequate perfusion" },
{ id: "b", text: "Improved cardiac output" },
{ id: "c", text: "Impaired tissue oxygen extraction" },
{ id: "d", text: "Hypovolemia" }
],
answerId: "c",
explanation:
"Sepsis causes mitochondrial dysfunction and impaired oxygen extraction."
},

{
id: "hm4",
question: "Plateau airway pressure primarily reflects:",
options: [
{ id: "a", text: "Airway resistance" },
{ id: "b", text: "Lung compliance" },
{ id: "c", text: "Ventilator rate" },
{ id: "d", text: "Oxygen concentration" }
],
answerId: "b",
explanation:
"Plateau pressure measures alveolar pressure and lung compliance."
},

{
id: "hm5",
question: "Most reliable bedside indicator of adequate renal perfusion?",
options: [
{ id: "a", text: "Serum creatinine" },
{ id: "b", text: "Urine output" },
{ id: "c", text: "Blood pressure alone" },
{ id: "d", text: "Heart rate" }
],
answerId: "b",
explanation:
"Urine output reflects real-time renal perfusion."
},

{
id: "hm6",
question: "Primary determinant of organ perfusion pressure?",
options: [
{ id: "a", text: "Systolic BP" },
{ id: "b", text: "Mean arterial pressure" },
{ id: "c", text: "Pulse pressure" },
{ id: "d", text: "Central venous pressure" }
],
answerId: "b",
explanation:
"MAP drives capillary perfusion and is the main resuscitation target."
}

]
}

]
},
{
  id: "patient-safety",
  title: "CHAPTER XIII. PATIENT SAFETY & QUALITY IN SURGERY",
  subtitle: "Schwartz High-Yield Safety Principles",
  sections: [
    {
      id: "patient-safety-core",
      title: "Patient Safety & Quality in Surgery",

      content: [
        "Modern surgical complications are predominantly SYSTEM failures rather than individual technical failures.",
        "",
        "THE CONCEPTUAL MODEL (Schwartz):",
        "Adverse events occur when multiple latent system defects align (Swiss cheese model).",
        "Errors are predictable and preventable through system redesign rather than individual blame.",
        "",
        "HIGH RELIABILITY ORGANIZATIONS (HRO):",
        "• Preoccupation with failure.",
        "• Reluctance to simplify explanations.",
        "• Sensitivity to operations.",
        "• Commitment to resilience.",
        "• Deference to expertise rather than hierarchy.",
        "",
        "SURGICAL SAFETY TOOLS:",
        "• WHO Surgical Safety Checklist reduces mortality primarily through structured communication.",
        "• OR briefings create shared mental models before incision.",
        "• Debriefings identify latent system failures.",
        "",
        "QUALITY MEASUREMENT:",
        "NSQIP evaluates outcomes using risk-adjusted analysis rather than raw complication numbers.",
        "",
        "NEVER EVENTS:",
        "• Wrong-site surgery.",
        "• Retained surgical items.",
        "• Wrong procedure.",
        "",
        "ROOT CAUSE ANALYSIS (RCA):",
        "Focuses on WHY systems failed instead of WHO failed.",
        "",
        "KEY BOARD PRINCIPLE:",
        "Punitive cultures decrease reporting of errors; safety cultures increase reporting and prevention.",
        "",
        "EXAM PEARL:",
        "Most catastrophic surgical errors arise from communication breakdown rather than operative skill deficiency."
      ],

      mcqs: [
        {
          id: "ps1",
          question: "According to modern patient safety theory, adverse surgical events most commonly occur when:",
          options: [
            { id: "a", text: "A surgeon commits a technical mistake" },
            { id: "b", text: "Multiple latent system failures align" },
            { id: "c", text: "Equipment malfunction occurs" },
            { id: "d", text: "A junior staff member errs" }
          ],
          answerId: "b",
          explanation:
            "The Swiss cheese model explains that harm occurs when several system vulnerabilities align simultaneously."
        },

        {
          id: "ps2",
          question: "Which characteristic best defines a High Reliability Organization?",
          options: [
            { id: "a", text: "Strict hierarchical authority" },
            { id: "b", text: "Simplified decision-making pathways" },
            { id: "c", text: "Deference to expertise regardless of rank" },
            { id: "d", text: "Immediate punishment after errors" }
          ],
          answerId: "c",
          explanation:
            "HROs prioritize expertise and situational awareness rather than hierarchy."
        },

        {
          id: "ps3",
          question: "The WHO Surgical Safety Checklist primarily improves outcomes by:",
          options: [
            { id: "a", text: "Improving sterile technique" },
            { id: "b", text: "Reducing operative duration" },
            { id: "c", text: "Standardizing communication among team members" },
            { id: "d", text: "Enhancing anesthesia pharmacology" }
          ],
          answerId: "c",
          explanation:
            "Outcome improvement results mainly from communication alignment and shared situational awareness."
        },

        {
          id: "ps4",
          question: "NSQIP differs from traditional surgical audits because it:",
          options: [
            { id: "a", text: "Measures total complication count" },
            { id: "b", text: "Tracks surgeon productivity" },
            { id: "c", text: "Uses risk-adjusted outcome comparison" },
            { id: "d", text: "Evaluates mortality alone" }
          ],
          answerId: "c",
          explanation:
            "Risk adjustment allows fair comparison between institutions treating different patient populations."
        },

        {
          id: "ps5",
          question: "Root Cause Analysis is primarily designed to:",
          options: [
            { id: "a", text: "Identify the responsible individual" },
            { id: "b", text: "Determine legal liability" },
            { id: "c", text: "Identify underlying system vulnerabilities" },
            { id: "d", text: "Limit disclosure of errors" }
          ],
          answerId: "c",
          explanation:
            "RCA evaluates system contributors to prevent recurrence of harm."
        }
      ]
    }
  ]
},
{
  id: "minimally-invasive-surgery",
  title: "CHAPTER XIV: MINIMALLY INVASIVE SURGERY (Schwartz + Modern Guidelines)",
  subtitle: "Physiology, Access Safety, Energy Systems, and Robotic Principles",
  sections: [
    {
      id: "mis-1-intro",
      title: "1) Introduction & Historical Background",
      content: [
        "INTRODUCTION (Schwartz Concept):",
        "Minimally invasive surgery (MIS) reduces surgical trauma by limiting incision size while maintaining equivalent oncologic and therapeutic outcomes.",
        "Primary benefits arise from reduced inflammatory response rather than incision size alone.",
        "",
        "HISTORICAL EVOLUTION:",
        "• 1987 — laparoscopic cholecystectomy accelerated adoption of MIS worldwide.",
        "• Reduced pain, shorter length of stay, faster return to function drove rapid expansion.",
        "• Modern evolution includes robotic platforms, NOTES, and single-incision approaches."
      ]
    },
    {
      id: "mis-2-physiology",
      title: "2) Physiology of Pneumoperitoneum & Thoracoscopy",
      content: [
        "PHYSIOLOGY OF PNEUMOPERITONEUM (ULTRA HIGH YIELD):",
        "CO₂ insufflation increases intra-abdominal pressure (IAP).",
        "",
        "Cardiovascular effects:",
        "• ↓ venous return from IVC compression (↓ preload).",
        "• ↑ SVR.",
        "• ↓ cardiac output especially in hypovolemia or poor reserve.",
        "BOARD PEARL: Sudden hypotension after insufflation → think ↓ preload first (IAP effect) ± bleeding.",
        "",
        "Respiratory effects:",
        "• Diaphragm elevation → ↓ lung compliance.",
        "• ↑ peak airway pressures.",
        "• CO₂ absorption → ↑ PaCO₂ → respiratory acidosis unless minute ventilation adjusted.",
        "",
        "Renal effects:",
        "• ↓ renal blood flow → ↓ urine output (often physiologic in laparoscopy).",
        "",
        "Neurologic effects:",
        "• ↑ intrathoracic pressure and venous congestion may increase ICP.",
        "",
        "THORACOSCOPY (VATS) PHYSIOLOGY (high yield concept):",
        "• One-lung ventilation increases shunt fraction.",
        "• Hypoxemia during OLV is common → manage with PEEP to dependent lung, CPAP to non-dependent lung, optimize FiO₂ and hemodynamics."
      ]
    },
    {
      id: "mis-3-anesthesia-team",
      title: "3) Anesthesia & The Minimally Invasive Team",
      content: [
        "ANESTHESIA CONSIDERATIONS (Modern principles):",
        "• Controlled ventilation is standard.",
        "• ETCO₂ monitoring is essential; expect rise after insufflation.",
        "• Increase minute ventilation to compensate for CO₂ absorption.",
        "• Use lowest effective insufflation pressure (often 10–12 mmHg; avoid >15 when possible).",
        "",
        "TEAM CONCEPT (Schwartz systems thinking):",
        "MIS safety depends on coordination:",
        "• Surgeon controls access and energy safety.",
        "• Anesthesia manages physiology (CO₂, compliance, hemodynamics).",
        "• Scrub/circulator ensure equipment readiness, counts, troubleshooting, and safe exchange of instruments.",
        "",
        "BOARD PEARL:",
        "Many MIS complications are team/communication problems (access injury, energy injury, equipment failure) rather than dissection skill."
      ]
    },
    {
      id: "mis-4-room-setup-positioning",
      title: "4) Room Setup & Patient Positioning",
      content: [
        "ROOM SETUP / MIS SUITE PRINCIPLES:",
        "• Ergonomics matters: reduces fatigue and errors.",
        "• Monitor placed in surgeon’s line of sight; camera holder position planned.",
        "• Cords/insufflator/energy towers arranged to avoid tangling or accidental disconnection.",
        "",
        "PATIENT POSITIONING:",
        "• Positioning is part of exposure in MIS (gravity replaces hands).",
        "• Ensure padding, nerve protection, and secure fixation.",
        "",
        "KEY EXAM POINTS:",
        "• Trendelenburg increases venous return but raises airway pressures and risk of aspiration.",
        "• Reverse Trendelenburg decreases venous return → hypotension risk (especially after insufflation)."
      ]
    },
    {
      id: "mis-5-access",
      title: "5) General Principles of Access (Highest Risk Step)",
      content: [
        "GENERAL PRINCIPLES OF ACCESS (EXAM FAVORITE):",
        "The MOST dangerous step in laparoscopy is INITIAL ENTRY (Veress/trocar).",
        "",
        "Access techniques:",
        "• Closed (Veress needle).",
        "• Open (Hasson).",
        "• Optical trocar entry.",
        "",
        "HIGH-RISK PATIENTS for entry injury:",
        "• Prior laparotomy (adhesions).",
        "• Severe obesity (thicker abdominal wall).",
        "• Severe cachexia (closer vessels).",
        "• Distended bowel / obstruction.",
        "",
        "PRACTICAL PRINCIPLE:",
        "Open (Hasson) entry often preferred when adhesions are likely.",
        "",
        "EXAM TRAPS:",
        "• Injury can be vascular (catastrophic) or bowel (delayed recognition).",
        "• Early recognition beats perfect technique: check hemodynamics, inspect entry site internally, maintain suspicion."
      ]
    },
    {
      id: "mis-6-port-placement",
      title: "6) Port Placement & Imaging Systems",
      content: [
        "PORT PLACEMENT PRINCIPLES:",
        "• Triangulation: camera between working ports.",
        "• Adequate spacing to avoid sword-fighting.",
        "• Align ports with target anatomy and planned dissection planes.",
        "",
        "IMAGING SYSTEMS:",
        "• High-definition optics improve identification of planes.",
        "• Camera stability and horizon control reduce error and fatigue.",
        "",
        "BOARD PEARL:",
        "Poor ergonomics increases operative time and error rate even with excellent knowledge."
      ]
    },
    {
      id: "mis-7-energy-instruments-robotics",
      title: "7) Energy Sources, Instrumentation & Robotic Surgery",
      content: [
        "ENERGY SOURCES (VERY HIGH YIELD):",
        "",
        "Monopolar electrosurgery:",
        "• Current passes through patient to grounding pad.",
        "• Risks: stray energy, capacitive coupling, insulation failure → occult burns.",
        "",
        "Bipolar energy:",
        "• Current confined between jaws.",
        "• Safer near vital structures; less stray energy.",
        "",
        "Ultrasonic devices (e.g., Harmonic):",
        "• Mechanical vibration → protein denaturation.",
        "• Less smoke; generally less thermal spread than monopolar, but still can injure.",
        "",
        "Advanced vessel sealers:",
        "• Pressure + energy → seals vessels (often up to ~7 mm).",
        "",
        "BOARD PEARL (classic):",
        "Delayed bowel perforation after laparoscopy is commonly due to lateral thermal injury (not trocar).",
        "",
        "ROBOTIC SURGERY:",
        "Advantages:",
        "• Wristed articulation, tremor filtration, improved visualization (often 3D).",
        "Limitations:",
        "• No tactile feedback.",
        "• Higher cost and longer setup time.",
        "• Must maintain the same oncologic principles; robot doesn’t replace judgment."
      ]
    },
    {
      id: "mis-8-special-considerations",
      title: "8) Special Considerations",
      content: [
        "PEDIATRIC LAPAROSCOPY:",
        "• Use lower insufflation pressures and careful volume/temperature management.",
        "",
        "LAPAROSCOPY DURING PREGNANCY:",
        "• Generally safe with modifications.",
        "• Left lateral tilt reduces aortocaval compression.",
        "• Entry considerations: uterus size, trocar placement higher than usual.",
        "",
        "MIS IN CANCER TREATMENT:",
        "Oncologic equivalence depends on:",
        "• Adequate margins (R0 concept).",
        "• Appropriate lymphadenectomy when indicated.",
        "• Respecting tumor handling principles (avoid spillage).",
        "",
        "ELDERLY / FRAIL:",
        "• MIS may offer recovery benefits but physiology may be less tolerant to pneumoperitoneum → use lower pressures and optimize volume status.",
        "",
        "CIRRHOSIS / PORTAL HTN:",
        "• MIS can reduce wound complications and ascites leakage but bleeding risk is higher; careful selection and technique required.",
        "",
        "EDUCATION & SKILL ACQUISITION:",
        "• Learning curve exists; simulation reduces error.",
        "• Telementoring supports safe adoption of new procedures."
      ]
    },
    {
      id: "mis-mcqs",
      title: "9) Board-Style MCQs (High-Yield)",
      mcqs: [
        {
          id: "mis1",
          question: "The most dangerous step during laparoscopic surgery is:",
          options: [
            { id: "a", text: "Dissection phase" },
            { id: "b", text: "Specimen extraction" },
            { id: "c", text: "Initial abdominal access" },
            { id: "d", text: "Closure of ports" }
          ],
          answerId: "c",
          explanation:
            "Major vascular and bowel injuries most commonly occur during initial trocar or Veress needle entry."
        },
        {
          id: "mis2",
          question: "Hypotension immediately after pneumoperitoneum creation is primarily caused by:",
          options: [
            { id: "a", text: "CO₂ toxicity" },
            { id: "b", text: "Decreased venous return" },
            { id: "c", text: "Myocardial depression" },
            { id: "d", text: "Vagal stimulation" }
          ],
          answerId: "b",
          explanation:
            "Increased intra-abdominal pressure compresses the IVC, reducing preload and cardiac output."
        },
        {
          id: "mis3",
          question: "Which physiologic change is expected during laparoscopy with CO₂ insufflation?",
          options: [
            { id: "a", text: "Decreased PaCO₂" },
            { id: "b", text: "Increased lung compliance" },
            { id: "c", text: "Hypercarbia from CO₂ absorption" },
            { id: "d", text: "Increased renal perfusion" }
          ],
          answerId: "c",
          explanation:
            "CO₂ insufflation increases systemic absorption leading to elevated PaCO₂ unless minute ventilation is increased."
        },
        {
          id: "mis4",
          question: "Delayed bowel perforation after laparoscopy is most commonly due to:",
          options: [
            { id: "a", text: "Mechanical trocar injury" },
            { id: "b", text: "Thermal energy spread" },
            { id: "c", text: "Suture ischemia" },
            { id: "d", text: "CO₂ insufflation pressure" }
          ],
          answerId: "b",
          explanation:
            "Lateral thermal spread from energy devices can cause delayed necrosis and perforation."
        },
        {
          id: "mis5",
          question: "Preferred entry approach in a patient with prior midline laparotomy and suspected adhesions:",
          options: [
            { id: "a", text: "Blind trocar insertion" },
            { id: "b", text: "Veress needle infraumbilical" },
            { id: "c", text: "Open Hasson technique" },
            { id: "d", text: "Single incision access" }
          ],
          answerId: "c",
          explanation:
            "Open access reduces risk of bowel injury when adhesions are likely."
        },
        {
          id: "mis6",
          question: "Primary limitation of robotic surgery compared with conventional laparoscopy:",
          options: [
            { id: "a", text: "Poor visualization" },
            { id: "b", text: "Limited instrument articulation" },
            { id: "c", text: "Absence of tactile feedback" },
            { id: "d", text: "Higher conversion rate" }
          ],
          answerId: "c",
          explanation:
            "Robotic platforms generally lack haptic feedback despite improved visualization and dexterity."
        }
      ]
    }
  ]
},
{
  id: "molecular-cell-biology",
  title: "14. MOLECULAR BIOLOGY, THE ATOMIC THEORY OF DISEASE AND PRECISION SURGERY",
  subtitle: "Schwartz 11th Edition — Cancer Biology, Precision Medicine & Modern Surgical Oncology",
  sections: [

    {
      id: "mcb-overview",
      title: "1) Core Molecular Concepts for Surgeons",
      content: [

"WHY THIS CHAPTER MATTERS (Exam Reality):",
"Molecular biology explains WHY cancers grow, metastasize, and respond or fail therapy.",
"Modern surgery integrates molecular diagnosis into treatment sequencing.",

"",
"CENTRAL DOGMA:",
"DNA → RNA → Protein.",
"Mutations alter protein signaling → uncontrolled proliferation.",

"",
"ATOMIC THEORY OF DISEASE (Schwartz Concept):",
"Disease originates from molecular abnormalities rather than organ-level dysfunction.",
"Modern therapy targets molecular drivers instead of anatomy alone.",

"",
"SURGICAL APPLICATION:",
"• Biomarker-directed therapy.",
"• Precision oncology.",
"• Targeted systemic therapy selection.",
"• Prognostic stratification before surgery."

      ]
    },

    {
      id: "mcb-gene-regulation",
      title: "2) DNA, Gene Regulation & Human Genome",
      content: [

"DNA & HEREDITY:",
"Genes encode regulatory and structural proteins controlling cellular behavior.",

"",
"GENE REGULATION (ULTRA HIGH YIELD):",
"Gene expression controlled by:",
"• Promoters and enhancers.",
"• Transcription factors.",
"• Epigenetic modification (DNA methylation, histone acetylation).",

"BOARD PEARL:",
"Cancer may arise WITHOUT mutation — abnormal gene EXPRESSION alone can drive malignancy.",

"",
"HUMAN GENOME:",
"Only ~1–2% codes proteins; regulatory regions critically influence cancer behavior.",

"",
"CLINICAL IMPLICATION:",
"Same cancer histology ≠ same biology → explains variable treatment response."

      ]
    },

    {
      id: "mcb-cell-cycle",
      title: "3) Cell Cycle, Apoptosis & Cancer Survival",
      content: [

"CELL CYCLE CHECKPOINTS:",
"• G1/S checkpoint — RB pathway.",
"• DNA damage checkpoint — p53.",
"Loss of checkpoints → genomic instability.",

"",
"APOPTOSIS:",
"Programmed cell death eliminates damaged cells.",

"Intrinsic pathway:",
"• Mitochondrial injury → caspase activation.",

"Extrinsic pathway:",
"• Death receptor signaling.",

"",
"CANCER STRATEGY:",
"Malignant cells survive by EVADING apoptosis.",

"",
"CLINICAL PEARL:",
"Many chemotherapies work by inducing apoptosis via DNA damage."

      ]
    },

    {
      id: "mcb-signal-transduction",
      title: "4) Signal Transduction Pathways (Exam Favorite)",
      content: [

"KEY PATHWAYS:",
"• RAS–MAPK → proliferation.",
"• PI3K–AKT–mTOR → survival & metabolism.",
"• JAK–STAT → cytokine signaling.",
"• TGF-β → growth inhibition (lost in cancer).",

"",
"ONCOLOGIC PRINCIPLE:",
"Targeted therapy blocks abnormal signaling instead of killing all dividing cells.",

"",
"EXAM PEARL:",
"Resistance develops because tumors activate alternate pathways."

      ]
    },

    {
      id: "mcb-precision",
      title: "5) Precision Medicine & Molecular Oncology",
      content: [

"PRECISION MEDICINE:",
"Treatment tailored to molecular mutation rather than tumor location alone.",

"",
"PREDICTIVE vs PROGNOSTIC MARKERS:",
"• Predictive → predicts treatment response.",
"• Prognostic → predicts outcome regardless of therapy.",

"",
"EXAMPLES:",
"• HER2 amplification → anti-HER2 therapy.",
"• EGFR mutation → targeted inhibitors.",
"• MSI-high tumors → immunotherapy response.",

"",
"SURGICAL IMPLICATION:",
"Molecular profile may determine:",
"• Neoadjuvant therapy.",
"• Operability timing.",
"• Need for systemic therapy."

      ]
    },

    {
      id: "mcb-gene-therapy",
      title: "6) Gene Therapy, Stem Cells & CRISPR",
      content: [

"GENE THERAPY:",
"Attempts to correct disease by:",
"• Replacing defective genes.",
"• Silencing oncogenes.",
"• Enhancing immune recognition.",

"",
"STEM CELL PRINCIPLES:",
"• Self-renewal.",
"• Differentiation potential.",
"Cancer stem cells contribute to recurrence and resistance.",

"",
"CRISPR-CAS9 (HIGH YIELD CONCEPT):",
"Guide RNA directs Cas9 enzyme to cut specific DNA sequence.",

"Repair mechanisms:",
"• Non-homologous end joining → gene knockout.",
"• Homology-directed repair → gene correction.",

"",
"LIMITATIONS:",
"• Off-target mutation risk.",
"• Delivery challenges.",
"• Ethical concerns.",

"",
"BOARD PEARL:",
"CRISPR represents future precision surgery but remains investigational clinically."

      ]
    },

    {
      id: "mcb-lab-techniques",
      title: "7) Molecular Techniques (Only What Surgeons Must Know)",
      content: [

"PCR:",
"Amplifies DNA → mutation detection.",

"",
"Immunohistochemistry (IHC):",
"Detects protein expression (e.g., HER2, ER, PD-L1).",

"",
"Next-Generation Sequencing:",
"Identifies driver mutations guiding targeted therapy.",

"",
"KEY EXAM PRINCIPLE:",
"Surgeons do NOT need lab steps — only clinical interpretation."

      ]
    },

    {
      id: "mcb-mcqs",
      title: "8) Board-Style MCQs (High-Yield)",
      mcqs: [

{
id: "mcb1",
question: "Loss of which checkpoint most directly leads to genomic instability in cancer cells?",
options: [
{ id: "a", text: "G2/M checkpoint" },
{ id: "b", text: "G1/S checkpoint regulated by p53" },
{ id: "c", text: "Mitotic spindle checkpoint" },
{ id: "d", text: "Cytokinesis control" }
],
answerId: "b",
explanation:
"p53 regulates DNA damage response at G1/S. Loss allows replication of damaged DNA."
},

{
id: "mcb2",
question: "Targeted cancer therapy differs from traditional chemotherapy because it primarily:",
options: [
{ id: "a", text: "Destroys all rapidly dividing cells" },
{ id: "b", text: "Blocks specific molecular signaling pathways" },
{ id: "c", text: "Stimulates nonspecific immunity" },
{ id: "d", text: "Prevents angiogenesis only" }
],
answerId: "b",
explanation:
"Targeted therapies inhibit specific oncogenic pathways driving tumor growth."
},

{
id: "mcb3",
question: "Failure of apoptosis in malignant cells primarily results in:",
options: [
{ id: "a", text: "Reduced angiogenesis" },
{ id: "b", text: "Accumulation of genetically damaged cells" },
{ id: "c", text: "Improved immune detection" },
{ id: "d", text: "Decreased mutation rate" }
],
answerId: "b",
explanation:
"Apoptosis normally eliminates damaged cells; its loss permits survival of mutated clones."
},

{
id: "mcb4",
question: "Which statement best describes precision oncology?",
options: [
{ id: "a", text: "Treatment based on tumor size" },
{ id: "b", text: "Treatment guided by molecular mutation profile" },
{ id: "c", text: "Uniform chemotherapy protocols" },
{ id: "d", text: "Surgery alone for localized disease" }
],
answerId: "b",
explanation:
"Modern oncology selects therapy according to molecular drivers rather than anatomy alone."
},

{
id: "mcb5",
question: "CRISPR-Cas9 genome editing functions by:",
options: [
{ id: "a", text: "Blocking transcription factors" },
{ id: "b", text: "Cutting DNA at a targeted sequence guided by RNA" },
{ id: "c", text: "Replacing entire chromosomes" },
{ id: "d", text: "Increasing protein synthesis" }
],
answerId: "b",
explanation:
"Guide RNA directs Cas9 nuclease to specific DNA sequences for editing."
}

      ]
    }

  ]
},
{
  id: "skin-subcutaneous-tissue-master",
  title: "SKIN & SUBCUTANEOUS TISSUE",
  subtitle: "Schwartz 11th backbone + Board algorithms + ABSITE/PSGS-style MCQs + Oral Boards",
  sections: [
    {
      id: "skin-core-frame",
      title: "1) The Exam Frame: What Boards Actually Test",
      content: [
        "Core exam idea:",
        "• Skin is not tested as dermatology. It is tested as SURGICAL JUDGMENT.",
        "• Examiner wants to know: infection vs inflammation vs malignancy, and WHEN TO CUT vs WHEN NOT TO CUT.",
        "",
        "Most repeated exam themes:",
        "A) Sick skin infection vs NSTI → do not delay OR.",
        "B) Ulcer that worsens after debridement → think PYODERMA GANGRENOSUM (don’t cut).",
        "C) Pigmented lesion → melanoma logic (Breslow, margins, SLNB).",
        "D) Chronic wound / burn scar ulcer → Marjolin ulcer (SCC until proven otherwise).",
        "E) Simple tumor behavior → BCC (local), SCC (nodal risk), Merkel (aggressive).",
        "",
        "Board scoring principle:",
        "• Top scorers recognize traps early and present a CLEAN algorithmic plan."
      ]
    },

    // =========================================================
    // ANATOMY / HISTOLOGY (ONLY WHAT SURGEONS NEED)
    // =========================================================
    {
      id: "anatomy-histo",
      title: "2) Anatomy & Histology (Surgery-Relevant Only)",
      content: [
        "Epidermis:",
        "• Barrier; keratinocytes dominate.",
        "• Basal layer proliferates → origin of many neoplasms.",
        "",
        "Dermis:",
        "• Collagen/elastin matrix → tensile strength.",
        "• Contains adnexal structures (hair follicles, sweat glands) and vascular plexus.",
        "",
        "Hypodermis (subcutaneous fat):",
        "• Surgical plane for flaps, infection spread, and necrotizing infections.",
        "",
        "Why examiners include this:",
        "• Explains spread patterns: cellulitis (dermis/subcutis) vs fasciitis (deep fascia).",
        "• Explains why burns/pressure injuries behave differently (vascular supply + depth)."
      ]
    },

    // =========================================================
    // DECISION ALGORITHMS (ULTRA HIGH YIELD)
    // =========================================================
    {
      id: "decision-algorithms",
      title: "3) Decision Algorithms (What Your Brain Should Do in the Exam)",
      content: [
        "ALGORITHM A — SKIN LESION (mass/ulcer/pigment) → what next?",
        "Step 1: Is it an INFECTION/SEPSIS picture?",
        "• Fever, tachy, severe pain, rapidly spreading erythema, bullae, crepitus → treat as severe infection / NSTI work-up.",
        "",
        "Step 2: Is it an INFLAMMATORY mimicker?",
        "• Painful ulcer with violaceous undermined edges, pathergy (worse after debridement) → Pyoderma gangrenosum → avoid debridement; steroids/immunosuppression after excluding infection.",
        "",
        "Step 3: Is it a MALIGNANCY pattern?",
        "• Nonhealing ulcer, burn scar ulcer, chronic wound → SCC/Marjolin until proven otherwise → biopsy.",
        "• Pearly papule, rolled borders, telangiectasia → BCC → excision or Mohs depending on site.",
        "• Firm rapidly growing nodule + immunosuppressed/elderly + sun-exposed → Merkel → urgent biopsy + staging + wide excision + nodal eval + RT.",
        "• Pigmented lesion with ABCDE changes → melanoma workflow (below).",
        "",
        "ALGORITHM B — SUSPECT NSTI (nec fasc) vs cellulitis/abscess",
        "1) Clinical trigger = pain out of proportion + systemic toxicity + rapid progression.",
        "2) Immediate actions: ABC, large-bore IVs, labs, broad antibiotics, call OR.",
        "3) Imaging: only if it does NOT delay OR. CT may help if stable, but do not wait if unstable.",
        "4) Definitive: surgical exploration/debridement; repeat debridements common.",
        "",
        "ALGORITHM C — MELANOMA WORKFLOW (board template)",
        "1) Biopsy correctly:",
        "• Preferred: excisional biopsy with narrow margins (1–3 mm).",
        "• If large/face/acral: incisional/punch from most suspicious area acceptable.",
        "2) Once melanoma confirmed: Breslow thickness drives management.",
        "3) Wide local excision margin (core board rule of thumb):",
        "• In situ: 0.5–1.0 cm",
        "• ≤1.0 mm: 1 cm",
        "• 1–2 mm: 1–2 cm",
        "• >2 mm: 2 cm",
        "4) SLNB:",
        "• Consider if ≥0.8 mm OR ulcerated OR high-risk features; discuss per staging.",
        "5) Systemic therapy is for advanced disease; surgery still matters for local control / selected metastasectomy."
      ]
    },

    // =========================================================
    // INFLAMMATORY CONDITIONS (HIGH-YIELD ONES)
    // =========================================================
    {
      id: "hidradenitis-pg-sjs",
      title: "4) Inflammatory Conditions the Boards Love",
      content: [
        "A) HIDRADENITIS SUPPURATIVA (HS)",
        "Key concept: follicular occlusion disease in apocrine-bearing areas (axilla/groin/perineum).",
        "Exam focus: staging (Hurley) and when surgery is indicated.",
        "",
        "Hurley staging (high yield):",
        "• I: abscesses without sinus tracts/scarring.",
        "• II: recurrent abscesses + sinus tracts/scarring, widely separated lesions.",
        "• III: diffuse involvement with multiple interconnected tracts/abscesses.",
        "",
        "Surgical principles:",
        "• I: medical therapy; I&D is temporary (not definitive).",
        "• II–III: definitive surgery = wide excision of involved area ± reconstruction; set expectations for recurrence.",
        "",
        "B) PYODERMA GANGRENOSUM (PG) — CLASSIC SURGICAL TRAP",
        "Pattern:",
        "• Painful ulcer, violaceous undermined border, pathergy (worsens after trauma/debridement).",
        "• Often associated with IBD, rheumatologic disease, hematologic malignancy.",
        "",
        "Board rule:",
        "• DO NOT repeatedly debride a PG ulcer (will enlarge).",
        "• First: exclude infection; then treat with systemic steroids/immunosuppression; gentle wound care.",
        "",
        "C) EPIDERMAL NECROLYSIS (SJS/TEN spectrum)",
        "Exam focus:",
        "• Drug reaction → widespread epidermal detachment, mucosal involvement, very ill patient.",
        "Surgical/ICU principles:",
        "• Stop offending drug, ICU/burn-unit style supportive care, infection control, fluids/electrolytes, ophthalmology early."
      ]
    },

    // =========================================================
    // INJURIES (WHAT THEY ASK)
    // =========================================================
    {
      id: "injuries-high-yield",
      title: "5) Injuries (Board-Relevant Pearls)",
      content: [
        "Radiation injury:",
        "• Chronic ischemia/fibrosis → poor healing.",
        "• Board move: biopsy nonhealing ulcer in irradiated field (rule out malignancy).",
        "• Reconstruction often requires well-vascularized flap tissue.",
        "",
        "Pressure injury:",
        "• Prevention + offloading are primary; nutrition matters.",
        "• Surgical flap coverage only after infection/osteomyelitis addressed and pressure source controlled.",
        "",
        "Thermal injury (overview only here):",
        "• Depth drives healing potential; infection risk and scarring correlate with depth.",
        "• (You already have a burns module; keep this section as linkage.)"
      ]
    },

    // =========================================================
    // BACTERIAL INFECTIONS (SURGICAL VERSION)
    // =========================================================
    {
      id: "skin-infections-surgical",
      title: "6) Bacterial Skin & Soft Tissue Infections (Surgery Angle)",
      content: [
        "Uncomplicated vs complicated:",
        "• Uncomplicated: superficial cellulitis/abscess in stable patient.",
        "• Complicated: systemic toxicity, deep tissue involvement, immunosuppressed, rapid progression, NSTI features.",
        "",
        "Abscess principle:",
        "• Drainage is primary; antibiotics adjunct depending on severity/risk factors.",
        "",
        "Cellulitis principle:",
        "• Antibiotics + elevation; search for portal of entry; reassess 24–48h.",
        "",
        "NSTI red flags (repeat on purpose—this is exam gold):",
        "• Pain out of proportion",
        "• Rapid progression",
        "• Skin necrosis/bullae",
        "• Crepitus",
        "• Systemic toxicity",
        "Board line:",
        "• 'I will not delay operative exploration if NSTI is suspected.'"
      ]
    },

    // =========================================================
    // TUMORS (BENIGN + MALIGNANT) — EXAM PATTERNS
    // =========================================================
    {
      id: "tumors-patterns",
      title: "7) Tumors of Skin & Subcutis (Pattern Recognition)",
      content: [
        "BENIGN (what matters surgically):",
        "• Nevi: monitor for ABCDE change; suspicious lesions → biopsy.",
        "• Cysts (epidermoid): excise when not inflamed; acute infection may need I&D then delayed excision.",
        "• Hemangioma: most infantile involute; surgery reserved for complications/functional issues.",
        "",
        "MALIGNANT — BCC vs SCC vs Melanoma vs Merkel (must know cold)",
        "",
        "A) BASAL CELL CARCINOMA (BCC)",
        "• Most common skin cancer; locally destructive; metastasis rare.",
        "• Exam management: excision with margin; Mohs for high-risk sites (face, recurrent, ill-defined).",
        "",
        "B) SQUAMOUS CELL CARCINOMA (SCC)",
        "• Higher metastatic potential than BCC; nodal risk increases with high-risk features.",
        "High-risk features (board useful):",
        "• Larger size, depth/invasion, poor differentiation, perineural invasion, ear/lip location, immunosuppression, chronic scars/ulcers.",
        "Management: wide excision; consider nodal assessment/RT in high-risk disease.",
        "",
        "C) MARJOLIN ULCER",
        "• SCC arising in chronic wounds/burn scars.",
        "• Board move: biopsy any chronic scar ulcer/nonhealing wound; treat as aggressive SCC.",
        "",
        "D) MELANOMA (core points repeat):",
        "• Prognosis: Breslow thickness is key predictor.",
        "• Surgical margins by thickness; SLNB for staging in appropriate thickness/high risk.",
        "",
        "E) MERKEL CELL CARCINOMA",
        "• Rare, aggressive neuroendocrine skin cancer.",
        "• Rapid growth; elderly, sun exposure, immunosuppressed.",
        "• Treat: wide excision + nodal evaluation (often SLNB) + adjuvant radiation commonly; systemic therapy for advanced disease.",
        "",
        "F) DFSP (Dermatofibrosarcoma protuberans)",
        "• Locally aggressive, low metastatic risk; wide margins / Mohs-like approach; recurrence risk if inadequate margins."
      ]
    },

    // =========================================================
    // EXAM TACTICS: HOW TO ANSWER
    // =========================================================
    {
      id: "how-to-answer",
      title: "8) How to Answer These Questions Correctly (Board Tactics)",
      content: [
        "When examiner gives a vignette, your answer should follow this script:",
        "",
        "SCRIPT:",
        "1) 'My priority is to classify this as infection vs inflammatory mimicker vs malignancy.'",
        "2) 'If NSTI suspected → resuscitate + broad antibiotics + immediate OR; imaging only if no delay.'",
        "3) 'If chronic ulcer / scar ulcer → biopsy to rule out SCC/Marjolin.'",
        "4) 'If painful ulcer worsens after debridement → consider PG; stop aggressive debridement; exclude infection; immunosuppression.'",
        "5) 'If pigmented lesion → excisional biopsy; Breslow thickness guides margins/SLNB.'",
        "",
        "This approach sounds like a safe surgeon — and that’s what boards reward."
      ]
    },

    // =========================================================
    // ORAL BOARDS: SAMPLE CASES (WITH FOLLOW-UPS)
    // =========================================================
    {
      id: "oral-boards",
      title: "9) Sample Oral Board Exam (PSGS-style) — With Follow-ups",
      content: [
        "ORAL CASE 1 — 'Painful Leg Swelling' (NSTI trap)",
        "Stem:",
        "• 45/M, diabetic, 1 day of severe leg pain, swelling, erythema; febrile, tachy; pain out of proportion; some bullae.",
        "",
        "Candidate expected opening line (what to say):",
        "• 'This is NSTI until proven otherwise. I will prioritize resuscitation and urgent operative exploration without delaying for imaging.'",
        "",
        "Step-by-step answer:",
        "A) Initial management:",
        "• ABC, oxygen, large-bore IV x2, labs (CBC/CMP/CRP/lactate), blood cultures, start broad-spectrum antibiotics immediately.",
        "• Call OR/anesthesia/ICU early; consent for exploration/debridement and possible amputation depending on findings.",
        "",
        "B) Imaging question (examiner trap): 'Do you want CT?'",
        "Best answer:",
        "• 'Only if patient is stable and it will not delay OR. CT can help if diagnosis is uncertain, but clinical suspicion already warrants exploration.'",
        "",
        "C) Intra-op endpoint:",
        "• 'Aggressive debridement to bleeding viable tissue; send tissue for Gram stain/culture; plan staged re-exploration 24–48h.'",
        "",
        "Examiner follow-up:",
        "Q: 'LRINEC score is low—will you still operate?'",
        "A (top scorer):",
        "• 'Yes. LRINEC is not sensitive enough to rule out NSTI. Clinical findings override scores.'",
        "",
        "ORAL CASE 2 — 'Ulcer that got worse after debridement' (Pyoderma gangrenosum)",
        "Stem:",
        "• 32/F, painful ulcer on leg; started as pustule then ulcerated; debrided twice → rapidly enlarging; violaceous undermined borders; afebrile; has history of ulcerative colitis.",
        "",
        "Best opening line:",
        "• 'This pattern suggests pyoderma gangrenosum with pathergy; repeated debridement worsens it. I will stop aggressive debridement, exclude infection, and coordinate immunosuppression.'",
        "",
        "Key management sequence (board-safe):",
        "• Culture/biopsy to exclude infection and malignancy (but be gentle).",
        "• Start systemic steroids (after excluding uncontrolled infection), consult dermatology/IM; local atraumatic wound care.",
        "",
        "Examiner follow-up:",
        "Q: 'What mistake was made?'",
        "A:",
        "• 'Assuming all ulcers need debridement. In PG, trauma triggers pathergy and enlarges ulcer.'",
        "",
        "ORAL CASE 3 — 'Pigmented lesion on foot' (Melanoma logic)",
        "Stem:",
        "• 58/M, enlarging irregular pigmented lesion on plantar foot; ABCDE positive.",
        "",
        "Expected answer:",
        "A) Biopsy:",
        "• 'Excisional biopsy with narrow margin if feasible; if not feasible due to size/site, incisional/punch from most suspicious area is acceptable.'",
        "",
        "B) After melanoma confirmation:",
        "• 'Breslow thickness determines excision margins and SLNB indication.'",
        "",
        "Examiner follow-up:",
        "Q: 'What’s the single most important prognostic factor?'",
        "A:",
        "• 'Breslow thickness.'",
        "",
        "Q: 'Do tumor markers help diagnose melanoma?'",
        "A:",
        "• 'No—markers are not diagnostic; pathology is diagnosis.'"
      ]
    },

    // =========================================================
    // MCQs (WITH WHY WRONG IS WRONG)
    // =========================================================
    {
      id: "mcqs",
      title: "10) MCQs — High-Yield, Trap-Style (With Why Wrong Answers Are Wrong)",
      mcqs: [
        {
          id: "skin1",
          question:
            "A 50-year-old diabetic has rapidly progressive erythema of the leg with severe pain out of proportion, fever, and hemorrhagic bullae. The next best step is:",
          options: [
            { id: "a", text: "CT scan to confirm fascial gas before surgery" },
            { id: "b", text: "Start antibiotics and observe response for 6–8 hours" },
            { id: "c", text: "Immediate operative exploration and debridement" },
            { id: "d", text: "Needle aspiration to confirm abscess prior to incision" }
          ],
          answerId: "c",
          explanation:
            "Correct: NSTI suspected → do not delay. Immediate exploration/debridement is definitive. " +
            "Why others are wrong: (a) Imaging may help but must not delay OR; absence of gas does not exclude NSTI. " +
            "(b) Observation risks progression and death. (d) NSTI is not managed by aspiration; delay is dangerous."
        },
        {
          id: "skin2",
          question:
            "A painful leg ulcer enlarges rapidly after debridement, with violaceous undermined borders. Patient has ulcerative colitis. Best next step?",
          options: [
            { id: "a", text: "Repeat aggressive debridement until healthy granulation forms" },
            { id: "b", text: "Wide excision with 2 cm margins" },
            { id: "c", text: "Consider pyoderma gangrenosum; exclude infection and start immunosuppression" },
            { id: "d", text: "High-dose antibiotics for MRSA coverage for 14 days" }
          ],
          answerId: "c",
          explanation:
            "Correct: PG with pathergy—surgery worsens it; manage with immunosuppression after excluding infection. " +
            "Why others are wrong: (a) worsens disease. (b) wrong diagnosis and causes massive pathergy. " +
            "(d) antibiotics alone won’t fix noninfectious PG; may be used only if superinfection."
        },
        {
          id: "skin3",
          question:
            "The single most important prognostic factor in melanoma is:",
          options: [
            { id: "a", text: "Clark level" },
            { id: "b", text: "Breslow thickness" },
            { id: "c", text: "Serum LDH at diagnosis for all stages" },
            { id: "d", text: "Lesion diameter" }
          ],
          answerId: "b",
          explanation:
            "Correct: Breslow thickness is the strongest prognostic factor for localized melanoma and guides margins/SLNB. " +
            "Why others are wrong: (a) Clark level is less predictive and used less now. " +
            "(c) LDH is mainly prognostic in advanced/metastatic settings, not the primary factor overall. " +
            "(d) diameter is less predictive than depth."
        },
        {
          id: "skin4",
          question:
            "A chronic nonhealing ulcer within a burn scar is most concerning for:",
          options: [
            { id: "a", text: "Basal cell carcinoma" },
            { id: "b", text: "Squamous cell carcinoma (Marjolin ulcer)" },
            { id: "c", text: "Merkel cell carcinoma" },
            { id: "d", text: "Benign hypertrophic scar only" }
          ],
          answerId: "b",
          explanation:
            "Correct: Marjolin ulcer = SCC arising in chronic scars/wounds. Biopsy is mandatory. " +
            "Why others are wrong: (a) BCC can occur but classic association with chronic scars is SCC. " +
            "(c) Merkel is aggressive but not the classic burn-scar ulcer association. (d) dangerous dismissal."
        },
        {
          id: "skin5",
          question:
            "Basal cell carcinoma is best characterized by:",
          options: [
            { id: "a", text: "High risk of nodal metastasis" },
            { id: "b", text: "Locally destructive with rare metastasis" },
            { id: "c", text: "Systemic disease early, requiring chemotherapy first" },
            { id: "d", text: "Rapid hematogenous spread to lung" }
          ],
          answerId: "b",
          explanation:
            "Correct: BCC is locally invasive but metastasis is rare. " +
            "Why others are wrong: (a) describes higher-risk SCC. (c) not true for BCC. (d) not typical."
        },
        {
          id: "skin6",
          question:
            "A key feature that increases metastatic risk in cutaneous SCC is:",
          options: [
            { id: "a", text: "Pearly rolled border" },
            { id: "b", text: "Perineural invasion" },
            { id: "c", text: "Slow growth over years" },
            { id: "d", text: "Location on the trunk only" }
          ],
          answerId: "b",
          explanation:
            "Correct: perineural invasion is a high-risk SCC feature associated with recurrence and metastasis. " +
            "Why others are wrong: (a) is classic for BCC. (c) growth rate alone doesn’t define risk. (d) trunk is not uniquely high-risk."
        }
      ]
    }
  ]
},
{
  id: "esophageal-cancer",
  title: "ESOPHAGEAL CANCER",
  subtitle: "Schwartz 11th backbone + guideline sequencing",
  sections: [
      {
        id: "overview",
        title: "1) High-Yield Overview",
        content: [
          "A. Histology & epidemiology (Schwartz core framing)",
          "Two main histologies:",
          "• Squamous cell carcinoma (SCC): classically upper/mid esophagus; risk factors: tobacco, alcohol, caustic injury, achalasia, prior head/neck SCC, nutritional deficiencies (conceptually).",
          "• Adenocarcinoma: distal esophagus/GEJ; risk factors: GERD → Barrett’s esophagus, obesity (conceptually).",
          "B. Typical presentation (board classic)",
          "• Progressive dysphagia (solids → liquids)",
          "• Unintentional weight loss",
          "• Odynophagia, chest/back pain, regurgitation, aspiration/cough",
          "• Hoarseness (recurrent laryngeal involvement) → advanced disease",
          "Oral board opener:",
          "“Esophageal cancer presents with progressive dysphagia and weight loss; diagnosis is endoscopic biopsy and staging is multimodal.”"
        ],
        qna: []
      },
      {
        id: "anatomy",
        title: "2) Anatomy & Oncologic Implications",
        content: [
          "Why esophageal cancer behaves badly (Schwartz-style concepts):",
          "• Rich submucosal lymphatic plexus → early longitudinal spread and nodal disease.",
          "• No serosa → local invasion can occur earlier.",
          "• Nodal drainage varies by level (cervical/mediastinal/celiac).",
          "Exam point: extensive lymphatic spread is why accurate staging and lymphadenectomy matter."
        ],
        qna: []
      },
      {
        id: "workup-staging",
        title: "3) Workup & Staging (Orals Script)",
        content: [
          "Step 1: Confirm diagnosis",
          "• EGD + biopsy (tissue diagnosis).",
          "• Consider brushings/biopsy for Barrett’s; document tumor level (cm from incisors).",
          "Step 2: Stage for metastasis first (rule out M1 early)",
          "• CT chest/abdomen (± pelvis): local invasion, nodes, distant disease.",
          "• PET-CT: occult metastases and metabolically active nodes.",
          "Step 3: Define local T/N stage (only if no distant mets)",
          "• EUS: best for T staging (depth), improves nodal assessment, guides endoscopic vs surgery vs neoadjuvant.",
          "Step 4: Airway evaluation when appropriate",
          "• Bronchoscopy if upper/mid lesions or suspicion of tracheobronchial invasion/fistula.",
          "Step 5: Functional assessment (expected by examiners)",
          "• Cardiopulmonary evaluation (PFTs if needed).",
          "• Nutritional assessment (albumin, weight loss, sarcopenia).",
          "• Swallow/aspiration risk assessment.",
          "Oral board line:",
          "“I stage with CT and PET to rule out metastasis, then EUS for T/N. I assess airway involvement when indicated and optimize nutrition and cardiopulmonary reserve before esophagectomy.”"
        ],
        qna: []
      },
      {
        id: "ajcc",
        title: "4) AJCC Staging Concepts",
        content: [
          "Key concepts for boards:",
          "• T1a = mucosa",
          "• T1b = submucosa",
          "• Submucosal invasion → higher nodal risk (why management differs).",
          "• M1 = distant metastasis (changes intent to palliative/systemic).",
          "Board trap: confusing very early T1a with deeper T1b."
        ],
        qna: []
      },
      {
        id: "management",
        title: "5) Management by Stage",
        content: [
          "A. Very early disease (Tis/T1a) — Endoscopic era",
          "• T1a (mucosal): EMR/ESD can be definitive if well/mod differentiated, no LVI, negative margins; ablate remaining Barrett’s dysphasia (center dependent).",
          "✅ Exam line: “T1a lesions can be treated endoscopically because nodal risk is low.”",
          "B. Early but higher risk (T1b or beyond, N0) — Surgery favored",
          "• T1b (submucosa): higher nodal risk → esophagectomy + lymphadenectomy in fit patients.",
          "C. Locally advanced resectable (T2–T4a and/or N+) — Modern standard",
          "• Neoadjuvant chemoradiation → surgery (CROSS concept).",
          "Rationale: downstaging improves R0; treats micrometastases early; improves local control; response is prognostic.",
          "Board trap: saying “surgery first” for bulky T3/N+ disease.",
          "D. Unresectable or medically inoperable",
          "• T4b invasion of unresectable structures (aorta/vertebra) or poor fitness → definitive chemoradiation + palliation.",
          "E. Metastatic (Stage IV)",
          "• Goal: symptom control + systemic therapy; palliation options: stent, RT, feeding access."
        ],
        qna: []
      },
      {
        id: "why-neoadj",
        title: "6) Why Neoadjuvant Therapy?",
        content: [
          "Concise rationale (common exam question):",
          "• Increases R0 likelihood (downstaging).",
          "• Treats micrometastases early.",
          "• Improves local-regional control.",
          "• Provides prognostic info via response.",
          "Board-quality line:",
          "“For locally advanced disease, neoadjuvant chemoradiation improves resectability and local control while addressing systemic micrometastatic disease.”"
        ],
        qna: []
      },
      {
        id: "role-eus",
        title: "7) Role of EUS",
        content: [
          "EUS helps decide between:",
          "• Endoscopic resection (T1a)",
          "• Surgery (T1b+)",
          "• Neoadjuvant strategy (T2+, N+)",
          "Oral line:",
          "“EUS is best for depth of invasion and helps risk-stratify early lesions, changing treatment intent.”"
        ],
        qna: []
      },
      {
        id: "surgery-options",
        title: "8) Surgical Options",
        content: [
          "Goals: R0 resection + adequate lymphadenectomy + safe reconstruction (gastric conduit most common).",
          "A. Ivor Lewis (abdomen + right thorax; intrathoracic anastomosis): distal/GEJ tumors.",
          "B. McKeown (abdomen + thorax + neck; cervical anastomosis): mid/upper lesions; cervical leaks less catastrophic but higher leak/stricture rates.",
          "C. Transhiatal (abdomen + neck; no thoracotomy): selected distal tumors or poor pulmonary reserve; conceptual lymphadenectomy may be less extensive than transthoracic.",
          "Board line: “Approach depends on tumor level, nodal basin, surgeon/center expertise, and patient pulmonary reserve.”"
        ],
        qna: []
      },
      {
        id: "periop",
        title: "9) Perioperative Optimization",
        content: [
          "A. Nutrition: dysphagia → malnutrition; optimize with supplements/enteral feeding; consider feeding jejunostomy when appropriate.",
          "B. Pulmonary: smoking cessation, incentive spirometry, prehab, aspiration precautions.",
          "C. Leak prevention (what you say): tension-free conduit, well-perfused gastric tube, meticulous technique (drains vary by center)."
        ],
        qna: []
      },
      {
        id: "complications",
        title: "10) Complications",
        content: [
          "Must-know complications (oral boards):",
          "• Anastomotic leak",
          "• Pneumonia/resp failure (always mention pulmonary)",
          "• Chylothorax",
          "• Recurrent laryngeal nerve injury (esp cervical dissection)",
          "• Stricture/reflux",
          "• Conduit ischemia"
        ],
        qna: []
      },
      {
        id: "followup",
        title: "11) Follow-up / Surveillance",
        content: [
          "Principles (board-safe):",
          "• Regular clinic follow-up (symptoms, nutrition, weight).",
          "• Imaging/endoscopy based on symptoms or protocol (esp after definitive CRT).",
          "• Manage reflux/strictures, nutrition, swallowing rehab.",
          "Exam-safe line:",
          "“Surveillance focuses on symptoms, nutrition, and recurrence detection with imaging/endoscopy guided by stage and treatment pathway.”"
        ],
        qna: []
      },
      {
        id: "oral-cases",
        title: "Oral Board Cases (5)",
        content: [
          "CASE 1 — T1a Barrett’s Cancer: small mucosal lesion, no nodes on EUS → EMR/ESD ± ablation (low nodal risk).",
          "CASE 2 — T1b Lesion: submucosal invasion → esophagectomy + lymphadenectomy (nodal risk higher).",
          "CASE 3 — T3N+ Distal Adenocarcinoma, no mets → neoadjuvant chemoradiation → Ivor Lewis esophagectomy.",
          "CASE 4 — Airway invasion concern: mid SCC + cough with swallowing → bronchoscopy; if invasion → unresectable → definitive CRT.",
          "CASE 5 — Metastatic with severe dysphagia (liver mets) → systemic therapy + esophageal stent palliation (surgery NOT first-line)."
        ],
        qna: []
      },
      {
        id: "mcqs",
        title: "MCQs (50) — with rationales + traps",
        content: [],
        qna: [
          {
            id: "eso-q1",
            question: "Most common presenting symptom of esophageal cancer?",
            choices: [
              { id: "a", text: "Hematemesis" },
              { id: "b", text: "Progressive dysphagia" },
              { id: "c", text: "Early satiety" },
              { id: "d", text: "Hoarseness" }
            ],
            answerId: "b",
            explanation:
              "Correct: Progressive dysphagia (solids → liquids) is the classic hallmark symptom due to mechanical obstruction. Wrong: Hematemesis is late; early satiety is gastric; hoarseness implies RLN involvement and is typically advanced."
          },
          {
            id: "eso-q2",
            question: "Risk factor most associated with esophageal adenocarcinoma?",
            choices: [
              { id: "a", text: "Alcohol" },
              { id: "b", text: "Smoking alone" },
              { id: "c", text: "Barrett’s esophagus" },
              { id: "d", text: "Achalasia" }
            ],
            answerId: "c",
            explanation:
              "Correct: GERD → Barrett’s metaplasia → dysplasia → adenocarcinoma. Wrong: Alcohol and achalasia are more classically linked with SCC risk (conceptual board framing)."
          },
          {
            id: "eso-q3",
            question: "Most common location of esophageal adenocarcinoma?",
            choices: [
              { id: "a", text: "Cervical esophagus" },
              { id: "b", text: "Upper third" },
              { id: "c", text: "Mid esophagus" },
              { id: "d", text: "Distal esophagus/GEJ" }
            ],
            answerId: "d",
            explanation:
              "Correct: Adenocarcinoma is classically distal esophagus/GEJ, associated with reflux/Barrett’s. Wrong: SCC tends to involve mid/upper segments more commonly."
          },
          {
            id: "eso-q4",
            question: "Most associated with squamous cell carcinoma (SCC) of the esophagus?",
            choices: [
              { id: "a", text: "Obesity" },
              { id: "b", text: "GERD" },
              { id: "c", text: "Alcohol + tobacco" },
              { id: "d", text: "H. pylori infection" }
            ],
            answerId: "c",
            explanation:
              "Correct: Alcohol and tobacco are classic SCC risks. Wrong: Obesity/GERD are tied to Barrett’s and adenocarcinoma; H. pylori is not a core esophageal SCC driver in board framing."
          },
          {
            id: "eso-q5",
            question: "Dysphagia progressing from solids to liquids suggests:",
            choices: [
              { id: "a", text: "Motility disorder" },
              { id: "b", text: "Mechanical obstruction" },
              { id: "c", text: "Infectious esophagitis" },
              { id: "d", text: "Reflux esophagitis alone" }
            ],
            answerId: "b",
            explanation:
              "Correct: Solids → liquids progression suggests a fixed narrowing (tumor/stricture). Wrong: Motility disorders often cause dysphagia to liquids early (or both)."
          },
          {
            id: "eso-q6",
            question: "Best initial diagnostic test to confirm esophageal cancer?",
            choices: [
              { id: "a", text: "CT chest/abdomen" },
              { id: "b", text: "Barium swallow" },
              { id: "c", text: "Endoscopy (EGD) with biopsy" },
              { id: "d", text: "PET scan" }
            ],
            answerId: "c",
            explanation:
              "Correct: Diagnosis requires histology—EGD with biopsy. Wrong: CT/PET are staging tools; barium can suggest a lesion but cannot confirm malignancy. Board trap: ordering CT first."
          },
          {
            id: "eso-q7",
            question: "Primary purpose of CT chest/abdomen in esophageal cancer workup?",
            choices: [
              { id: "a", text: "To diagnose tumor histology" },
              { id: "b", text: "To assess extent, nodes, and distant disease" },
              { id: "c", text: "To replace EUS for T staging" },
              { id: "d", text: "To evaluate Barrett’s mucosa detail" }
            ],
            answerId: "b",
            explanation:
              "Correct: CT evaluates local invasion, nodes, and metastasis. Wrong: It doesn’t provide histology, doesn’t replace EUS for depth staging, and doesn’t assess mucosal dysplasia detail."
          },
          {
            id: "eso-q8",
            question: "Best modality for determining depth of invasion (T stage)?",
            choices: [
              { id: "a", text: "PET scan" },
              { id: "b", text: "CT scan" },
              { id: "c", text: "Endoscopic ultrasound (EUS)" },
              { id: "d", text: "Plain chest X-ray" }
            ],
            answerId: "c",
            explanation:
              "Correct: EUS is best for wall-layer assessment (T stage) and helps evaluate regional nodes. Wrong: PET is for occult metastasis; CT is less accurate for depth."
          },
          {
            id: "eso-q9",
            question: "Main role of PET-CT in staging esophageal cancer is to:",
            choices: [
              { id: "a", text: "Define mucosal dysplasia" },
              { id: "b", text: "Detect occult metastases" },
              { id: "c", text: "Replace biopsy" },
              { id: "d", text: "Determine exact T1a vs T1b depth" }
            ],
            answerId: "b",
            explanation:
              "Correct: PET-CT helps detect occult distant metastases and metabolically active nodes. Wrong: It does not replace biopsy or precisely define wall-layer depth like EUS."
          },
          {
            id: "eso-q10",
            question: "Bronchoscopy is most indicated when:",
            choices: [
              { id: "a", text: "All distal GEJ tumors" },
              { id: "b", text: "Any esophageal cancer regardless of level" },
              {
                id: "c",
                text: "Mid/upper tumors with concern for airway invasion or fistula"
              },
              { id: "d", text: "T1a mucosal lesions" }
            ],
            answerId: "c",
            explanation:
              "Correct: Mid/upper lesions can invade tracheobronchial tree; bronchoscopy evaluates invasion/fistula. Wrong: Not routine for all; not needed for superficial T1a lesions."
          }
        ]
      }
    ]
  },

  {
    id: "breast-cancer-master",
    title: "BREAST CANCER",
    subtitle: "Schwartz 11th backbone + guideline sequencing + board traps",
    sections: [
      {
        id: "dx-workup",
        title: "Dx & Initial Workup",
        content: [
          "Triple Assessment (oral boards opener): Clinical exam + Imaging + Tissue diagnosis.",
          "Clinical exam: mass location (clock-face), size, fixation, skin/nipple changes, Paget’s signs.",
          "Nodes: axillary levels I–III, supraclavicular/infraclavicular.",
          "Oral board line: “I will complete a triple assessment prior to definitive surgery.”"
        ],
        qna: []
      },
      {
        id: "imaging-birads",
        title: "Imaging & BI-RADS",
        content: [
          "Who gets what?",
          "Palpable mass:",
          "• Age <30: Ultrasound first.",
          "• Age ≥30: Diagnostic mammogram + targeted ultrasound.",
          "Non-palpable abnormality/calcifications: Diagnostic mammogram ± magnification views; ultrasound only if correlating lesion.",
          "MRI (selected, commonly tested): occult primary with axillary mets; extent uncertain (lobular, multifocal suspicion); dense breasts with discordant findings; pre-op mapping ONLY if it changes surgery (not routine).",
          "BI-RADS actions (memorize):",
          "0 Incomplete → additional imaging.",
          "1 Negative → routine screening.",
          "2 Benign → routine screening.",
          "3 Probably benign (<2%) → short interval follow-up (often 6 months).",
          "4 Suspicious → biopsy (4A low, 4B intermediate, 4C moderate-high).",
          "5 Highly suggestive malignancy → biopsy urgent.",
          "6 Known malignancy → treatment planning.",
          "Oral line: “BI-RADS 4 or 5 requires tissue diagnosis.”"
        ],
        qna: []
      },
      {
        id: "biopsy-biomarkers",
        title: "Biopsy & Biomarkers",
        content: [
          "Preferred biopsy: Core needle biopsy (US-guided if target).",
          "Calcifications: stereotactic core biopsy; vacuum-assisted biopsy in select.",
          "Suspicious axillary node: US-guided FNA/core — important because it changes staging and neoadjuvant decisions.",
          "Classic trap: ❌ excisional biopsy first. ✅ core biopsy first (preserves planes, allows receptor testing, enables neoadjuvant planning).",
          "Radiology–pathology concordance: highly suspicious imaging + benign biopsy → repeat biopsy or surgical biopsy.",
          "Path report essentials:",
          "• Histology (IDC vs ILC), Nottingham grade, LVI.",
          "• ER/PR (%), HER2 (IHC 0/1 neg; 3 pos; 2 equivocal → ISH/FISH).",
          "• Ki-67: supportive (risk stratification; luminal A vs B), but inter-lab variability → NOT sole basis of treatment.",
          "Exam line: “Ki-67 supports risk stratification; decisions rely on stage + ER/PR/HER2 + nodes + genomics when available.”"
        ],
        qna: []
      },
      {
        id: "staging-subtypes",
        title: "Staging & Subtypes",
        content: [
          "AJCC TNM (board-clean):",
          "T: size + skin/chest wall involvement. N: axillary/IM; supraclav = N3. M: distant mets.",
          "Oral board clarification: “T4 is NOT size — it is skin/chest wall involvement (peau d’orange, ulceration, satellite nodules, inflammatory).”",
          "Practical subtypes for surgeons:",
          "• ER+/HER2− (Luminal).",
          "• HER2+ (ER±).",
          "• Triple negative (ER− PR− HER2−).",
          "What subtype changes: sequence (neoadjuvant vs upfront), systemic regimen, prognosis/recurrence pattern."
        ],
        qna: []
      },
      {
        id: "lobular-carcinoma",
        title: "Special Histology — Invasive Lobular Carcinoma (ILC)",
        content: [
          "Invasive lobular carcinoma (ILC) is the second most common invasive breast cancer after invasive ductal carcinoma (IDC).",
          "Key biologic feature: loss of E-cadherin adhesion protein → discohesive tumor cells.",
          "Classic pathology pattern: single-file infiltration ('Indian file' pattern).",
          "ILC often does NOT form a discrete palpable mass and may be subtle or occult on mammography.",
          "Higher incidence of multifocal and bilateral disease compared with ductal carcinoma.",
          "MRI is useful when extent of disease is uncertain or imaging is discordant.",
          "Surgical treatment principles are the SAME as invasive ductal carcinoma, but achieving negative margins may be harder due to diffuse growth.",
          "Most tumors are ER-positive and HER2-negative → endocrine therapy commonly plays a major role.",
          "Metastatic pattern differs: more frequent spread to peritoneum, gastrointestinal tract, ovary, and retroperitoneum.",
          "Board pearl: persistent clinical suspicion with negative imaging should raise concern for lobular carcinoma."
        ],
        qna: [
          {
            id: "br-ilc-1",
            question:
              "Which feature best distinguishes invasive lobular carcinoma from invasive ductal carcinoma?",
            choices: [
              { id: "a", text: "HER2 overexpression" },
              {
                id: "b",
                text: "Loss of E-cadherin causing single-file cell infiltration"
              },
              { id: "c", text: "Higher lung metastasis rate" },
              { id: "d", text: "Always forms a palpable mass" }
            ],
            answerId: "b",
            explanation:
              "ILC is characterized by loss of E-cadherin leading to discohesive cells infiltrating in a single-file pattern."
          }
        ]
      },
      {
        id: "surgery-axilla",
        title: "Surgery & Axilla",
        content: [
          "BCT: lumpectomy + whole breast RT → survival equivalent to mastectomy in appropriate patients.",
          "BCT indications: unifocal (or resectable multifocal), negative margins achievable with acceptable cosmesis, RT feasible.",
          "BCT contraindications (board-type): inflammatory cancer; diffuse/multicentric not amenable; persistent positive margins; prior RT to same breast (usually); pregnancy (relative depending on trimester/RT timing).",
          "Margins (must be exact): Invasive → “no ink on tumor”. DCIS → ≥2 mm commonly used standard.",
          "AXILLA (highest yield):",
          "• cN0 → SLNB.",
          "• Suspicious nodes → biopsy (FNA/core). If positive → often neoadjuvant systemic therapy (depending on subtype/stage) then reassess.",
          "Board line: “I biopsy suspicious nodes pre-op because it affects staging and neoadjuvant planning.”",
          "Modern de-escalation: limited SLN positivity ≠ automatic ALND; depends on #positive SLNs, breast surgery type, planned RT fields, and MDT factors."
        ],
        qna: []
      },
      {
        id: "neoadj-subtype",
        title: "Neoadjuvant & Subtype Tx",
        content: [
          "Neoadjuvant indications (SOTAS emphasis): TNBC ≥T2 or node+; HER2+ ≥T2 or node+; locally advanced (T3/T4 or N2/N3); downsizing for BCS; inflammatory breast cancer.",
          "Benefits: downstage breast/axilla → more BCS; in-vivo response assessment; tailors adjuvant therapy when residual disease.",
          "Subtype-based management (surgeon-focused):",
          "ER+/HER2−: often upfront surgery for operable early stage; consider neoadjuvant endocrine in select (large tumor where BCS desired/frail). Endocrine is backbone (tamoxifen or AI); chemo depends on risk (nodes/grade/size/Ki-67/genomics).",
          "HER2+: ≥T2 or node+ commonly neoadjuvant chemo + anti-HER2 → surgery → continue targeted therapy ± RT; small T1a/b N0 may go upfront surgery then adjuvant (MDT).",
          "TNBC: ≥T2 or node+ → neoadjuvant chemo → surgery; adjuvant based on residual disease risk. Early small TNBC can be upfront surgery in select but systemic therapy often still required."
        ],
        qna: []
      },
      {
        id: "stage-iv",
        title: "Stage IV (Bone Mets etc)",
        content: [
          "Core principle: Stage IV is systemic disease first. Primary breast surgery is NOT routine unless palliation or selected oligometastatic MDT strategy.",
          "First steps: confirm pathology + receptors; stage extent (bone vs visceral); assess symptoms; med-onc referral for systemic plan.",
          "Surgery role: palliation (bleeding, fungation, infection, ulceration, pain) or selected MDT local control (not default).",
          "Bone mets basics: analgesia; bisphosphonate/denosumab (med-onc); RT for painful lesions/impending fracture; ortho eval if high fracture risk."
        ],
        qna: []
      },
      {
        id: "dcis",
        title: "DCIS",
        content: [
          "Often detected as mammographic calcifications → core/stereotactic biopsy.",
          "Treatment: BCS + RT OR mastectomy (extensive/multicentric DCIS or margin problems).",
          "SLNB rule (testable): if mastectomy planned → do SLNB because mapping is lost after mastectomy.",
          "If BCS only → SLNB not routine in low-risk DCIS; consider if high risk of invasion/large extent (MDT)."
        ],
        qna: []
      },
      {
        id: "postop-surveillance",
        title: "Post-op & Surveillance",
        content: [
          "Post-op: review final histopath (margins, nodes, LVI, grade, receptors), finalize pTNM, present to MDT for adjuvant plan.",
          "Ensure RT consult when indicated (BCS, nodal involvement, high-risk features).",
          "Surveillance (board-safe): history + physical are core; imaging only when indicated; routine CT/PET/tumor markers NOT recommended in asymptomatic survivors.",
          "Typical: regular clinical follow-up (more frequent early years then spaced), annual mammography of preserved breast + contralateral breast.",
          "Counsel symptoms of recurrence: bone pain, cough, neuro deficits, weight loss; manage therapy effects (bone health for endocrine therapy, menopausal symptoms)."
        ],
        qna: []
      },
      {
        id: "mcqs",
        title: "MCQs",
        content: [],
        qna: [
          {
            id: "br-1",
            question:
              "A 27-year-old woman presents with a palpable breast mass. First imaging?",
            choices: [
              { id: "a", text: "Screening mammography" },
              { id: "b", text: "MRI" },
              { id: "c", text: "Ultrasound" },
              { id: "d", text: "CT scan" }
            ],
            answerId: "c",
            explanation:
              "Young patients have dense breasts → ultrasound is the preferred first imaging to characterize cystic vs solid and guide biopsy. Mammography may be added if suspicious."
          },
          {
            id: "br-2",
            question: "BI-RADS 3 lesion management?",
            choices: [
              { id: "a", text: "Immediate biopsy" },
              { id: "b", text: "MRI" },
              { id: "c", text: "Short-interval follow-up imaging (often ~6 months)" },
              { id: "d", text: "Excision" }
            ],
            answerId: "c",
            explanation:
              "BI-RADS 3 implies <2% malignancy risk → short interval follow-up imaging, not immediate biopsy/excision."
          },
          {
            id: "br-3",
            question: "BI-RADS 5 lesion next step?",
            choices: [
              { id: "a", text: "Repeat imaging" },
              { id: "b", text: "Core needle biopsy" },
              { id: "c", text: "Excisional biopsy immediately" },
              { id: "d", text: "Observation" }
            ],
            answerId: "b",
            explanation:
              "Highly suspicious lesions require tissue diagnosis (core biopsy preferred) to confirm malignancy and obtain receptor status before definitive planning."
          },
          {
            id: "br-4",
            question: "Preferred biopsy for suspicious breast mass?",
            choices: [
              { id: "a", text: "FNAB alone" },
              { id: "b", text: "Core needle biopsy" },
              { id: "c", text: "Incisional biopsy" },
              { id: "d", text: "Open lumpectomy first" }
            ],
            answerId: "b",
            explanation:
              "Core biopsy preserves planes, provides architecture and receptor status (ER/PR/HER2), and supports neoadjuvant planning. Excisional/open biopsy first is a classic trap."
          },
          {
            id: "br-5",
            question:
              "Suspicious calcifications on mammogram only. Best biopsy?",
            choices: [
              { id: "a", text: "Blind excision" },
              { id: "b", text: "Stereotactic core biopsy" },
              { id: "c", text: "Ultrasound-guided biopsy" },
              { id: "d", text: "Observation" }
            ],
            answerId: "b",
            explanation:
              "Calcifications are often not visible on ultrasound → stereotactic biopsy targets the mammographic abnormality accurately."
          },
          {
            id: "br-6",
            question:
              "Suspicious axillary node on ultrasound. Next step?",
            choices: [
              { id: "a", text: "Proceed directly to ALND" },
              { id: "b", text: "Ignore until surgery" },
              { id: "c", text: "US-guided FNA/core biopsy of the node" },
              { id: "d", text: "SLNB immediately" }
            ],
            answerId: "c",
            explanation:
              "Preoperative nodal confirmation changes staging and may shift management to neoadjuvant systemic therapy. Do not skip biopsy when imaging suggests nodal disease."
          },
          {
            id: "br-7",
            question: "HER2 IHC score 2+ means:",
            choices: [
              { id: "a", text: "HER2 positive" },
              { id: "b", text: "HER2 negative" },
              { id: "c", text: "Equivocal → needs ISH/FISH confirmation" },
              { id: "d", text: "Repeat mammogram" }
            ],
            answerId: "c",
            explanation:
              "HER2 IHC 2+ is equivocal and requires confirmatory gene amplification testing (ISH/FISH)."
          },
          {
            id: "br-8",
            question: "High Ki-67 indicates:",
            choices: [
              { id: "a", text: "Low proliferation" },
              { id: "b", text: "High tumor proliferation" },
              { id: "c", text: "Benign lesion" },
              { id: "d", text: "Hormone resistance by itself" }
            ],
            answerId: "b",
            explanation:
              "Ki-67 reflects proliferation index. It is supportive for risk stratification but should not be the sole determinant of therapy."
          },
          {
            id: "br-9",
            question:
              "Margin standard for invasive breast carcinoma after lumpectomy is:",
            choices: [
              { id: "a", text: "≥5 mm" },
              { id: "b", text: "≥2 mm" },
              { id: "c", text: "No ink on tumor" },
              { id: "d", text: "≥1 cm" }
            ],
            answerId: "c",
            explanation:
              "High-yield rule: invasive carcinoma margin = 'no ink on tumor'. Wider margins do not improve outcomes."
          },
          {
            id: "br-10",
            question:
              "Breast-conserving therapy (lumpectomy + RT) survival compared with mastectomy is:",
            choices: [
              { id: "a", text: "Worse" },
              { id: "b", text: "Better" },
              { id: "c", text: "Equivalent in appropriately selected patients" },
              { id: "d", text: "Unknown" }
            ],
            answerId: "c",
            explanation:
              "Randomized trials show equivalent survival when BCT includes radiation in properly selected patients."
          },
          {
            id: "br-11",
            question:
              "Absolute contraindication to breast-conserving surgery?",
            choices: [
              { id: "a", text: "Tumor >2 cm" },
              { id: "b", text: "Inflammatory breast cancer" },
              { id: "c", text: "ER-negative tumor" },
              { id: "d", text: "Age <40" }
            ],
            answerId: "b",
            explanation:
              "Inflammatory breast cancer involves dermal lymphatics and requires systemic-first approach; BCS is contraindicated."
          },
          {
            id: "br-12",
            question:
              "Clinically node-negative (cN0) patient: appropriate axillary surgery is:",
            choices: [
              { id: "a", text: "ALND for all" },
              { id: "b", text: "SLNB" },
              { id: "c", text: "No axillary staging" },
              { id: "d", text: "Radiation first" }
            ],
            answerId: "b",
            explanation:
              "SLNB provides accurate staging with less morbidity than ALND in cN0 disease."
          },
          {
            id: "br-13",
            question:
              "Positive sentinel lymph node always requires ALND.",
            choices: [
              { id: "a", text: "True" },
              { id: "b", text: "False" },
              { id: "c", text: "True only if BCS" },
              { id: "d", text: "True only if HER2+" }
            ],
            answerId: "b",
            explanation:
              "Modern de-escalation: limited SLN positivity does not automatically mandate ALND; decision depends on extent, surgery type, and planned RT fields/MDT."
          },
          {
            id: "br-14",
            question:
              "Best first step for triple-negative T3 tumor (no distant mets)?",
            choices: [
              { id: "a", text: "Upfront mastectomy" },
              { id: "b", text: "Neoadjuvant chemotherapy" },
              { id: "c", text: "Radiation alone" },
              { id: "d", text: "Endocrine therapy" }
            ],
            answerId: "b",
            explanation:
              "TNBC stage II/III benefits from neoadjuvant chemotherapy for downstaging and response assessment."
          },
          {
            id: "br-15",
            question:
              "Inflammatory breast cancer initial treatment is:",
            choices: [
              { id: "a", text: "Surgery first" },
              {
                id: "b",
                text:
                  "Neoadjuvant systemic therapy (often chemo ± targeted) then surgery/RT"
              },
              { id: "c", text: "Radiation alone" },
              { id: "d", text: "Observation" }
            ],
            answerId: "b",
            explanation:
              "Inflammatory cancer is aggressive/systemic biology; systemic therapy first improves outcomes before local control."
          },
          {
            id: "br-16",
            question:
              "DCIS + planned mastectomy: why perform SLNB?",
            choices: [
              { id: "a", text: "Improves cosmesis" },
              { id: "b", text: "Sentinel mapping is lost after mastectomy" },
              { id: "c", text: "Mandatory even with BCS" },
              { id: "d", text: "Prevents DCIS recurrence" }
            ],
            answerId: "b",
            explanation:
              "After mastectomy, lymphatic drainage is disrupted so SLNB cannot be reliably performed later; do it at time of mastectomy."
          },
          {
            id: "br-17",
            question:
              "Initial management of stage IV breast cancer is usually:",
            choices: [
              { id: "a", text: "Mastectomy" },
              {
                id: "b",
                text:
                  "Systemic therapy (based on receptors) with symptom-directed local care"
              },
              { id: "c", text: "Radiation only" },
              { id: "d", text: "Observation" }
            ],
            answerId: "b",
            explanation:
              "Stage IV is systemic disease; systemic therapy is primary. Surgery is reserved for palliation or selected MDT scenarios."
          },
          {
            id: "br-18",
            question:
              "Role of breast surgery in stage IV disease is best described as:",
            choices: [
              { id: "a", text: "Curative routinely" },
              { id: "b", text: "Routine for all patients" },
              { id: "c", text: "Palliation/select MDT local-control cases" },
              { id: "d", text: "Never indicated" }
            ],
            answerId: "c",
            explanation:
              "Surgery is indicated for palliation (bleeding, infection, pain) or selected MDT local control, but not routinely for survival."
          },
          {
            id: "br-19",
            question:
              "Routine PET/CT in asymptomatic breast cancer survivors is:",
            choices: [
              { id: "a", text: "Recommended annually" },
              { id: "b", text: "Not recommended" },
              { id: "c", text: "Required for ER+ disease" },
              { id: "d", text: "Required if SLNB was positive" }
            ],
            answerId: "b",
            explanation:
              "Routine intensive imaging/tumor markers in asymptomatic survivors has not shown survival benefit and increases false positives."
          },
          {
            id: "br-20",
            question:
              "Most important surveillance approach after curative treatment is:",
            choices: [
              { id: "a", text: "Tumor markers every 3 months" },
              {
                id: "b",
                text:
                  "History + physical exam with appropriate mammography"
              },
              { id: "c", text: "CT scans every 6 months" },
              { id: "d", text: "MRI yearly for everyone" }
            ],
            answerId: "b",
            explanation:
              "History/physical + mammography are the foundation; advanced imaging is symptom-driven."
          }
        ]
      },
      {
        id: "oral-vignettes",
        title: "Oral Board Vignettes",
        content: [
          "Case 1 — DCIS: Extensive calcifications, biopsy shows DCIS. Options: BCS + RT vs mastectomy. SLNB if mastectomy planned.",
          "Case 2 — LABC: 5-cm tumor + peau d’orange (T4). Sequence: biopsy + staging → neoadjuvant → surgery → RT.",
          "Case 3 — HER2+: Node-positive HER2+ tumor. Common approach: neoadjuvant chemo + anti-HER2 → surgery → continue targeted therapy ± RT.",
          "Case 4 — TNBC: T2N1 TNBC. Prefer neoadjuvant chemo → surgery; adjuvant based on residual disease.",
          "Case 5 — Stage IV bone mets: Breast lesion + painful vertebral metastasis. Systemic therapy primary; RT for pain; surgery for palliation/select MDT."
        ],
        qna: []
      }
    ]
  },

  {
    id: "gastric-cancer",
    title: "GASTRIC CANCER",
    subtitle:
      "Schwartz 11th backbone + modern guidelines + board Q&A with rationales",
    sections: [
      {
        id: "foundation",
        title: "1) Foundations — Schwartz Principles 11e",
        content: [
          "Gastric adenocarcinoma is the dominant malignant tumor of the stomach.",
          "Schwartz emphasizes gastric cancer behaves as a systemic disease early, explaining why surgery alone historically resulted in high recurrence.",
          "Curative management requires accurate staging, appropriate oncologic resection, and integration of systemic therapy."
        ],
        qna: []
      },
      {
        id: "epidemiology",
        title: "2) Epidemiology & Risk Factors (Schwartz)",
        content: [
          "Key risk factors:",
          "• Helicobacter pylori infection",
          "• Chronic atrophic gastritis, intestinal metaplasia",
          "• Smoking, high salt intake",
          "• Pernicious anemia",
          "• Prior gastric surgery",
          "Exam framing: environmental exposure is strongly associated with intestinal-type cancer."
        ],
        qna: []
      },
      {
        id: "pathology",
        title: "3) Pathology & Lauren Classification",
        content: [
          "Intestinal type: inflammation → atrophy → metaplasia → dysplasia → carcinoma; forms glandular structures.",
          "Diffuse type: infiltrates the wall, often causes linitis plastica, early peritoneal dissemination.",
          "Board pearl: diffuse tumors often need wider margins and careful staging because of infiltrative spread."
        ],
        qna: []
      },
      {
        id: "presentation",
        title: "4) Clinical Presentation",
        content: [
          "Symptoms are often late:",
          "• Weight loss, anemia",
          "• Early satiety",
          "• Dysphagia (proximal tumors)",
          "• Gastric outlet obstruction",
          "• GI bleeding",
          "Advanced disease clues:",
          "• Virchow node (left supraclavicular), Sister Mary Joseph nodule, ascites"
        ],
        qna: []
      },
      {
        id: "diagnosis",
        title: "5) Diagnosis (Schwartz Principles)",
        content: [
          "Upper endoscopy with multiple biopsies is required for diagnosis.",
          "Schwartz board line: imaging alone cannot establish diagnosis.",
          "Adequate biopsy sampling is essential for histology and molecular/biomarker testing."
        ],
        qna: []
      },
      {
        id: "staging",
        title: "6) Staging Workup (Schwartz Core + Guideline Sequencing)",
        content: [
          "Stage to determine curative vs palliative intent:",
          "Step 1: CT chest/abdomen/pelvis to evaluate metastasis and gross locoregional disease.",
          "Step 2: EUS provides best assessment of depth (T) and regional nodes (N) for potentially resectable disease.",
          "Guideline high-yield: consider staging laparoscopy (± peritoneal cytology) for potentially resectable ≥T2 because CT may miss peritoneal metastasis."
        ],
        qna: []
      },
      {
        id: "surgical-principles",
        title: "7) Surgical Principles from Schwartz",
        content: [
          "Goal: R0 resection + adequate lymphadenectomy.",
          "Operation choice by location/biology:",
          "• Distal tumors → subtotal (distal) gastrectomy",
          "• Proximal/diffuse tumors → total gastrectomy often required",
          "Adequate lymph node retrieval is necessary for staging accuracy and prognosis assessment."
        ],
        qna: []
      },
      {
        id: "lymphadenectomy",
        title: "8) Lymphadenectomy (D1 vs D2) — Board Essentials",
        content: [
          "Schwartz concept:",
          "• D1 = perigastric nodes",
          "• D2 = perigastric + nodes along major named vessels",
          "Modern practice: D2 is standard in experienced centers WITHOUT routine splenectomy/pancreatectomy unless directly involved."
        ],
        qna: []
      },
      {
        id: "postop-physiology",
        title: "9) Postoperative Physiology & Long-Term Issues",
        content: [
          "Common long-term issues after gastrectomy:",
          "• Dumping syndrome",
          "• Vitamin B12 deficiency after total gastrectomy (loss of intrinsic factor)",
          "• Iron deficiency anemia",
          "• Weight loss",
          "• Metabolic bone disease (calcium/vit D related)"
        ],
        qna: []
      },

      // ===============================
      // MODERN GUIDELINES
      // ===============================
      {
        id: "guidelines",
        title: "10) Modern Guideline Integration (NCCN / ESMO Concepts)",
        content: [
          "Modern guidelines expand Schwartz principles by integrating perioperative chemotherapy, staging laparoscopy, and biomarker-driven therapy."
        ],
        qna: []
      },
      {
        id: "staging-laparoscopy",
        title: "11) Staging Laparoscopy (High-Yield)",
        content: [
          "Recommended for potentially resectable T2 or higher disease because CT frequently misses peritoneal metastasis.",
          "Positive peritoneal cytology is considered metastatic disease (M1) even without visible implants."
        ],
        qna: []
      },
      {
        id: "perioperative-therapy",
        title: "12) Perioperative Therapy",
        content: [
          "Perioperative chemotherapy improves survival by treating micrometastatic disease early and improving R0 resection rates.",
          "Common regimen (fit patients): FLOT (5-FU, leucovorin, oxaliplatin, docetaxel)."
        ],
        qna: []
      },
      {
        id: "biomarkers",
        title: "13) Biomarker-Directed Therapy (Advanced Disease)",
        content: [
          "Guideline concept: test before selecting systemic therapy when feasible:",
          "• HER2",
          "• MSI/MMR",
          "• PD-L1",
          "• CLDN18.2",
          "These biomarkers guide targeted therapy and immunotherapy."
        ],
        qna: []
      },
      {
        id: "metastatic-disease",
        title: "14) Metastatic Disease & Palliation",
        content: [
          "Primary treatment is systemic therapy.",
          "Surgery is reserved for palliation (bleeding, obstruction, perforation) or select MDT situations.",
          "Palliation examples: endoscopic stenting or surgical bypass for obstruction depending on prognosis/performance status."
        ],
        qna: []
      },
      {
        id: "reconstruction",
        title: "15) Reconstruction",
        content: [
          "Total gastrectomy: Roux-en-Y esophagojejunostomy reduces bile reflux and improves long-term function.",
          "Distal gastrectomy: gastrojejunostomy or Roux-en-Y depending on surgeon/center strategy."
        ],
        qna: []
      },
      {
        id: "surveillance",
        title: "16) Surveillance",
        content: [
          "Follow-up focuses on recurrence detection, nutritional monitoring, and symptom-directed imaging/endoscopy based on stage and treatment pathway."
        ],
        qna: []
      },

      // ===============================
      // BOARD Q&A
      // ===============================
      {
        id: "mcqs",
        title: "MCQs (25) — ABSITE / CERES / RITE with Rationales + Traps",
        content: [],
        qna: [
          {
            id: "gc-q1",
            question: "Best initial diagnostic test for suspected gastric cancer?",
            choices: [
              { id: "a", text: "CT scan" },
              { id: "b", text: "Upper endoscopy with biopsy" },
              { id: "c", text: "PET scan" },
              { id: "d", text: "CEA level" }
            ],
            answerId: "b",
            explanation:
              "Correct: Diagnosis requires histologic confirmation via endoscopy + biopsy. Wrong: CT/PET are staging tools; tumor markers do not establish diagnosis."
          },
          {
            id: "gc-q2",
            question:
              "Best modality for T staging in potentially resectable gastric cancer?",
            choices: [
              { id: "a", text: "CT scan" },
              { id: "b", text: "Endoscopic ultrasound (EUS)" },
              { id: "c", text: "PET scan" },
              { id: "d", text: "Barium meal study" }
            ],
            answerId: "b",
            explanation:
              "Correct: EUS provides layer-specific assessment of depth. Wrong: CT is less accurate for depth; PET is for occult metastasis."
          },
          {
            id: "gc-q3",
            question: "Staging laparoscopy is recommended primarily to detect:",
            choices: [
              { id: "a", text: "Occult peritoneal metastasis" },
              { id: "b", text: "Gastric outlet obstruction" },
              { id: "c", text: "Liver hemangioma" },
              { id: "d", text: "Primary tumor histology" }
            ],
            answerId: "a",
            explanation:
              "Correct: It detects peritoneal implants/cytology missed on CT. Wrong: It is not a diagnostic substitute for biopsy."
          },
          {
            id: "gc-q4",
            question: "Positive peritoneal cytology in gastric cancer signifies:",
            choices: [
              { id: "a", text: "Stage I disease" },
              { id: "b", text: "Locally advanced but resectable disease" },
              { id: "c", text: "Metastatic disease (M1)" },
              { id: "d", text: "Indeterminate stage" }
            ],
            answerId: "c",
            explanation:
              "Correct: Positive cytology = M1. Wrong: Do not proceed with curative gastrectomy as if localized."
          },
          {
            id: "gc-q5",
            question:
              "Minimum number of lymph nodes recommended for accurate gastric cancer staging is:",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "10" },
              { id: "c", text: "16" },
              { id: "d", text: "30" }
            ],
            answerId: "c",
            explanation:
              "Correct: ≥16 nodes is the common staging benchmark. Wrong: Too few nodes risks understaging (stage migration)."
          },
          {
            id: "gc-q6",
            question:
              "Standard lymphadenectomy for curative gastrectomy in experienced centers is:",
            choices: [
              { id: "a", text: "No node dissection" },
              { id: "b", text: "D1 only" },
              { id: "c", text: "D2 dissection" },
              { id: "d", text: "Only para-aortic nodes" }
            ],
            answerId: "c",
            explanation:
              "Correct: D2 is standard when expertise exists. Wrong: D1 alone may be inadequate for locally advanced disease."
          },
          {
            id: "gc-q7",
            question:
              "Modern D2 lymphadenectomy requires routine splenectomy/pancreatectomy.",
            choices: [
              { id: "a", text: "True" },
              { id: "b", text: "False" },
              { id: "c", text: "True only for distal tumors" },
              { id: "d", text: "True only for intestinal-type" }
            ],
            answerId: "b",
            explanation:
              "Correct: Organ preservation is standard unless direct invasion. Wrong: Routine resection increases morbidity without benefit."
          },
          {
            id: "gc-q8",
            question:
              "Preferred approach for resectable locally advanced gastric cancer (e.g., T3N+) in fit patient is:",
            choices: [
              { id: "a", text: "Surgery first then observe" },
              { id: "b", text: "Perioperative chemotherapy + surgery" },
              { id: "c", text: "Radiation alone" },
              { id: "d", text: "Endoscopic resection" }
            ],
            answerId: "b",
            explanation:
              "Correct: Perioperative chemo addresses micrometastatic disease and improves R0 rates. Wrong: Surgery-first is a classic board trap for locally advanced tumors."
          },
          {
            id: "gc-q9",
            question:
              "Common perioperative chemotherapy regimen for fit patients is:",
            choices: [
              { id: "a", text: "FLOT" },
              { id: "b", text: "ABVD" },
              { id: "c", text: "CHOP" },
              { id: "d", text: "FOLFOXIRI + bevacizumab always" }
            ],
            answerId: "a",
            explanation:
              "Correct: FLOT is commonly used. Wrong: Other regimens listed are for different diseases or not standard gastric periop default."
          },
          {
            id: "gc-q10",
            question: "Histology most associated with linitis plastica is:",
            choices: [
              { id: "a", text: "Intestinal-type adenocarcinoma" },
              { id: "b", text: "Diffuse-type adenocarcinoma" },
              { id: "c", text: "GIST" },
              { id: "d", text: "Neuroendocrine tumor" }
            ],
            answerId: "b",
            explanation:
              "Correct: Diffuse type infiltrates the wall. Wrong: Intestinal type is gland-forming and more mass-like."
          },

          // (Keep adding later if you want; this set already works safely in your schema)
          {
            id: "gc-q11",
            question: "Goal of curative gastrectomy is:",
            choices: [
              { id: "a", text: "Debulking only" },
              { id: "b", text: "R0 resection" },
              { id: "c", text: "R2 resection acceptable if symptomatic" },
              { id: "d", text: "Remove stomach regardless of stage" }
            ],
            answerId: "b",
            explanation:
              "Correct: R0 = negative margins is the oncologic goal. Wrong: Debulking/R2 is not curative."
          },
          {
            id: "gc-q12",
            question:
              "Most common long-term deficiency after total gastrectomy is:",
            choices: [
              { id: "a", text: "Vitamin B12 deficiency" },
              { id: "b", text: "Vitamin C deficiency" },
              { id: "c", text: "Vitamin A toxicity" },
              { id: "d", text: "Hypercalcemia" }
            ],
            answerId: "a",
            explanation:
              "Correct: Loss of intrinsic factor leads to B12 deficiency. Wrong: Others are not classic post-gastrectomy issues."
          },
          {
            id: "gc-q13",
            question: "Early dumping syndrome is primarily due to:",
            choices: [
              { id: "a", text: "Osmotic fluid shift into small intestine" },
              { id: "b", text: "B12 deficiency" },
              { id: "c", text: "Tumor lysis syndrome" },
              { id: "d", text: "Small bowel obstruction" }
            ],
            answerId: "a",
            explanation:
              "Correct: Hyperosmolar chyme causes fluid shift → vasomotor symptoms/diarrhea. Wrong: B12 deficiency causes anemia/neuropathy, not early dumping."
          },
          {
            id: "gc-q14",
            question:
              "HER2 testing in advanced gastric cancer is important because it identifies candidates for:",
            choices: [
              { id: "a", text: "Trastuzumab" },
              { id: "b", text: "Tamoxifen" },
              { id: "c", text: "Imatinib" },
              { id: "d", text: "RAI ablation" }
            ],
            answerId: "a",
            explanation:
              "Correct: HER2+ metastatic disease can benefit from anti-HER2 therapy. Wrong: Imatinib is for GIST; tamoxifen is breast endocrine."
          },
          {
            id: "gc-q15",
            question:
              "MSI-high (or dMMR) gastric cancers are most likely to benefit from:",
            choices: [
              { id: "a", text: "Immunotherapy" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Warfarin" },
              { id: "d", text: "Routine splenectomy" }
            ],
            answerId: "a",
            explanation:
              "Correct: MSI-H/dMMR tumors show higher response to checkpoint inhibitors. Wrong: other options unrelated."
          },
          {
            id: "gc-q16",
            question:
              "Most appropriate primary treatment for metastatic gastric cancer is:",
            choices: [
              { id: "a", text: "Total gastrectomy for cure" },
              {
                id: "b",
                text: "Systemic therapy with palliative measures as needed"
              },
              { id: "c", text: "Radiation alone for all patients" },
              { id: "d", text: "Endoscopic resection" }
            ],
            answerId: "b",
            explanation:
              "Correct: Stage IV = systemic disease. Wrong: Curative surgery is not standard in M1."
          },
          {
            id: "gc-q17",
            question: "Classic Virchow node in gastric cancer is located at the:",
            choices: [
              { id: "a", text: "Right axilla" },
              { id: "b", text: "Left supraclavicular area" },
              { id: "c", text: "Left groin" },
              { id: "d", text: "Posterior triangle of neck bilaterally" }
            ],
            answerId: "b",
            explanation:
              "Correct: Left supraclavicular node suggests metastatic abdominal malignancy via thoracic duct."
          },
          {
            id: "gc-q18",
            question:
              "Most common pattern of recurrence after curative-intent gastric cancer treatment is:",
            choices: [
              { id: "a", text: "Peritoneal dissemination" },
              { id: "b", text: "Brain metastasis" },
              { id: "c", text: "Isolated skin metastasis" },
              { id: "d", text: "Primary lung cancer" }
            ],
            answerId: "a",
            explanation:
              "Correct: Peritoneal spread is common. Wrong: brain/skin are less typical primary patterns."
          },
          {
            id: "gc-q19",
            question: "Preferred reconstruction after total gastrectomy is:",
            choices: [
              { id: "a", text: "Billroth I gastroduodenostomy" },
              { id: "b", text: "Roux-en-Y esophagojejunostomy" },
              { id: "c", text: "Hartmann’s procedure" },
              { id: "d", text: "Loop ileostomy" }
            ],
            answerId: "b",
            explanation:
              "Correct: Roux-en-Y EJ is standard. Wrong: Billroth I requires stomach remnant."
          },
          {
            id: "gc-q20",
            question: "Why is adequate lymph node harvest important?",
            choices: [
              { id: "a", text: "Only for billing" },
              {
                id: "b",
                text: "Accurate staging and prognosis (avoid understaging)"
              },
              { id: "c", text: "It prevents dumping syndrome" },
              { id: "d", text: "It replaces chemotherapy" }
            ],
            answerId: "b",
            explanation:
              "Correct: Node count affects N stage accuracy and prognostication. Wrong: It does not replace systemic therapy."
          }
        ]
      }
    ]
  },
{
  id: "colon-cancer",
  title: "COLON CANCER",
  subtitle: "Schwartz 11th backbone + guideline sequencing + board traps",
  sections: [
    {
      id: "overview",
      title: "1) High-Yield Overview",
      content: [
        "A. What you must say first (oral boards opener)",
        "“Colon cancer is diagnosed by colonoscopy with biopsy. I stage with CT chest/abdomen/pelvis and baseline CEA, evaluate the entire colon for synchronous lesions, then offer oncologic resection with high vascular ligation and adequate lymphadenectomy. Adjuvant therapy depends on final pathologic stage.”",
        "B. Typical presentation (board classic patterns)",
        "Right-sided: occult bleeding → iron deficiency anemia, fatigue, weight loss, vague pain, palpable mass late",
        "Left-sided: obstruction, change in bowel habits, narrow stools, colicky pain, overt bleeding more likely",
        "Emergency: large bowel obstruction, perforation, sepsis",
        "C. Principles (Schwartz framing)",
        "Curable when localized → surgery is primary curative modality",
        "Nodal/distant spread = systemic biology → chemo integrated",
        "Surgical quality matters: margin + lymph node yield + intact mesocolic plane"
      ],
      qna: []
    },
    {
      id: "anatomy-onco",
      title: "2) Anatomy & Oncologic Implications",
      content: [
        "Why anatomy dictates surgery (Schwartz-style concepts):",
        "• Lymphatic drainage follows mesenteric vessels",
        "• Colon has segmental blood supply → resection must include vascular pedicle + mesocolon",
        "• “Bad surgery” = understaging + higher local recurrence",
        "Key vascular territories (board useful):",
        "• Right colon: ileocolic / right colic / middle colic",
        "• Left colon: left colic (IMA)",
        "• Sigmoid: sigmoid branches (IMA)",
        "Oncologic principle: high ligation at named vessels to clear regional nodes",
        "Modern concept often asked:",
        "• CME (Complete Mesocolic Excision) = sharp dissection along embryologic planes, central vascular ligation → improves nodal harvest/staging (center-dependent)"
      ],
      qna: []
    },
    {
      id: "workup-staging",
      title: "3) Workup & Staging (Orals Script)",
      content: [
        "Step 1: Confirm diagnosis",
        "• Colonoscopy + biopsy (tissue diagnosis)",
        "• Document: location (distance from anal verge), morphology, degree of obstruction",
        "• Tattoo if needed for localization (esp laparoscopic)",
        "Step 2: Evaluate entire colon (synchronous lesions)",
        "• Full colonoscopy ideally",
        "• If obstructed and colonoscopy incomplete → CT colonography or intra-op evaluation / post-op completion colonoscopy",
        "Step 3: Stage for metastasis",
        "• CT chest/abdomen/pelvis",
        "• Baseline CEA (prognostic + follow-up; NOT diagnostic alone)",
        "Step 4: Assess operability & optimize",
        "• CBC (anemia), CMP/LFTs (liver mets clue), nutrition, cardiopulmonary reserve",
        "• If obstruction/perforation → resuscitation + antibiotics + urgent strategy",
        "Oral board line:",
        "“I confirm by colonoscopy biopsy, complete colonic evaluation, stage with CT CAP and CEA, then proceed to oncologic colectomy with high ligation and adequate lymphadenectomy. If metastatic, I assess resectability and coordinate systemic therapy.”"
      ],
      qna: []
    },
    {
      id: "ajcc",
      title: "4) AJCC Staging Concepts (Board Essentials)",
      content: [
        "T stage",
        "• T1 submucosa",
        "• T2 muscularis propria",
        "• T3 through muscularis into pericolic fat",
        "• T4a penetrates visceral peritoneum",
        "• T4b invades adjacent organs/structures",
        "N stage",
        "• N1: 1–3 positive nodes",
        "• N2: ≥4 positive nodes",
        "Critical exam metric:",
        "• Adequate nodal harvest: ≥12 lymph nodes (staging accuracy)",
        "Board trap:",
        "• Under-harvesting nodes → stage migration (fake “stage II” that is actually stage III)"
      ],
      qna: []
    },
    {
      id: "management",
      title: "5) Management by Stage (Standard Oral Boards Flow)",
      content: [
        "A. Stage 0 / Very early (in situ / malignant polyp)",
        "• Endoscopic resection may be enough if low-risk features (see “malignant polyp decision section” below)",
        "B. Stage I (T1–T2 N0)",
        "• Surgery alone (oncologic segmental colectomy with nodes)",
        "C. Stage II (T3–T4 N0)",
        "• Surgery",
        "• Consider adjuvant chemo if high-risk features:",
        "  – T4",
        "  – obstruction or perforation",
        "  – poor differentiation (esp if not MSI-H nuance)",
        "  – lymphovascular invasion / perineural invasion",
        "  – <12 nodes examined",
        "  – close/positive margins",
        "D. Stage III (Any T, N+)",
        "• Surgery + adjuvant chemotherapy (standard of care)",
        "E. Stage IV (M1)",
        "• Systemic therapy primary",
        "• Surgery for: curative intent in select (resectable liver/lung mets) OR palliation (obstruction, bleeding, perforation, fistula)",
        "Board pearl: limited mets can be potentially curable with MDT sequencing"
      ],
      qna: []
    },
    {
      id: "why-systemic",
      title: "6) Why Systemic Therapy? (Adjuvant / Neoadjuvant Concepts)",
      content: [
        "Common exam question: “Why chemo if you already removed tumor?”",
        "• Treats micrometastatic disease",
        "• Improves disease-free + overall survival (stage III clearly)",
        "• Stage II only for high-risk features",
        "Neoadjuvant chemo in colon cancer?",
        "• Not routine for most colon cancers (unlike rectal)",
        "• May be considered in select locally advanced T4b or bulky disease where downstaging may improve R0 likelihood (MDT-dependent)",
        "Board-quality line:",
        "“Colon cancer is primarily surgical for localized disease; systemic therapy is added when nodal disease or high-risk biology suggests micrometastatic spread.”"
      ],
      qna: []
    },
    {
      id: "msi-cea-colonoscopy",
      title: "7) Role of Colonoscopy, Imaging, and MSI/MMR (Modern Board Must-Know)",
      content: [
        "Colonoscopy role",
        "• diagnosis + biopsy",
        "• detects synchronous polyps/cancers",
        "• tattooing for surgical localization",
        "• post-op surveillance",
        "CEA",
        "• baseline + follow-up monitoring",
        "• NOT screening / NOT diagnostic",
        "MSI-H / dMMR (high-yield now)",
        "• Better prognosis in stage II",
        "• Stage II MSI-H tends to benefit less from 5-FU monotherapy",
        "• Metastatic MSI-H: higher response to immunotherapy (conceptual)",
        "Board trap:",
        "• Giving chemo automatically to all stage II without considering risk + MSI/MMR context"
      ],
      qna: []
    },

    // ===============================
    // MALIGNANT POLYP DECISION SECTION
    // ===============================
    {
      id: "malignant-polyp-decision",
      title: "8) Malignant Polyp Decision Section (Commonly Asked)",
      content: [
        "Definition:",
        "• Malignant polyp = invasive adenocarcinoma invading into submucosa (T1) arising in a polyp",
        "Core exam question:",
        "• “Is endoscopic resection enough, or do you need formal colectomy with lymphadenectomy?”",
        "LOW-RISK (Endoscopic resection may be sufficient) — ALL must be present:",
        "• En bloc resection",
        "• Negative margin (often ≥1–2 mm used as a practical threshold)",
        "• Well/moderately differentiated",
        "• No lymphovascular invasion (LVI)",
        "• Limited submucosal invasion (pedunculated Haggitt 1–3; sessile superficial invasion / no deep SM features)",
        "• No tumor budding",
        "→ If ALL low-risk: surveillance acceptable (center/MDT dependent)",
        "HIGH-RISK (Requires formal oncologic colectomy) — ANY one present:",
        "• Positive or close margin",
        "• Poor differentiation",
        "• LVI",
        "• Tumor budding",
        "• Deep submucosal invasion (e.g., pedunculated Haggitt 4; sessile deep SM invasion)",
        "• Piecemeal resection (cannot confirm margin/depth reliably)",
        "Board line:",
        "“High-risk malignant polyp features mandate formal oncologic resection with lymphadenectomy because nodal metastasis risk is clinically significant.”"
      ],
      qna: []
    },

    // ===============================
    // CME/CVL + Radical vs Limited Resection
    // ===============================
    {
      id: "cme-cvl-radical-vs-limited",
      title: "9) CME/CVL + Radical vs Limited Resection (Examiner Wording)",
      content: [
        "CME (Complete Mesocolic Excision):",
        "• Sharp dissection along embryologic planes to remove an intact mesocolon (analogous conceptually to TME in rectum)",
        "CVL (Central Vascular Ligation):",
        "• Ligation at the origin of named vessels to clear central nodes",
        "Why examiners ask this:",
        "• Quality surgery = higher nodal harvest + better staging accuracy; may improve oncologic outcomes in experienced centers",
        "RADICAL (Standard Oncologic Resection) — what you must say:",
        "• R0 resection",
        "• Adequate proximal/distal margins",
        "• En bloc mesocolon",
        "• High ligation at named vessel",
        "• ≥12 lymph nodes",
        "LIMITED RESECTION (EMR/ESD / non-oncologic segmental) — when acceptable:",
        "• Non-invasive lesions OR malignant polyp with LOW-RISK features",
        "Classic board traps:",
        "• Doing a limited segmental resection without nodal clearance for invasive adenocarcinoma",
        "• Low node yield (<12) and calling it “adequate”",
        "Oral line:",
        "“For invasive colon adenocarcinoma, standard oncologic resection with adequate lymphadenectomy is required; limited resection is reserved for select early lesions/malignant polyps meeting low-risk criteria.”"
      ],
      qna: []
    },

    {
      id: "surgery-options",
      title: "10) Surgical Options (Exactly how to say it)",
      content: [
        "Oncologic goals:",
        "• R0 resection",
        "• Adequate proximal/distal margins",
        "• En bloc mesocolon with high ligation",
        "• ≥12 nodes",
        "Operations by location",
        "• Cecum/ascending: Right hemicolectomy",
        "• Hepatic flexure: Extended right hemicolectomy (often)",
        "• Transverse: transverse colectomy or extended hemi (center-dependent)",
        "• Splenic flexure/descending: Left hemicolectomy",
        "• Sigmoid: Sigmoid colectomy",
        "• Total colectomy: rare indications (polyposis, synchronous cancers, select IBD scenarios)",
        "Emergency obstruction (board sequences)",
        "• Right-sided: often resection + primary anastomosis (selected by stability/contamination)",
        "• Left-sided: options depend on stability/contamination:",
        "  – resection + primary anastomosis ± diverting ileostomy (selected)",
        "  – Hartmann’s",
        "  – diverting stoma as bridge",
        "  – stent as bridge (selected centers)",
        "Board line:",
        "“Approach depends on tumor location, patient stability, contamination, and oncologic principles.”"
      ],
      qna: []
    },
    {
      id: "periop",
      title: "11) Perioperative Optimization (What examiners expect)",
      content: [
        "• Correct anemia (iron ± transfusion if needed)",
        "• Nutrition optimization (albumin/weight loss)",
        "• Bowel prep strategy varies; if elective, follow your institution protocol",
        "• Antibiotic prophylaxis",
        "• VTE prophylaxis",
        "• Enhanced Recovery concepts: early feeding, multimodal analgesia",
        "If obstructed/perforated:",
        "• aggressive resuscitation + NG if needed",
        "• broad-spectrum antibiotics",
        "• urgent operative plan"
      ],
      qna: []
    },
    {
      id: "complications",
      title: "12) Complications (Must-mention)",
      content: [
        "• Anastomotic leak (esp left-sided / high-risk anastomoses)",
        "• Ileus",
        "• Surgical site infection",
        "• Bleeding",
        "• Injury to ureter (left colectomy risk)",
        "• DVT/PE",
        "• Stoma complications (if created)"
      ],
      qna: []
    },
    {
  id: "followup",
  title: "13) Follow-up / Surveillance (Exact Board Timing)",
  content: [
    "Surveillance depends on stage (primarily Stage II–III).",

    "HISTORY & PHYSICAL:",
    "• Every 3–6 months for the first 2 years",
    "• Then every 6 months until 5 years",
    "• After 5 years → annually or per clinician discretion",

    "CEA (for Stage II–III, if candidate for curative treatment of recurrence):",
    "• Every 3–6 months for 2 years",
    "• Then every 6 months until 5 years",
    "• Not required for Stage I routinely",

    "CT CHEST / ABDOMEN / PELVIS:",
    "• Every 6–12 months for 5 years (Stage II high-risk and Stage III)",
    "• Not routine for low-risk Stage I",
    "• Imaging is surveillance for recurrence, not screening",

    "COLONOSCOPY:",
    "• If complete preoperative colonoscopy was done:",
    "  → Repeat at 1 year after surgery",
    "  → If normal, then repeat in 3 years",
    "  → Then every 5 years thereafter",
    "• If pre-op colonoscopy was incomplete (due to obstruction):",
    "  → Perform colonoscopy within 3–6 months after surgery",

    "Key Oral Board Line:",
    "“I follow Stage II–III patients with H&P and CEA every 3–6 months for 2 years, then every 6 months to 5 years; CT annually (or every 6–12 months) for 5 years; colonoscopy at 1 year, then 3 years, then every 5 years.”",

    "Board Trap:",
    "• Ordering PET routinely for surveillance (not standard)",
    "• Continuing CEA forever beyond 5 years without indication",
    "• Skipping the 1-year colonoscopy"
  ],
  qna: []
},
    {
      id: "oral-cases",
      title: "Oral Board Cases (5)",
      content: [
        "CASE 1 — Right-sided anemia",
        "65M iron-deficiency anemia → colonoscopy shows cecal mass, biopsy adenoca → CT CAP no mets → right hemicolectomy + nodes.",
        "CASE 2 — Left-sided obstruction",
        "70M distended abdomen, no stool/flatus, CT shows sigmoid obstruction → resuscitate + antibiotics → operative plan (Hartmann’s vs primary anastomosis ± diversion depending on stability/contamination).",
        "CASE 3 — Stage III colon cancer",
        "T3N1 after colectomy → adjuvant chemo referral (standard).",
        "CASE 4 — T4b invading abdominal wall",
        "Bulky transverse tumor adherent to abdominal wall → en bloc resection with involved structures to achieve R0, MDT for systemic therapy.",
        "CASE 5 — Liver mets",
        "Sigmoid tumor + solitary liver metastasis → assess resectability → MDT sequencing (systemic ± combined/staged resections) with curative intent possible."
      ],
      qna: []
    },

    // ===============================
    // MCQs (50) with rationales + traps
    // ===============================
    {
      id: "mcqs",
      title: "MCQs (50) — with rationales + traps",
      content: [],
      qna: [
        {
          id: "cc-q1",
          question: "Minimum number of lymph nodes recommended for adequate colon cancer staging?",
          choices: [
            { id: "a", text: "6" },
            { id: "b", text: "10" },
            { id: "c", text: "12" },
            { id: "d", text: "20" }
          ],
          answerId: "c",
          explanation:
            "Correct: ≥12 nodes is the classic benchmark for staging accuracy. Trap: <12 risks stage migration (missed N+ disease)."
        },
        {
          id: "cc-q2",
          question: "Best test to confirm colon cancer diagnosis?",
          choices: [
            { id: "a", text: "CT scan" },
            { id: "b", text: "PET scan" },
            { id: "c", text: "Colonoscopy with biopsy" },
            { id: "d", text: "CEA level" }
          ],
          answerId: "c",
          explanation:
            "Correct: Histology is required—colonoscopy + biopsy. Trap: CT/PET stage but do not confirm malignancy; CEA is not diagnostic."
        },
        {
          id: "cc-q3",
          question: "Classic presentation of right-sided colon cancer?",
          choices: [
            { id: "a", text: "Acute obstruction" },
            { id: "b", text: "Iron deficiency anemia" },
            { id: "c", text: "Tenesmus" },
            { id: "d", text: "Rectal pain" }
          ],
          answerId: "b",
          explanation:
            "Right-sided lesions often bleed occultly → iron deficiency anemia and fatigue. Trap: obstruction is more typical for left-sided lesions."
        },
        {
          id: "cc-q4",
          question: "Classic presentation of left-sided colon cancer?",
          choices: [
            { id: "a", text: "Occult bleeding only" },
            { id: "b", text: "Change in bowel habits and obstruction" },
            { id: "c", text: "Dysphagia" },
            { id: "d", text: "Hemoptysis" }
          ],
          answerId: "b",
          explanation:
            "Left colon has narrower lumen → obstructive symptoms, change in bowel habits, colicky pain. Trap: occult bleeding can occur but classically right-sided."
        },
        {
          id: "cc-q5",
          question: "Baseline CEA in colon cancer is primarily used for:",
          choices: [
            { id: "a", text: "Screening" },
            { id: "b", text: "Diagnosis" },
            { id: "c", text: "Prognosis and surveillance" },
            { id: "d", text: "Determining T stage" }
          ],
          answerId: "c",
          explanation:
            "CEA is prognostic and helpful for follow-up trends. Trap: It is not a screening or diagnostic test."
        },
        {
          id: "cc-q6",
          question: "Best routine staging imaging after biopsy-proven colon cancer (no contraindications)?",
          choices: [
            { id: "a", text: "CT chest/abdomen/pelvis" },
            { id: "b", text: "MRI brain" },
            { id: "c", text: "PET for all patients" },
            { id: "d", text: "Ultrasound only" }
          ],
          answerId: "a",
          explanation:
            "CT CAP is standard for metastatic evaluation. Trap: PET is not routine for all; MRI brain only if symptomatic."
        },
        {
          id: "cc-q7",
          question: "T4b colon cancer means:",
          choices: [
            { id: "a", text: "Invades submucosa" },
            { id: "b", text: "Invades pericolic fat" },
            { id: "c", text: "Penetrates visceral peritoneum" },
            { id: "d", text: "Invades adjacent organs/structures" }
          ],
          answerId: "d",
          explanation:
            "T4b = direct invasion into adjacent organs/structures. Trap: T4a is peritoneal penetration, not organ invasion."
        },
        {
          id: "cc-q8",
          question: "Stage III colon cancer standard treatment principle is:",
          choices: [
            { id: "a", text: "Surgery alone" },
            { id: "b", text: "Radiation routine" },
            { id: "c", text: "Surgery + adjuvant chemotherapy" },
            { id: "d", text: "Immunotherapy for all" }
          ],
          answerId: "c",
          explanation:
            "Node-positive disease implies systemic risk → adjuvant chemotherapy is standard. Trap: radiation is not routine for colon (more rectal)."
        },
        {
          id: "cc-q9",
          question: "Stage II adjuvant chemotherapy is most justified when:",
          choices: [
            { id: "a", text: "T2N0, well differentiated" },
            { id: "b", text: "T3N0 with no high-risk features" },
            { id: "c", text: "T4 lesion or other high-risk features" },
            { id: "d", text: "Benign adenoma removed endoscopically" }
          ],
          answerId: "c",
          explanation:
            "High-risk Stage II (e.g., T4, obstruction/perforation, LVI/PNI, <12 nodes) is where adjuvant therapy is considered. Trap: not all Stage II needs chemo."
        },
        {
          id: "cc-q10",
          question: "If colonoscopy cannot traverse an obstructing colon cancer, next best way to evaluate proximal colon for synchronous lesions is:",
          choices: [
            { id: "a", text: "No evaluation needed" },
            { id: "b", text: "CT colonography or post-op completion colonoscopy" },
            { id: "c", text: "Upper endoscopy" },
            { id: "d", text: "Barium swallow" }
          ],
          answerId: "b",
          explanation:
            "You must evaluate the entire colon for synchronous lesions; if colonoscopy incomplete, use CT colonography or post-op completion colonoscopy. Trap: skipping proximal evaluation."
        },

        // -------- Malignant polyp / early cancer nuance ----------
        {
          id: "cc-q11",
          question: "A pedunculated malignant polyp is removed en bloc. Pathology: T1 adenocarcinoma, well-differentiated, no LVI, margin 3 mm, Haggitt level 2. Best management?",
          choices: [
            { id: "a", text: "Formal colectomy with lymphadenectomy" },
            { id: "b", text: "Adjuvant chemotherapy" },
            { id: "c", text: "Surveillance after complete endoscopic excision" },
            { id: "d", text: "Radiation therapy" }
          ],
          answerId: "c",
          explanation:
            "Low-risk malignant polyp features (en bloc, clear margin, no LVI, good grade, limited invasion) can be managed with surveillance. Trap: over-treating all T1 lesions with colectomy."
        },
        {
          id: "cc-q12",
          question: "A sessile malignant polyp was removed piecemeal. Pathology shows submucosal invasion with LVI. Best next step?",
          choices: [
            { id: "a", text: "Observation only" },
            { id: "b", text: "Repeat colonoscopy in 10 years" },
            { id: "c", text: "Formal oncologic colectomy with lymphadenectomy" },
            { id: "d", text: "Radiation therapy" }
          ],
          answerId: "c",
          explanation:
            "Piecemeal resection + LVI = high-risk for nodal disease; colectomy indicated. Trap: assuming endoscopic removal is adequate despite high-risk features."
        },
        {
          id: "cc-q13",
          question: "After malignant polyp resection, margin is 0.5 mm, no LVI, moderate differentiation. Best management?",
          choices: [
            { id: "a", text: "Surveillance only" },
            { id: "b", text: "Formal oncologic colectomy" },
            { id: "c", text: "Radiation to polypectomy site" },
            { id: "d", text: "CEA monitoring only" }
          ],
          answerId: "b",
          explanation:
            "Close/uncertain margin is a high-risk feature → colectomy for oncologic clearance and nodal evaluation. Trap: treating close margins as “negative enough.”"
        },
        {
          id: "cc-q14",
          question: "Which is a HIGH-RISK feature after endoscopic resection of a malignant polyp that mandates colectomy?",
          choices: [
            { id: "a", text: "En bloc resection with clear margin" },
            { id: "b", text: "Well-differentiated histology" },
            { id: "c", text: "Lymphovascular invasion" },
            { id: "d", text: "Haggitt level 1" }
          ],
          answerId: "c",
          explanation:
            "LVI is a major high-risk feature for nodal metastasis. Trap: focusing only on margin and ignoring LVI/tumor budding/depth."
        },

        // -------- MSI/MMR nuance ----------
        {
          id: "cc-q15",
          question: "A Stage II (T3N0) colon cancer has MSI-H/dMMR and no other high-risk features. Which statement is most accurate?",
          choices: [
            { id: "a", text: "5-FU monotherapy always provides strong benefit" },
            { id: "b", text: "Observation is reasonable; MSI-H Stage II often benefits less from 5-FU monotherapy" },
            { id: "c", text: "Radiation is mandatory" },
            { id: "d", text: "Immediate immunotherapy is standard in localized Stage II" }
          ],
          answerId: "b",
          explanation:
            "MSI-H/dMMR Stage II generally has better prognosis and may derive less benefit from 5-FU monotherapy. Trap: giving chemo automatically to all Stage II."
        },
        {
          id: "cc-q16",
          question: "Metastatic MSI-H/dMMR colon cancer is more likely to respond to:",
          choices: [
            { id: "a", text: "Immunotherapy (checkpoint inhibitors)" },
            { id: "b", text: "Radiation alone" },
            { id: "c", text: "Tamoxifen" },
            { id: "d", text: "Observation only" }
          ],
          answerId: "a",
          explanation:
            "Modern concept: MSI-H/dMMR metastatic disease has higher response to immunotherapy. Trap: treating MSI only as a prognostic marker."
        },

        // -------- Stage II high-risk / node yield ----------
        {
          id: "cc-q17",
          question: "Which is a high-risk feature in Stage II colon cancer that supports considering adjuvant chemotherapy?",
          choices: [
            { id: "a", text: "T2 lesion" },
            { id: "b", text: "Obstruction at presentation" },
            { id: "c", text: "≥12 nodes examined" },
            { id: "d", text: "Well-differentiated tumor" }
          ],
          answerId: "b",
          explanation:
            "Obstruction is a classic Stage II high-risk feature. Trap: confusing risk features with favorable factors."
        },
        {
          id: "cc-q18",
          question: "During colectomy, only 8 lymph nodes are retrieved and pathology is T3N0. What is the main concern?",
          choices: [
            { id: "a", text: "Overstaging" },
            { id: "b", text: "Understaging (stage migration)" },
            { id: "c", text: "Incorrect CEA measurement" },
            { id: "d", text: "The tumor is automatically MSI-H" }
          ],
          answerId: "b",
          explanation:
            "Low node harvest risks missing node-positive disease. Trap: calling it “Stage II low-risk” despite inadequate nodal evaluation."
        },

        // -------- Surgery principles / T4b en bloc ----------
        {
          id: "cc-q19",
          question: "A colon tumor is adherent to the abdominal wall intraoperatively. Best oncologic principle?",
          choices: [
            { id: "a", text: "Peel tumor off the abdominal wall to preserve tissue" },
            { id: "b", text: "En bloc resection of involved abdominal wall with the specimen" },
            { id: "c", text: "Biopsy and close without resection" },
            { id: "d", text: "Give radiation first in the OR" }
          ],
          answerId: "b",
          explanation:
            "Never peel tumor off; perform en bloc resection to achieve R0. Trap: violating oncologic planes causing positive margins."
        },
        {
          id: "cc-q20",
          question: "Colon cancer invades bladder dome on imaging, no distant metastasis. Best management?",
          choices: [
            { id: "a", text: "Palliative stoma only" },
            { id: "b", text: "En bloc colectomy with partial cystectomy to achieve R0" },
            { id: "c", text: "Chemotherapy only, surgery contraindicated" },
            { id: "d", text: "Radiation routine for colon primaries" }
          ],
          answerId: "b",
          explanation:
            "T4b invasion requires en bloc multivisceral resection when resectable. Trap: attempting separation or labeling as unresectable by default."
        },

        // -------- Obstruction / emergency strategy ----------
        {
          id: "cc-q21",
          question: "Obstructing sigmoid cancer with peritonitis and hemodynamic instability: best operative strategy?",
          choices: [
            { id: "a", text: "Primary anastomosis without diversion" },
            { id: "b", text: "Hartmann’s procedure" },
            { id: "c", text: "Colonic stent in ED" },
            { id: "d", text: "Observation only" }
          ],
          answerId: "b",
          explanation:
            "Unstable + contamination → avoid primary anastomosis; Hartmann’s is classic. Trap: forcing anastomosis in sepsis."
        },
        {
          id: "cc-q22",
          question: "Right-sided malignant obstruction in a stable patient most commonly managed by:",
          choices: [
            { id: "a", text: "Hartmann’s procedure" },
            { id: "b", text: "Right hemicolectomy with primary anastomosis (selected)" },
            { id: "c", text: "APR" },
            { id: "d", text: "Radiation as bridge to surgery" }
          ],
          answerId: "b",
          explanation:
            "Right-sided resections often allow primary anastomosis in stable patients. Trap: applying left-sided Hartmann logic to right colon automatically."
        },
        {
          id: "cc-q23",
          question: "Left-sided obstructing colon cancer: which option can be a “bridge to surgery” in selected centers?",
          choices: [
            { id: "a", text: "EMR" },
            { id: "b", text: "Esophageal stent" },
            { id: "c", text: "Colonic stent" },
            { id: "d", text: "Appendectomy" }
          ],
          answerId: "c",
          explanation:
            "Self-expanding colonic stent can bridge selected left-sided obstructions to elective resection. Trap: thinking stents are for all patients/settings."
        },

        // -------- CME/CVL / quality ----------
        {
          id: "cc-q24",
          question: "Main oncologic advantage attributed to CME/CVL principles is:",
          choices: [
            { id: "a", text: "Improved cosmesis" },
            { id: "b", text: "Higher lymph node yield and better staging accuracy" },
            { id: "c", text: "Eliminates need for chemotherapy" },
            { id: "d", text: "Prevents all anastomotic leaks" }
          ],
          answerId: "b",
          explanation:
            "CME/CVL aims to remove intact mesocolon with central nodes → improved nodal harvest and staging. Trap: overselling it as chemo replacement."
        },

        // -------- Metastatic/oligometastatic sequencing ----------
        {
          id: "cc-q25",
          question: "A fit patient has sigmoid cancer and a solitary resectable liver metastasis. Best statement?",
          choices: [
            { id: "a", text: "Stage IV is always palliative" },
            { id: "b", text: "Potentially curable with MDT sequencing (systemic ± staged/combined resections)" },
            { id: "c", text: "Radiation alone is standard curative therapy" },
            { id: "d", text: "Primary tumor should never be removed" }
          ],
          answerId: "b",
          explanation:
            "Oligometastatic disease can be potentially curable with coordinated surgery and systemic therapy. Trap: treating all Stage IV as uniformly palliative."
        },
        {
          id: "cc-q26",
          question: "Stage IV colon cancer with unresectable liver metastases and asymptomatic primary tumor: best initial management?",
          choices: [
            { id: "a", text: "Colectomy first" },
            { id: "b", text: "Systemic therapy" },
            { id: "c", text: "Radiation to primary as standard" },
            { id: "d", text: "Total colectomy" }
          ],
          answerId: "b",
          explanation:
            "Unresectable metastatic disease is systemic first; operate for symptoms (obstruction/bleeding/perforation). Trap: reflex colectomy in asymptomatic primary."
        },

        // -------- AJCC nuances ----------
        {
          id: "cc-q27",
          question: "T4a colon cancer is defined as:",
          choices: [
            { id: "a", text: "Invades adjacent organs/structures" },
            { id: "b", text: "Penetrates visceral peritoneum" },
            { id: "c", text: "Invades muscularis propria only" },
            { id: "d", text: "Confined to mucosa" }
          ],
          answerId: "b",
          explanation:
            "T4a = penetration of visceral peritoneum; T4b = adjacent organ invasion. Trap: swapping T4a and T4b."
        },
        {
          id: "cc-q28",
          question: "Which nodal category is correct for 5 positive regional nodes?",
          choices: [
            { id: "a", text: "N0" },
            { id: "b", text: "N1" },
            { id: "c", text: "N2" },
            { id: "d", text: "M1" }
          ],
          answerId: "c",
          explanation:
            "N2 is ≥4 positive nodes. Trap: calling 4–6 nodes N1."
        },

        // -------- Resection by location ----------
        {
          id: "cc-q29",
          question: "Most appropriate operation for biopsy-proven cecal adenocarcinoma (resectable, no mets)?",
          choices: [
            { id: "a", text: "Sigmoid colectomy" },
            { id: "b", text: "Right hemicolectomy with lymphadenectomy" },
            { id: "c", text: "APR" },
            { id: "d", text: "Transanal excision" }
          ],
          answerId: "b",
          explanation:
            "Right hemicolectomy with high ligation/nodes is standard. Trap: confusing colon vs rectal operations."
        },
        {
          id: "cc-q30",
          question: "Most appropriate operation for sigmoid colon adenocarcinoma (resectable, no mets)?",
          choices: [
            { id: "a", text: "Right hemicolectomy" },
            { id: "b", text: "Sigmoid colectomy with oncologic lymphadenectomy" },
            { id: "c", text: "Total gastrectomy" },
            { id: "d", text: "Whipple procedure" }
          ],
          answerId: "b",
          explanation:
            "Segmental oncologic resection according to vascular territory and nodes. Trap: non-oncologic segmental resection without nodes."
        },

        // -------- Surveillance ----------
        {
          id: "cc-q31",
          question: "Typical timing of surveillance colonoscopy after curative colectomy (if pre-op colonoscopy was complete)?",
          choices: [
            { id: "a", text: "6 weeks" },
            { id: "b", text: "6 months" },
            { id: "c", text: "1 year" },
            { id: "d", text: "10 years" }
          ],
          answerId: "c",
          explanation:
            "Common board-safe principle: colonoscopy at ~1 year, then based on findings. Trap: skipping early surveillance for metachronous lesions."
        },

        // -------- Recurrence/patterns ----------
        {
          id: "cc-q32",
          question: "Most common sites of colon cancer recurrence/metastasis are:",
          choices: [
            { id: "a", text: "Brain and thyroid" },
            { id: "b", text: "Liver and peritoneum (common patterns)" },
            { id: "c", text: "Skin only" },
            { id: "d", text: "Bone only" }
          ],
          answerId: "b",
          explanation:
            "Portal drainage favors liver metastasis; peritoneal dissemination is also common. Trap: overemphasizing rare sites."
        },

        // -------- Genetics / syndromes ----------
        {
          id: "cc-q33",
          question: "Lynch syndrome is most associated with which underlying defect?",
          choices: [
            { id: "a", text: "APC germline mutation" },
            { id: "b", text: "Mismatch repair (MMR) gene defect leading to MSI" },
            { id: "c", text: "RET mutation" },
            { id: "d", text: "BCR-ABL translocation" }
          ],
          answerId: "b",
          explanation:
            "Lynch = MMR defect → MSI. Trap: confusing Lynch with FAP (APC)."
        },
        {
          id: "cc-q34",
          question: "FAP is most associated with:",
          choices: [
            { id: "a", text: "APC germline mutation" },
            { id: "b", text: "MMR defect" },
            { id: "c", text: "KRAS-only mutation" },
            { id: "d", text: "EBV infection" }
          ],
          answerId: "a",
          explanation:
            "FAP is APC mutation with innumerable adenomas. Trap: mixing hereditary syndromes."
        },

        // -------- Prognostic mutations (board concept) ----------
        {
          id: "cc-q35",
          question: "BRAF mutation in colon cancer generally suggests:",
          choices: [
            { id: "a", text: "Better prognosis" },
            { id: "b", text: "Worse prognosis (board-level concept)" },
            { id: "c", text: "Always localized disease" },
            { id: "d", text: "No prognostic relevance" }
          ],
          answerId: "b",
          explanation:
            "BRAF is generally associated with poorer prognosis in many contexts. Trap: assuming all mutations are neutral."
        },

        // -------- Complications / quality ----------
        {
          id: "cc-q36",
          question: "Anastomotic leak after colectomy is associated with:",
          choices: [
            { id: "a", text: "Lower recurrence risk" },
            { id: "b", text: "Increased morbidity and may worsen oncologic outcomes" },
            { id: "c", text: "Improved staging accuracy" },
            { id: "d", text: "Guaranteed MSI-H status" }
          ],
          answerId: "b",
          explanation:
            "Leak increases morbidity and can negatively impact oncologic outcomes. Trap: treating leak as purely short-term issue."
        },
        {
          id: "cc-q37",
          question: "Most important oncologic principle distinguishing radical colectomy from limited resection is:",
          choices: [
            { id: "a", text: "Shortest incision" },
            { id: "b", text: "Adequate lymphadenectomy with high ligation following vascular territories" },
            { id: "c", text: "Avoiding all bowel prep" },
            { id: "d", text: "Using staplers only" }
          ],
          answerId: "b",
          explanation:
            "Radical oncologic resection includes mesocolon + nodes with high ligation. Trap: confusing “segment removed” with oncologic completeness."
        },

        // -------- AJCC depth ----------
        {
          id: "cc-q38",
          question: "T3 colon cancer is defined as:",
          choices: [
            { id: "a", text: "Invades submucosa only" },
            { id: "b", text: "Invades muscularis propria only" },
            { id: "c", text: "Extends through muscularis into pericolic fat" },
            { id: "d", text: "Invades adjacent organ" }
          ],
          answerId: "c",
          explanation:
            "T3 = through muscularis propria into pericolic/perirectal tissue. Trap: calling any fat invasion “T4.”"
        },

        // -------- Emergency mortality concept ----------
        {
          id: "cc-q39",
          question: "Compared with elective surgery, emergency surgery for colon cancer (obstruction/perforation) generally has:",
          choices: [
            { id: "a", text: "Lower morbidity/mortality" },
            { id: "b", text: "Similar outcomes" },
            { id: "c", text: "Higher morbidity/mortality" },
            { id: "d", text: "No impact on outcomes" }
          ],
          answerId: "c",
          explanation:
            "Emergencies carry higher complication risk. Trap: underestimating physiologic insult of sepsis/obstruction."
        },

        // -------- Decision traps around “neoadjuvant” ----------
        {
          id: "cc-q40",
          question: "Neoadjuvant chemotherapy for colon cancer is:",
          choices: [
            { id: "a", text: "Routine for all resectable colon cancers" },
            { id: "b", text: "Not routine; may be considered selectively (e.g., bulky T4b to improve R0) in MDT context" },
            { id: "c", text: "Mandatory for Stage I" },
            { id: "d", text: "Identical to rectal cancer TNT approach" }
          ],
          answerId: "b",
          explanation:
            "Colon is primarily surgery-first; neoadjuvant is selective for special situations. Trap: applying rectal protocols to colon."
        },

        // -------- More high-difficulty / RITE style ----------
        {
          id: "cc-q41",
          question: "Which scenario best supports surgery for palliation in Stage IV colon cancer?",
          choices: [
            { id: "a", text: "Asymptomatic primary with widespread unresectable metastases" },
            { id: "b", text: "Bleeding, perforation, or obstruction from the primary tumor" },
            { id: "c", text: "CEA mildly elevated only" },
            { id: "d", text: "MSI-H status alone" }
          ],
          answerId: "b",
          explanation:
            "Operate for symptoms/complications; otherwise systemic therapy first. Trap: operating for “stage IV” without symptoms."
        },
        {
          id: "cc-q42",
          question: "Colon cancer invading abdominal wall: the correct oncologic approach is BEST described as:",
          choices: [
            { id: "a", text: "Resect colon only; leave abdominal wall to avoid morbidity" },
            { id: "b", text: "En bloc resection to achieve negative margins (R0)" },
            { id: "c", text: "Biopsy and refer for radiation only" },
            { id: "d", text: "Debulking is equivalent to R0" }
          ],
          answerId: "b",
          explanation:
            "R0 is the goal; en bloc resection is required when adherent/invasive. Trap: “peeling” causes positive margins."
        },
        {
          id: "cc-q43",
          question: "Which of the following is MOST consistent with a “low-risk” malignant polyp where endoscopic therapy may be adequate?",
          choices: [
            { id: "a", text: "Piecemeal resection with uncertain margin" },
            { id: "b", text: "LVI present" },
            { id: "c", text: "En bloc resection, well/moderate differentiation, clear margin, no LVI" },
            { id: "d", text: "Poor differentiation despite clear margin" }
          ],
          answerId: "c",
          explanation:
            "This matches classic low-risk criteria. Trap: ignoring piecemeal/poor differentiation/LVI which pushes to colectomy."
        },
        {
          id: "cc-q44",
          question: "Which statement about margins in colon cancer surgery is most appropriate for boards?",
          choices: [
            { id: "a", text: "Margins are irrelevant if nodes are cleared" },
            { id: "b", text: "Goal is R0 with adequate proximal/distal margins plus mesocolic resection with pedicle" },
            { id: "c", text: "A 1 mm gross margin is always enough" },
            { id: "d", text: "Only distal margin matters" }
          ],
          answerId: "b",
          explanation:
            "Boards expect R0 margins + mesocolic/pedicle lymphadenectomy concept. Trap: reducing surgery to a “short segment removal.”"
        },
        {
          id: "cc-q45",
          question: "If a patient presents with colon cancer and iron deficiency anemia, the most appropriate initial confirmation is:",
          choices: [
            { id: "a", text: "CEA level first" },
            { id: "b", text: "Colonoscopy with biopsy" },
            { id: "c", text: "PET scan first" },
            { id: "d", text: "Empiric chemotherapy" }
          ],
          answerId: "b",
          explanation:
            "Colonoscopy with biopsy is the diagnostic step. Trap: staging tests before tissue diagnosis."
        },
        {
          id: "cc-q46",
          question: "A patient has a transverse colon cancer adherent to stomach but no distant metastasis. Best surgical principle?",
          choices: [
            { id: "a", text: "Separate tumor from stomach to avoid gastrectomy" },
            { id: "b", text: "En bloc multivisceral resection if needed to achieve R0" },
            { id: "c", text: "Abort operation and give radiation" },
            { id: "d", text: "Do only a diverting stoma" }
          ],
          answerId: "b",
          explanation:
            "Adherent/invasive tumors should be resected en bloc for oncologic margins. Trap: separating creates R1/R2."
        },
        {
          id: "cc-q47",
          question: "Which is the BEST description of why node yield matters beyond prognosis?",
          choices: [
            { id: "a", text: "Only for billing" },
            { id: "b", text: "Accurate staging and avoiding undertreatment from missed N+ disease" },
            { id: "c", text: "It replaces CEA monitoring" },
            { id: "d", text: "It prevents ileus" }
          ],
          answerId: "b",
          explanation:
            "Node yield drives staging accuracy and treatment decisions (adjuvant chemo). Trap: treating nodes as paperwork."
        },
        {
          id: "cc-q48",
          question: "In colon cancer, lymphatic drainage generally follows the:",
          choices: [
            { id: "a", text: "Venous drainage only" },
            { id: "b", text: "Arterial supply (mesenteric vessels) and their pedicles" },
            { id: "c", text: "Biliary tree" },
            { id: "d", text: "Ureteral course" }
          ],
          answerId: "b",
          explanation:
            "Nodes follow mesenteric arterial pedicles—hence high ligation and mesocolic resection. Trap: not tying surgery to anatomy."
        },
        {
          id: "cc-q49",
          question: "Which scenario is MOST appropriate for considering total colectomy rather than segmental resection?",
          choices: [
            { id: "a", text: "Single sporadic cecal cancer in an elderly patient" },
            { id: "b", text: "Polyposis syndrome with high risk of synchronous/metachronous lesions" },
            { id: "c", text: "T1 malignant polyp with low-risk features" },
            { id: "d", text: "Stage I sigmoid cancer" }
          ],
          answerId: "b",
          explanation:
            "Total colectomy is considered for polyposis or certain synchronous/multifocal scenarios. Trap: doing total colectomy for routine sporadic cancers."
        },
        {
          id: "cc-q50",
          question: "Most accurate board statement regarding colon cancer vs rectal cancer sequencing is:",
          choices: [
            { id: "a", text: "Colon cancer routinely requires neoadjuvant chemoradiation" },
            { id: "b", text: "Colon cancer is usually surgery-first when localized; rectal cancer often integrates neoadjuvant therapy for local control" },
            { id: "c", text: "Colon cancer requires pelvic MRI for all" },
            { id: "d", text: "Radiation is routine for colon cancers" }
          ],
          answerId: "b",
          explanation:
            "Colon is generally surgery-first; rectal often neoadjuvant (local control, CRM/TME context). Trap: copying rectal protocols into colon."
        }
      ]
    }
  ]
},
{
  id: "rectal-cancer",
  title: "RECTAL CANCER",
  subtitle: "Schwartz 11th backbone + MRI/CRM/TME + TNT sequencing + board traps",
  sections: [
    {
      id: "overview",
      title: "1) High-Yield Overview (Oral Boards Opener)",
      content: [
        "Oral board opener:",
        "“Rectal cancer is confirmed by colonoscopy with biopsy. Local staging is by pelvic MRI (CRM, mesorectal nodes) ± EUS for early lesions. Metastatic staging is CT chest/abdomen/pelvis and baseline CEA. Curative management depends on level and stage: TME-based surgery, often preceded by neoadjuvant therapy (long-course CRT or TNT) for locally advanced disease. Quality endpoints: negative CRM, negative distal margin, and intact TME specimen.”",
        "Why rectal cancer is different from colon cancer:",
        "• Local control is harder (pelvis, CRM, mesorectum) → higher local recurrence risk if surgery is poor",
        "• MRI drives management (CRM involvement, EMVI, mesorectal nodes, sphincter involvement)",
        "• Neoadjuvant therapy is common (T3/T4 or N+), unlike colon where surgery-first is typical"
      ],
      qna: []
    },
    {
      id: "anatomy",
      title: "2) Anatomy + TME + CRM (What examiners are fishing for)",
      content: [
        "Key concepts (must say in orals):",
        "• Rectum is within the mesorectum (fat + nodes + vessels) → must be removed en bloc (TME).",
        "• Circumferential resection margin (CRM): the radial margin between tumor/mesorectal disease and mesorectal fascia.",
        "• Positive/“threatened” CRM predicts local recurrence → drives neoadjuvant therapy.",
        "• Distal margin is less critical than CRM for many tumors (board nuance), but you still aim for an oncologic distal margin and intact TME.",
        "TME principle (one-liner):",
        "“Total mesorectal excision means sharp dissection in the holy plane to remove an intact mesorectal envelope down to the levators for mid/low rectal tumors.”"
      ],
      qna: []
    },
    {
      id: "workup-staging",
      title: "3) Workup & Staging (Board Script — exact sequence)",
      content: [
        "Step 1: Confirm diagnosis",
        "• Colonoscopy + biopsy (tissue diagnosis).",
        "• Complete colonic evaluation for synchronous lesions.",
        "Step 2: Baseline labs",
        "• Baseline CEA.",
        "Step 3: Stage for distant metastasis",
        "• CT chest/abdomen/pelvis.",
        "Step 4: Local staging (THIS is the rectal difference)",
        "• Pelvic MRI (high-yield): assesses T stage, mesorectal nodes, CRM, EMVI, sphincter/levator involvement.",
        "• EUS: useful mainly for early lesions when considering local excision (T1 vs T2 depth).",
        "Step 5: MDT planning (expected by examiners)",
        "• Decide: local excision vs TME surgery vs neoadjuvant (CRT/TNT)."
      ],
      qna: []
    },
    {
      id: "staging-pearls",
      title: "4) Staging Pearls + Board Traps",
      content: [
        "Board traps you must avoid:",
        "• ❌ Using CT pelvis alone for local staging → ✅ pelvic MRI for CRM/mesorectum.",
        "• ❌ Treating rectal like colon (surgery-first for T3/N+) → ✅ neoadjuvant commonly indicated.",
        "• ❌ Local excision for T2 disease → ✅ local excision is for carefully selected T1 only.",
        "High-risk MRI features often prompting neoadjuvant/TNT (conceptual, board-safe):",
        "• Threatened/positive CRM",
        "• T3/T4 tumor",
        "• N+ mesorectal nodes",
        "• Low tumor with sphincter/levator involvement",
        "• EMVI (often discussed as adverse)"
      ],
      qna: []
    },
    {
      id: "management",
      title: "5) Management by Stage (The algorithm you must memorize)",
      content: [
        "A) Very early (Tis / selected T1 N0)",
        "• Consider transanal local excision (TAMIS/TEM) ONLY if favorable T1 features and no nodal risk signals.",
        "• If adverse features on pathology → proceed to radical TME resection.",
        "B) Early but beyond local excision (T2 or higher, or any node risk)",
        "• Radical resection with TME (LAR or APR depending on sphincter involvement and distal margin feasibility).",
        "C) Locally advanced (commonly T3/T4 or N+)",
        "• Neoadjuvant therapy is typical: long-course chemoradiation OR Total Neoadjuvant Therapy (TNT) → surgery (TME).",
        "D) Metastatic disease (Stage IV)",
        "• Systemic therapy primary; rectal surgery for symptoms (obstruction, bleeding, perforation) or select MDT curative sequencing with resectable mets."
      ],
      qna: []
    },
    {
      id: "tnt",
      title: "6) TNT vs Traditional (How to answer in orals)",
      content: [
        "Traditional sequence (classic):",
        "• Neoadjuvant chemoradiation → TME surgery → adjuvant chemotherapy.",
        "TNT concept (modern, board-relevant):",
        "• Deliver systemic chemotherapy upfront (before surgery), with radiation as part of total neoadjuvant plan → TME surgery (or select response-based strategy).",
        "Why TNT is favored (exam lines):",
        "• Treats micrometastatic disease earlier",
        "• Improves compliance with systemic therapy",
        "• Increases pathologic complete response rates",
        "• Enables response-adapted strategies in selected centers (watch-and-wait discussion)"
      ],
      qna: []
    },
    {
      id: "surgery-options",
      title: "7) Surgery Options (LAR vs APR — exact examiner logic)",
      content: [
        "Key operations:",
        "• Low Anterior Resection (LAR) + TME: for mid/upper rectal tumors when sphincter preservation feasible.",
        "• APR (Abdominoperineal Resection): when sphincter/levator involved or negative distal margin cannot be achieved with continence preservation.",
        "• Diverting loop ileostomy: commonly used to protect low pelvic anastomosis (board-safe concept).",
        "Board line:",
        "“Choice of LAR vs APR depends on tumor distance, sphincter/levator involvement, ability to obtain negative CRM and distal margin, and functional outcome.”"
      ],
      qna: []
    },
    {
      id: "watch-and-wait",
      title: "8) Watch-and-Wait (Board-level, safe wording)",
      content: [
        "Concept:",
        "• After neoadjuvant therapy (often TNT/CRT), some patients achieve a clinical complete response (cCR).",
        "• Selected centers may offer non-operative management (“watch-and-wait”) with intensive surveillance.",
        "Board-safe answer:",
        "“Watch-and-wait is an option only in a structured program with strict surveillance; otherwise standard is TME surgery after neoadjuvant treatment.”"
      ],
      qna: []
    },
    {
      id: "surveillance",
      title: "9) Surveillance (Exact timepoints for Boards)",
      content: [
        "Post-curative treatment surveillance (board-safe, commonly accepted schedule):",
        "A) Clinic visits + CEA:",
        "• Every 3–6 months for YEARS 1–2",
        "• Every 6 months for YEARS 3–5",
        "B) CT imaging (chest/abdomen/pelvis):",
        "• Every 6–12 months for YEARS 1–5 (use higher intensity for higher-risk stage II/III)",
        "C) Colonoscopy:",
        "• 1 YEAR after resection (or 3–6 months after surgery if pre-op colonoscopy was incomplete due to obstruction)",
        "• If normal → repeat in 3 YEARS",
        "• If normal again → every 5 YEARS thereafter",
        "D) Rectal-specific local surveillance (if anastomosis/rectum preserved):",
        "• Proctoscopy/sigmoidoscopy ± pelvic MRI/EUS per protocol in the first 2–3 years (highest local recurrence risk window)",
        "Board line:",
        "“First 2 years are highest recurrence risk → closer visits and CEA; imaging and endoscopy are stage- and pathway-driven.”"
      ],
      qna: []
    },
    {
      id: "oral-cases",
      title: "10) Oral Board Cases (5) — rapid fire",
      content: [
        "CASE 1 — Early rectal lesion",
        "Small lesion on colonoscopy, MRI suggests T1N0 → EUS confirms early depth → consider transanal local excision if favorable.",
        "CASE 2 — T2 mid-rectal cancer",
        "MRI T2N0 → TME surgery (LAR) rather than local excision.",
        "CASE 3 — T3N+ low rectal cancer",
        "MRI shows threatened CRM/N+ → TNT or long-course CRT → reassess → TME surgery (LAR vs APR depending on sphincter).",
        "CASE 4 — Threatened CRM",
        "MRI shows tumor close to mesorectal fascia → neoadjuvant to improve CRM negativity chance.",
        "CASE 5 — Stage IV with bleeding",
        "Rectal primary + unresectable mets + bleeding → systemic therapy primary; local measures/surgery for palliation if needed."
      ],
      qna: []
    },
    {
      id: "mcqs",
      title: "MCQs (20) — High Yield + Traps (CERES/RITE style)",
      content: [],
      qna: [
        {
          id: "rc-q1",
          question: "Most important imaging for LOCAL staging of rectal cancer (CRM/T stage)?",
          choices: [
            { id: "a", text: "CT abdomen/pelvis" },
            { id: "b", text: "Pelvic MRI" },
            { id: "c", text: "PET-CT for all" },
            { id: "d", text: "Plain abdominal x-ray" }
          ],
          answerId: "b",
          explanation: "Pelvic MRI is the key local staging test (CRM, mesorectum, nodes, sphincter/levator). CT is mainly for distant staging."
        },
        {
          id: "rc-q2",
          question: "The surgical quality concept most associated with lowering local recurrence in rectal cancer is:",
          choices: [
            { id: "a", text: "High ligation of IMA for all" },
            { id: "b", text: "Total mesorectal excision (TME)" },
            { id: "c", text: "Wider proximal margin only" },
            { id: "d", text: "Routine colonic stenting" }
          ],
          answerId: "b",
          explanation: "TME removes the mesorectal envelope containing nodes and tumor deposits; it’s the key surgical quality endpoint for local control."
        },
        {
          id: "rc-q3",
          question: "Threatened circumferential resection margin (CRM) on MRI primarily indicates need for:",
          choices: [
            { id: "a", text: "Surgery first without neoadjuvant" },
            { id: "b", text: "Neoadjuvant therapy to improve R0/CRM negativity" },
            { id: "c", text: "Observation only" },
            { id: "d", text: "Appendectomy" }
          ],
          answerId: "b",
          explanation: "Threatened/positive CRM predicts local recurrence; neoadjuvant therapy is used to downstage and improve CRM clearance."
        },
        {
          id: "rc-q4",
          question: "Which statement is most accurate for rectal vs colon cancer sequencing?",
          choices: [
            { id: "a", text: "Colon cancer routinely needs neoadjuvant chemoradiation" },
            { id: "b", text: "Rectal cancer often integrates neoadjuvant therapy; colon cancer usually surgery-first when localized" },
            { id: "c", text: "Radiation is routine for colon cancer" },
            { id: "d", text: "Pelvic MRI is mandatory for all colon cancers" }
          ],
          answerId: "b",
          explanation: "Rectal cancer management is driven by local control (CRM/TME), so neoadjuvant therapy is common; colon cancer is usually surgery-first."
        },
        {
          id: "rc-q5",
          question: "Best use of endoscopic ultrasound (EUS) in rectal cancer is:",
          choices: [
            { id: "a", text: "Metastatic staging" },
            { id: "b", text: "Early lesion assessment when considering local excision (T1 vs T2)" },
            { id: "c", text: "Replacing pelvic MRI in all cases" },
            { id: "d", text: "Assessing liver metastasis" }
          ],
          answerId: "b",
          explanation: "EUS is most useful for early lesions and depth stratification for local excision decisions; MRI is the mainstay for locally advanced assessment."
        },
        {
          id: "rc-q6",
          question: "Local excision (TAMIS/TEM) is MOST appropriate for:",
          choices: [
            { id: "a", text: "T3N+ low rectal cancer" },
            { id: "b", text: "Carefully selected T1N0 lesion with favorable features" },
            { id: "c", text: "T2 lesion in any location" },
            { id: "d", text: "Any tumor with threatened CRM" }
          ],
          answerId: "b",
          explanation: "Local excision is for select T1 tumors (favorable histology, no nodal risk signals). T2+ generally needs TME resection."
        },
        {
          id: "rc-q7",
          question: "Which operation is indicated when sphincter/levator involvement prevents sphincter preservation?",
          choices: [
            { id: "a", text: "LAR" },
            { id: "b", text: "APR" },
            { id: "c", text: "Right hemicolectomy" },
            { id: "d", text: "Transverse colectomy" }
          ],
          answerId: "b",
          explanation: "APR is indicated when oncologic clearance requires removing sphincter complex (very low tumors, levator/sphincter involvement)."
        },
        {
          id: "rc-q8",
          question: "Main goal of neoadjuvant therapy in locally advanced rectal cancer is:",
          choices: [
            { id: "a", text: "Avoid all surgery always" },
            { id: "b", text: "Improve local control and increase likelihood of negative CRM/R0 resection" },
            { id: "c", text: "Replace biopsy" },
            { id: "d", text: "Treat only anemia" }
          ],
          answerId: "b",
          explanation: "Neoadjuvant therapy improves local control and helps achieve negative CRM/R0 resection, reducing local recurrence risk."
        },
        {
          id: "rc-q9",
          question: "Total Neoadjuvant Therapy (TNT) refers to:",
          choices: [
            { id: "a", text: "Radiation only before surgery" },
            { id: "b", text: "Delivering systemic chemotherapy and radiation before surgery as a planned sequence" },
            { id: "c", text: "Chemotherapy only after surgery" },
            { id: "d", text: "Immediate APR for all tumors" }
          ],
          answerId: "b",
          explanation: "TNT = systemic chemotherapy given preoperatively (with radiation as part of total neoadjuvant plan), improving delivery/compliance and response."
        },
        {
          id: "rc-q10",
          question: "Baseline CEA in rectal cancer is mainly used for:",
          choices: [
            { id: "a", text: "Diagnosis confirmation" },
            { id: "b", text: "Staging T depth" },
            { id: "c", text: "Prognosis and surveillance trend monitoring" },
            { id: "d", text: "Replacing MRI" }
          ],
          answerId: "c",
          explanation: "CEA is not diagnostic alone; it’s useful for baseline prognostic stratification and follow-up trends."
        },
        {
          id: "rc-q11",
          question: "Most important factor MRI provides that guides neoadjuvant decisions and local recurrence risk is:",
          choices: [
            { id: "a", text: "Gallstones" },
            { id: "b", text: "Circumferential resection margin (CRM) relationship" },
            { id: "c", text: "Appendix diameter" },
            { id: "d", text: "Pancreatic duct size" }
          ],
          answerId: "b",
          explanation: "CRM status on MRI is a major determinant of local recurrence risk and is used to plan neoadjuvant therapy."
        },
        {
          id: "rc-q12",
          question: "The best statement about “watch-and-wait” is:",
          choices: [
            { id: "a", text: "It is standard for all rectal cancers" },
            { id: "b", text: "It is acceptable only in structured programs after clinical complete response with intensive surveillance" },
            { id: "c", text: "It replaces staging" },
            { id: "d", text: "It is used only for Stage IV disease" }
          ],
          answerId: "b",
          explanation: "Watch-and-wait is a specialized strategy for cCR after neoadjuvant therapy and requires strict follow-up protocols."
        },
        {
          id: "rc-q13",
          question: "Distant metastatic staging for rectal cancer is primarily done with:",
          choices: [
            { id: "a", text: "CT chest/abdomen/pelvis" },
            { id: "b", text: "Pelvic MRI only" },
            { id: "c", text: "Barium enema only" },
            { id: "d", text: "Ultrasound thyroid" }
          ],
          answerId: "a",
          explanation: "CT CAP evaluates distant disease; pelvic MRI is for local staging."
        },
        {
          id: "rc-q14",
          question: "Which is the most classic reason rectal cancers recur locally if surgery is inadequate?",
          choices: [
            { id: "a", text: "Lack of serosa in colon" },
            { id: "b", text: "Failure to remove mesorectum intact (poor TME) / positive CRM" },
            { id: "c", text: "Too much proximal margin" },
            { id: "d", text: "High CEA alone" }
          ],
          answerId: "b",
          explanation: "Local recurrence is driven by mesorectal disease and CRM involvement; poor TME and positive CRM increase recurrence."
        },
        {
          id: "rc-q15",
          question: "A rectal tumor is very low and invades sphincter complex. Most appropriate operation is:",
          choices: [
            { id: "a", text: "LAR with coloanal anastomosis always" },
            { id: "b", text: "APR" },
            { id: "c", text: "Right hemicolectomy" },
            { id: "d", text: "Local excision" }
          ],
          answerId: "b",
          explanation: "Sphincter invasion generally requires APR for oncologic clearance."
        },
        {
          id: "rc-q16",
          question: "Which surveillance timing is most board-appropriate after curative rectal cancer treatment?",
          choices: [
            { id: "a", text: "CEA yearly only" },
            { id: "b", text: "H&P + CEA q3–6 months for 2 years, then q6 months until year 5" },
            { id: "c", text: "PET-CT monthly" },
            { id: "d", text: "No surveillance needed if margins negative" }
          ],
          answerId: "b",
          explanation: "High-yield schedule: closer follow-up in years 1–2, then spaced to year 5."
        },
        {
          id: "rc-q17",
          question: "Colonoscopy surveillance after curative resection (if pre-op colonoscopy complete) is typically:",
          choices: [
            { id: "a", text: "6 weeks post-op" },
            { id: "b", text: "1 year post-op, then 3 years, then every 5 years if normal" },
            { id: "c", text: "Every month" },
            { id: "d", text: "Only if symptoms" }
          ],
          answerId: "b",
          explanation: "Common board timing: 1 year, then 3 years, then 5-year intervals if normal."
        },
        {
          id: "rc-q18",
          question: "Rectal cancer with unresectable distant metastases and asymptomatic primary tumor: initial management is usually:",
          choices: [
            { id: "a", text: "Immediate rectal resection" },
            { id: "b", text: "Systemic therapy; local intervention only if symptoms" },
            { id: "c", text: "APR for all" },
            { id: "d", text: "Radiation only for all" }
          ],
          answerId: "b",
          explanation: "Stage IV unresectable disease is systemic-first; surgery is for palliation/complications."
        },
        {
          id: "rc-q19",
          question: "Which factor most strongly drives the need for neoadjuvant therapy in rectal cancer?",
          choices: [
            { id: "a", text: "Tumor located anywhere in colon" },
            { id: "b", text: "MRI showing threatened/positive CRM and/or T3/T4 or N+ disease" },
            { id: "c", text: "Normal CEA" },
            { id: "d", text: "Age <40 alone" }
          ],
          answerId: "b",
          explanation: "Local staging (CRM/T stage/nodes) drives neoadjuvant decisions."
        },
        {
          id: "rc-q20",
          question: "Best board statement about distal margin vs CRM in rectal cancer is:",
          choices: [
            { id: "a", text: "Only distal margin matters" },
            { id: "b", text: "CRM status is a major determinant of local recurrence; goal is negative CRM with intact TME specimen" },
            { id: "c", text: "Margins are irrelevant if chemo given" },
            { id: "d", text: "CRM cannot be assessed pre-op" }
          ],
          answerId: "b",
          explanation: "CRM is critical; MRI helps predict it preoperatively and neoadjuvant therapy helps improve clearance."
        }
      ]
    }
  ]
}
];