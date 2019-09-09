#!/usr/bin/env node

const chalk = require('chalk');
const figlet= require('figlet');
//const shelljs = require('shelljs');
const inquirer = require('inquirer');


//FUNCION PARA EVALUAR SI LA RUTA ES RELATIVA O ABSOLUTA
const checkPath = (userPath) => {
  if(path.isAbsolute(userPath)) { //"path.isAbsolute"--> determina si la ruta es absoluta
    return userPath;
  }
  return path.resolve(userPath); // "path.resolve"--> vuelve la ruta relativa a absoluta
};

//Funcion para solicitar la ruta a revisar
const inputCli = () => {
  const inputMdLinks = [
    {
      name: 'URL',
      type: 'input',
      message: 'Ruta a analizar:'
    },
  ];
  return inquirer.prompt(inputMdLinks);
};

//Funcion Cabecera de presentacion de la CLI
const headerInitCli = () => {
  console.log(chalk.bgYellow(figlet.textSync('MD  LINKS', {
    font: 'AMC Tubes',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })
  ));
  console.log(chalk.cyan.bold('MODO DE UEJECUCIÓN: \n 1.- Escribe una ruta: (ejemplo: mdlinks-setg <path>'));
  console.log(chalk.cyan.bold('2.- A continuación, deberás elegir alguna de las sig.'));
  console.log(chalk.yellow.bold('Opciones: \n   [--validate]'));
        console.log(chalk.yellow.bold('   [--stats]'));
        console.log(chalk.yellow.bold('   [--validate --stats]'));
        console.log(chalk.yellow.bold('   [--help]'));
  console.log(chalk.cyan.bold('ejemplo: mdlinks-setg <path> --stats'));
};

//Funcion principal para iniciar proyecto
const initCli = async () => {
  //funcion para mostrar cabecera de bienvenida con libreria Figlet
  headerInitCli();
  //funcion que pide al usario la ruta
  const answerMdLinks = await inputCli();
  const {URL} = URLinks;
  checkPath(URL);

};

initCli();

