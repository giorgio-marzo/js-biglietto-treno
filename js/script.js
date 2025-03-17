/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

let numerokm = prompt(`inserisci distanza viaggio in Km`);//numero di kilometri

let etàPasseggero = prompt(`quanti anni hai ?`);

let prezzoKm;

let prezzoFinale;

let scontoUnder18;

let scontoOver60;

prezzoKm = numerokm * 0.21;
console.log(`prezzo in km sono: ${prezzoKm} € `); // impostato prezzo in km * 0.21 (es:10 km = 21 €)

if(etàPasseggero < 18){;
etàPasseggero = scontoUnder18
    scontoUnder18 = prezzoKm - prezzoKm * 20/100;
    scontoUnder18 = prezzoFinale
    console.log(`sconto minorenni`)
}

else if(etàPasseggero > 60){;
    etàPasseggero = scontoOver60
    scontoOver60 = prezzoKm - prezzoKm * 40/100;
    scontoOver60 = prezzoFinale
    console.log(`sconto sopra i 60`)
}

else{
    prezzoKm = prezzoFinale
}



console.log(`il prezzo finale è: ${prezzoFinale} €`)