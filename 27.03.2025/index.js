const express = require("express")
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Willkommen im Tierheim - Berlin")
})

const animals = [
    { id: 1, name: "Pasa", species: "Hund", age: 3 },
    { id: 2, name: "Paula", species: "Katze", age: 2 },
    { id: 3, name: "Marvin", species: "Hund", age: 6 },
    { id: 4, name: "Stone", species: "Hund", age: 5 },
    { id: 5, name: "Stone", species: "Fisch", age: 10 }
]

app.get("/tiere", (req, res) => {
    res.send(animals)
})
// tiere/search?(queryParameterEinleitung)name(querykey!)=Stone(name/value)
// tiere/search?name=Stone
// query die im loop solange filtert bis foundelements das Gesuchte Element wieder gibt
app.get("/tiere/search", (req, res) => {
    const name = req.query.name;
    let foundelements = animals.filter((element) => element.name == name);
    if (foundelements.length === 0) {
        const species = req.query.species;
        foundelements = animals.filter((element) => element.species == species);
    } if (foundelements.length === 0) {
        const age = req.query.age;
        foundelements = animals.filter((element) => element.age == age);
    }
    res.json(foundelements)
})

app.get("/tiere/:id", (req, res) => {
    const id = req.params.id;
    const foundelements = animals.find(animal => animal.id == id);

    if (!foundelements) {
        res.json({ error: "Tier nicht gefunden" });
    }

    res.json(foundelements);
});

app.post("/tiere", (req, res) => {
    const { name, species, age } = req.body;

    const newAnimal = {
        id: animals.length + 1,
        name: name,
        species: species,
        age: age,
    }

    animals.push(newAnimal)

    res.json(animals);
})

app.listen(5005, () => {
    console.log("Server läuft ya salame 😘")
}); 