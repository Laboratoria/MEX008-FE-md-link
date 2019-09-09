#!/usr/bin/env node

// import { mdLinks } from './src/index';
// import { getLinksStats, getBrokenLinksStats } from "./src/optionsfile";
"use strict";

const index = require('./src/index.js');
const options = require('./src/optionsfile.js');
// const getLinksStats = require('./src/optionsfile');
// const getBrokenLinksStats = require('./src/optionsfile.js');

const chalk = require('chalk');
const figlet = require('figlet');

const args = process.argv.slice(2);

//OPCIONES
const optionsCli= {
    validate: false,
    stats: false
};
//SI EL USUARIO NO INTRODUCE RUTA
if(args.length === 0) {
    console.log(chalk.bgYellow(figlet.textSync('MD  LINKS', {
            font: 'AMC Tubes',
            horizontalLayout: 'default',
            verticalLayout: 'default'
          })),
    console.log(chalk.yellow('Por favor, ingresa una ruta :)')));
};
//SI EL USUARIO INTRODUCE RUTA SIN OPCIONES
if(args.length === 1) {
    index.mdLinks(args[0], optionsCli)
    .then(response => 
        response.forEach((links) =>
        console.log(chalk.green(`\n Path :${links.file}
                                 \n Link : ${links.href}
                                 \n Texto : ${links.text}`))));
};
//SI EL USUARIO INTRODUCE RUTA CON OPCION STATS
if(args.length === 2) {
    if(args[1] === '--stats' || args[1] === '--s') {
        optionsCli.stats = true;
        optionsCli.getLinksStats(args[0])
        .then(response =>
            console.log(response))
        .catch(error =>
            console.log(chalk.red(error)));
    };
    //SI LA OPCION ES IGUAL A VALIDATE O V
    if (args[1] === '--validate' || args[1] === '--v') {
        optionsCli.validate = true;
        index.mdLinks(args[0], options)
          .then(response => 
            response.map(links =>
                console.log(chalk.green(`\n Path :${links.file}
                                         \n Link : ${links.href}${links.status}${links.message}
                                         \n texto : ${links.text} `))))
      };
};

//SI INTRODUCE RUTA Y SELCCIONA LAS DOS OPCIONES 
if (args.length === 3) {
    if (args[1] === '--validate' && args[2] === '--stats' || args[1] === '--stats' && args[2] === '--validate') {
      optionsCli.validate = true;
      optionsCli.stats = true;
      Promise.all([options.getLinksStats(args[0]), options.getBrokenLinksStats(args[0])])
        .then(response =>
            response.forEach(properties =>
                console.log(chalk.blue(properties))))
        .catch(error => console.log(chalk.red(error)));
    }
  };