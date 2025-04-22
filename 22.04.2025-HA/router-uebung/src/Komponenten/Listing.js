import React from 'react';
import './Listing.css';

function Listing({ Name, Preis, image }) {
    return (
        <div className="listing-card">
            <img src={image} alt={Name} />
            <h2>{Name}</h2>
            <p>Preis: {Preis} €</p>
        </div>
    );
}

export default Listing;