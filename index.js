
//const fs = require('fs');
//const path = require('path')
const marked = require('marked');
//const cli = require('cli');
const separador = "<a";


const mdLinks = (err, data) => {
    //const str = cli.toString();
    if (err) throw err;
    const str = data.toString()
    const html = marked(str);
   //console.log(str);
   const strSpl = html.split(separador);
   console.log(strSpl.length);
   

};
    
module.exports = mdLinks;
