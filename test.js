// let vorname = 'Mete';
// let age = 30;

// console.log(`Mein Name ist ${vorname} und ich bin ${age} Jahre alt.`);

// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(y - x);
// console.log(x * y);
// console.log(x / y);
// console.log((x * y) - 10 + 5);
// console.log(x ** 2 + y ** 2);
// console.log(x ** 2 + y ** 2);

// wort = 'Hallo';
// console.log(wort);
// console.log(wort.length);

// Fingerübung 1:
// Definiert 2 variablen (zahlen) a und b
// Gebt mithilfe von if-else if-else aus, welche Größer ist oder ob sie
// gleich groß sind

// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log('a ist größer als b');
// }

// else if (a < b) {
//     console.log('a ist kleiner als b');
// }
// else {
//     a == b
//     console.log('a ist gleich b');
// }

// Fingerübung 2: 
// Erstelle eine variable divisionResult
// Schreibe in diese Variable das Ergebnis von a/b, aber nur,
// wenn b nicht 0 ist. Sonst benutze console.error um einen Fehler auszugeben

let a = 10;
let b = 5;

let divisionResult;

if (b !== 0) {
    divisionResult = a / b;
    console.log("Ergebnis der Division:", divisionResult);
} else {
    console.error("Fehler");
}

// Fingerübung 3:
// Erstelle eine variable punkte
// Die Bewertung läuft wie folgt:
// Mehr als 90 Punkte: Ausgabe "Note 1"
// Mehr als 80 Punkte: Ausgabe "Note 2"
// Mehr als 70 Punkte: Ausgabe "Note 3"
// Mehr als 60 Punkte: Ausgabe "Note 4"
// Sonst: Ausgabe "Durchgefallen!"

let punkte = 95;

if (punkte > 90) {
    console.log("Note 1");
} else if (punkte > 80) {
    console.log("Note 2");
} else if (punkte > 70) {
    console.log("Note 3");
} else if (punkte > 60) {
    console.log("Note 4");
} else {
    console.log("Durchgefallen!");
}