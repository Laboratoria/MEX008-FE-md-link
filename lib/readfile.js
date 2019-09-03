const  fs = require('fs');
console.log('Iniciando');

let data= fs.readFileSync('readme-links.md', 'utf-8');
console.log(data);

console.log('finalizado');


module.exports= data;
/*fs.readFile('readme-links.md', 'utf-8', (error, data) => {
  if(error) {
    console.log(`Error ${error}`);
  }else{
    console.log(data);
  }
});
*/