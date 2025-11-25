let os=require('os')

//info about current user

let user=os.userInfo()
console.log(user)

//method returns the system uptime

console.log(`The system uptime is${os.uptime()} seconds`)


let currentos={
    name:os.type(),
    relese:os.release(),
    totmemory:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)




