import express from "express"
const app = express()


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/Mete", (req, res) => {
    res.send("<h1>Hello Mete</h1>")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})