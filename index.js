// Class 051: JS Object Literal vs Constructor

// var obj = {}

// console.log(obj)

// var point = {
//     x : 10,
//     y : 20
// }
// //console.log(point)

// point.y = 30

// //console.log(point)

// point.z = 30

// console.log(point)


// Class 053: JS Accessing Object Properties in Javascript 

// A. Dot Notation

// var point = {
//     x : 10,
//     y : 20,
//     z : 15
// }

// // console.log(point.x)
// // console.log(point.y)
// // console.log(point.z)
// // console.log(point.x + point.y)


// // B. Array Notation

// console.log((point['x']))
// console.log((point['x'] + point['z']))


// Class 054: Setting Object Properties in JS

var point = {
    x : 10,
    y : 20,
    z : 15
}

point.x = 45
point.a = 16

//console.log(point)
//console.log(point.d)

point ['y'] = 100

var prop = 'z'
point [prop] = 55

//console.log(point)

// Class 055: Remove Object Properties in JS

point.a = undefined
console.log(point)

delete point.a

console.log(point)


