//
/*
formatos aceitos
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555
1 (555) 555-5555
1 555-555-5555
*/
//
// função pra pegar o elemento na posição N de um array (se for preciso ta na mão)
// let nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
//
//
const telefoneInformado = "555-5555";
const telefoneString = telefoneInformado.toString();
const telefoneArray = [...telefoneString];
let nthElement = (arr, n = 0) =>
  (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
//
if (telefoneString.replace(/[^0-9]/g, "").length === 10) {
  if (nthElement(telefoneArray, 0) != "(") {
    let re2 = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    console.log(re2.test(telefoneString));
  } else {
    let re1 = /^\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$/;
    console.log(re1.test(telefoneString));
  }
} else if (
  telefoneString.replace(/[^0-9]/g, "").length === 11 &&
  nthElement(telefoneArray, 0) === "1"
) {
  let telefoneString2 = telefoneString.slice(1);
  if (nthElement([...telefoneString2], 0) === " ") {
    telefoneString2 = telefoneString2.slice(1);
  }
  if (nthElement([...telefoneString2], 0) != "(") {
    let re2 = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    console.log(re2.test(telefoneString2));
  } else {
    let re1 = /^\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$/;
    console.log(re1.test(telefoneString2));
  }
} else {
  console.log("erroooooou");
}
//
//console.log(telefoneString.replace(/[^0-9]/g,'').length);
//
//
//
