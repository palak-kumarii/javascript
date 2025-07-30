// function outerFunction() {
//     let counter = 0;

//     function innerFunction() {
//         counter++;
//         console.log(counter);
//     }
//     return innerFunction;
// }

// const myClosure = outerFunction();

// myClosure();
// myClosure();
// myClosure();




// console.log("start");


// setTimeout(() => {
//     console.log("async task complete")
// }, 1000);
// console.log("end")
function outerFunction() {
    let a = 10;

    function innerFunction() {
        a++
        console.log(a)
    }
    return innerFunction
}
let inner = outerFunction()
inner()