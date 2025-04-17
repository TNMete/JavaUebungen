import './App.css';
import { useState, useEffect } from "react";

function App() {
    // let zahl = 15
    const [zahl, setZahl] = useState(15)
    const [colour, setColour] = useState("black")

    useEffect(() => {
        console.log(`Zahl oder Farbe hat sich geändert: zahl=${zahl}, colour=${colour}`);

    }, [zahl, colour]);

    function resetNumber() {
        setZahl(0);
    }
    function resetColour() {
        setColour("black");
    }

    function getRandomColor() {
        const colors = ["red", "green", "blue", "purple", "orange", "pink", "brown", "yellow"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function setRandomColour() {
        const randomColor = getRandomColor();
        setColour(randomColor);
    }
    return (
        <>
            <p>Meine Lieblingszahl ist {zahl}</p>

            <button onClick={() => setZahl(zahl + 1)}>+</button>
            <button onClick={() => setZahl(zahl - 1)}>-</button>
            <button onClick={resetNumber}>Reset</button>

            <h1 style={{ color: colour }}>Ich bin eine Überschrift</h1>
            <button onClick={() => setColour("blue")}>Ändere die Farbe zu blau</button>
            <button onClick={() => setColour("green")}>Ändere die Farbe zu grün</button>
            <button onClick={() => setColour("red")}>Ändere die Farbe zu rot</button>
            <button onClick={setRandomColour}>Zufällige Farbe</button>
            <button onClick={resetColour}>Reset</button>
        </>
    );
}

export default App;