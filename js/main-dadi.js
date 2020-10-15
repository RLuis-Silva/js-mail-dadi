console.log("funziona js es. Dadi");
var output;
var risultatoAI, risultatoGiocatore;
var numRandomPlayer = Math.floor(Math.random() * 6) + 1; 
// Math.floor(Math.random() * (max - min) ) + min;
// valori tra min (incluso) e max (escluso)
console.log("Giocatore lancia: ", numRandomPlayer);

var numRandomAI = Math.floor(Math.random() * 6) + 1;
console.log("Ai lancia: ", numRandomAI);



if(numRandomAI > numRandomPlayer){
    //console.log("Hai perso!");
    risultatoAI = "AI lancia: " + numRandomAI;
    risultatoGiocatore = "Giocatore lancia:" + numRandomPlayer;
    output = "Hai perso, gli Dei non ti amano!";
}else if(numRandomAI < numRandomPlayer){
    //console.log("Hai vinto!");
    risultatoAI = "AI lancia: " + numRandomAI;
    risultatoGiocatore = "Giocatore lancia:" + numRandomPlayer;
    output = "Hai Vinto, sei baciato dalla fortuna!"
}else{
    //console.log("Pareggio, aaah per Gli Dei!");
    risultatoAI = "AI lancia: " + numRandomAI;
    risultatoGiocatore = "Giocatore lancia:" + numRandomPlayer;
    output = "Pareggio, aaah per Gli Dei!";
}

document.getElementById('AI').innerHTML = risultatoAI;
document.getElementById('giocatore').innerHTML = risultatoGiocatore;
document.getElementById('vittoria').innerHTML = output;