#!/usr/bin/env node

//importando MDLINKS de acuerdo al readme
const chalk = require('chalk');
const figlet= require('figlet');
//const shelljs = require('shelljs');
const inquirer = require('inquirer');

const mdLinks = require('./src/index.js');
const [, , ...args] = process.argv;
const directory = args.shift();
const options = {
  validate: false,
  stats: false,
};


const ejectProject = () => {

    const instructions = () => {
        console.log('Uso: \n   md-links <path> [options]');
        console.log('Opciones: \n   [--validate]');
        console.log('   [--stats]');
        console.log('   [--validate --stats]');
        console.log('   [--help]');
      };
      
      if (directory && args.includes('--stats') && args.includes('--validate')) {
        options.stats = true;
        options.validate = true;
        mdLinks(directory, options)
          .then(result => {
            console.log(`Total: ${result.total} \nUnique: ${result.unique} \nBroken: ${result.broken} `);
          });
      } else if (directory && args[0] === undefined) {
        options.stats = false;
        options.validate = false;
        mdLinks(directory, options)
          .then(result => {            
            result.forEach(element => {
              console.log(`${element.file}  ${element.href}  ${element.text}`);
            });
          });
      } else if (directory && args[0] === '--validate') {
        options.validate = true;
        options.stats = false
        mdLinks(directory, options)
          .then(result => {            
            result.forEach(element => {
              console.log(`${element.file}  ${element.href}  ${element.text}  ${element.status}`);
            });
          });
      } else if (directory && args[0] === '--stats') {
        options.stats = true;
        mdLinks(directory, options)
          .then(result => {      
            console.log(`Total: ${result.total} \nUnique: ${result.unique}`);
          });
      } else if (directory === '--help') {
        instructions();
      } else if (directory !== '--help' || route !== 'md-links') {
        console.log('Ruta ingresada no existe. \nIngrese comando --help');
      };
};

    
  
  
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
    const {URL}= ejectProject();
    console.log(URL);
    
  
  };
    initMdLinks();
