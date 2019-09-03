#!/usr/bin/env node
const mdLinks = require('./')
const fs = require('fs');


const cli = fs.readFile(process.argv[2] || null, mdLinks);

module.exports = cli;










