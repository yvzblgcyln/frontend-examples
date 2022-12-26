import ChangeTheme from "./ChangeTheme";
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => (
  <div>
    <LangContextProvider>
      <ThemeContextProvider>
        <ChangeTheme />
      </ThemeContextProvider>
    </LangContextProvider>
  </div>
);

export default App;
