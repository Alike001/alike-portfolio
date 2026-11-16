import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Awards />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
