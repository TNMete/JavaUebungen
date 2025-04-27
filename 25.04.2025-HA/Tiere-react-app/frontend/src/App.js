import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

// Erstelle die TierDetails-Komponente (in derselben Datei oder einer separaten)
function TierDetails() {
  const { id } = useParams();
  const [tier, setTier] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5005/tiere/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setTier(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error("Fehler beim Laden der Tierdetails:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Lade Tierdetails...</div>;
  }

  if (error) {
    return <div>Fehler beim Laden der Tierdetails: {error.message}</div>;
  }

  if (!tier) {
    return <div>Tier nicht gefunden.</div>;
  }

  return (
    <div>
      <h1>Details für {tier.name}</h1>
      <p>Tierart: {tier.tierart}</p>
      <p>Krankheit: {tier.krankheit}</p>
      <p>Geburtstag: {tier.geburtstag}</p>
      <p>Gewicht: {tier.gewicht} kg</p>
      <button onClick={() => window.history.back()}>Zurück zur Liste</button>
    </div>
  );
}

// Deine ursprüngliche TiereListe-Komponente
function TiereListe() {
  const [tiere, setTiere] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5005/tiere')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTiere(data))
      .catch(error => {
        setError(error);
        console.error("Fehler beim Laden der Daten:", error);
      });
  }, []);

  if (error) {
    return <div>Fehler beim Laden der Daten: {error.message}</div>;
  }

  if (tiere.length === 0) {
    return <div>Lade Daten...</div>;
  }

  return (
    <div>
      <h1>Liste der Tiere</h1>
      <ul>
        {tiere.map(tier => (
          <li key={tier.id}>
            <Link to={`/tier/${tier.id}`}>{tier.name}</Link> ist ein/eine {tier.tierart}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TiereListe />} />
        <Route path="/tier/:id" element={<TierDetails />} />
      </Routes>
    </Router>
  );
}

export default App;