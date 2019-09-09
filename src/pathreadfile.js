const path = require('path');
const fs = require('fs');
//const chalk = require('chalk');

//FUNCION PARA EVALUAR SI LA RUTA ES RELATIVA O ABSOLUTA
const checkPath = (userPath) => {
  //"path.isAbsolute"--> determina si la ruta es absoluta
  if(path.isAbsolute(userPath)) {
    return userPath;
  }
  // "path.resolve"--> vuelve la ruta relativa a absoluta
  return path.resolve(userPath);
};



exports.checkPath = checkPath;












/*---------------------------------------------------
-----------------------------------------------------
const readDocumentsLinks= () => {
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
*/