//Operating System
const os = require('os')

console.log(`${os.hostname}`);
console.log(`${os.platfrom}`)

//File System
const fs = require('fs')
console.log(fs.readFileSync("data.txt", "utf8"))
