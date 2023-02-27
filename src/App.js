import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
