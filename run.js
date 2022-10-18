let myLib = require("./index");
let myLib2 = require("./libreriaVector");

/*console.log(myLib.suma(1,1));
console.log(myLib.resta(2,2));
console.log(myLib.multi(3,3));
console.log(myLib.divi(4,4));*/

console.log(myLib2.crearVector(10,10));
console.log(myLib2.sumaVector(myLib2.crearVector(10,10),myLib2.crearVector(10,10)));
//console.log(myLib2.productoNumeroVector(Math.floor(Math.random() * 10)),myLib2.crearVector(10,10));
console.log(myLib2.restaVector(myLib2.crearVector(10,10),myLib2.crearVector(10,10)));
console.log(myLib2.productoVector(myLib2.crearVector(10,10),myLib2.crearVector(10,10)));