import { LangProvider } from "./i18n.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Rooms from "./components/Rooms.jsx";
import Houses from "./components/Houses.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Location from "./components/Location.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Houses />
        <Services />
        <Gallery />
        <Location />
        <Booking />
      </main>
      <Footer />
    </LangProvider>
  );
}
