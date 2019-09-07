#!/usr/bin/env node

//libraries
//filesystem
const fs = require('fs');
//path
const path = require('path');
//Comandos de shell portátiles de Unix
const shelljs = require('shelljs');
// colores para la cli
const chalk = require('chalk');
// cabeceras con caracteres y diferentes estilos de tipografia
const figlet = require('figlet');
//colección de interfaces de usuario de línea de comando comunes
const inquirer = require('inquirer');

//funcion para leer archivo

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
  const { URL } = answer;
  console.log(answer);

};
  initMdLinks();