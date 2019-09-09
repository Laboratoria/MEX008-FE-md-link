#!/usr/bin/env node
const readFileMd = require('./modules/readFileMd');
const typeOfFile = require('./modules/restrictFile');
const searchLinks = require('./modules/search-links');
const getStats = require('./modules/state');
const getValidation = require('./modules/validate');


const mdLinks =(pathFile, opcion1,opcion2)=>{
  return new Promise((resolve => {
    if(typeOfFile(pathFile)){
      readFileMd(pathFile)
        .then((data) => {
          return searchLinks(data);
        })
        .then(res => {
        if (process.argv[3] == null && process.argv[4] == null){
          console.log(res);
          }
        else if(opcion1==="validate" && opcion2 === "stats") {
          console.log(`${getValidation(res)}
Total: ${res.length}
Unique: ${getStats(res)}`)
        }
          else if(opcion1 === "validate"){
            console.log(getValidation(res));
          }
          else if(opcion1 === "stats"){
            console.log(`Total: ${res.length}
Unique: ${getStats (res)}`);
          }
          else{
            console.log("error")
        }
        })

    } else {
      console.log("Archivo inválido");
    }
  }))
};


mdLinks(process.argv[2],process.argv[3],process.argv[4]);






