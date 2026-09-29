import { createContext, useContext, useEffect, useState } from "react";
import { content } from "./content.js";

const LangContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "hr" || saved === "en") return saved;
  } catch { /* localStorage nije dostupan */ }
  return (navigator.language || "").toLowerCase().startsWith("hr") ? "hr" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
