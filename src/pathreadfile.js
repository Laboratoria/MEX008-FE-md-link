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

//FUNCION QUE VA A LEER Y REVISAR LA RUTA
// REALIZAR FILTRO PAARA SABER SI ES ARCHIVO MD
const readUserPath =(userPath, arrayFile) => {
  arrayFile = [];
  /*USANDO LAS EXPRESIONES REGULARES,
  HACEMOS EL PATRON QUE VA A INDICAR QUE BUSQUE EN TODA LA RUTA
  LA EXTENSION MD */
  const expRegMD = /.\.(md|MD?)$/g;
  const route = fs. statSync(userPath);

  if(route.isDirectory()) {
    const listFile = fs.readdirSync(userPath);
    listFile.forEach((file) => {
        const newPath = path.join(userPath, file);
        readUserPath(newPath, arrayFile);
    });
} else if(isFile() && regExpMD.text(path.basename(userPath))) {
    arrayFile.push(userPath);
}
return userPath;
};



exports.checkPath = checkPath;
exports.readUserPath = readUserPath;












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