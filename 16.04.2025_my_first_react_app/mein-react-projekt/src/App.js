import './App.css';
import { useState, useEffect } from "react";

function App() {
    // let zahl = 15
    const [zahl, setZahl] = useState(15)
    const [colour, setColour] = useState("black")
    const [darkMode, setDarkMode] = useState(false);

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

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    const appStyle = {
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
    };

    return (
        <div style={appStyle}>
            <button onClick={toggleDarkMode}>
                {darkMode ? "Wechsle zu Light Mode" : "Wechsle zu Dark Mode"}
            </button>

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
        </div>
    );
}

export default App;