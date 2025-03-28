const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

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
    const cars = readFile();
    const { brand, km, price } = req.body
    const newCar = {
        id: cars.length + 1,
        brand: brand,
        km: km,
        price: price
    }

    cars.push(newCar)
    writeFile(cars)
    res.status(201).json(newCar)
})

app.put("/cars/:id", (req, res) => {
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
})
app.get("/cars/search", (req, res) => {
    const cars = readFile();
    const brand = req.query.brand;
    let foundCar = cars.filter((cars) => cars.brand == brand);
    if (foundCar.length === 0) {
        const km = req.query.km;
        foundCar = cars.filter((cars) => cars.km == km);
    } if (foundCar.length === 0) {
        const price = req.query.price;
        foundCar = cars.filter((cars) => cars.price == price);
    } if (foundCar.length === 0) {
        const id = req.query.id;
        foundCar = cars.filter((cars) => cars.id == id);
    } else {
        console.log("ungültige Eingabe!")
    }
    res.json(foundCar)
})

app.delete("/cars/:id", (req, res) => {
    const id = req.params.id;
    const cars = readFile();
    const index = cars.findIndex(car => car.id == id)
    cars.splice(index, 1) // Zahl steht für die Anzahl der "Indexe" die gelöscht werden sollen
    writeFile(cars)
    res.json("deleted jungä, richtig weggenatzt bro")
})

app.listen(5050, () => {
    console.log("LÄÄÄÄÄÄÄÄÄÄÄUFT")
});