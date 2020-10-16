console.log("js funziona!");
/* primo esercizio  */


var listaEmailAdmin = ["pippo2@gmail.com", "danieleC3@gmail.com", "marco@gmail.com", "pincoAdmin@gmail.com"];
var emailUtente;
var emailValida = false;

emailUtente = prompt("Inserire la tua email di accesso: ");

// for(var i = 0; i <= listaEmailAdmin.length - 1; i++){
//         if(listaEmailAdmin[i] == emailUtente){
//            emailValida = true;
//         }
// }
// if(emailValida == true){
//     console.log("Benvenuto, " + emailUtente);
//     document.getElementById('risultato').innerHTML = "Benvenuto, " + emailUtente;
// }else {
//     console.log("Errore, hai inserito una email errata!");
//     document.getElementById('risultato').innerHTML = "Errore, hai inserito una email errata!";
// }



// alternativa
// NOTA: non mi partono gli output console e document
console.log("hai digitato: " + emailUtente);
for(var i = 0; i < listaEmailAdmin; i++){
    console.log("Ciaoooo sono dentro al loop for!");
    if(listaEmailAdmin[i] == emailUtente){
        emailUtente = true;
        console.log("Benvenuto " +  emailUtente);
        document.getElementById('risultato').innerHTML = "Benvenuto, " + emailUtente;
    }
}

if(emailUtente === false){
   console.log("Errore, hai inserito una email errata!");
   document.getElementById('risultato').innerHTML = "Errore, hai inserito una email errata!";
}