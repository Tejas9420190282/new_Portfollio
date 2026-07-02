import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: "#0a0f1e", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />   
      <Experience />  
      <Projects />  
      <Skills />  
      <Education />
      <Contact /> 
      <Footer />  {/* */} 
    </div>
  );
}