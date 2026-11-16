import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
