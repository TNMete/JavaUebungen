const buttonShowAnimals = document.getElementById("button_show_animals")
const buttonAddAnimal = document.getElementById("addAnimal")
const showAnimals = document.getElementById("show_animals")

buttonShowAnimals.addEventListener("click", async () => {
    await loadTiere();
});

async function loadTiere() {
    const res = await fetch("http://localhost:3001/tiere")
    const data = await res.json();
    displayData(data)
}

function displayData(data) {
    console.log(data)
    showAnimals.innerHTML = "";
    data.forEach(tier => {
        const li = document.createElement("li");
        li.textContent = `${tier.name} (${tier.tierart}) - ${tier.age} Jahre`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Löschen";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => deleteTier(tier.id));

        li.appendChild(deleteBtn);
        showAnimals.appendChild(li);
    });
}

async function deleteTier(id) {
    const confirmed = confirm("Willst du dieses Tier wirklich löschen?");
    if (!confirmed) return;

    try {
        const res = await fetch(`http://localhost:3001/tiere/${id}`, {
            method: "DELETE"
        });

        if (res.ok) {
            alert("Tier wurde gelöscht.");
            await loadTiere(); // aktualisiert die Liste
        } else {
            alert("Fehler beim Löschen.");
        }
    } catch (err) {
        console.error("Fehler beim Löschen:", err);
        alert("Serverfehler.");
    }
}

buttonAddAnimal.addEventListener("click", async () => {
    const tierart = document.getElementById("tierart").value
    const name = document.getElementById("name").value
    const krankheit = document.getElementById("krankheit").value
    const age = document.getElementById("age").value
    const gewicht = document.getElementById("gewicht").value
    const newAnimal = { tierart, name, krankheit, age, gewicht }

    console.log("script.js", JSON.stringify(newAnimal))

    const res = await fetch("http://localhost:3001/tiere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnimal)
    })

    if (res.ok) {
        const message = await res.text();
        alert(message);
        await loadTiere(); // direkt neu laden nach dem Hinzufügen
    } else {
        alert("Fehler beim Hinzufügen des Tieres.");
    }
});
