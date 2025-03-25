fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => {
        document.getElementById("outputName").textContent = `Name: ${data.name}`;
        document.getElementById("outputHeight").textContent = `Height: ${data.height}cm`;
        document.getElementById("outputMass").textContent = `Mass: ${data.mass}KG`;

        return fetch(data.homeworld);
    })
    .then(res => res.json())
    .then(homeworldData => {
        document.getElementById("outputHomeworld").textContent = `Homeworld: ${homeworldData.name}`;
    })
