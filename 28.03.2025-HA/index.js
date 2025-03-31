const express = require("express");
const cors = require("cors")
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5500'
}));

function readFile() {
    const data = fs.readFileSync("carlist.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("carlist.json", JSON.stringify(data, null, 2));
}

app.get("/cars", (req, res) => {

    const cars = readFile();
    res.json(cars);
})

app.post("/cars", (req, res) => {
    try {
        const cars = readFile();
        const { brand, km, price } = req.body;
        const carExists = cars.some(car =>
            car.brand === brand && car.km === km && car.price === price
        );
        if (carExists) {
            return res.status(400).json({ error: "Auto existiert bereits!" });
        }
        const newCar = {
            id: cars.length + 1,
            brand: brand,
            km: km,
            price: price
        };
        cars.push(newCar);
        writeFile(cars);
        res.status(201).json(newCar);
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error: ${err}` });
    }
});

app.put("/cars/:id", (req, res) => {
    try {
        const id = req.params.id;
        const cars = readFile();
        const { brand, km, price } = req.body
        const foundCar = cars.find(car => car.id == id)
        if (brand) {
            foundCar.brand = brand
        } if (km) {
            foundCar.km = km
        } if (price) {
            foundCar.price = price
        }
        writeFile(cars)
        res.json(foundBrand)
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error: ${err}` })
    }
})

app.get("/cars/search", (req, res) => {
    try {
        const cars = readFile();
        const { brand, km, price, id } = req.query;

        let foundCar = cars.filter(car =>
            (!brand || car.brand == brand) &&
            (!km || car.km == km) &&
            (!price || car.price == price) &&
            (!id || car.id == id)
        );

        if (foundCar.length === 0) {
            console.log("Keine passenden Autos gefunden!");
        }

        res.json(foundCar);
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error: ${err}` });
    }
});

app.delete("/cars/:id", (req, res) => {
    const id = req.params.id;
    const cars = readFile();
    const index = cars.findIndex(car => car.id == id)
    cars.splice(index, 1) // Zahl steht für die Anzahl der "Indexe" die gelöscht werden sollen
    writeFile(cars)
    res.json("Eintrag wurde erfolgreich gelöscht!")
})

app.listen(5050, () => {
    console.log("Server ist aktiv.")
});