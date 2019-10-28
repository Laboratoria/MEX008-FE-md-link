const fs = require('fs');
const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/gethtml.js');


// Promesa que lee archivo ingresado

    const getfile = new Promise ((resolve, reject) => {
         if (geturls != null) {
            
             fs.readFile(process.argv[2], (err, data) => {
                 let urls = [];
                 urls =  geturls(err, data)
                 const urlsM = urls.map((x)=>{
                     return `${x.file} ${ x.href}  ${ x.text}`;
                 })
                 resolve(urlsM) 
                })
         }else{
            let error = new Error('Error de lectura');
            reject(error)
         }
    })

    // const getfileAll = Promise.all([getfile]).then(urls=>console.log(urls))
    

    

module.exports = getfile;