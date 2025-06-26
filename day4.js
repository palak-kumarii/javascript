//Arithmetic operator
// a = 5
// b = 5
// console.log(a * b)


// a = 5
// b = 5
// console.log(a ** b)





//Assignment operator
// sum = 0
// sum += 3  //sum=sum+3
// sum -=4 //sum=sum-3
// sum -=4 //sum=sum-3
// sum -=4 //sum=sum-3
// console.log(sum)

//check the type of any variable typeof

// let a = 10;
// let b = "number"
// let c = true
// let d = null
// let e;


// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))







//comparison operator

// console.log(5 == "5")
// console.log(5 === "5")
// console.log(5 != "5")
// console.log(5 !== "5")

// console.log(5 > 5)
// console.log(5 >= 5)
// console.log(5 < 5)
// console.log(5 <= 5)







//Logical operator
// and or not && , or denote || or not !

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// console.log(10 && 12)
// console.log(0 && 56)
// console.log(-1 && 44)


// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(!true)
// console.log(!false)

// const a = 10;
// if (!!a) {
//     console.log("a is true")
// } else {
//     console.log("a is false")
// }


// let button = document.getElementById("button")

// button.onclick = function() {
//     alert("using javascript property")
// }

// button.addEventListener("click", function(event) {
//     console.log("javascript")
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.key)
//         // alert("javascript")
// })

// const input = document.getElementById("input")

// input.addEventListener("keydown", function(event) {
//     console.log(event.key)
//     console.log(event.type)
//     console.log(event.target)

// })

// button.addEventListener("click", pressbutton)
// function pressbutton = function() {
//     alert("javascript")
// })


// const cont = document.getElementById("container")

// cont.addEventListener("mouseover", function() {
//     cont.style.backgroundColor = "red"
// })

const btn = document.getElementById("btn")
const ctn = document.getElementById("ctn")

btn.addEventListener("click", function(event) {
    alert("btn is clicked")
    event.stopPropagation()
})

ctn.addEventListener("click", function() {
    alert("container is clicked")
})