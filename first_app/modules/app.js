// import {Playground} from './playground.js'

// console.log(Playground.NUM)

import {fileURLToPath} from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)
