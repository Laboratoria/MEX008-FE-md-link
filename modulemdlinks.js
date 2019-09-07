//const readmdLinks = require('./');
//const cli = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/cli.js')
//const options = process.argv[3];
//const path = process.argv[2];

const mdLinks = (path, options ) => {
    const str = path.toString()
    const html = marked(str);
    const dom = new JSDOM(html);
   const etiquetasLi = dom.window.document.querySelectorAll('a');
}
console.log("no sirvo")





