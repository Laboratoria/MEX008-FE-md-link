
//const fs = require('fs');
const path = require('path')
const marked = require('marked');
//const cli = require('cli');
const jsdom = require("jsdom")
//const separador = "<a";
const { JSDOM } = jsdom;
const url = require('url');


const mdLinks = (err, data) => {
    //const str = cli.toString();
    if (err) throw err;
    const str = data.toString()
    const html = marked(str);
   //console.log(html);
   //const strSpl = html.split(separador);
   //console.log(strSpl.length);
   const dom = new JSDOM(html);
   //console.log(dom.window['markdown-links']);
   //for()
   const etiquetasLi = dom.window.document.querySelectorAll('a');
   
   etiquetasLi.forEach(element => {
       
      // element.getAttribute('href')
       console.log(element.getAttribute('href'));
   });
   //let array;
   //while (array = etiquetasLi != null) {
       //console.log(array[0]);
       

       
   
   //const etiquetasA = etiquetasLi.getAttribute("href") 
   
   //const link = dom.window.document.etiquetasA
   //const arrlink = path.parse(link);// se puede usar también url en vez de
   //console.log(arrlink);
   //console.log(link);
   
   
   
   

};
    
module.exports = mdLinks;
