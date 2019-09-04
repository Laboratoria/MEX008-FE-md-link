#!/usr/bin/env node

const fs= require('fs');
const path = require('path');







// // -----------------------------------
// fs.readdir(process.argv[2], (err, files) => {
//   //console.log(files);
//   //recorrer los arrays
//   //files.forEach( (file) => {
//     const filterFiles = files.filter( (file) => {
//       return path.extname(file) === '.' + process.argv[3]
//     })
//     .forEach( (file) => { console.log(file);
//     });

//     // console.log(filterFiles);
//     // console.log(files);
//     //console.log(file);
//     /*if(path.extname(file) === '.' + process.argv[3]) {
//       console.log(file);
//       */
//     });










// console.log('hola');

// const file = process.argv[2];
// // readfile le inyecta el valor a la funcion anonima
// fs.readFile(file, 'utf8', (err,data) => {
//   let numLines = data.split('\n').length -1;
  
//   console.log(numLines);

// });

// console.log('chao');






//leyendo lineas del archivo
/*
const numLines = 
fs.readFileSync(process.argv[2], 'utf8')
.split('\n').length -1;

console.log(numLines);
*/





// //libraries

// //filesystem
// const fs = require('fs');
// //Comandos de shell portátiles de Unix
// const shelljs = require('shelljs');
// // colores para la cli
// const chalk = require('chalk');
// // cabeceras con caracteres y diferentes estilos de tipografia
// const figlet = require('figlet');
// //colección de interfaces de usuario de línea de comando comunes
// const inquirer = require('inquirer');



// //cachar la respuesta del usuario, link



// //1.2 funcion para mostrar instrucciones
// const initInstruction = () => {
//   const instruction = [
//     {
//       name: "URL",
//       type: "input",
//       message: "Introduce la ruta para analizar tu archivo : "
//     },
//   ];
//   return inquirer.prompt(instruction);
// }


// //1.1 iniciando funcion cabecera de bievenida a md-links setg
// const initLibrary = () => {
//   console.log(
//     chalk.green(
//       figlet.textSync('MD-LINKS SETG', {
//         font: "AMC Slash",
//         horizontalLayout:"default",
//         verticalLayout: "default"
//       })
//     )
// );
// };

// //1.- Funcion principal MDLINKS
// const mdLinks = async () => {
//   //mostrar texto de presentacion de la libreria md-links
//   initLibrary();
//   //y solicitar que introduzca el link a analizar
//   initInstruction();
//   //
//   catchInput();

//   //

  
// };

// mdLinks();
// //guardando pequeño avance

// /*module.exports = () => {
//   // ...
// };
// */
