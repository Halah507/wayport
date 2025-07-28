import React, { useState } from "react";

export default function JourneySteps() {
  const steps = [
    { title: "Arrival at Airport", description: "Reach Terminal B at least 2 hours before departure." },
    { title: "Check-In", description: "Visit Counter 23 or use the self-check-in kiosk. Prepare passport and ticket." },
    { title: "Security Screening", description: "Use Lane 5 (shortest queue). Remove electronics and liquids." },
    { title: "Prayer Room Stop (Optional)", description: "Nearest prayer room is on 2nd floor, near Gate B12." },
    { title: "Lounge Visit (Optional)", description: "You have access to Blue Lounge near Gate B10." },
    { title: "Walk to Gate", description: "Proceed to Gate B14. Estimated walk: 8 mins." },
    { title: "Boarding", description: "Boarding starts at 3:30 PM. Listen for announcements and show ID." }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div style={styles.container}>
      <h2>🧭 Your Journey Steps</h2>
      <div style={styles.card}>
        <h3>{steps[currentStep].title}</h3>
        <p>{steps[currentStep].description}</p>
        <div style={styles.buttons}>
          <button onClick={prevStep} disabled={currentStep === 0}>◀ Back</button>
          <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next ▶</button>
        </div>
        <p style={styles.stepIndicator}>Step {currentStep + 1} of {steps.length}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif"
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginTop: "20px"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  stepIndicator: {
    marginTop: "10px",
    fontStyle: "italic"
  }
};
