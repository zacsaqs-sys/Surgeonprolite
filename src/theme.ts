// src/theme.ts
export type ThemeVars = Record<string, string>;

export function setThemeVariable(name: string, value: string) {
  // Apply to :root so it affects the whole app
  document.documentElement.style.setProperty(name, value);
}

export function applyThemeVars(vars: ThemeVars) {
  for (const [k, v] of Object.entries(vars)) {
    setThemeVariable(k, v);
  }
}