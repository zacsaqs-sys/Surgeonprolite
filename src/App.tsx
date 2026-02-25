// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import { TOPICS } from "./data/topics";
import { TopicList } from "./components/TopicList";
import { TopicReader } from "./components/TopicReader";
import { applyThemeVars } from "./theme";

type ThemeId = "blue" | "paper" | "forest" | "surgical";

type ThemePreset = {
  label: string;
  icon: string;
  vars: Record<string, string>;
};

const THEME_PRESETS: Record<ThemeId, ThemePreset> = {
  blue: {
    label: "Blue",
    icon: "🌊",
    vars: {
      "--bg": "#06121f",
      "--card-bg": "#0c1b2b",
      "--card-text": "#eaf2ff",
      "--panel": "#0a2036",
      "--panel-hover": "#0d2a45",
      "--border": "rgba(255,255,255,0.14)",
      "--accent": "#0b2b55",
      "--accent-text": "#ffffff",

      /* ⭐ background glow */
      "--bg-glow-1": "rgba(0,120,255,0.12)",
      "--bg-glow-2": "rgba(0,200,170,0.07)",
    },
  },

  paper: {
    label: "Paper",
    icon: "📄",
    vars: {
      "--bg": "#e9edf3",
      "--card-bg": "#ffffff",
      "--card-text": "#111111",
      "--panel": "#f3f4f6",
      "--panel-hover": "#e5e7eb",
      "--border": "rgba(0,0,0,0.12)",
      "--accent": "#111827",
      "--accent-text": "#ffffff",

      /* ⭐ soft reading glow */
      "--bg-glow-1": "rgba(0,0,0,0.05)",
      "--bg-glow-2": "rgba(0,0,0,0.03)",
    },
  },

  forest: {
    label: "Forest",
    icon: "🌲",
    vars: {
      "--bg": "#0b1410",
      "--card-bg": "#122019",
      "--card-text": "#e8fff3",
      "--panel": "#0f1a14",
      "--panel-hover": "#14251c",
      "--border": "rgba(255,255,255,0.14)",
      "--accent": "#0b3a2a",
      "--accent-text": "#ffffff",

      /* ⭐ calm green depth */
      "--bg-glow-1": "rgba(0,200,170,0.08)",
      "--bg-glow-2": "rgba(0,120,255,0.06)",
    },
  },

  surgical: {
    label: "Surgical",
    icon: "🩺",
    vars: {
      "--bg": "#0a1a1a",
      "--card-bg": "#102626",
      "--card-text": "#e7ffff",
      "--panel": "#0e2121",
      "--panel-hover": "#153030",
      "--border": "rgba(255,255,255,0.14)",
      "--accent": "#0b3b3b",
      "--accent-text": "#ffffff",

      /* ⭐ operating-room lighting effect */
      "--bg-glow-1": "rgba(0,255,220,0.10)",
      "--bg-glow-2": "rgba(0,150,120,0.08)",
    },
  },
};

const THEME_STORAGE_KEY = "surgeonpro_theme";

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
    return saved && saved in THEME_PRESETS ? saved : "blue";
  });

  const selectedTopic = useMemo(() => {
    if (!selectedTopicId) return null;
    return TOPICS.find((t) => t.id === selectedTopicId) ?? null;
  }, [selectedTopicId]);

  useEffect(() => {
    const preset = THEME_PRESETS[themeId];
    applyThemeVars(preset.vars);
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  }, [themeId]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--card-text)" }}>
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--panel)",
          borderBottom: "1px solid var(--border)",
          padding: "10px 14px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ fontWeight: 900, letterSpacing: 0.4 }}>SURGEON LITE</div>
          <div style={{ opacity: 0.75, fontSize: 13 }}>
            {selectedTopic ? selectedTopic.title : "Topics"}
          </div>
        </div>

        {/* Theme picker */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(Object.keys(THEME_PRESETS) as ThemeId[]).map((id) => {
            const p = THEME_PRESETS[id];
            const active = id === themeId;
            return (
              <button
                key={id}
                className="btn"
                onClick={() => setThemeId(id)}
                style={{
                  borderColor: active ? "rgba(255,255,255,0.35)" : "var(--border)",
                }}
                title={p.label}
              >
                {p.icon} {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div style={{ padding: 14 }}>
        {!selectedTopic ? (
          <TopicList topics={TOPICS} onOpenTopic={(topicId) => setSelectedTopicId(topicId)} />
        ) : (
          <TopicReader topic={selectedTopic} onBack={() => setSelectedTopicId(null)} />
        )}
      </div>
    </div>
  );
}

export default App;