import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./pages/Navigation";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
function App() {
  return (
    <div>
      <header>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </header>
      <main></main>
    </div>
  );
}

export default App;
