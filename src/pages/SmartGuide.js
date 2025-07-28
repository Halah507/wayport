// SmartGuide.js
import React, { useContext } from "react";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";

export default function SmartGuide() {
  const { preferences } = useContext(UserPreferencesContext);

  return (
    <div className="container">
      <h2>✈️ Travel Checklist & Smart Companion</h2>
      <p>This guide is personalized based on your traveler preferences.</p>

      {/* Traveler Summary */}
      <section>
        <h3>👤 Traveler Profile</h3>
        <ul>
          <li>Type: {preferences.travelerTypes?.join(", ") || "N/A"}</li>
          <li>Medical Conditions: {preferences.medicalConditions?.join(", ") || "None"}</li>
          <li>Disabilities: {preferences.disabilities?.join(", ") || "None"}</li>
          <li>Interests: {preferences.interests?.join(", ") || "None"}</li>
          <li>Walking Range: {preferences.walkingRange || "Standard"}</li>
        </ul>
      </section>

      {/* Travel Prep */}
      <section>
        <h3>📝 Pre-Flight Checklist</h3>
        <ul>
          <li>✅ Passport, visa & ID ready</li>
          <li>✅ Print/download boarding pass</li>
          <li>✅ Labeled baggage</li>
          <li>✅ Medication & health essentials</li>
          <li>✅ Power bank & charging cable</li>
          <li>✅ Travel snacks & water (empty bottle before security)</li>
        </ul>
      </section>

      {/* Airport Services */}
      <section>
        <h3>🏢 Airport Services & Areas</h3>
        <ul>
          <li>🛍️ Duty-Free Shopping – Terminal B</li>
          <li>🍽️ Restaurants – Food Court (Level 2)</li>
          <li>🧒 Kids Zone – Terminal A, Gate A5</li>
          <li>🛌 Nap Pods – Lounge 3</li>
          <li>📚 Reading Corner – Near Gate C6</li>
          <li>🕌 Prayer Rooms – Near B5 & Lounge 2</li>
          <li>🚶‍♂️ Mobility Assistance – Info Desk or via app</li>
        </ul>
      </section>

      {/* Lost & Found */}
      <section>
        <h3>🎒 Lost & Baggage Assistance</h3>
        <ul>
          <li>📍 Lost & Found: Opposite Gate A3</li>
          <li>🧳 Delayed or Damaged Baggage: Baggage Services near Carousel 2</li>
          <li>📞 Call +966-XXX-XXXX for 24/7 baggage help</li>
          <li>📝 You can also report lost items in the "Queue" or "Final Summary" page</li>
        </ul>
      </section>

      {/* Emergency Help */}
      <section>
        <h3>🚨 Emergency Instructions</h3>
        <ul>
          <li>🔥 Fire/Evacuation: Follow red signs & staff guidance</li>
          <li>🚑 Medical Emergency: Call emergency phones near every gate</li>
          <li>👮 Suspicious Activity: Inform nearest security officer or dial 999</li>
          <li>📢 Emergency Announcements will override all speaker systems</li>
        </ul>
      </section>

      {/* Special Needs */}
      <section>
        <h3>🧡 Special Needs Guide</h3>
        <ul>
          <li>♿ Priority boarding & transport carts available at check-in</li>
          <li>🦻 Sign Language Staff Available Upon Request</li>
          <li>🦮 Guide Dog Friendly – Present ID at entrance</li>
          <li>🧏 Visual Display Systems in each gate for Deaf travelers</li>
          <li>🛗 Elevators at every junction (MapView shows routes)</li>
        </ul>
      </section>

      {/* Laws & Airport Protocols */}
      <section>
        <h3>📜 Laws & Protocols</h3>
        <ul>
          <li>🧴 Max 100ml liquid per container in carry-on</li>
          <li>🔋 Power banks allowed up to 100Wh in carry-on only</li>
          <li>🚭 No smoking/vaping outside designated rooms</li>
          <li>🛃 Border checks are random — cooperate fully</li>
          <li>📱 Phones should be on silent in lounges & quiet zones</li>
          <li>👕 Dress modestly in accordance with local guidelines</li>
          <li>🚫 Don't leave luggage unattended — fines apply</li>
        </ul>
      </section>

      {/* Accessibility Logic */}
      {preferences.disabilities?.length > 0 && (
        <section>
          <h3>♿ Accessibility Companion</h3>
          <ul>
            {preferences.disabilities.includes("Blind") && (
              <li>🗣️ Voice assistance activated in Map</li>
            )}
            {preferences.disabilities.includes("Deaf") && (
              <li>🖥️ Visual alerts enabled in all screens</li>
            )}
            {preferences.disabilities.includes("Wheelchair") && (
              <li>🛗 Only step-free routes shown</li>
            )}
          </ul>
        </section>
      )}

      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        ✨ Check this page before each step. It's your travel companion.
      </p>
    </div>
  );
}
