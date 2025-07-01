// let head = document.getElementById("name")

// head.onblur = function() {
//     console.log("blur is execute")
//     alert("blur is execute")
// }


// head.onclick = function() {
//     console.log("click is execute")
//     alert("click is execute")
// }

// head.addEventListener("click", function() {
//     console.log("click is execute")
//     alert("click is execute")
// })

// head.addEventListener("click", handle)

// function handle() {
//     alert("here click event occur")
// }

// head.addEventListener("mouseover", handle)

// function handle() {
//     alert("here click event occur")
// }

// let a = [1, 2, 3, 4, 5, 6]
//     // a.splice(0, 2, 1, 2)
// a.splice(1, 0, 10)
// console.log(a)

// let b = a.slice(0, 3)
// console.log(b)

// let a = ["mango", "apple", "litchi"]
// let a = [2, 4, 5, 6, 7, 10, 2, 3]
// a.sort((a, b) => a - b)
// a.sort((a, b) => b - a)
// console.log(a)


let a = [1, 2, 3, 4, 5, 6]
    // a.map(function(element, index, array) {
    // console.log(element, index, array)
    //     console.log(element **2)
    // })
    // console.log(a)


// a.forEach(function(element, index, array) {
//     console.log(element ** 2)
// })

// console.log(a)


// let even = a.filter(function(num) {
//     return num % 2 === 0
// })
// console.log(even)

let b = [...a]
console.log(b)