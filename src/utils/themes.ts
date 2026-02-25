// src/theme.ts

export function setThemeVariable(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}