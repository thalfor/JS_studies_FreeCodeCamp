//
// separando da esquerda para direita: unitário, dezena, centena, milhar
/*
let num = 1346;
console.log(num % 10);
console.log(Math.floor((num % 100)/10));
console.log(Math.floor((num % 1000)/100));
console.log(Math.floor(num / 1000));
*/
//
const num = 1234;
//
let pos1, pos2, pos3, pos4 = '';
const unitario = 'I';
const dezena = 'X';
const centena = 'C';
const milhar = 'M';
const numUnitario = num % 10;
const numDezena = Math.floor((num % 100)/10);
const numCentena = Math.floor((num % 1000)/100);
const numMilhar = Math.floor(num / 1000);
//
//
function concatRomano (number,posicao,unidade){
    if (number > 1 & number < 4) {
        for (let i = 2; i <= number; i++){
            posicao = posicao.concat(unidade);
        }
    } else if (number > 5 & number < 9) {
        for (let i = 6; i <= number; i++){
            posicao = posicao.concat(unidade);
        }
    }
    return posicao;
}
//
// case para unitário
switch (numUnitario){
    case 0:
        pos1 = '';
    break;
    case 1:
    case 2:
    case 3:
        pos1 = 'I';
    break;
    case 4:
        pos1 = 'IV';
    break;
    case 5:
    case 6:
    case 7:
    case 8:
        pos1 = 'V';
    break;
    case 9:
        pos1 = 'IX';
    break;
}
//
pos1 = concatRomano(numUnitario,pos1,unitario);
//
// case para dezena
switch (numDezena){
    case 0:
        pos2 = '';
    break;
    case 1:
    case 2:
    case 3:
        pos2 = 'X';
    break;
    case 4:
        pos2 = 'XL';
    break;
    case 5:
    case 6:
    case 7:
    case 8:
        pos2 = 'L';
    break;
    case 9:
        pos2 = 'XC';
    break;
}
//
pos2 = concatRomano(numDezena,pos2,dezena);
//
// case para centena
switch (numCentena){
    case 0:
        pos3 = '';
    break;
    case 1:
    case 2:
    case 3:
        pos3 = 'C';
    break;
    case 4:
        pos3 = 'CD';
    break;
    case 5:
    case 6:
    case 7:
    case 8:
        pos3 = 'D';
    break;
    case 9:
        pos3 = 'CM';
    break;
}
//
pos3 = concatRomano(numCentena,pos3,centena);
//
// case para milhar
switch (numMilhar){
    case 0:
        pos4 = '';
    break;
    case 1:
    case 2:
    case 3:
        pos4 = 'M';
    break;
}
//
pos4 = concatRomano(numMilhar,pos4,milhar);
//
//
//
// juntando os números como um todo
//
console.log(pos4.concat(pos3.concat(pos2).concat(pos1)));
//
//
//
//
//
/*
// check para cada posição
console.log(pos1);
console.log(pos2);
console.log(pos3);
console.log(pos4);
*/
//