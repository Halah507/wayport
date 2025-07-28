import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Preferences() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    travelerTypes: [],
    medicalConditions: [],
    disabilities: [],
  });

  const options = {
    travelerTypes: ["Elderly", "Pregnant", "Family", "Business", "Solo", "Student"],
    medicalConditions: ["Anxiety", "Asthma", "Heart Disease", "Mobility Issues"],
    disabilities: ["Blind", "Deaf", "Wheelchair User", "Cognitive Impairment"],
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const list = prev[category];
      const updatedList = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { ...prev, [category]: updatedList };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("preferences", JSON.stringify(formData));
    navigate("/smartguide"); // Or the next logical step
  };

  const renderOptions = (category) =>
    options[category].map((item) => (
      <label key={item} style={{ display: "block", margin: "4px 0" }}>
        <input
          type="checkbox"
          checked={formData[category].includes(item)}
          onChange={() => handleCheckboxChange(category, item)}
        />
        {` ${item}`}
      </label>
    ));

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Preferences</h2>
      <form onSubmit={handleSubmit}>
        <h3>👤 Traveler Type</h3>
        {renderOptions("travelerTypes")}

        <h3>🩺 Medical Conditions</h3>
        {renderOptions("medicalConditions")}

        <h3>♿ Disabilities</h3>
        {renderOptions("disabilities")}

        <button type="submit" style={{ marginTop: "20px", padding: "10px 20px" }}>
          Continue
        </button>
      </form>
    </div>
  );
}
