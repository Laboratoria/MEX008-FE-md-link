//Requerimientos
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


//Función para obtener html
const gethtml = (err, data) => {
    const str = data.toString()
        const html = marked(str);
        const dom = new JSDOM(html);
       const etiquetasLi = dom.window.document.querySelectorAll('a');
        //console.log(typeof etiquetasLi);
        const arrayOflinks = [];
        
       etiquetasLi.forEach(element => {
        //const arrlink = path.parse(href);// se puede usar también url en vez de path 
        const link = new Object();
        link.href = element.getAttribute('href');
        link.text = element.textContent;
        link.file = process.argv[2];
        arrayOflinks.push(link);
        //console.log(link);
        
    });
    return arrayOflinks;
    //console.log(etiquetasLi);
    
//})
}
//const geturl = gethtml().then()

module.exports = gethtml;

   






