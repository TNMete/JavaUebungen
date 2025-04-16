import React from 'react'

function CompTierCard({ name, art, krankheit }) {
    return (
        <div>
            <h1>Tierpraxis</h1>
            <>
                <h1>Name: {name}</h1>
                <h1>Art: {art}</h1>
                <h1>Krankheit: {krankheit}</h1>
            </>
        </div>
    );
}
export default CompTierCard
