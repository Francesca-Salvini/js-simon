// CONSEGNA ESERCIZIO
// Un alert() espone 5 numeri generati casualmente. 
//
// Da li parte un timer di 30 secondi. 
//
//Dopo 30 secondi l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt(). 
//
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
//e quali dei numeri da indovinare sono stati individuati.


// step 1 : un alert espone 5 numeri generati casualmente
// creo un array che conterrà i 5 numeri random (tra 1 e 100 compresi)
var randomNumbers = [];
var numeri = 5; 

// creo un ciclo WHILE per generare i numeri random finché l'array conterrà 5 numeri
// nell'array non ci devono essere numeri ripetuti
while(randomNumbers.length < numeri) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    //se l'array non contiene già il numero generato randomicamente, 
    //allora lo aggiunge al resto della lista
    if(!randomNumbers.includes(randomNumber)){
        randomNumbers.push(randomNumber);
    }
}
console.log(randomNumbers);

// un alert espone i 5 numeri randomici
alert(randomNumbers);

// step 2 : parte un timer di 30 secondi

// creo una variabile per i secondi (30)
var seconds = 30;
// creo un array vuoto dove andranno ad aggiungersi i numeri inseriti dall'utente
var numeriUtente = [];
// tramite un setInterval avvio il countdown di 30 secondi
var countdown = setInterval( function (){
    console.log(seconds);
    seconds-- ;
    if (seconds === 0) {
        // interrompo il countdown quando i secondi arrivano a 0
        clearInterval(countdown);
        //creo un ciclo WHILE affinché l'utente inserisca 5 numeri 
        //in 5 prompt diversi alla fine del countdown
        while(numeriUtente.length < numeri){
            var numeroUtente = parseInt(prompt('Che numero ricordi?'));
            //pusho i numeri inseriti dall'utente nel rispettivo array numeriUtente[]
            numeriUtente.push(numeroUtente);
            console.log(numeriUtente);
        }
        
    }
}, 1000);



