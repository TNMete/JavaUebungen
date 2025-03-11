import express from "express"

const app = express()
// get = einfache Anfrage, post = schicke Daten die verarbeitet werden sollen, put = vorhandene Daten verändern, delete = lösche Daten
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/content", (req, res) => {
    res.send("<h1>HTML</h1>")
})

app.get("/api/data", (req, res) => {
    res.json(
        [{
            user: ["Lukas", "Mete"],
            age: 28
        },
        {
            user: "Christof", age: 29
        }
        ])
})


app.listen(3000, () => {
    console.log("läuft")
})