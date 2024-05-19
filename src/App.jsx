import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Kadaharan from "./components/Kadaharan";
import Rerencangan from "./components/Rerencangan";
import Lokasi from "./components/Lokasi";
import Footer from "./components/Footer";
import Video from "./components/Video";
import WikipediaInfo from "./components/WikipediaInfo";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="kadaharan">
          <Kadaharan />
        </div>
        <div id="video">
          <Video />
        </div>
        <div id="lokasi">
          <Lokasi />
        </div>
        <div id="rerencangan">
          <Rerencangan />
        </div>
        <div id="wikipedia">
          <WikipediaInfo />
        </div>
        <div id="AboutUs">
          <AboutUs />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
