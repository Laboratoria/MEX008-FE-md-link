
//const fs = require('fs');
const path = require('path')
const marked = require('marked');
//const cli = require('cli');
const jsdom = require("jsdom")
//const separador = "<a";
const { JSDOM } = jsdom;
//const url = require('url');


const mdLinks = (err, data) => {
    //const str = cli.toString();
    if (err) throw err;
    const str = data.toString()
    const html = marked(str);
   //console.log(html);
   //const strSpl = html.split(separador);
   //console.log(strSpl.length);
   const dom = new JSDOM(html);
   //console.log(dom);
   
   const link = dom.window.document.querySelector('a').href
   const arrlink = path.parse(link);// se puede usar también url en vez de path
   console.log(arrlink);
   
   
   

};
    
module.exports = mdLinks;
