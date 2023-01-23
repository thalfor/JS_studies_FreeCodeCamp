//
// let alfabeto = 'ABCDEFGHIJKLAMNOPQRSTUVWXYZ0123456789';
// console.log([...alfabeto].indexOf('D'));
// resultado deu 3
//
//
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alfabetoArray = [...alfabeto];
const fraseQualquer = 'the quick brown fox jumps over the lazy dog';
let fraseQualquerArray = [...fraseQualquer]
let posicao = 0;
let contador = 0;
for (let i = 0; i < fraseQualquerArray.length; i++){
    posicao = alfabeto.indexOf(fraseQualquerArray[i].toUpperCase());
    contador = alfabeto.indexOf(fraseQualquerArray[i].toUpperCase()) + 13;
    if (contador > 25 & posicao != -1){
        contador = contador - 26;
        fraseQualquerArray.splice(i,1,alfabetoArray[contador]);
    } else if (contador <= 25 & posicao != -1) {
        fraseQualquerArray.splice(i,1,alfabetoArray[contador]);
    }
}
console.log(fraseQualquerArray.join('').toString());
//
//
//
//
//
//
//
//
//
//
//