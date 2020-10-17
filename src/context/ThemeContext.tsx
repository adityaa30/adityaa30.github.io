import React from "react";

export interface Theme {
  "--color-accent": string;
  "--color-primary": string;
  "--color-primary-dark": string;
  "--color-text": string;
}

const themes = [
  {
    // Dark Blue
    "--color-accent": "#1c2833",
    "--color-primary": "#aed6f1",
    "--color-primary-dark": "#3498db",
    "--color-text": "#f5f5f5"
  },
  {
    // Dark Green
    "--color-accent": "#1d1f21",
    "--color-primary": "#2bbc8a",
    "--color-primary-dark": "#117A65",
    "--color-text": "#f5f5f5"
  }
  /* {
    // Light Blue
    "--color-accent": "#fdfefe",
    "--color-primary": "#3498db",
    "--color-primary-dark": "#2E86C1",
    "--color-text": "#1C2833"
  } */
];

export const THEMES = {
  DARK_BLUE: 0,
  DARK_GREEN: 1
  //   LIGHT_BLUE: 2
};

let currentThemeIdx = THEMES.DARK_GREEN;

export function applyTheme(theme: number) {
  currentThemeIdx = theme;
  for (let [key, value] of Object.entries(themes[theme])) {
    document.documentElement.style.setProperty(key, value);
  }
}

export function pickNextTheme() {
  currentThemeIdx = (currentThemeIdx + 1) % themes.length;
  applyTheme(currentThemeIdx);
}

export const ThemeContext = React.createContext(themes[0]);
