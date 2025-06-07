import "./App.css";

import Services from "./components/Services";
import GlobalAmbitions from "./components/GlobalAmbitions";
import DreamUniversity from "./components/DreamUniversity";
import TestimonialCarousel from "./components/TestimonialCarousel";
import KCUpdates from "./components/KCUpdates";
import SubscribeSection from "./components/SubscribeSection";
import Header from "./components/Header";
import Body from "./components/Body";
import WebinarsEvents from "./components/WebinarsEvents";

function App() {
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
