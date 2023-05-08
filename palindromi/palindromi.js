/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */


let word = prompt('Inserisci la parola da controllare: ');  

let wordReverse = reverseWord(word);         

function reverseWord(str){
    let wordReverse = '';

    let i = str.length - 1;
        while (i >= 0) {
            wordReverse += str[i];
            i--;
        }
    return wordReverse;
}

if (word == wordReverse ){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}


/*
Esempio di programma palinromo trovato on line

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value); */