import Header from "./NavBar";
import "./App.css";
import About from "./About";
import Home from "./Home";
import { useLottie } from "lottie-react";
import loading from "./loading.json";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const Loading = () => {
    const options = {
      animationData: loading,
      loop: false,
      onComplete: () => setIsLoading(false),
    };

    const { View } = useLottie(options);

    return <div className="loading">{View}</div>;
  };

  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="fade">
          <Header />
          <Home />
          <About />
        </div>
      )}
    </div>
  );
}

export default App;
