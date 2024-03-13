import NavBar from "./NavBar";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import { useLottie } from "lottie-react";
import loading from "./loading.json";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

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
          {/* <NavBar setPage={setPage} page={page} />
          {page == 1 && <Home />}
          {page == 2 && <About />}

          {page == 3 && <Experience />}
          {page == 4 && <Contact />} */}
          <NavBar />
          <Home />
          <About />
          <Experience />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
