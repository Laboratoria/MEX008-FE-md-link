#!/usr/bin/env node

const prueba = require('./index'); //importa desde index.js

prueba(); //ejecuta la función prueba que importó desde index.js

/*Línea shebang que le indica a la linea de comando que el interprete debe ser node y no bash*/

console.log('hola');


/*******EN ESTA PARTE GUARDO LOS DATOS QUE INTRODUCE EL USUARIO EN LA LINEA DE COMANDOS*********/
//Guarda el "vector de argumentos"en una variable. 
//Es un array cuyos elementos son las palabras usadas para ejecutar el script.
const loquediceusuario = process.argv
// //Declarando validate como falso por defecto
// const validate = false;
// console.log(typeof(validate));
// console.log(validate);
// //Declarando stats como falso por defecto
// const stats=false;
// console.log(typeof(stats));
// console.log(stats);

console.log(loquediceusuario);
console.log(loquediceusuario.length)
//Guardando la ruta que introduce el usuario en una variable
const ruta = process.argv[2];
console.log(ruta);


// const options = (loquediceusuario)=>{
// for(let i=3; i<loquediceusuario.length; i++){
//     if (process.argv[i]=== '--validate'){
//         let validate= true;
//     } else {
//         let validate=false;
//     }
//     if (process.argv[i]=== '--stats'){
//         let stats= true;
//     } else {
//         let stats=false;
//     }
// return validate;
// return stats;
// }
let validate = false;
let stats = false;

let options = (loquediceusuario) => {

  if ((process.argv[3] === '--validate') || (process.argv[4] === '--validate')) {
    validate = true;
  }
  if ((process.argv[3] === '--stats') || (process.argv[4] === '--stats')) {
    stats = true;
  }
  return validate;
  return stats;
};
options();

console.log(validate);
console.log(stats);


// En este archivo debo poder recibir path y options
// Esta información debo poder mandarla a mdlinks.js y demás archivos
