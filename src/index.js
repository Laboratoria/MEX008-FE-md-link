const fs = require('fs');
const optionsLinks = require('./optionsfile.js');
const validations = require('./pathreadfile.js');

const mdLinks = (path, options) => {
  const resultFinal = {};
  const objTotalLinks = [];
  if (fs.existsSync(path)) {
    const pathAbsolute = validations.checkPath(path);
    const arraypathFileMd = validations.readUserPath(pathAbsolute);
    return new Promise((resolve, reject) => {
      if (!options.validate && !options.stats) {
        resolve(optionsLinks.readLinks(arraypathFileMd));
      } else if (options.validate && options.stats) {
        optionsLinks.readLinks(arraypathFileMd)
          .then((result) => {
            optionsLinks.validateLinks(result).then((objLinks) => {
              const brokenLinks = objLinks.filter(link => link.status === 'Fail');
              objLinks.forEach((links) => {
                objTotalLinks.push(links.href);
              });
              resultFinal.total = objTotalLinks.length; 
              resultFinal.unique = [...new Set(objTotalLinks)].length;
              resultFinal.broken = brokenLinks.length;
              resolve(resultFinal);
            });
          });
      } else if (options.validate) {
        optionsLinks.readLinks(arraypathFileMd)
          .then((result) => {
            optionsLinks.validateLinks(result)
              .then(responses => resolve(responses));
          });
      } else if (options.stats) {
        optionsLinks.readLinks(arraypathFileMd)
          .then((result) => {
            optionsLinks.validateLinks(result)
              .then((objLinks) => {
                objLinks.forEach((links) => {
                  objTotalLinks.push(links.href);
                });
                resultFinal.total = objTotalLinks.length; 
                resultFinal.unique = [...new Set(objTotalLinks)].length;
                resolve(resultFinal);
              });
          });
      } else {
        reject(new Error('Hubo un error'));
      }
    });
  };  
};

module.exports = mdLinks;






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