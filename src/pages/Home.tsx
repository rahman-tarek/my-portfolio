import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/contact/Contact";
import Myskills from "../components/Myskills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Myskills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
