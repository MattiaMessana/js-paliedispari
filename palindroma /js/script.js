// chiediamo una parola all'utente e scriviamo se è palindroma 


//1. creiamo una funzioni che inverta la parola 
//2. creiamo una funzione che controlli se la parola è palindroma 

//con un prompt  chiedo una parola all'utente
const userWord = prompt('dimmi una parola');
console.log(userWord);

//invochiamo la funzione per controllare se la parola dell'utente sia palindroma 
const wordPalindrom = isPalindrome(userWord);

//stampiamo output
if (wordPalindrom) {
    alert('è palindroma ')
} else {
    alert('non è palindroma')
}