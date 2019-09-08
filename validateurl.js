//Requerimientos
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const http = require('http');
//const { statusCode } = res;


//Función para obtener html
const validateurl = (err, data) => {
    const str = data.toString()
        const html = marked(str);
        const dom = new JSDOM(html);
       const etiquetasLi = dom.window.document.querySelectorAll('a');
        //console.log(etiquetasLi);
        const arrayOflinks = [];
        
       etiquetasLi.forEach(element => {
        //const arrlink = path.parse(href);// se puede usar también url en vez de path 
        const link = new Object();
        link.href = element.getAttribute('href');
        link.text = element.textContent;
        link.file = process.argv[2];
        link.status = http.get(element.getAttribute('href'), (res) => {
            const { statusCode } = res;
            if (statusCode == 200) {
                return statusCode
            }
        });
        link.ok = ok;
        arrayOflinks.push(link);
        //console.log(link);
        
    });
    return arrayOflinks;
    //console.log(etiquetasLi);
    
//})
}
//const geturl = gethtml().then()

module.exports = validateurl;



