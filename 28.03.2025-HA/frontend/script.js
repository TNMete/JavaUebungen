const submitButton = document.getElementById("submitButton");
const brandInput = document.getElementById("brand");
const kmInput = document.getElementById("km");
const priceInput = document.getElementById("price");
const antwortFeld = document.getElementById("antwort");


submitButton.addEventListener("click", () => {
    try {
        const requestBody = {
            brand: brandInput.value,
            km: kmInput.value,
            price: priceInput.value
        }

        fetch("http://localhost:5050/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
            .then(data => {
                antwortFeld.innerText = JSON.stringify(data);
                console.log(data);
            })
    } catch (err) {
        console.log("fehler bei fetch: " + err)
    }
})

window.onload = () => {
    fetch("http://localhost:5050/cars")
        .then(res => res.json())
        .then(data => {
            antwortFeld.innerText = JSON.stringify(data);
        })
}