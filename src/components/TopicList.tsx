// src/components/TopicList.tsx
import type { Topic } from "../types/content";

export function TopicList({
  topics,
  onOpenTopic,
}: {
  topics: Topic[];
  onOpenTopic: (topicId: string) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      }}
    >
      {topics.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onOpenTopic(t.id)}
          style={{
            textAlign: "left",
            cursor: "pointer",
            width: "100%",
            padding: 14,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "var(--card-bg)",
            color: "var(--card-text)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 6 }}>
            {t.title}
          </div>
          {t.subtitle ? (
            <div style={{ opacity: 0.8, fontSize: 13 }}>{t.subtitle}</div>
          ) : (
            <div style={{ opacity: 0.6, fontSize: 13 }}>
              {t.sections?.length ?? 0} sections
            </div>
          )}
        </button>
      ))}
    </div>
  );
}