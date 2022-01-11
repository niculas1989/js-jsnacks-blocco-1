/* Snack 2
L’utente inserisce due parole in successione, con due prompt.Il software stampa prima la parola più corta, poi la parola più lunga.
*/
console.log('JS OK');
const displayElement = document.getElementById('display');
const firstWord = prompt("Inserisci la prima parola").trim();
const secondWord = prompt("Inserisci la seconda parola").trim();

let message = 'Le due parole hanno uguale lunghezza';
if (firstWord.length > secondWord.length) {
    message = firstWord + ' ' + secondWord;
} else if (firstWord.length < secondWord.length) {
    console.log(message + secondWord);
    message = secondWord + ' ' + firstWord;
}

displayElement.innerText = message;