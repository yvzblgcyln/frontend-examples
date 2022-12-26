import { useTheme } from "../context/ThemeContext";

function Button() {
  //const data = useContext(ThemeContext); >> data.theme / data.setTheme
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div>active theme: {theme} </div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        change theme
      </button>
    </div>
  );
}

export default Button;
