const express = require("express");
const app = express();
const verySillyName = require("sillyname");
const devJokes = require("awesome-dev-jokes");

app.get("/", (req, res) => {
    res.send("Willkommen bei meiner eigenen API!");
});

app.get("/joke", (req, res) => {
    res.send(devJokes.getRandomJoke());
});

app.get("/randomname", (req, res) => {
    res.send(verySillyName());
})

app.get("/data", (req, res) => {
    res.json([
        { id: 1, name: "Max" },
        { id: 2, name: "Lena" },
        { id: 3, name: "Hi Kevin" },
    ]);
});

app.listen(5050, () => {
    console.log("Server läuft auf http://localhost:5050");
});