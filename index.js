#!/usr/bin/env node


//libraries

//Comandos de shell portátiles de Unix
const shelljs = require('shelljs');
// colores para la cli
const chalk = require('chalk');
// cabeceras con caracteres y diferentes estilos de tipografia
const figlet = require('figlet');
//colección de interfaces de usuario de línea de comando comunes
const inquirer = require('inquirer');

// funcion presentacion de la libreria
const initLibrary = () => {
  console.log(
    chalk.bgGreen(
      figlet.textSync('MD-LINKS SETG', {
        font: "AMC Neko"
      })
    )



)

}

//Funcion principal MDLINKS
const mdLinks = async () => {
  /*mostrar texto de presentacion de la libreria md-links
  y solicitar que introduzca el link a analizar*/


  //

  
};

mdLinks();

/*module.exports = () => {
  // ...
};
*/
