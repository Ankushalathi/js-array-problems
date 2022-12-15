

function abc(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]
        fn(element, i, arr)
    }

}


// abc([1, 2, 3, 2,32 ], function(x, ind, a){


//     console.log(x, ind, a)
// })


// MEHTOD :: forEach => runs a loop on every element of an array, it takes a callback function & it passes "element", "index" & whole "array" to that callback function

var arr = [9, 7, 10, 51, 47]
// arr.forEach(function(el, ind, a){
//     console.log(el, ind, a)
// })

//insertion

// MEHTOD :: push  => inserts a new element at the end of the array , it takes the element we want to push into the array
var students = ["amanjeet", "tohsi", "rohit", "pooja"]

students.push("ankush", "raghavendra")
// students.push("")


// MEHTOD :: unshift => inserts a new element at the begining of the array, it takes the element we want to push into the array
students.unshift("Givind Sir")
console.log(students)



// MEHTOD :: pop => deletes element from the end of the array and returns the deleted element
var deleted = students.pop()
console.log(students, deleted)


// MEHTOD :: shift => deletes element from the begining of the array and returns the deleted element
var deleted = students.shift()
console.log(students, deleted)




//wap to programe to get an array of square of element of given array
//eg given array => [2, 3, 5]
//output array => [4, 9, 25 ]

var arr = [1, 3, 5]
var newArr = []


arr.forEach((el) => {
    var elSq = el * el
    newArr.push(elSq)
})


console.log(newArr)




var search = 4



function isElementInArr(arr, search) {
    var isPresent = false

    arr.forEach(el => {
        if (el == search) {
            isPresent = true
        }
    })


    return isPresent

    //return true/false
}


var ans = isElementInArr(arr, 1)
console.log(ans)


function isElementInArrV1(arr, search) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            return true
        }
    }

    return false

    //return true/false
}


// MEHTOD :: includes => it takes an argument as search, if element present in the array then returns true otherwise false
arr.includes(2)



arr = [2, 3, 1, 3, 4, 5, 3, 2, 1]
// findElementInd(arr, el)  => returns index of first found element if element presents otherwise -1
// findElementLastInd(arr, el)  => returns index of last found element if element presents otherwise -1


var findElementInd = (arr, el) => {
    var foundIndex = -1

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            foundIndex = i
            break;
        }
    }

    return foundIndex

}

var arr = [1, 3, 4, 2, 1, 2, 3]

var foundInd = findElementInd(arr, 2)
console.log(foundInd)

var findElementLastInd = (arr, el) => {
    var foundIndex = -1

    // for(var i =0; i<arr.length; i++){
    //     if(arr[i] === el){
    //         foundIndex = i            
    //     }
    // }

    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === el) {
            foundIndex = i
            break
        }
    }

    return foundIndex

}


// MEHTOD :: indexOf  => takes an element value as an argument, if that element presents in the array then returns it's index otherwise returns -1
console.log(arr.indexOf(10))



// MEHTOD :: lastIndexOf  => takes an element value as an argument, if that element presents in the array then returns it's last found index otherwise returns -1
console.log(arr.lastIndexOf(1))

var arr1 = [1, 2]
var arr2 = [1, 2]

console.log(arr1 === arr2)

var a = [10, 20]
var b = a  //shallow copy

console.log("a : ", a)
console.log("b : ", b)

b[0] = 100


console.log("a : ", a)
console.log("b : ", b)


// var x = 10
// var cpyX = x


// var x = 10

// function test(a){
//     a = 20
// }


// test(x)

// console.log(x)

// var x = [10, 20]

// function test(a){
//     a[0] = 100
// }

// test(x)

// console.log(x)


var p1 = {name:"amanjeet"}
var p2 = {name:"amanjeet"}

console.log(p1 == p2)


var products = [
    {title:"led tv"},
    {title:"ipad"},
    {title:"macbook"},
    {title:"pencil"}
]





var findIndex = (arr, fn)=>{
  
    var foundInd = -1
    for(var i = 0; i<arr.length; i++){
        if(fn(arr[i])){
            foundInd = i
            break
        }
    }


    return foundInd
    
}


var search = {title:'pencil'}
findIndex(products, function(product) {
    if(product.title == search.title)  {
        return true
    }else{
        return false
    }
})

// var findIndex = (arr, fn)=>{
//     var foundInd = -1
//     for(var i=0; i<arr.length; i++){
//         if(fn(arr[i])){
//             foundInd = i
//             break
//         }
//     }
//     return foundInd
// }


// var foundInd = findIndex(products, function(product) {
//         return product.title == search.title
// })

// console.log(foundInd)


//// MEHTOD ::  findIndex => it takes a function in argument (function must return a boolean value to it) and returns the index for which the 
//give function returns true

var foundInd = products.findIndex((el)=>{
    // if(el.title == search.title){
    //     return true
    // }else{
    //     return false
    // }

    return el.title === search.title
})

console.log(foundInd)





var products = [
    {title:"led tv", brand:"oneplus"},
    {title:"ipad", brand:"apple"},
    {title:"macbook", brand:"apple"},
    {title:"pencil", brand:"apple"},
    {title:"mic", brand:"yeti"},
    {title:"mobile", brand:"oneplus"}
]

// filtered = [
//     {title:"mobile", brand:"oneplus"},
//     {title:"led tv", brand:"oneplus"},
// ]

var filter = (arr, cond) => {
    var filteredArray = []
    //your logic goes here...

    for(var i = 0; i<arr.length; i++){
        if(cond(arr[i])){
            filteredArray.push(arr[i])
        }
    }


    return filteredArray
}

var filtered = filter(products, (el)=>{
    return el.brand == "apple"
})
console.log(filtered)



//// MEHTOD ::  filter =>  it takes a function in argument (function must return a boolean value to it) and returns the array of all elements for which the 
//given function returns true

var filteredArray = products.filter((el)=>{
    return el.brand == "oneplus"
})

console.log(filteredArray)


function findElement(arr, fn){
    for(var i=0; i<arr.length; i++){
        if(fn(arr[i])){
            return arr[i]
        }
    }

    return null

    // return null | foundElemt
}




var found = findElement(products, (el)=>{
    return el.brand == "apple"
})


//// MEHTOD ::  find =>  it takes a function in argument (function must return a boolean value to it) and returns the  elements for which the 
//given function returns true


var appleProduct = products.find((el)=>{
    return el.brand == "mi"
})
console.log(appleProduct)


var arr = [25, 52, 41, 84, 145]

// console.log(arr.at(3))
//METHOD :: at ==> retrun the value present a any index passed into it.



var arr2 = [87, 21, 54, 85]


var joined = arr.concat(arr2)
// console.log(joined)

//METHD:: concat ==> concates two arrays


var ages = [18, 21, 25, 19]
var everyElementFulfill = ages.every(el=>el>=18)
// console.log(everyElementFulfill)


//METHOD :: every  => takes a function as an argument (which return boolean)  and return true if 
//given function return true for every element otherwise returns false

var anyElementFulfill = ages.some(el => el >= 18)
// console.log(anyElementFulfill)
//METHOD :: some  => takes a function as an argument (which return boolean)  
//and return true if given function return true for any 
//element otherwise returns false


var filled = ages.fill({name:"Mr Govind"})
console.log(filled)
//METHOD :: fill => takes an argument and fills that element(argument) for every index of the array
//METHOD :: findLast
//METHOD :: findLastIndex
//METHOD :: flat    



var arr = [[1, 2], [3, 4, [8, 9]], 5, 6]  // => [1, 2, 3, 4, 5, 6]
console.log(arr.flat(1))

//METHOD :: flat =>  flats the array upto given depth.


//METHOD :: flatMap

// arr.flatMap(el=>{
    
// })




var a = []

// console.log(typeof a)
//var test = new Array()

console.log(Array.isArray(a))


 var arr = [1, 3, 4, 2, 1] // =>"1:3:4:2:!"
 var str = arr.join(":")
 console.log(str, arr)


 var arr = Array.of(1, 2, 3)
 console.log(arr)


 var arr = [1,2, 4, 5]
//  arr.reverse()
//  console.log(arr)


var students = ["rohit", "pooja", "ankush"]
console.log(students)

// students.splice(0, 0, "Amanjeet")

// splice => (startIndex, deleteCount, ...newEntrie)

console.log(students)

console.log(students.slice(1, 3))


students.sort()

console.log(students)

var arr = [1, 2, 3, 12, 13, 23, 90, 100]
arr.sort((first, second)=>{
    if(first > second){
        return 4
    }else if(second > first){
        return -4
    }else{
        return 0
    }
})

console.log(arr)



var products = [
    {title:"led tv", brand:"oneplus", price:1520, productId:"20"},
    {title:"ipad", brand:"apple", price:10520, productId:"21"},
    {title:"macbook", brand:"apple", price:15020, productId:"22"},
    {title:"pencil", brand:"apple", price:15200, productId:"23"},
    {title:"mic", brand:"yeti", price:15120, productId:"24"},
    {title:"mobile", brand:"oneplus", price:11520, productId:"25"},
  ]

  products.sort((item1, item2)=>{
    // if(item1.price > item2.price){
    //     return 1
    // }else if(item1.price < item2.price){
    //     return -1
    // }else{
    //     return 0
    // }

    return item1.price - item2.price
  })
console.log(products)

