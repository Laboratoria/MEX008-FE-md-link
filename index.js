/*module.exports = () => {
  // ...
};
*/
// __tests__/index.test.js


//Funcion para leer archivo md y visualizarlo en consola
let fs = require('fs');

fs.readFile('readme-links.md', 'utf8', (err, dta) => {
  if(err) {
    console.log('error: ' err);
  }
  else {
    console.log(data);
  }
  });
