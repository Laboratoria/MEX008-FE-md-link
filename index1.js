const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/obtenerhtml.js');
const fs = require('fs');


const mdLinks = (path, options) => {
    //console.log(path, options);
    const promiseArray = new Promise ( (resolve, reject) => {
        fs.readFile(path, (err, data) => {
        let urls = [];
        urls =  geturls(err, data)

        if(typeof urls == Object){
            console.log(urls);
            
            resolve(urls);
        }
        else{
            let error = new Error('Error de lectura de archivo');
            reject(error)
        }


    })
        
        
    })
    return promiseArray;
    //console.log(promiseArray);
    
}

    



module.exports = mdLinks;
