const path = require("path");

const onlyMd = (inputFile) => {
    return new Promise((resolve) => {
    const ext = path.extname(inputFile) === ".md";
    resolve(ext);
    console.log(resolve)
    });
    
 };

module.exports = onlyMd;