import { searchDirectoryPath } from "./pathfile.js";
const path = require('path');
const fs = require('fs');

//FUNCION PARA FILTRAR LOS ARCHIVOS MD
export const filterFilesMarkDown = filesArray => {
    const newArray = [];
    //EXPRESION REGULAR PARA BUSCAR MD
    const expRegMD = /.\.(md|MD?)$/g;
    const result = expRegMD.test(path.basename(filesArray));
    
    result.forEach((element) => {
        if(path.extname === result) {
            return newArray.push(element);
        }
    });
return newArray;
};

//FUNCION QUE VA A TOMAR LOS LINKS DEL ACHIVO FILTRADO
// CONVERTIR A OBJETO
export const resultLinks = (route) => {
    const arrFiles = searchDirectoryPath(route);
    const arrMDfiles = filterFilesMarkDown(arrFiles);
    let linksArray = [];
    //Funciones regulares 
    const patternRegExpLink = /(^|[^!])\[(.*)\]\((.*)\)/g;
    const patternRegExpHref = /\((.*)\)/g;
    const patternRegExpName = /\[((.*))\]/g;

    arrMDfiles.forEach((elementPath) => {
        const openFile = fs.readFileSync(elementPath, 'UTF-8');
        const listLinksMD = openFile.match(patternRegExpLink);

            if(listLinksMD !== null) {
                listLinksMD.forEach(link => {
                    const href = link.match(patternRegExpHref).toString();
                    const nameLink = link.match(patternRegExpName).toString();
                    linksArray.push(
                        {
                            file: path.resolve(elementPath),
                            href: href.split((/[\(\)]/))[1],
                            text: nameLink.split(/[\[\]]/)[1].slice(0, 50),
                        });
                });
            }
    });
    return linksArray;
};