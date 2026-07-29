import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";

export default function App() {
  return (
    <>
      <Loader />
      <div className="bg-wash" />
      <div className="grid-overlay" />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Education />
      <FAQ />
      <Contact />
      <Footer />
      <ChatAssistant />
    </>
  );
}
