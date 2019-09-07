#!/usr/bin/env node


const path = require('path');
const fs = require('fs');
const chalk = require('chalk');


const readDocuentsLinks= () => {
  fs.readdir('./', (error, files) => {
    if(error) {
      throw error;
    }
    console.log(files);

    fs.readFile('../readme-links.md', 'UTF-8', (error,file) => {
      if(error) {
        throw error;
      }
      console.log(chalk.black.bgGreenBright(file));
    });
    console.log(chalk.cyan('Contenido del archivo ....'));
  });
};
readDocument();


























/*--------------------------------------------------------------------------
const  fs = require('fs');
console.log('Iniciando');

//Funcion QuestionOne, vamos a dar dos opciones despus de leer el archivo
const questionOne = () => {


};

let data= fs.readFileSync('readme-links.md', 'utf-8');
console.log(data);

console.log('finalizado');


module.exports= data;
module.exports = questionOne;
fs.readFile('readme-links.md', 'utf-8', (error, data) => {
  if(error) {
    console.log(`Error ${error}`);
  }else{
    console.log(data);
  }
});
*/