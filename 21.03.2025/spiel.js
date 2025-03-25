document.addEventListener("DOMContentLoaded", function () {
    let fragen = [
        { frage: "Auf welchem Kontinent liegt der Malawi-See?", antwort: "Afrika" },
        { frage: "Wie viele Beine hat eine Spinne?", antwort: "8" },
        { frage: "Wie lange dauert der 30-jährige Krieg?", antwort: "30 Jahre" },
        { frage: "Wie heißt der höchste Berg der Welt?", antwort: "Mount Everest" },
        { frage: "Welcher Fluss ist der längste Fluss der Welt?", antwort: "Nil" },
        { frage: "Was ist das höchste Gebäude Deutschlands?", antwort: "Berliner Fernsehturm" },
    ];

    let aktuelleFrageIndex = 0;

    function frageAnzeigen() {
        document.getElementById("frage").textContent = fragen[aktuelleFrageIndex].frage;
        document.getElementById("antwort").value = "";
        document.getElementById("feedback").textContent = "";
    }

    frageAnzeigen();

    document.getElementById("check-btn").addEventListener("click", function () {
        let userAntwort = document.getElementById("antwort").value.trim();
        let feedbackText = document.getElementById("feedback");

        if (userAntwort.toLowerCase() === fragen[aktuelleFrageIndex].antwort.toLowerCase()) {
            feedbackText.textContent = "Richtig!";
            feedbackText.style.color = "green";

            setTimeout(() => {
                aktuelleFrageIndex++;
                if (aktuelleFrageIndex < fragen.length) {
                    frageAnzeigen();
                } else {
                    document.getElementById("frage").textContent = "Glückwunsch! Du hast das Quiz abgeschlossen!";
                    document.getElementById("antwort").style.display = "none";
                    document.getElementById("check-btn").style.display = "none";
                }
            }, 1000);
        } else {
            feedbackText.textContent = "Falsch, versuche es nochmal!";
            feedbackText.style.color = "red";
        }
    });
});
