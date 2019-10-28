const https = require('https');
// const readfile = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/readfile.js');
// const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/gethtml.js')

            const getStatus = (urls) => {
                return new Promise((resolve, reject) => {
                  https.get(urls, (res) => {
                    const { statusCode } = res;
                    if (statusCode == 200) {
                    //resolve(urls[15].href + ' 200' + ' ok');
                    console.log('holi');
                    // console.log((readfile[15]));
                    
                    resolve(urls + ' 200' + ' ok');
                    
                                                           
                    }else if(statusCode == 404){
                    resolve(urls + ' 404' + ' fail')
                    
                    }else{
                    let error = new Error('No es un link https o es un error diferente')
                    // reject(error)
                    reject(error) 
                    }
                  
                  })
                })
              } 
              // let urlsArray = [];
              // urlsArray = readfile;
              // const validate = Promise.all(.map(x=>getStatus(x)))
              // .then(results=>{console.log(results);
              // })
              // .catch(console.log('No ha recibido arreglo'));

              // module.exports = validate;
            
          
        


