import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartJourney() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🛫 Welcome to Wayport!</h1>
      <p style={styles.subtext}>
        Your smart airport assistant to guide you through your journey.
      </p>

      <div style={styles.cardContainer}>
        <div
          style={styles.card}
          onClick={() => navigate("/preferences")}
        >
          <h3>Set Preferences</h3>
          <p>Tell us about your travel style and needs.</p>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/accessibility")}
        >
          <h3>Accessibility Options</h3>
          <p>Customize accessibility settings.</p>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/smartguide")}
        >
          <h3>Smart Guide</h3>
          <p>Your personal travel checklist and assistant.</p>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/map")}
        >
          <h3>Navigate Airport</h3>
          <p>Find your gate, lounges, and more.</p>
        </div>
      </div>

      <button
        onClick={() => navigate("/journey")}
        style={styles.startBtn}
      >
        Start Journey
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "2rem",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    color: "#2b6cb0",
  },
  subtext: {
    fontSize: "1.2rem",
    color: "#4a5568",
    marginBottom: "2rem",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  startBtn: {
    padding: "0.8rem 1.6rem",
    fontSize: "1rem",
    backgroundColor: "#2b6cb0",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};


