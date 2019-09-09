const path = require("path");

const isMD = (inputFile) => {
  return path.extname(inputFile) === ".md";
};

module.exports = isMD;





