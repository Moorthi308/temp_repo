let path=require('path')

console.log(path.sep)

console.log()

let filepath=path.join('/content/','subfolder','test.txt')
console.log(filepath)

let base=path.basename(filepath)
console.log(base)

let absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)



