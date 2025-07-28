// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Accessibility from "./pages/Accessibility";
import MapView from "./pages/MapView";
import Alerts from "./pages/LiveAlerts";
import QueueManager from "./pages/QueueManager";
import SmartGuide from "./pages/SmartGuide";
import JourneySteps from "./pages/JourneySteps";
import FinalSummary from "./pages/FinalSummary";
import StartJourney from "./pages/StartJourney";
import Medical from "./pages/MedicalCheck";

import "./index.css";

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Force redirect to /start on root path
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/start", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="/start" element={<StartJourney />} />

        <Route path="/home" element={<Home />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/queue" element={<QueueManager />} />
          <Route path="/smartguide" element={<SmartGuide />} />
          <Route path="/journey" element={<JourneySteps />} />
          <Route path="/summary" element={<FinalSummary />} />
          {/* Catch-all fallback (optional) */}
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
