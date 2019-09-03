#!/usr/bin/env node
const mdLinks = require('./')
const fs = require('fs');
//const marked = require('marked');

//const separador = "<a"


//const callbackArgv = (err, data) => {
    //if (err) throw err;
    //data.toString();

    
    //const strSpl = str.split(separador)
    
//}

const cli = fs.readFile(process.argv[2], mdLinks);
//console.log(cli);
//console.log(cli);
//module.exports = cli;










