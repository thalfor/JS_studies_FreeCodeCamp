//
//
const num = 7;
//
//
const main = async () => {
    let soma, anterior = 0;
    let proximo = 1;

    for (let i = 0; i < num; i++){
        soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;
    };

    console.log("número relativo é o: " + anterior);
};
//
main();
//
/*
1
1
2
3
5
8
13
*/