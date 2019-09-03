
//const fs = require('fs');
//const path = require('path')
const marked = require('marked');
//const cli = require('cli');


const mdLinks = (err, data) => {
    //const str = cli.toString();
    if (err) throw err;
    const str = data.toString()
   marked(str);
   console.log(marked(str));
   
    

};
    
module.exports = mdLinks;
