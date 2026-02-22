import { useMemo, useState } from "react";
import type { Topic } from "../types/content";
import MySavedImages from "../components/MySavedImages";

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

  const section = topic.sections[sectionIndex];

  // Optional: when you change section, you can keep reveals (current behavior).
  // If you want to RESET reveals per section switch, uncomment the reset line below.
  // useEffect(() => setRevealed({}), [sectionIndex]);

  const revealKeyPrefix = useMemo(() => `${topic.id}::${section.id}::`, [topic.id, section.id]);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <button className="btn" onClick={onBack} style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <h1 style={{ margin: "6px 0" }}>{topic.title}</h1>
      <MySavedImages topicId={topic.id} />
      {topic.subtitle ? (
        <p style={{ marginTop: 0, opacity: 0.85 }}>{topic.subtitle}</p>
      ) : null}

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
        {topic.sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSectionIndex(i)}
            className={i === sectionIndex ? "chip chipActive" : "chip"}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Section Card */}
      <div className="card">
        <h2 style={{ marginTop: 0 }}>{section.title}</h2>

        {section.content.length > 0 ? (
          <ul style={{ lineHeight: 1.65 }}>
            {section.content.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        ) : (
          <p style={{ opacity: 0.7 }}>No notes in this section yet.</p>
        )}

        {/* MCQs */}
        {section.qna.length > 0 ? (
          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ marginBottom: 8, marginTop: 0 }}>MCQs</h3>

              {/* Optional utility buttons */}
              <button
                className="btn"
                style={{ marginBottom: 8 }}
                onClick={() => {
                  const next: Record<string, boolean> = {};
                  for (const q of section.qna) next[revealKeyPrefix + q.id] = true;
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
                  for (const q of section.qna) delete next[revealKeyPrefix + q.id];
                  setRevealed(next);
                }}
              >
                Hide All
              </button>
            </div>

            {section.qna.map((q) => {
              const key = revealKeyPrefix + q.id;
              const isRevealed = !!revealed[key];

              return (
                <div key={q.id} className="card" style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 800 }}>{q.question}</div>

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
                    <div style={{ marginTop: 10, fontSize: 14 }}>
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
    </div>
  );
}