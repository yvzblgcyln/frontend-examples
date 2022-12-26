import { useTheme } from "../context/ThemeContext";

function Header() {
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

export default Header;
