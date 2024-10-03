/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum(numero1, numero2) {
    if (numero1===numero2) {console.log((numero1+numero2) * 3)
    }
else {
    console.log(numero1+numero2)
}             
    } 

    crazySum(6,6); 


    ARROW FUNCTION


    let crazySum=(numero1, numero2) =>{
    if (numero1===numero2) {console.log((numero1+numero2) * 3)
    }
else {
    console.log(numero1+numero2)
}             
}
    crazySum(6,6); 


*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 
     function boundary (numero1) {
        if (numero1>20 && numero1<=100 || numero1===400) {
            console.log(true)
        }

        else {            
        console.log(false)
        }
     }

     boundary(400) 


     ARROW FUNCTION

     let boundary=numero1=> {
        if ((numero1>20 && numero1<=100) || numero1===400) {
            console.log(true);
        }
        else {            
        console.log(false);
        }
     }
     boundary(400) 
     */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 

      function reverseString (string) {
for (let  i=string.length-1; i>=0; i--) {
        console.log(string[i])
      }
    }

reverseString("test")


ARROW FUNCTION

let reverseString=string =>{
    for (let  i=string.length-1; i>=0; i--) {
            console.log(string[i])
          }
}

        reverseString("test")


*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* function upperFirst (sentence) {
let words=sentence.split(' ');

for (i=0; i<=words.length; i++){
if (words[i]){ 
    words[i]=words[i][0].toUpperCase() + words[i].substring(1);
}
}

return words.join(' ');

}

console.log(upperFirst ("my cat's name is Chanel"));
console.log(upperFirst("today's a good day"))


ARROW FUNCTION


let upperFirst=sentence=> {
let words=sentence.split(' ');
for (i=0; i<=words.length; i++){
if (words[i]){ 
    words[i]=words[i][0].toUpperCase() + words[i].substring(1);
}
}

console.log(words.join(' '));

}

console.log(upperFirst ("my cat's name is Chanel"));
console.log(upperFirst("today's a good day"))



*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 
function giveMeRandom (n) {

let ar1= [];

for (let i=0; i<n; i++) {
    ar1.push(Math.floor(Math.random()*11))
}
return ar1
}

console.log(giveMeRandom(15))


ARROW FUNCTION

let giveMeRandom=n =>{
let ar1= [];
for (let i=0; i<n; i++) {
    ar1.push(Math.floor(Math.random()*11))
}
console.log(ar1)    
}

console.log(giveMeRandom(15))
*/





//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 
function area (l1,l2) {
    return l1*l2  
}

console.log(area(20,10)) 

ARROW FUNCTION

let area=(l1,l2) => 
     l1*l2  

console.log(area(10,10)) 



*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 
 function crazyDiff (n) {
 let differenza = n-19;
 
 if (differenza>19)  {console.log(differenza*3)
    }
else {console.log(differenza)}
 }

 crazyDiff(80)

 ARROW FUNCTION

 let crazyDiff=n=> {
 let differenza = n-19;
 
 if (differenza>19)  {console.log(differenza*3)
    }
else {console.log(differenza)}
 }

 crazyDiff(80)

 */



/* WORKING ON IT

ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
