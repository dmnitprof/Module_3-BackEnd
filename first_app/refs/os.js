const os = require('os')

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.homedir())
console.log('Время безотказной работы: ',Math.ceil(os.uptime() / 60 / 60), ' часов')
