const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/gethtml.js');
const validateurl = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/validateurl.js')
const fs = require('fs');
const https = require('https');


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
            //if ({'validate': true}) {
                fs.readFile(path, (err, data) => {
                    let urls = [];
                    urls =  geturls(err, data)
                    //resolve(urls)
                    //console.log(urls);
                    //urls.forEach(element => {
                       


                            https.get(urls[15].href, (res) => {
                                const { statusCode } = res;
                               if (statusCode == 200) {
                                     resolve(urls[15].href + ' 200' + ' ok');
     
                                    console.log('holi');
                                }else if(statusCode == 404){
                                    reject(urls[15].href + ' 404' + ' fail')
     
                               }else{
                                    let error = new Error('No es un link https o es un error diferente')
                                    reject(error)
                                }
     
                             })
                        

                        
                        
                    //});
                })
                
            //else if ({'validate': false}) {
                
            //}
               
                    
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
