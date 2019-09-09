






/*
//libraries
//filesystem
const fs = require('fs');
//path
//const path = require('path');
//Comandos de shell portátiles de Unix
const shelljs = require('shelljs');
// colores para la cli
const chalk = require('chalk');
// cabeceras con caracteres y diferentes estilos de tipografia
const figlet = require('figlet');
//colección de interfaces de usuario de línea de comando comunes
const inquirer = require('inquirer');



//funcion para leer archivo
const readDocumentsLinks= () => {
  fs.readdir('./', (error, files) => {
    if(error) {
      throw error;
    }
    console.log(files);

    fs.readFile(process.argv[2], 'UTF-8', (error,file) => {
      if(error) {
        throw error;
      }
      console.log(chalk.black.bgGreenBright(file));
    });
    console.log(chalk.cyan('Contenido del archivo ....'));
  });
};
//readDocument();

//Funcion para mostrar instruccion
const mdLinksInstruction = () => {
  const oneInstruction = [
    {
      name: 'URL',
      type: 'input',
      message: 'Introduce una ruta válida para comenzar: '
    },
  ];
  return inquirer.prompt(oneInstruction);
};

//iniciando funcion cabecera
const headerMdlinks = () => {
  console.log(
    chalk.blue(
      figlet.textSync('MD LINKS', {
        font: 'AMC Tubes',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

//Funcion principal para iniciar todo
const initMdLinks = async () => {
  //mostrar cabecera de bienvenida-inicio-
  headerMdlinks();
  //solicitar que introduzca el link a analizar
  //mdLinksInstruction();
  //respuestas-await es la espera de la respuesta
  const answerMdLinks= await mdLinksInstruction();
  const { URL } = readDocumentsLinks();
  console.log(URL);

};
  initMdLinks();
  */