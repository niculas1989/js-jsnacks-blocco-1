// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

const displayElement = document.getElementById('display');
let sum = 0;
let isValid = true;

for (let i = 0; i < 10; i++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    if (isNaN(userNumber)) {
        isValid = false;
    } else {
        sum += userNumber;
    }
}

if (isValid) {
    displayElement.innerText = 'somma finale: ' + sum;
} else {
    displayElement.innerText = 'Hai inserito elementi non validi!'
}
