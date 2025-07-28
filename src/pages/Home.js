// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Wayport ✈️</h1>
      <p style={styles.description}>
        Your smart airport companion for accessibility, comfort, and peace of mind.
      </p>
      <Link to="/preferences" style={styles.button}>Get Started</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
