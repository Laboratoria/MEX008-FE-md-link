/*module.exports = () => {
  // ...
};
*/
// __tests__/index.test.js


//Funcion para leer archivo md y visualizarlo en consola
const  fs = require('fs');

fs.readFile('readme-links.md', 'utf-8', (error, data) => {
  if(error) {
    console.log('Error ${error}');
  }else{
    console.log(data);
  }
});