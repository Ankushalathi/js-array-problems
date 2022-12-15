
// arr = [1,5,9,8,5,6]
// function arrayForLoop(arr,cb){
//     for(var i=0 ; i<=arr.length; i++){
//         cb(arr[i])
//     }
// }

// arrayForLoop(arr , function(el){
//     console.log(el)
// })


var arr = [1,6,8,9,7]
var newArr = []
arr.forEach(function(el){
    newArr.push(el*el)
})

console.log(newArr)



// var search = 4

// arr.forEach(function(el){
//     var result = el == search
//     return true/false
// })
// ()


// var array = [1,5,9,8]
// var search = 5

// array.forEach(function(el){

    
// })

var names = [1,8,6,9,8,7]

console.log(names.indexOf(8))
console.log(names.lastIndexOf(8))






var products = [
    {title:"led tv", brand:"oneplus"},
    {title:"ipad", brand:"apple"},
    {title:"macbook", brand:"apple"},
    {title:"pencil", brand:"apple"},
    {title:"mic", brand:"yeti"},
    {title:"mobile", brand:"oneplus"}
]


    
// }
// method :: filter
var filterArray = products.filter((el)=>{
    return el.brand == "apple"
})

console.log(filterArray)



// var stations = [
//     {name : "BOM", dist : 0  },
//     {name : "THN", dist : 50 },
//     {name : "PUN", dist : 150},
//     {name : "NSK", dist : 250},
//     {name : "HYD", dist : 350},
//     {name : "CJB", dist : 650},
//     {name : "RAM", dist : 850}
// ]

// var src = "BOM"
// var dst = "HYD"

// var isconsicutive = flase



var products = [
    {title:"led tv", brand:"oneplus", price:1520, productId:"20"},
    {title:"ipad", brand:"apple", price:10520, productId:"21"},
    {title:"macbook", brand:"apple", price:15020, productId:"22"},
    {title:"pencil", brand:"apple", price:15200, productId:"23"},
    {title:"mic", brand:"yeti", price:15120, productId:"24"},
    {title:"mobile", brand:"oneplus", price:11520, productId:"25"},
  ]
var minPrice = 10000
var maxPrice= 15000


arr.fill

var brand = "oneplus, yati"
// var filtered = products.filter((el)=>{
//     return el.price>=10000 && el.price<=15000
// })
var brands = products.find((el)=>{
    return el.products === brand
})
var filtered = products.filter((el)=>{
    return el.price>=minPrice && el.price < maxPrice
  })
  
console.log(brands)
console.log(filtered)