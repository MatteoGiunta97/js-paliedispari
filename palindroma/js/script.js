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

        let lgth = Math.floor(word.length / 2);
        
        for (let index = 0; index < lgth; index++)

        if (word[index] !== word[word.length - index - 1]) {

            const message = alert('La parola inserita NON è palindroma')
            return message;

        }else {

            const message = alert('La parola inserita è palindroma')
            return message;
        }

    }