// import { searchDirectoryPath } from "./searchlinks.js";
// import { validateLinks } from "./optionsfile,js";

const searchLinks = require('./searchlinks.js');
const optionsc = require('./optionsfile.js');


const mdLinks = (path, options) => {
    if(options.validate) {
        return optionsc.validateLinks(path);
    } else {
        return new Promise(resolve => resolve(searchLinks.searchDirectoryPath(path)));
    }
};

exports.mdLinks = mdLinks;