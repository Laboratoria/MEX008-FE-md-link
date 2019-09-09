#!/usr/bin/env node

// import { mdLinks } from './src/index';
// import { getLinksStats, getBrokenLinksStats } from "./src/optionsfile";

const chalk = require('chalk');

const args = process.argv.slice(2);

//OPCIONES
const options= {
    validate: false,
    stats: false
};
//SI EL USUARIO NO INTRODUCE RUTA
if(args.length === 0) {
    console.log(chalk.yellow('Por favor, ingresa una ruta :)'));
}
//SI EL USUARIO INTRODUCE RUTA SIN OPCIONES
if(args.length === 1) {
    mdLinks(args[0], options)
    .then(response => 
        response.forEach((links) =>
        console.log(chalk.green(`\n Path :${links.file}
                                 \n Link : ${links.href}
                                 \n Texto : ${links.text}`))));
};
//SI EL USUARIO INTRODUCE RUTA CON OPCION STATS
if(args.length === 2) {
    if(args[1] === '--stats' || args[1] === '--s') {
        options.stats = true;
        getLinksStats(args[0])
        .then(response => console.log(response))
        .catch(error =>
            console.log(chalk.red('error')));
    };
    //SI LA OPCION ES IGUAL A VALIDATE O V
    if (args[1] === '--validate' || args[1] === '--v') {
        options.validate = true;
        mdLinks(args[0], options)
          .then(response => 
            response.map(links =>
                console.log(chalk.green(
                    `\n Path :${links.file}
                    \n Link : ${links.href}${links.status}${links.message}
                    \n texto : ${links.text} `))))
      };
};

//SI INTRODUCE RUTA Y SELCCIONA LAS DOS OPCIONES 
if (args.length === 3) {
    if (args[1] === '--validate' && args[2] === '--stats' || args[1] === '--stats' && args[2] === '--validate') {
      options.validate = true;
      options.stats = true;
      Promise.all([getLinksStats(args[0]), getBrokenLinksStats(args[0])])
        .then(response => response.forEach(properties => console.log(properties)))
        .catch(error => console.log(error));
    }
  };

