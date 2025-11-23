import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/contact/Contact";
import Myskills from "../components/Myskills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <div id="home">
      <Banner />
      <About />
      <Myskills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
