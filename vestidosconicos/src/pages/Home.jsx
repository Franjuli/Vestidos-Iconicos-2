import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import IntroText from "../components/IntroText";
import Categories from "../components/Categories";
import Contact from "./Contact";
import Page2 from "./Page2";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showPage2, setShowPage2] = useState(false);

  function handleHome() {
    setShowContact(false);
    setShowPage2(false);
  }

  function handlePage2() {
    setShowContact(false);
    setShowPage2(true);
  }

  return (
    <div className="home">
      <Header
        onContactClick={() => setShowContact(!showContact)}
        onHomeClick={handleHome}
        onPage2Click={handlePage2}
      />

      <SearchBar />

      {!showContact && !showPage2 && (
        <>
          <Banner />
          <IntroText />
          <Categories />
        </>
      )}

      {showContact && <Contact />}

      {showPage2 && <Page2 />}

      <Footer />

    </div>
  );
}
