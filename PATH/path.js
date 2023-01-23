const path = require('path');

// apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// nome da extensão do arquivo
console.log(path.extname(__filename));

// cria objeto path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'));


