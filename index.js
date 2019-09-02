const marked = require('marked');
const fs = require('fs');

const buf = fs.readFileSync('./README.md');
const str = buf.toString()
//console.log(str);



console.log(marked(str));




//const mdLinks = (path, options) => {
//};
    
//module.exports = mdLinks;
