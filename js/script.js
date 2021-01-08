//***** PAROLA PALINDROMA *********//

//eseguiamo il programma
//L'utente digita una parola e controlliamo che sia palindroma
isPalindrome(prompt('inserire una parola'));

//restituisce la parola al contrario con feedback in console
function reverse(parola) {

  var reversedWord = '';

  for (var i = parola.length; i >= 0; i--) {
    reversedWord = reversedWord.concat(parola.charAt(i));
  }

  console.log('La tua parola è ' + parola);
  console.log('La tua parola al contrario è ' + reversedWord);
  return reversedWord;
}

//Funzione che sfruttando la precedente reverse controlla
//se la parola in input è palindroma  con feedback in console

function isPalindrome(parola) {
  if (parola == reverse(parola)) {
    console.log(parola + ' è un parola palindroma');
    return true;
  }

  console.log(parola + ' non è una parola palindroma');
  return false;
}
