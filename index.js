#!/usr/bin/env node
const readFileMd = require('./modules/readMd.js');
const onlyMd = require('./modules/onlyMd.js');
const extractLinks = require('./modules/extractLinks.js');
const getValidation = require('./modules/validate.js');
// const getComand = require('./cli.js')



const mdLinks =(pathFile)=>{
  if(onlyMd(pathFile)){
    readFileMd(pathFile)
      .then((data) => {
        return extractLinks(data);
      })
      .then(res => {
        console.log(res);
        return getValidation(res);
      })
      .then( arr => {
        console.log(arr);
        return `Total: ${arr.length}`;
      })

  } else {
    console.log("Archivo inválido");
  }
};


mdLinks(process.argv[2]);


