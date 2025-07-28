import React from "react";

export default function Alerts() {
  // Simulated alert data
  const alerts = [
    {
      time: "11:35 AM",
      type: "Gate Change",
      message: "Your gate has changed from B12 to B14. Please proceed within 10 minutes."
    },
    {
      time: "11:40 AM",
      type: "Security",
      message: "Security line 3 is currently crowded. Lane 5 is recommended for faster processing."
    },
    {
      time: "11:45 AM",
      type: "Prayer",
      message: "Dhuhr prayer will begin in 15 minutes. Nearest prayer room: Terminal B, 2nd floor."
    },
    {
      time: "11:50 AM",
      type: "Child Zone",
      message: "Stroller Station near Gate B9 is now available."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Alerts & Notifications</h2>
      <p>Stay updated during your journey:</p>

      <div style={{ marginTop: "20px" }}>
        {alerts.map((alert, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f0f8ff",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "10px",
              borderLeft: "5px solid #007BFF"
            }}
          >
            <strong>{alert.time} — {alert.type}</strong>
            <p>{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
