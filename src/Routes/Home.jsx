import { useState } from "react";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";

function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
      <Featured isDarkMode={isDarkMode} />
    </>
  );
}

export default Home;
