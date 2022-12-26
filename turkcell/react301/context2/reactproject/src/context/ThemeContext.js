import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContext;
