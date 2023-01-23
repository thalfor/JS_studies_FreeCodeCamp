const fs = require("fs");
const path = require("path");
const { isTypedArray } = require("util/types");

// criar uma pasta
// comentado pois já foi rodado uma vez
/*
fs.mkdir(path.join(__dirname, '/test'),(error)=>{
    if(error){
        return console.log('erro: ', error);
    }
    console.log('pasta criada');
});
*/

// criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("erro: ", error);
    }
    console.log("arquivo criado");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " hello world",
      (error) => {
        if (error) {
          return console.log("erro: ", error);
        }
        console.log("arquivo atualizado");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("erro: ", error);
        }
        console.log(data);
      }
    );
  }
);

// para sobrescrever o mesmo arquivo basta fazer o mesmo código
/*
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node', (error) =>{
    if (error) {
        return console.log('erro: ', error);
    }
    console.log('arquivo criado');
});
*/

// adicionar arquivo
// dessa forma sai apenas hello node pois método é assíncrono, necessário colocar dentro do callback da função de append para ler tudo, ver código acima para entendimento
/*
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' hello world', (error) =>{
    if (error) {
        return console.log('erro: ', error);
    }
    console.log('arquivo atualizado');
});
*/

// ler arquivo
// dessa forma sai apenas hello node pois método é assíncrono, necessário colocar dentro do callback da função de append para ler tudo, ver código acima para entendimento
/*
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) =>{
    if (error){
        return console.log('erro: ', error);
    }
    console.log(data);
});
*/
