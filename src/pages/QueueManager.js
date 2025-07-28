// src/pages/QueueManager.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QueueManager() {
  const [selectedService, setSelectedService] = useState("");
  const [queueNumber, setQueueNumber] = useState(null);
  const navigate = useNavigate();

  const handleJoinQueue = () => {
    if (!selectedService) return alert("Please select a service first.");
    const randomNum = Math.floor(Math.random() * 20) + 1; // Simulated queue number
    setQueueNumber(randomNum);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Virtual Queue Manager</h2>
      <p>Select the airport service to join the queue:</p>

      <select
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        style={{ padding: "10px", marginTop: "10px" }}
      >
        <option value="">-- Choose Service --</option>
        <option value="security">Security Check</option>
        <option value="passport">Passport Control</option>
        <option value="boarding">Boarding Gate</option>
        <option value="customs">Customs Inspection</option>
      </select>

      <br />
      <button
        onClick={handleJoinQueue}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Join Queue
      </button>

      {queueNumber !== null && (
        <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f0f8ff", borderRadius: "8px" }}>
          <h3>Queue Status</h3>
          <p>
            You are <strong>#{queueNumber}</strong> in line for <strong>{selectedService}</strong>.
          </p>
          <p>Please stay nearby. You'll be notified when it's your turn.</p>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px", padding: "8px 16px", backgroundColor: "#ccc", border: "none", borderRadius: "5px" }}
      >
        Return Home
      </button>
    </div>
  );
}
