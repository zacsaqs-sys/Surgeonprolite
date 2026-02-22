import type { Topic } from "../types/content";

export const TOPICS: Topic[] = [
  {
    id: "esophageal-cancer",
    title: "ESOPHAGEAL CANCER (MASTER REVIEW)",
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
    title: "BREAST CANCER — (MASTER REVIEW)",
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
    title: "GASTRIC CANCER (MASTER REVIEW)",
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
  title: "COLON CANCER (MASTER REVIEW)",
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
  title: "RECTAL CANCER (MASTER REVIEW)",
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