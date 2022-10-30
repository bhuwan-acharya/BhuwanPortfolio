import React, { useState } from "react";
import { About, Footer, Header, Testimonial, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("app__loader");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4200);
  }

  return (
    !loading && (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
      </div>
    )
  );
};

export default App;
