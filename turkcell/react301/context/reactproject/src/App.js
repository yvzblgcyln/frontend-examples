import "./App.css";
import Container from "./component/Container";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
