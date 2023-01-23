//
// checador de palíndromo robreize
//
let reverso_palin = function(str) {
    const blabla = str.toString().replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    if ([...blabla].reverse().join('') === blabla){
        return true;
    }
    return false;
}
//
console.log(reverso_palin(''));
//