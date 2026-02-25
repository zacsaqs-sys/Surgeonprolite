import { useEffect, useMemo, useState } from "react";
import AbgTrainer from "../components/AbgTrainer";
import type { Topic } from "../types/content";
import MySavedImages from "../components/MySavedImages";
import TokyoGuidelineTool from "../components/TokyoGuidelineTool";

type Choice = { id: string; text: string };

type QnaItem = {
  id: string;
  question: string;
  choices: Choice[];
  answerId: string;
  explanation: string;
};

type McqItem = {
  id: string;
  question: string;
  options: Choice[];
  answerId: string;
  explanation: string;
};

type AnySection = Topic["sections"][number] & {
  content?: string[];
  qna?: QnaItem[];
  mcqs?: McqItem[];
};

function stripLeadingNumbering(title: string) {
  // removes: "1) ", "1. ", "1 - ", "1: " etc.
  return title.replace(/^\s*\d+\s*[\)\.\-:]\s*/g, "").trim();
}

function renderContentLines(lines: string[]) {
  return (
    <div style={{ lineHeight: 1.65, color: "#111" }}>
      {lines.map((raw, idx) => {
        const line = (raw ?? "").trimEnd();

        if (line.trim() === "") {
          return <div key={idx} style={{ height: 10 }} />;
        }

        return (
          <p
            key={idx}
            style={{
              margin: "0 0 6px 0",
              whiteSpace: "pre-wrap",
              color: "#111"
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

export function TopicReader({
  topic,
  onBack
}: {
  topic: Topic;
  onBack: () => void;
}) {
  const [sectionIndex, setSectionIndex] = useState(0);

  // Track which MCQs are revealed (per topic+section)
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const sections = useMemo(
    () => (topic.sections ?? []) as AnySection[],
    [topic.sections]
  );

  // Clamp section index if topic changes or section count changes
  useEffect(() => {
    setSectionIndex((i) => {
      const max = Math.max(0, sections.length - 1);
      return Math.min(i, max);
    });
  }, [topic.id, sections.length]);

  // Always pick a safe section (avoids crashes)
  const section: AnySection | undefined = sections[sectionIndex] ?? sections[0];

  const revealKeyPrefix = useMemo(() => {
    const sid = section?.id ?? "no-section";
    return `${topic.id}::${sid}::`;
  }, [topic.id, section?.id]);

  // Normalize Q&A list so renderer works for both formats
  const qList: QnaItem[] = useMemo(() => {
    if (!section) return [];

    if (Array.isArray(section.qna)) return section.qna;

    if (Array.isArray(section.mcqs)) {
      return section.mcqs.map((m) => ({
        id: m.id,
        question: m.question,
        choices: m.options,
        answerId: m.answerId,
        explanation: m.explanation
      }));
    }

    return [];
  }, [section?.qna, section?.mcqs, section]);

  const contentLines = useMemo(() => {
    if (!section) return [];
    return Array.isArray(section.content) ? section.content : [];
  }, [section]);

  // Debug logs (stable)
  useEffect(() => {
    console.log("OPEN TOPIC:", topic.id);
    console.log("SECTIONS COUNT:", sections.length);
    if (!section) {
      console.log("No section resolved.");
      return;
    }
    console.log("CURRENT SECTION:", section.id, section.title);
  }, [topic.id, sections.length, section?.id]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
      <button className="btn" onClick={onBack} style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <h1 style={{ margin: "6px 0" }}>{topic.title}</h1>
      <MySavedImages topicId={topic.id} />

      {topic.subtitle ? (
        <p style={{ marginTop: 0, opacity: 0.85 }}>{topic.subtitle}</p>
      ) : null}

      {/* ✅ TOOLS ON TOP (like ABG) */}
      <AbgTrainer />

      {/* ✅ TOKYO GUIDELINE TOOL ALWAYS ON TOP */}
      <div
        className="card"
        style={{
          padding: 12,
          margin: "12px 0",
          background: "#fff",
          color: "#111"
        }}
      >
        <TokyoGuidelineTool />
      </div>

      {/* If no sections, render safe fallback */}
      {!sections.length || !section ? (
        <div
          className="card"
          style={{
            padding: 14,
            marginTop: 12,
            background: "#fff",
            color: "#111"
          }}
        >
          <p style={{ margin: 0, opacity: 0.8 }}>
            No sections found for this topic. Check your <code>topics.ts</code> data.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px minmax(0, 1fr)",
            gap: 14,
            alignItems: "start"
          }}
        >
          {/* LEFT: Sections list */}
          <aside
            className="card"
            style={{
              position: "sticky",
              top: 12,
              padding: 12,
              maxHeight: "calc(100vh - 24px)",
              overflow: "auto",
              textAlign: "left",
              color: "#111",
              background: "#fff"
            }}
          >
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 10, color: "#111" }}>
              Sections ({sections.length})
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              {sections.map((s, i) => {
                const cleanTitle = stripLeadingNumbering(s.title);
                return (
                  <button
                    key={s.id}
                    onClick={() => setSectionIndex(i)}
                    className={i === sectionIndex ? "chip chipActive" : "chip"}
                    style={{
                      textAlign: "left",
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 12,
                      color: "#111"
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 13, color: "#111" }}>
                      {i + 1}. {cleanTitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT: Section content */}
          <main style={{ minWidth: 0 }}>
            {/* Prev/Next controls */}
            <div
              className="card"
              style={{
                padding: 12,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                flexWrap: "wrap",
                color: "#111",
                background: "#fff"
              }}
            >
              <button
                className="btn"
                onClick={() => setSectionIndex((i) => Math.max(0, i - 1))}
                disabled={sectionIndex === 0}
              >
                ◀ Prev
              </button>

              <div style={{ fontSize: 13, opacity: 0.75, color: "#111" }}>
                Section {sectionIndex + 1} / {sections.length}
              </div>

              <button
                className="btn"
                onClick={() => setSectionIndex((i) => Math.min(sections.length - 1, i + 1))}
                disabled={sectionIndex === sections.length - 1}
              >
                Next ▶
              </button>
            </div>

            <div className="card" style={{ textAlign: "left", color: "#111", background: "#fff" }}>
              <h2 style={{ marginTop: 0, color: "#111" }}>{section.title}</h2>

              {contentLines.length > 0 ? (
                renderContentLines(contentLines)
              ) : (
                <p style={{ opacity: 0.7, color: "#111" }}>
                  No notes in this section yet. (This section may still have MCQs below.)
                </p>
              )}

              {/* MCQs */}
              {qList.length > 0 ? (
                <div style={{ marginTop: 14, color: "#111" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <h3 style={{ marginBottom: 8, marginTop: 0, color: "#111" }}>MCQs</h3>

                    <button
                      className="btn"
                      style={{ marginBottom: 8 }}
                      onClick={() => {
                        const next: Record<string, boolean> = {};
                        for (const q of qList) next[revealKeyPrefix + q.id] = true;
                        setRevealed((prev) => ({ ...prev, ...next }));
                      }}
                    >
                      Reveal All
                    </button>

                    <button
                      className="btn"
                      style={{ marginBottom: 8 }}
                      onClick={() => {
                        const next: Record<string, boolean> = { ...revealed };
                        for (const q of qList) delete next[revealKeyPrefix + q.id];
                        setRevealed(next);
                      }}
                    >
                      Hide All
                    </button>
                  </div>

                  {qList.map((q) => {
                    const key = revealKeyPrefix + q.id;
                    const isRevealed = !!revealed[key];

                    return (
                      <div key={q.id} className="card" style={{ marginBottom: 12, background: "#fff", color: "#111" }}>
                        <div style={{ fontWeight: 800, color: "#111" }}>{q.question}</div>

                        <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
                          {q.choices.map((c) => (
                            <div
                              key={c.id}
                              style={{
                                padding: 8,
                                borderRadius: 10,
                                border: "1px solid rgba(0,0,0,0.08)",
                                background: "#fafafa",
                                color: "#111"
                              }}
                            >
                              <strong style={{ marginRight: 6 }}>{c.id.toUpperCase()}.</strong>
                              {c.text}
                            </div>
                          ))}
                        </div>

                        {!isRevealed ? (
                          <button
                            className="btn"
                            style={{ marginTop: 10 }}
                            onClick={() => setRevealed((prev) => ({ ...prev, [key]: true }))}
                          >
                            Reveal Answer
                          </button>
                        ) : (
                          <div style={{ marginTop: 10, fontSize: 14, color: "#111" }}>
                            <div>
                              ✅ <strong>Answer:</strong> {q.answerId.toUpperCase()}
                            </div>
                            <div style={{ marginTop: 6, opacity: 0.85 }}>
                              <strong>Rationale:</strong> {q.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>
              Tip: On smaller screens, consider widening the window; sidebar is sticky for fast navigation.
            </div>
          </main>
        </div>
      )}
    </div>
  );
}