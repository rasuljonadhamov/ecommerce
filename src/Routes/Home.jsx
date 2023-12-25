import { useState } from "react";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";

function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div>
      <Hero isDarkMode={isDarkMode} />
      <Featured isDarkMode={isDarkMode} />
    </div>
  );
}

export default Home;
