//
function checkCashRegister(price, cash, cid) {
    const currency = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.10,
        "NICKEL": 0.05,
        "PENNY": 0.01
    }

    let change = cash - price;
    let changeAnswer = { status: '', change: [] };

    for (let i = cid.length - 1; i >= 0; i--) {
        const currencyValue = currency[cid[i][0]];
        if (cid[i][1] > 0) {
            if (change / currencyValue > 1) {
                let times = Math.floor(change / currencyValue);
                if (times*currencyValue > cid[i][1]) {
                    times = cid[i][1]/currencyValue;
                };
                change = parseFloat((change - currencyValue * times).toFixed(2));
                changeAnswer.change.push([cid[i][0], currencyValue * times]);
            }
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