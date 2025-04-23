import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Komponenten/Home";
import Kontakt from './Komponenten/Kontakt';
import FAQ from './Komponenten/FAQ';
import Impressum from './Komponenten/Impressum';
import About from './Komponenten/About';
import Karriere from './Komponenten/Karriere';
import Navbar from './Komponenten/navbar';
import Listing from './Komponenten/Listing';

function App() {
  const [anzahl, setAnzahl] = useState(1);
  const houses = [
    { Id: 1, Name: "Mein erstes Haus", Preis: "350.000", image: "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg" },
    { Id: 2, Name: "Mein zweites Haus", Preis: "125.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
    { Id: 3, Name: "Mein drittes Haus", Preis: "100.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
    { Id: 4, Name: "Mein viertes Haus", Preis: "150.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
    { Id: 5, Name: "Mein fuenftes Haus", Preis: "200.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
    { Id: 6, Name: "Mein sechstes Haus", Preis: "250.000", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="HouseContainer">
            {houses.slice(0, anzahl).map((house) =>
              <Listing key={house.Id} Name={house.Name} Preis={house.Preis} image={house.image} />
            )}
            <button className="HausAnzeigeButton" onClick={() => setAnzahl(anzahl + 1)}>weiteres Haus anzeigen</button>
          </div>
        } />
        <Route path="/contact" element={<Kontakt />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Karriere />} />
      </Routes>
    </Router>
  );
}

export default App;
