let nome = prompt("inserisci il tuo nome");
let cognome = prompt("inserisci il tuo cognome");
let cp = prompt("inserisci il tuo colore preferito");

let risultato = nome + cognome + cp + 23;

console.log("La password creata è: " + risultato);

document.getElementById("risultato").innerHTML = "La password creata è: " + risultato;

