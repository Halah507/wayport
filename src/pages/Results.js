import React from "react";

export default function Results() {
  // Simulated user data
  const userData = {
    travelerType: "Family",
    walkRange: "Medium",
    interests: ["Prayer Rooms", "Lounges"],
    food: "Halal",
    medicalConditions: ["Anxiety"],
    accessibility: {
      fontSize: "Large",
      contrast: "High Contrast",
      audioHelp: true,
    },
    destination: "Gate B12",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Review Your Journey Plan</h2>

      <div style={{ 
        border: "1px solid #ccc", 
        padding: "20px", 
        marginTop: "20px", 
        backgroundColor: "#f5f5f5",
        borderRadius: "8px" 
      }}>
        <h3>Traveler Profile</h3>
        <p><strong>Type:</strong> {userData.travelerType}</p>
        <p><strong>Walk Range:</strong> {userData.walkRange}</p>
        <p><strong>Interests:</strong> {userData.interests.join(", ")}</p>
        <p><strong>Food Preference:</strong> {userData.food}</p>

        <h3>Medical Support</h3>
        <p><strong>Conditions:</strong> {userData.medicalConditions.join(", ")}</p>

        <h3>Accessibility</h3>
        <p><strong>Font Size:</strong> {userData.accessibility.fontSize}</p>
        <p><strong>Contrast Mode:</strong> {userData.accessibility.contrast}</p>
        <p><strong>Audio Assistance:</strong> {userData.accessibility.audioHelp ? "Enabled" : "Disabled"}</p>

        <h3>Suggested Destination</h3>
        <p>{userData.destination}</p>
      </div>
    </div>
  );
}
