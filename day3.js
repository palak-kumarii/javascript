//here create the variable with the help of var
// var a =10;
// var a =20;  //var is redeclare and reassign the value
// console.log(a)

// here create the variable with the help of var
// let a = 10;
// a = 30;
// console.log(a)

// here create the variable with the help of var
// const a = 10;
// a = 50;
// console.log(a)


//this is function declaration
// let xyz = abc(2, 4)
// console.log(xyz)

// function abc(a, b) {
//     return a + b
// }

//this is function expression
// const abc = function(a, b) {
//     return a + b
// }
// const xyz = abc(8, 4)
// console.log(xyz)

//this is function arrow
// const abc = (a, b) => {
//     return a + b
// }
// const xyz = abc(10, 20)
// console.log(xyz)

//var is hoisted with undefined
// console.log(a)
// var a = 10;

//const and let is not hoisted

var a = 10;

function abc() {
    var a = 20;
    console.log(a)
}

console.log(a)
abc()

// var a = 10;
// if (a == 10) {
//     var b = 20;
//     console.log(b)
// }
// console.log(b)


//let

//in the let we use functional and block scope both
// function abc() {
//     let a = 10;
//     console.log(a)
// }
// abc()
// console.log(a)

// let a = 10

// if (a == 10) {
//     let b = 20;
//     console.log(b)
// }
// console.log(b)

//in the const we use functional and block scope both
// function abc() {
//     const a = 20;
//     console.log(a)
// }
// abc()
// console.log(a)

// const a = 30;
// if (a == 30) {
//     const b = 40;
//     console.log(b)
// }
// console.log(b)