const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'catatan.txt')

fs.writeFileSync(filePath, 'Ayo mabar robloks')
console.log('file berhasil dibuat di: ', filePath);

const isiFile = fs.readFileSync(filePath, 'utf-8')
console.log('isi file: ', isiFile);