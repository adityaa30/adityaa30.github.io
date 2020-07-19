import React from "react";

export interface Theme {
  accent: string;
  primaryDark: string;
  primary: string;
  textColor: string;
}

export const themes = [
  {
    // Dark Blue
    accent: "#1c2833",
    primary: "#aed6f1",
    primaryDark: "#3498db",
    textColor: "#f5f5f5"
  },
  {
    // Dark Green
    accent: "#1d1f21",
    primary: "#2bbc8a",
    primaryDark: "#117A65",
    textColor: "#f5f5f5"
  }
];

export const ThemeContext = React.createContext(themes[0]);
