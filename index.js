const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/gethtml.js');
const fs = require('fs');


const mdLinks = (path, options) => {
    //console.log(path, options);
    const promiseArray = new Promise ( (resolve, reject) => {
        const extension = /(.md)$/;
        
        if(extension.exec(path) && options == null){
            fs.readFile(path, (err, data) => {
            let urls = [];
            urls =  geturls(err, data)
            //console.log(urls);
            //urls.forEach(element => {
                resolve(urls);
                
                console.log('hola');
            //});
        })
        }
        else if(extension.exec(path) && options == 'validate'){
            fs.readFile(path, (err, data) => {
                let urls = [];
                urls =  geturls(err, data)
               resolve(urls);
               console.log('Holi');
               
                    
            })
        }
        else{
            let error = new Error('Error de lectura, no se trata de un archivo con extensión .md');
            reject(error)
        }
    
    })
    return promiseArray;
    //console.log(promiseArray);
    
}

    



module.exports = mdLinks;
