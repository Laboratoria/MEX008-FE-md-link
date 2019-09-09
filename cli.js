#!/usr/bin/env node
const mdLinks = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/index.js');//Estará en el index1

//Función mdLinks que devuelve promesa(array de obletos)
mdLinks(process.argv[2], process.argv[3])
.then((links) => console.log(links))
.catch( error => console.error(error));

//console.log(process.argv[2],process.argv[3]);


