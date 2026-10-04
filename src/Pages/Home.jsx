import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Skill from '../Components/Skill'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

import { useEffect, useState } from "react";

const Home = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Work />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
