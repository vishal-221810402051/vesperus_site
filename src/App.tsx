import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundWatermark from "./components/layout/BackgroundWatermark";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import FounderPage from "./pages/FounderPage";
import HomePage from "./pages/HomePage";
import InsightsPage from "./pages/InsightsPage";
import MedisPage from "./pages/MedisPage";
import NotFoundPage from "./pages/NotFoundPage";
import NovaPage from "./pages/NovaPage";
import NovaScPage from "./pages/NovaScPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden bg-background-primary text-text-primary">
        <BackgroundWatermark />
        <ScrollToTop />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/nova" element={<NovaPage />} />
            <Route path="/nova-sc" element={<NovaScPage />} />
            <Route path="/medis" element={<MedisPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
