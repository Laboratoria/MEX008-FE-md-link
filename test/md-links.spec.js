/*const mdLinks = require('../').default;


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
*/
import suma from './index';

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
