const path = require("path");

// current dir file name
console.log(path.basename(__filename));

// current dir name
console.log(path.dirname(__filename));

// file extension name
console.log(path.extname(__filename));

// creates the object path name
console.log(path.parse(__filename));

// joining the names for a full dir
console.log(path.join(__dirname, "teste", "teste.html"));
