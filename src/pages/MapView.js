// src/pages/MapView.js
import React, { useState, useEffect } from "react";
import mapImage from "../assets/map-overview.png";

export default function MapView() {
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const directionSteps = {
    Gate: [
      "Head straight past security.",
      "Turn right after Duty Free.",
      "Gate B12 is on your left."
    ],
    Lounge: [
      "From security, take the escalator up.",
      "Follow signs to VIP Lounge near Gate A5."
    ],
    Shop: [
      "Walk past the food court.",
      "Shops are in Zone C near Gate C3."
    ],
    PrayerRoom: [
      "Use the elevator near Gate B10.",
      "Prayer Room is on the second floor in Terminal B."
    ],
  };

  const speak = (text) => {
    if (!voiceEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleDirection = () => {
    if (destination && directionSteps[destination]) {
      const steps = directionSteps[destination];
      setDirections(steps);
      setCurrentStep(0);
      speak(`Starting navigation to ${destination}. ${steps[0]}`);
    }
  };

  const handleNextStep = () => {
    if (currentStep < directions.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      speak(directions[next]);
    }
  };

  const handleRepeat = () => {
    if (directions.length > 0) {
      speak(directions[currentStep]);
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧭 Find Your Way</h2>
      <p>Select a destination and follow step-by-step directions:</p>

      {/* Voice Toggle */}
      <label style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={voiceEnabled}
          onChange={() => setVoiceEnabled(!voiceEnabled)}
          style={{ marginRight: "8px" }}
        />
        Enable Voice Instructions
      </label>

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px",
          width: "100%",
          maxWidth: "300px"
        }}
      >
        <option value="">-- Choose Destination --</option>
        <option value="Gate">Nearest Gate</option>
        <option value="Lounge">Lounge</option>
        <option value="Shop">Shops</option>
        <option value="PrayerRoom">Prayer Room</option>
      </select>

      <button
        onClick={handleDirection}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Get Directions
      </button>

      {directions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Step {currentStep + 1} of {directions.length}</h3>
          <p style={{ fontSize: "18px" }}>{directions[currentStep]}</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {currentStep < directions.length - 1 && (
              <button
                onClick={handleNextStep}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Next Step
              </button>
            )}

            <button
              onClick={handleRepeat}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              🔊 Repeat
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3>📍 Airport Map Overview</h3>
        <img
          src={mapImage}
          alt="Airport Map Overview"
          style={{
            width: "100%",
            maxWidth: "600px",
            marginTop: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
      </div>
    </div>
  );
}