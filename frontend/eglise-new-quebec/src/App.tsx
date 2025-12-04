import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Events from "./components/Events";
import Ministries from "./components/Ministries";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <Ministries />
        <Staff />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}