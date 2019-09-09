// import { searchDirectoryPath } from "./searchlinks.js";
// import { validateLinks } from "./optionsfile,js";

const searchDirectoryPath = require('./searchlinks.js');
const validateLinks = require('./optionsfile.js');


const mdLinks = (path, options) => {
    if(options.validate) {
        return validateLinks(path);
    } else {
        return new Promise(resolve => resolve(searchDirectoryPath(path)));
    }
};

exports.mdLinks = mdLinks;