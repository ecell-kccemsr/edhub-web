const fs = require('fs-extra')
const path = require('path')

fs.removeSync(path.join('public', 'css'))
fs.removeSync(path.join('public', 'js'))
console.log("CSS, JS Folders removed")

fs.removeSync(path.join('public', 'mix-manifest.json'))
console.log("Mix-manifest file removed")