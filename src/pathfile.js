const fs = require ('fs');
const path = require('path');

//FUNCION SI LA RUTA es ABSOLUTA
const checkPathIsAbsolute = userPath => {
    //"path.isAbsolute"--> determina si la ruta es absoluta
    const userPathAbsolute = path.isAbsolute(userPath);
    return userPathAbsolute;
};

//CONVERTIR LA FUNCION RELATIVA --> ABSOLUTA
const checkPathRelative = userPath => {
    // "path.resolve"--> vuelve la ruta relativa a absoluta
    const newPathAbsolute = path.resolve(userPath);
    return newPathAbsolute;
};

//FUNCION QUE VA LEER SI LA RUTA ES UN ARCHIVO
const userPathFile = userPath => {
    //"fs.IstatSync"-->
    const filePathStatus = fs.IstatSync(userPath);
    // ".isFile"-->
    const checkFilePath = filePathStatus.isFile();
    
    return checkFilePath;
};

//FUNCION QUE VA A REVISAR SI ES UN DIRECTORIO
const userPathDirectory = userPath => {
    //
    const directoryPathStatus = fs.IstatSync(userPath);
    //
    const checkDirectoryPath = directoryPathStatus.isDirectory();

    return checkDirectoryPath;
};
//FUNCION PARA LEER EL DIRECTORIO
const searchDirectoryPath = (dirRoute) => {
    let arrayFile = [];

    if (!userPathDirectory(dirRoute)) {
        arrayFile.push(dirRoute);
    } else {
        const files = fs.readdirSync(dirRoute);

        for (let i= 0; i < files.length; i++) {
            const newPath = path.join(dirRoute, file[i]);

            if (userPathDirectory(newPath)) {
                arrayFile= arrayFile.concat(searchDirectoryPath(newPath));
            } else {
                arrayFile.push(newPath);
            };
        };
    };
    return arrayFile;
};

exports.checkPathIsAbsolute = checkPathIsAbsolute;
exports.checkPathRelative = checkPathRelative;
exports.userPathFile = userPathFile;
exports.userPathDirectory = userPathDirectory;
exports.searchDirectoryPath = searchDirectoryPath;





