const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/obtenerhtml.js');
const fs = require('fs');
const exitoCallback = () => {}
const falloCallback = () => {}


//const err = 'error';

//geturls(err, process.argv[2])
const arrayUrls = fs.readFile(process.argv[2], (err, data) => {

    let urls = [];
    urls =  geturls(err, data)
    
    console.log(typeof urls);
})
    //=>{ 


//const mdLinks = (path, options) => {
    


//}

//console.log(geturls);


//console.log(fs.readFile(process.argv[2], geturls));



//const mdLinks = (path, options) => {



//}

module.exports = arrayUrls ;


