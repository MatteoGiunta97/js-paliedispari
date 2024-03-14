/*
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// Chiedo all'utente di inserire pari o dispari
const evenOrOdd = prompt('inserisci la parola "pari" o "dispari"');

// Chiedo all'utente di inserire un numero da 1 a 5
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'));

// Genero un numero random da 1 a 5 per il computer
const compNum = numRandom(1,5);
console.log(compNum)

// Sommo i due numeri e verifico se la somma è pari o dispari

// Dichiaro il vincitore


/*
 FUNZIONI
*/

// La funzione genera un numero intero random tra due parametri: min e max
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
