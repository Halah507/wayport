// src/pages/medicalcheck.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MedicalCheck() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleCheck = () => {
    // Basic logic for smart recommendations
    const mild = ["headache", "fatigue", "mild nausea"];
    const moderate = ["fever", "cough", "sore throat"];
    const emergency = ["chest pain", "difficulty breathing", "severe bleeding"];

    let advice = "";

    if (mild.includes(symptom)) {
      advice = "Stay hydrated, rest, and consider a mild painkiller like paracetamol.";
    } else if (moderate.includes(symptom)) {
      advice =
        "Monitor your symptoms. If they worsen, visit the medical clinic in the terminal.";
    } else if (emergency.includes(symptom)) {
      advice =
        "⚠️ This may be a medical emergency. Please head to the nearest airport medical center immediately or call airport help.";
    } else {
      advice = "Please select a symptom to receive advice.";
    }

    setResult(advice);
  };

  return (
    <div style={styles.container}>
      <h2>Medical Symptom Checker</h2>
      <p>Select a symptom to get quick recommendations:</p>

      <select
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        style={styles.select}
      >
        <option value="">-- Select Symptom --</option>
        <option value="headache">Headache</option>
        <option value="fatigue">Fatigue</option>
        <option value="mild nausea">Mild Nausea</option>
        <option value="fever">Fever</option>
        <option value="cough">Cough</option>
        <option value="sore throat">Sore Throat</option>
        <option value="chest pain">Chest Pain</option>
        <option value="difficulty breathing">Difficulty Breathing</option>
        <option value="severe bleeding">Severe Bleeding</option>
      </select>

      <button onClick={handleCheck} style={styles.button}>
        Get Advice
      </button>

      {result && (
        <div style={styles.resultBox}>
          <strong>Result:</strong>
          <p>{result}</p>
        </div>
      )}

      <button onClick={() => navigate("/accessibility")} style={styles.nextBtn}>
        Next ➡
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  select: {
    width: "100%",
    padding: "10px",
    margin: "15px 0",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resultBox: {
    backgroundColor: "#f0f8ff",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "8px",
    borderLeft: "5px solid #007BFF",
  },
  nextBtn: {
    marginTop: "30px",
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

