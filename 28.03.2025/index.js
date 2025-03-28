const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json()); // middleware welches ermöglicht den "Body" aus dem request auszulösen

function readFile() {
    const data = fs.readFileSync("tiere.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("tiere.json", JSON.stringify(data, null, 2));
}

app.get("/tiere", (req, res) => {
    const tiere = readFile();
    res.json(tiere);
});

app.post("/tiere", (req, res) => {
    const tiere = readFile();
    const { name, art } = req.body

    if (name && art) {
        const newTier = {
            id: tiere.length + 1,
            name: name,
            art: art
        }

        tiere.push(newTier)
        writeFile(tiere)
        res.status(201).json(newTier)

    } else {
        res.send("Daten unvollständig")
    }
})

app.put("/tiere/:id", (req, res) => {
    const id = req.params.id;
    const tiere = readFile(); // Datei aufrufen
    const newArt = req.body.art

    const foundArt = tiere.find(tier => tier.id == id)
    foundArt.art = newArt
    res.json(foundArt)
    writeFile(tiere) // in Datei reinschreiben
})

app.delete("/tiere/:id", (req, res) => {
    const id = req.params.id;
    const tiere = readFile();
    const index = tiere.findIndex(tier => tier.id == id)
    tiere.splice(index, 1)
    writeFile(tiere)
    res.json("erfolgreich gelöscht")
})

app.listen(5050);