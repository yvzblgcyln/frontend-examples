import "./App.css"
import Content from "./pages/content/content";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
