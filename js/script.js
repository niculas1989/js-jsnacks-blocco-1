console.log('JS OK');
/*Snack 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

const displayElement = document.getElementById('display');

const numberOne = parseInt(prompt("Inserisci di seguito il primo numero"));
const numberTwo = parseInt(prompt("Inserisci di seguito il secondo numero"));


let result;
if (isNaN(numberOne) || isNaN(numberTwo)) {
    result = 'Uno dei valori inseriti non è valido';
} else {
    if (numberOne > numberTwo) {
        console.log(`${numberOne}`);
        result = `Il numero più grande è ${numberOne}`;
    } else if (numberOne === numberTwo) {
        console.log("Devono essere due numeri diversi!")
        result = "Devono essere due numeri diversi!"
    } else {
        console.log(`${numberTwo}`);
        result = `Il numero più grande è ${numberTwo}`;
    }
}


displayElement.innerText = result;
