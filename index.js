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

//1.2 funcion para mostrar instrucciones
const initInstruction = () => {
  const instruction = [
    {
      name: "FICHERO",
      type: "input",
      message: "Introduce la ruta para analizar tu archivo : "
    },
  ];
  return inquirer.prompt(instruction);
}


//1.1 iniciando funcion cabecera de bievenida a md-links setg
const initLibrary = () => {
  console.log(
    chalk.green(
      figlet.textSync('MD-LINKS SETG', {
        font: "Standard",
        horizontalLayout:"default",
        verticalLayout: "default"
      })
    )
);
};

//1.- Funcion principal MDLINKS
const mdLinks = async () => {
  //mostrar texto de presentacion de la libreria md-links
  initLibrary();
  //y solicitar que introduzca el link a analizar
  initInstruction();
  

  //

  
};

mdLinks();

/*module.exports = () => {
  // ...
};
*/
