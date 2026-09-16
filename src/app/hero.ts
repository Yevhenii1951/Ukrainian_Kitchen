import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: { DEFAULT: "#8e2b2b", foreground: "#ffffff" },
        secondary: { DEFAULT: "#e8a33d", foreground: "#2a2018" },
        focus: "#8e2b2b"
      }
    },
    dark: {
      colors: {
        primary: { DEFAULT: "#c7665e", foreground: "#ffffff" },
        secondary: { DEFAULT: "#e8a33d", foreground: "#2a2018" },
        focus: "#c7665e"
      }
    }
  }
});