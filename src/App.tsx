import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentStatus from "./components/CurrentStatus";
import Problem from "./components/Problem";
import NovaSection from "./components/NovaSection";
import SystemArchitecture from "./components/SystemArchitecture";
import MedisSection from "./components/MedisSection";
import TechnologyStack from "./components/TechnologyStack";
import CurrentProgress from "./components/CurrentProgress";
import Recognition from "./components/Recognition";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <CurrentStatus />
        <Recognition />
        <Problem />
        <NovaSection />
        <SystemArchitecture />
        <MedisSection />
        <TechnologyStack />
        <CurrentProgress />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
