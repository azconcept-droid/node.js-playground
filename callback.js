//callback function
//synchronous callbacks
function greet(name) {
    console.log(`Hello ${name}`)
}

function greetAzeez(greetFn) {
    name = 'Azeez'
    greetFn(name)
}

greetAzeez(greet)