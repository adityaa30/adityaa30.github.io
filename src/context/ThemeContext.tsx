import React from "react";

export interface Theme {
  darkest: string;
  dark: string;
  light: string;
  lightest: string;
}

export const themes = {
  blue: {
    darkest: "#154360",
    dark: "#1F618D",
    light: "#3498DB",
    lightest: "#AED6F1"
  } as Theme
};

export const ThemeContext = React.createContext(themes.blue);
