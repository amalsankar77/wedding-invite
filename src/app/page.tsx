import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import MusicPlayer from "./components/MusicPlayer";
import InitialReveal from "./components/initialreveal";

export default function Home() {
  return (
    <main>
      <InitialReveal />
      <Navbar />
      <Hero />
      <Story />
      <Gallery />
      <Events />
      <Venue />
      <RSVP />
      <MusicPlayer />
    </main>
  );
}