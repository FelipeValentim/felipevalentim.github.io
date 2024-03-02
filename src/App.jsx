import Header from "./NavBar";
import "./App.css";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
