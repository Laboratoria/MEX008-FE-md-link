// import { resultLinks } from "./searchlinks.js";
// import nodefetch from 'node-fetch';
const resultLinks = require('./searchlinks.js');
const nodefetch = require('node-fetch');

//FUNCION PARA VALIDAR LOS LINKS ENCONTRADOS EN ARCHIVO
const validateLinks = (route) => {
    const objLinks = resultLinks(route);
    const runLinks = objLinks.map((links) => new Promise((resolve) => {
      const linksHref = nodefetch(links.href);
      return linksHref
        .then(response => {
          if (response.status >= 200 && response.status < 400) {
            links.status = response.status;
            links.message = response.statusText;
            resolve(links);
          } else {
            links.status = response.status;
            links.message = 'Fail';
            resolve(links);
          }
        })
        .catch(error => {
          links.status = 'Eso no existe';
          links.message = 'Fail-Fail';
          resolve(links);
        });
    }));
    return Promise.all(runLinks);
  };
  
  // Función ver los Stats(total de links, links únicos) de los Links
const getLinksStats = (path) => {
    return new Promise((resolve, reject) => {
      validateLinks(path)
        .then((response) => {
          const totalLinks = response.length;
          const uniqueLinks = [...new Set(response.map(response => response.href))].length;
          resolve(`Total : ${totalLinks} Unique: ${uniqueLinks}`);
        })
        .catch(error => reject(error));
    });
  };
  
  // Función para ver los links rotos
const getBrokenLinksStats = (path) => {
    return new Promise((resolve, reject) => {
      validateLinks(path)
        .then((response) => {
          const brokenLinks = response.filter(element => element.message === 'Fail').length;
          resolve(`Broken: ${brokenLinks}`);
        })
        .catch(error => reject(error));
    });
  };

  exports.validateLinks = validateLinks;
  exports.getLinksStats = getLinksStats;
  exports.getBrokenLinksStats = getBrokenLinksStats;