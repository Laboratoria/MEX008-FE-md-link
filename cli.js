#!/usr/bin/env node
const mdLinks = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/index1.js');//Estará en el index1

mdLinks(process.argv[2], process.argv[3])
.then(respuesta => console.log(respuesta))
.catch( error => console.error(error));

//console.log(process.argv[2],process.argv[3]);


