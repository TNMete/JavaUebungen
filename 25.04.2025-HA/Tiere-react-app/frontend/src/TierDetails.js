import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TierDetails() {
    const { id } = useParams();
    const [tier, setTier] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5005/tiere/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
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

export default TierDetails;