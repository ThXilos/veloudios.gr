import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./pages/Navigation";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import ScrollButton from "./component/ScrollButton";

function App() {
  const [language, setLanguage] = useState(false);
  const handleSelection = () => {
    setLanguage(!language);
  };
  return (
    <div>
      <header>
        <Navigation language={language} handleSelection={handleSelection} />
        <Routes>
          <Route exact path="/" element={<Main lang={language} />} />
          <Route exact path="/about" element={<About lang={language} />} />
          <Route
            exact
            path="/services"
            element={<Services lang={language} />}
          />
        </Routes>
        <Footer lang={language} />
        <ScrollButton />
      </header>
      <main></main>
    </div>
  );
}

export default App;
