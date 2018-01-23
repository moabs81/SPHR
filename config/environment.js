'use strict';
const fs = require('fs'),
    path = require('path');

console.log(fs.realpathSync(process.cwd()));