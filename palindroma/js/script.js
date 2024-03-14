/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Su internet ci sono soluzioni con join e reverse, non potete usarle!
*/



// Chiedo all'utente di inserire una parola e la passo nella funzione
const userWord = prompt('inserire una parola');

palWord(userWord);


// Creo una funzione per capire se la parola è palindroma
    function palWord(word) {
        // Se le lettere della prima metà non corrispondondono alla seconda metà, 
        // allora la parola non è palindroma, altrimenti lo è

        // Divido la lunghezza della parola in 2
        let lgth = Math.floor(word.length / 2);

        // Passo le lettere in un ciclo che si interrompe a metà parola
        for (let index = 0; index < lgth; index++)

            // Confronto la lettera della prima metà (nella posizione index attuale del ciclo) con la lettera della seconda metà (nella posizione index opposta)
            if (word[index] !== word[word.length - index - 1]) {

            // Stampo il risultato    
            const message = alert('La parola inserita NON è palindroma')
            return message;

            }else {

            const message = alert('La parola inserita è palindroma')
            return message;
            }

    }