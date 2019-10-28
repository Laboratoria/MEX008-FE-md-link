// Módulos requeridos
const validate = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/validate.js')
const readfile = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/readfile.js')


const mdLinks = (path, options) => {
    //console.log(path, options);
    const promiseArray = new Promise ( (resolve, reject) => {
        const extension = /(.md)$/;
        
        if(extension.exec(path) && options == null){
            let fileRead = readfile;
            resolve(fileRead)

        }
        else if(extension.exec(path) && options == '--validate'){
            // const getfileAll = Promise.all([readfile]).then(urls=>console.log(urls))
            
            let validateurls = validate;
            
            resolve(validateurls)
            // resolve(getfileAll);
                    
                             
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
