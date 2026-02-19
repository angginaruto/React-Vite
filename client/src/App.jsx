import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About_Me from "./components/About_Me";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About_Me />
        <Project />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
