console.log("funziona js es. Dadi");

var numRandomPlayer = Math.floor(Math.random() * 6) + 1; 
// Math.floor(Math.random() * (max - min) ) + min;
// valori tra min (incluso) e max (escluso)
console.log("Giocatore lancia: ", numRandomPlayer);

var numRandomAI = Math.floor(Math.random() * 6) + 1;
console.log("Ai lancia: ", numRandomAI);

if(numRandomAI > numRandomPlayer){
    console.log("Hai perso!");
}else if(numRandomAI < numRandomPlayer){
    console.log("Hai vinto!");
}else{
    console.log("Pareggio!");
}