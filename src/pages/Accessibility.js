// src/pages/Accessibility.js
import React, { useState, useEffect } from "react";

export default function Accessibility() {
  const [fontSize, setFontSize] = useState("medium");
  const [contrast, setContrast] = useState("normal");
  const [audioSupport, setAudioSupport] = useState(false);
  const [stepFreePath, setStepFreePath] = useState(false);
  const [signLanguageSupport, setSignLanguageSupport] = useState(false);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem("accessibilitySettings"));
    if (savedSettings) {
      setFontSize(savedSettings.fontSize);
      setContrast(savedSettings.contrast);
      setAudioSupport(savedSettings.audioSupport);
      setStepFreePath(savedSettings.stepFreePath);
      setSignLanguageSupport(savedSettings.signLanguageSupport);
    }
  }, []);

  const handleSave = () => {
    const settings = {
      fontSize,
      contrast,
      audioSupport,
      stepFreePath,
      signLanguageSupport,
    };
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
    alert("Accessibility settings saved.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Accessibility Settings</h2>

      <label>
        Font Size:{" "}
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium (Default)</option>
          <option value="large">Large</option>
        </select>
      </label>
      <br /><br />

      <label>
        Contrast Mode:{" "}
        <select value={contrast} onChange={(e) => setContrast(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="high">High Contrast</option>
        </select>
      </label>
      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={audioSupport}
          onChange={(e) => setAudioSupport(e.target.checked)}
        />
        Enable Audio Assistance / Screen Reader Support
      </label>
      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={stepFreePath}
          onChange={(e) => setStepFreePath(e.target.checked)}
        />
        Prefer Step-Free Routes (Wheelchair-friendly)
      </label>
      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={signLanguageSupport}
          onChange={(e) => setSignLanguageSupport(e.target.checked)}
        />
        Enable Sign Language Assistance (Visual Kiosks)
      </label>
      <br /><br />

      <button onClick={handleSave}>Save Accessibility Settings</button>
    </div>
  );
}
