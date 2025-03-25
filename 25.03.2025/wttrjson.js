const output = document.getElementById("output");
const button = document.getElementById("searchButton");

function searchCity() {
    const input = document.getElementById("userInput").value;

    fetch(`https://wttr.in/${input}?format=%C+%t+%w+%l`)
        .then(res => res.text())
        .then(data => {

            output.innerHTML = "";
            const weatherElement = document.createElement("p");
            weatherElement.textContent = `Wetter in ${input}: ${data}`;

            output.appendChild(weatherElement);
        })
}

button.addEventListener("click", searchCity);