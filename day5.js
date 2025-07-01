// const regex = /hello/i
// console.log(regex.test("hello"))
// console.log(regex.test("Hello"))
// console.log(regex.test("heLLO"))

// const fruit = "apple,mango,grapes,banana,apple,lichi"
// const regex = /apple/g
// console.log(fruit.match(regex))

// const a =`hello
// world`

// const regex = /world$/m
// console.log(regex.test(a))

// let text = "Visit W3School!";
// // let regex = /W3School!/
// let n = text.search("W3School!")
// console.log(n)

// let text = "Visit Microsoft!"
// let result = text.replace("Microsoft","W3School")
// console.log(result)

//dot matches
// const regex = /a.b/
// console.log(regex.test("ab"))
// console.log(regex.test("ahb"))
// console.log(regex.test("a1b"))
// console.log(regex.test("aedsb"))

// const regex = /^hello/
// console.log(regex.test("hello world"))
// console.log(regex.test("world hello"))

// $ ==> check string's last character
// const regex = /hello$/
// console.log(regex.test("hello world"))
// console.log(regex.test("world hello"))

// const regex = /go*gle/
// console.log(regex.test("ggle"))
// console.log(regex.test("gogle"))
// console.log(regex.test("google"))
// console.log(regex.test("goooooooogle"))
// console.log(regex.test("ggdle"))

// const regex = /go?gle/
// console.log(regex.test("go0gle"))
// console.log(regex.test("gogle"))
// console.log(regex.test("google"))
// console.log(regex.test("goooooooogle"))
// console.log(regex.test("ggdle"))

// const regex = /["aeiou"]/
// console.log(regex.test("ths s n ppl"))

// const regex = /["a-z"]/
// console.log(regex.test("WSDEFGHJB"))
// console.log(regex.test("erdfghbjn"))

// const regex = /["/d"]/
// console.log(regex.test("2134567"))

const regex = /[a-zA-Z] {4,}/
console.log(regex.test("cat"))
console.log(regex.test("cats"))
console.log(regex.test("elephant"))
console.log(regex.test("abcd1w23"))