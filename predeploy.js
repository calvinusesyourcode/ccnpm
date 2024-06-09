const fs = require('fs')
const path = require('path')
const date = new Date()
date.setHours(date.getHours() - 8)
const version = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
const packagePath = path.join(__dirname, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
packageJson.version = version
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))