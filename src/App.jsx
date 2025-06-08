import "./App.css";

import Services from "./components/Services/Services";
import GlobalAmbitions from "./components/GlobalAmbitions/GlobalAmbitions";
import DreamUniversity from "./components/DreamUniversity/DreamUniversity";
import TestimonialCarousel from "./components/TestimonialCarousel/TestimonialCarousel";
import KCUpdates from "./components/KCUpdates/KCUpdates";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import WebinarsEvents from "./components/WebinarsEvents/WebinarsEvents";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Force top on load
  }, []);
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
      <Services />
      <GlobalAmbitions />
      <DreamUniversity />
      <WebinarsEvents />
      <TestimonialCarousel />
      <KCUpdates />
      <SubscribeSection />
    </div>
  );
}

export default App;
