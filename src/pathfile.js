const fs = require ('fs');
const path = require('path');

//FUNCION SI LA RUTA es ABSOLUTA
export const checkPathisAbsolute = userPath => {
    //"path.isAbsolute"--> determina si la ruta es absoluta
    const userPathAbsolute = path.isAbsolute(userPath);
    return userPathAbsolute;
};

//CONVERTIR LA FUNCION RELATIVA --> ABSOLUTA
export const checkPathRelative = userPath => {
    // "path.resolve"--> vuelve la ruta relativa a absoluta
    const newPathIsAbsolute = path.resolve(userPath);
    return newPathIsAbsolute;
};



