import React from "react";
import { useContext } from "react";
import LangContext from "./context/LangContext";
import ThemeContext from "./context/ThemeContext";

function ChangeTheme() {
  const data = useContext(ThemeContext);
  const lang = useContext(LangContext);

  return (
    <div>
      <button
        onClick={() => data.setTheme(data.theme === "dark" ? "light" : "dark")}
      >
        Change Theme:{data.theme}
      </button>
      <div>
        <button onClick={() => lang.setLang("tr")}>"tr"</button>
        <button onClick={() => lang.setLang("eng")}>"eng"</button>
        <button onClick={() => lang.setLang("fr")}>"fr</button>
        <p>active lang:{lang.lang}</p>
      </div>
    </div>
  );
}

export default ChangeTheme;
