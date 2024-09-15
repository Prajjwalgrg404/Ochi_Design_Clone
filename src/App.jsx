import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
