/**
 * Description controllliamo che la parola sia palindroma
 * @param {string} word
 * @returns {boolean} se è tru allora la parola è palindorma altrimenti è false
 */
function isPalindrome (word) {
    const reverseWord = getReverseString(word);
    if ( word === reverseWord) {
        return true;
    } else {
        return false;
    }
}


/**
 * Description funzione che inverte la parola scritta dall'utente
 * @param {any} stringToReverse
 * @returns {any}
 */
function getReverseString(stringToReverse) {
    let reverseString = "";
    for (let i = stringToReverse.length - 1; i >= 0 ; i--) {
        const curLetter = stringToReverse[i];
        reverseString += curLetter;
    }
    return reverseString;
}