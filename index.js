function resta(n1,n2){
    let result = n1 - n2;
    return result;
}
function multi(n1,n2){
    let result = n1 * n2;
    return result;
}
function divi(n1,n2){
    let result = n1 / n2;
    return result;
}
const cuadradoNumero = (n) =>{
    return Math.pow(n,2)
}

module.exports = {suma,resta,divi,multi,cuadradoNumero}