/*
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// Chiedo all'utente di inserire pari o dispari
const userEvenOdd = prompt('inserisci la parola "pari" o "dispari"');

// Chiedo all'utente di inserire un numero da 1 a 5
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'));

// Genero un numero random da 1 a 5 per il computer
const compNum = numRandom(1,5);

// Sommo i due numeri e verifico se la somma è pari o dispari, quindi dichiaro il vincitore

    // Verifico se l'utente ha vinto
    if (userEvenOdd === evenOrOdd(userNum, compNum)) {

        alert('Hai vinto :) - il tuo numero: '+ userNum + ' - il numero del computer: ' + compNum)

    }else {

        alert('Il computer vince :( - il tuo numero: '+ userNum + ' - il numero del computer: ' + compNum)
    }



/*
 FUNZIONI
*/

// La funzione genera un numero intero random tra due parametri: min e max
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// La funzione stabilisce se la somma di due numeri è pari o dispari
function evenOrOdd(num1, num2) {

    let sum = num1 + num2;

    if (sum % 2 === 0) {

        sum = 'pari';

    } else {
        
        sum = 'dispari';

    }

    return sum
    
}
