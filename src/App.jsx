import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Project />
      <ContactMe />
      <SocialMedia />
    </div>
  );
}

export default App;
