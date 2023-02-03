import "./App.css";
import Navigation from "./pages/Navigation";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
function App() {
  return (
    <div>
      <header>
        <Navigation />
        <Hero />
        <Footer />
      </header>
      <main></main>
    </div>
  );
}

export default App;
