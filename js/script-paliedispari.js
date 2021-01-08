//***** PARI O DISPARI ******//

//L'utente decide se vince pari, si parte dalla situazione in cui vince dispari
var utenteVinceConPari = false;

var sceltaUtente = prompt(' pari o dispari?');

if (sceltaUtente == 'pari') {
  utenteVinceConPari = true;
}

//Stampiamo in console il risultato della scelta dell'utente
if (utenteVinceConPari) {
  console.log('Vince Pari');
} else {
  console.log('Vince Dispari');
}

//Otteniamo un numero scelto dall'utente e dalla Cpu
var numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'));
console.log('Hai scelto ' + numeroUtente);
var numeroComputer = Math.ceil(Math.random() * 5);
console.log('il computer ha scelto' + numeroComputer);

//otteniamo il numero finale
var somma = numeroUtente + numeroComputer;
console.log('Il totale è ' + somma);

//Valutiamo il vincitore
if ((utenteVinceConPari && somma % 2 === 0) || (!utenteVinceConPari && somma % 2 != 0)){
  console.log('utente vince');
} else {
  console.log('vince la cpu');
}
