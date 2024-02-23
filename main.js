//ESERCIZIO 1

let num = 2;

for (i = 1; i <= 10; i++) {
    tabellina = num * i;
    console.log(tabellina)
}

//ESERCIZIO 2

let numX = 20;
let numeriDispari = 0;
let sommaDispari = 0;
let mediaDispari = 0;
for (i = 1; i <= numX; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else {
        numeriDispari++;
        sommaDispari += i;
        mediaDispari = sommaDispari / numeriDispari;
    }

}

console.log(mediaDispari);


//ESERCIZIO 3

let messaggio = parseInt(prompt("inserisci un numero da 1 a 3 per selezionare la bevanda:"));

while (messaggio != 1 && messaggio != 2 && messaggio != 3) {
    messaggio = parseInt(prompt("inserisci un numero da 1 a 3 per selezionare la bevanda:"));

}

switch (messaggio) {
    case 1: console.log("Hai selezionato l'acqua");
        break;
    case 2: console.log("Hai selezionato la Coca Cola");
        break;
    case 3: let messaggioMaggiorenne = parseInt(prompt("devi essere maggiorenne per poter acquistare la birra, inserisci l'età:"));
        if (messaggioMaggiorenne >= 18) {

            console.log("hai selezionato la birra")
        } else {
            console.log("non puoi acquistare la birra")
        }
        break;
    default: console.log("seleziona un altro prodotto")
        break;
}

//ESERCIZIO 4

let luca = [34, 128, 345, 67, 89, 12, 890]

console.log(luca);

