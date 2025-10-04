import React from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      className="p-2 rounded-full border border-gray-700"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
