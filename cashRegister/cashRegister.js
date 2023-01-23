//
/*
necessário fazer uma função que entenda:
- Primeiro argumento: preço do produto.
- Segundo argumento: valor pago pelo cliente.
- Terceiro argumento: o que há disponível no caixa para fornecer o troco ou não

dado isso é necessário retornar:
{status: "INSUFFICIENT_FUNDS", change: []} - se o troco necessário é maior que o montante do caixa OU não há como dar o troco exato (vide exemplos abaixo)
{status: "CLOSED", change: [...]} - se o troco necessário é igual ao montante do caixa
{status: "OPEN", change: [...]} - se o troco necessário é menor ao montante do caixa

exemplos:
checkCashRegister(
    19.5, 
    20, 
    [
        ["PENNY", 1.01], 
        ["NICKEL", 2.05], 
        ["DIME", 3.1], 
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]
    ]
) 
should return 
{
    status: "OPEN", 
    change: [
        ["QUARTER", 0.5]
    ]
}

checkCashRegister(
    19.5, 
    20, 
    [
        ["PENNY", 0.01], 
        ["NICKEL", 0], 
        ["DIME", 0], 
        ["QUARTER", 0], 
        ["ONE", 0], 
        ["FIVE", 0], 
        ["TEN", 0], 
        ["TWENTY", 0], 
        ["ONE HUNDRED", 0]
    ]
) should return 
{
    status: "INSUFFICIENT_FUNDS", 
    change: []
}

checkCashRegister(
    19.5, 
    20, 
    [
        ["PENNY", 0.01], 
        ["NICKEL", 0], 
        ["DIME", 0], 
        ["QUARTER", 0], 
        ["ONE", 1], 
        ["FIVE", 0], 
        ["TEN", 0], 
        ["TWENTY", 0], 
        ["ONE HUNDRED", 0]
    ]
) should return 
{
    status: "INSUFFICIENT_FUNDS", 
    change: []
}

checkCashRegister(
    19.5, 
    20, 
    [
        ["PENNY", 0.5], 
        ["NICKEL", 0], 
        ["DIME", 0], 
        ["QUARTER", 0], 
        ["ONE", 0], 
        ["FIVE", 0], 
        ["TEN", 0], 
        ["TWENTY", 0], 
        ["ONE HUNDRED", 0]
    ]
) should return 
{
    status: "CLOSED", 
    change: [
        ["PENNY", 0.5], 
        ["NICKEL", 0], 
        ["DIME", 0], 
        ["QUARTER", 0], 
        ["ONE", 0], 
        ["FIVE", 0], 
        ["TEN", 0], 
        ["TWENTY", 0], 
        ["ONE HUNDRED", 0]
    ]
}
*/
//
//
function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let changeAnswer = {status: '', change: []}

    for (let i = cid.length - 1; i >= 0; i--){
        switch(cid[i][0]){
            case 'ONE HUNDRED':
                if (cid[i][1] > 0){
                    if (change / 100 > 1){
                        let vezes = Math.floor(change / 100);
                        if (vezes*100 > cid[i][1]) {vezes = cid[i][1]/100};
                        change = parseFloat((change - 100 * vezes).toFixed(2));
                        changeAnswer.change.push(['ONE HUNDRED', 100*vezes]);
                    }
                }
            break;
            case 'TWENTY':
                if (cid[i][1] > 0){
                    if (change / 20 > 1){
                        let vezes = Math.floor(change / 20);
                        if (vezes*20 > cid[i][1]) {vezes = cid[i][1]/20};
                        change = parseFloat((change - 20 * vezes).toFixed(2));
                        changeAnswer.change.push(['TWENTY', 20*vezes]);
                    }
                }
            break;
            case 'TEN':
                if (cid[i][1] > 0){
                    if (change / 10 > 1){
                        let vezes = Math.floor(change / 10);
                        if (vezes*10 > cid[i][1]) {vezes = cid[i][1]/10};
                        change = parseFloat((change - 10 * vezes).toFixed(2));
                        changeAnswer.change.push(['TEN', 10*vezes]);
                    }
                }
            break;
            case 'FIVE':
                if (cid[i][1] > 0){
                    if (change / 5 > 1){
                        let vezes = Math.floor(change / 5);
                        if (vezes*5 > cid[i][1]) {vezes = cid[i][1]/5};
                        change = parseFloat((change - 5 * vezes).toFixed(2));
                        changeAnswer.change.push(['FIVE', 5*vezes]);
                    }
                }
            break;
            case 'ONE':
                if (cid[i][1] > 0){
                    if (change / 1 > 1){
                        let vezes = Math.floor(change / 1);
                        if (vezes*1 > cid[i][1]) {vezes = cid[i][1]/1};
                        change = parseFloat((change - 1 * vezes).toFixed(2));
                        changeAnswer.change.push(['ONE', 1*vezes]);
                    }
                }
            break;
            case 'QUARTER':
                if (cid[i][1] > 0){
                    if (change / 0.25 > 1){
                        let vezes = Math.floor(change / 0.25);
                        if (vezes*0.25 > cid[i][1]) {vezes = cid[i][1]/0.25};
                        change = parseFloat((change - 0.25 * vezes).toFixed(2));
                        changeAnswer.change.push(['QUARTER', 0.25*vezes]);
                    }
                }
            break;
            case 'DIME':
                if (cid[i][1] > 0){
                    if (change / 0.1 > 1){
                        let vezes = Math.floor(change / 0.1);
                        if (vezes*0.1 > cid[i][1]) {vezes = cid[i][1]/0.1};
                        change = parseFloat((change - 0.1 * vezes).toFixed(2));
                        changeAnswer.change.push(['DIME', 0.1*vezes]);
                    }
                }
            break;
            case 'NICKEL':
                if (cid[i][1] > 0){
                    if (change / 0.05 > 1){
                        let vezes = Math.floor(change / 0.05);
                        if (vezes*0.05 > cid[i][1]) {vezes = cid[i][1]/0.05};
                        change = parseFloat((change - 0.05 * vezes).toFixed(2));
                        changeAnswer.change.push(['NICKEL', 0.05*vezes]);
                    }
                }
            break;
            case 'PENNY':
                if (cid[i][1] > 0){
                    if (change / 0.01 > 1){
                        let vezes = Math.floor(change / 0.01);
                        if (vezes*0.01 > cid[i][1]) {vezes = cid[i][1]/0.01};
                        change = parseFloat((change - 0.01 * vezes).toFixed(2));
                        changeAnswer.change.push(['PENNY', 0.01*vezes]);
                    }
                }
            break;
            
        }
    }

    let somaTroco = 0;
    for(let k = 0;k<changeAnswer.change.length; k++){
        somaTroco += changeAnswer.change[k][1];
    }
    let somaCaixa = 0;
    for(let k = 0;k<cid.length; k++){
        somaCaixa += cid[k][1];
    }

    if(change > 0){
        changeAnswer.status = 'INSUFFICIENT_FUNDS';
        changeAnswer.change = [];
    } else if (change === 0 && (somaTroco < somaCaixa)){
        changeAnswer.status = 'OPEN';
    } else {
        changeAnswer.status = 'CLOSED';
        changeAnswer.change = cid;
    }
    return changeAnswer;
}
//
console.log(checkCashRegister(
    3.26, 
    100, 
    [
        ["PENNY", 1.01], 
        ["NICKEL", 2.05], 
        ["DIME", 3.1], 
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]
    ]
))
//
//