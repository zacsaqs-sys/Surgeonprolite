import type { Topic } from "../types/content";

export function TopicList({
  topics,
  onOpen
}: {
  topics: Topic[];
  onOpen: (topic: Topic) => void;
}) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h1 style={{ marginBottom: 8 }}>Surgeon Pro Lite</h1>

      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Choose a topic to read.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => onOpen(t)}
            style={{
              textAlign: "left",
              padding: 14,
              borderRadius: 12,
              border: "1px solid #ddd",
              background: "white",
              color: "#111",
              cursor: "pointer"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {t.title}
            </div>

            {t.subtitle && (
              <div style={{ marginTop: 4, opacity: 0.75 }}>
                {t.subtitle}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}