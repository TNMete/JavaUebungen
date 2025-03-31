document.addEventListener("DOMContentLoaded", () => {
    const carList = document.getElementById("carList");
    const form = document.getElementById("form");
    const brandInput = document.getElementById("brand");
    const kmInput = document.getElementById("km");
    const priceInput = document.getElementById("price");

    function fetchCars() {
        fetch("http://localhost:5050/cars")
            .then(res => res.json())
            .then(data => renderCars(data))
            .catch(err => console.error("Fehler beim Laden der Autos:", err));
    }

    function renderCars(cars) {
        carList.innerHTML = "";
        cars.forEach(car => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${car.brand} - ${car.km} km - ${car.price}€</span>
                <button class="delete-btn" data-id="${car.id}">Löschen</button>
            `;

            li.querySelector(".delete-btn").addEventListener("click", () => deleteCar(car.id));
            carList.appendChild(li);
        });
    }

    function deleteCar(carId) {
        fetch(`http://localhost:5050/cars/${carId}`, { method: "DELETE" })
            .then(() => fetchCars())
            .catch(err => console.error("Fehler beim Löschen:", err));
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newCar = {
            brand: brandInput.value,
            km: kmInput.value,
            price: priceInput.value
        };

        fetch("http://localhost:5050/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCar)
        })
            .then(() => {
                fetchCars();
                form.reset();
            })
            .catch(err => console.error("Fehler beim Anlegen:", err));
    });

    fetchCars();
});
