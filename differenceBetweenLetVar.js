//var declares the variable within the function scope, let declares the variable in the block scope

var a = 1
function four() {
    if (true) {
        var a = 4
    }
    console.log(a)
}

four()

let b = 1
function one() {
    if (true) {
        let b = 4
    }
    console.log(b)
}

one()