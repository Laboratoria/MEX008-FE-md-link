const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/obtenerhtml.js');
const fs = require('fs');


const mdLinks = (path, options) => {
    //console.log(path, options);
    const promiseArray = new Promise ( (resolve, reject) => {
        fs.readFile(path, (err, data) => {
            const extension = /(.md)$/;
            
        if(extension.exec(path)){
            let urls = [];
            urls =  geturls(err, data)
            //console.log(urls);
            resolve(urls);
        }
        else{
            let error = new Error('Error de lectura, no se trata de un archivo con extensión .md');
            reject(error)
        }


    })
        
        
    })
    return promiseArray;
    //console.log(promiseArray);
    
}

    



module.exports = mdLinks;
