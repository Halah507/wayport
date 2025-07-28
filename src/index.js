import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserPreferencesProvider } from "./contexts/UserPreferencesContext";
import './index.css'; // ✅ Your new global CSS

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserPreferencesProvider>
      <App />
    </UserPreferencesProvider>
  </React.StrictMode>
);

reportWebVitals();
