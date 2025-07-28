import React from "react";
import "../index.css";

export default function FinalSummary() {
  // Sample static data; you can replace these with actual context or state
  const travelerInfo = {
    type: "Family + Pregnant",
    accessibility: {
      stepFree: true,
      signLanguage: false,
      escort: true,
    },
    medical: "Anxiety",
  };

  const flightDetails = {
    airline: "Wayport Airlines",
    flightNumber: "WA726",
    departureGate: "B12",
    departureTime: "15:45",
    SeatNumber: "13B",

  };

  return (
    <main className="container">
      <h2>✈️  Travel Summary</h2>

      <section style={{ marginTop: "2rem" }}>
        <h3>👤 Traveler Snapshot</h3>
        <ul>
          <li><strong>Traveler Type:</strong> {travelerInfo.type}</li>
          <li><strong>Accessibility:</strong>
            <ul>
              <li>Step-Free Access: {travelerInfo.accessibility.stepFree ? "Yes" : "No"}</li>
              <li>Sign Language Support: {travelerInfo.accessibility.signLanguage ? "Yes" : "No"}</li>
              <li>Escort Assistance: {travelerInfo.accessibility.escort ? "Yes" : "No"}</li>
            </ul>
          </li>
          <li><strong>Medical Notes:</strong> {travelerInfo.medical}</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>🛫 Flight Information</h3>
        <ul>
          <li><strong>Airline:</strong> {flightDetails.airline}</li>
          <li><strong>Flight Number:</strong> {flightDetails.flightNumber}</li>
          <li><strong>Departure Gate:</strong> {flightDetails.departureGate}</li>
          <li><strong>Departure Time:</strong> {flightDetails.departureTime}</li>
          <li><strong>Seat Number:</strong> {flightDetails.SeatNumber}</li>

        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>🆘 Airport Assistance</h3>
        <p>If you need urgent help during your trip, click the button below to contact airport assistance:</p>
        <button className="button" onClick={() => alert("Help request sent!")}>
          📞 Help Me
        </button>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#555" }}>
          Emergency services are available at all terminals. Staff will be notified.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>💬 Suggestions or Complaints</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert("Feedback submitted. Thank you!"); }}>
          <textarea
            placeholder="Share your suggestions or issues here..."
            rows="4"
            style={{
              width: "100%",
              padding: "1rem",
              border: "1px solid var(--border)",
              borderRadius: "5px",
              fontFamily: "inherit",
              resize: "vertical"
            }}
            required
          />
          <button type="submit" className="button" style={{ marginTop: "1rem" }}>
            Submit Feedback
          </button>
        </form>
      </section>
    </main>
  );
}
