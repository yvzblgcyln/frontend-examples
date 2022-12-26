import { createContext, useState, useEffect } from "react";
const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [lang3, setlang3] = useState(localStorage.getItem("lang3"));
  useEffect(() => {
    localStorage.setItem("lang3", lang3);
  }, [lang3]);

  const value = { lang, setLang };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
export default LangContext;
