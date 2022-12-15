var arr = [1,5,8,0,7,8,]

// var result =arr.filter((el)=>{
//     return el>0
// })

// console.log(result)

var newArr = []
var zeroArr = []
var big

arr.forEach(el=>{
    if(el!== 0){
        newArr.push(el)
    }else{
        zeroArr.push(el)
    }
})

var newArr=newArr.concat(zeroArr)
console.log(newArr)

var arr = [1,5,8,0,7,8,-1]
var bigEl = 0
var smalligEl = 0

arr.filter((el)=>{
    if(el< bigEl){
        bigEl = el
    }if(el>smalligEl){
        smalligEl =el
    }
    
})
console.log(smalligEl+bigEl)


var arr = [1, -5, 0, 1, -8, 0 ,6, -1]
var pos = []
var neg = []

arr.forEach(el=>{
    if(el>0){
        pos.push(el)
    }else{
        neg.push(el)
    }
})
console.log(pos,neg)


var arr = [1,3 ,[4,5],6,5,[5,8]]
sum = 0

arr.forEach(el=>{
    if(!Array.isArray(el)){
        sum += el

    }
})

console.log(sum)


var arr =  [1,8,9,5,4,8,8,7]

var num = 8
count = 0


arr.forEach(el=>{
    if(el==num){
        count ++
    }
})
console.log(count)

var count = arr.filter(el=>el==num).length

console.log(count)

var reduce = arr.reduce((count ,el)=>{
    return el == num ? count+1 : count

},0)

console.log(reduce)


var obj = {}

arr.forEach(el=>{
    if(obj[el]=== undefined){
        obj[el]=1
    }else{
       obj[el]= obj [el]+1
    }
})

console.log(obj)

var object = {1: 1, 4: 1, 5: 1, 7: 1, 8: 3, 9: 1}
var object = Object.keys


var arr =  [ 1,8,9,8,5,3,1,5,1,1,1]

var arr2= []

arr.forEach(el=>{
    if(!arr2.includes(el)){
        arr2.push(el)
    }
})

console.log(arr2)

var product = [
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"xyz"},
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"mno"},
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"xyz"},
    {title:"abc", brand:"abc"},
]
var uni = []


var arr = [1, -5, 0, 1, -8, 0 ,6, -1]
var smallest = 0
var greatest = 0

arr.forEach(el=>{
    if(el < smallest){
        smallest = el
    }
    if(el > greatest){
        greatest = el
    }
})

console.log("smallest is : ", smallest)
console.log("greates is : ", greatest)

console.log("sum is : ", smallest+greatest)

var arr = [1, -5, 0, 1, -8, 0 ,6, -1]
var pos = arr.filter(el=>el>=0)
var neg = arr.filter(el=>el<0)

// arr.forEach(el=>{
//     if(el>=0){
//         pos.push(el)
//     }else{
//         neg.push(el)
//     }
// })

console.log(pos, neg)



var arr = [1, 2, [3,4] , 5, 6, [9, 3]]

var sum = 0

arr.forEach(el=>{
    if(!Array.isArray(el)){
        sum += el
    }
})

console.log(sum)



//find occurance of a given number in an array.

var arr = [1, 2, 3, 4, -1, 89, 12, 43 ,5, 6, 2, 1, 2, 3, 4, 5, 6, 3, 3, 3, 3, 3]
var num = 2


var occurance = 0

arr.forEach(el=>{
    if(el == num){
        occurance++
    }
})

console.log(occurance)


var occurance = arr.filter(el=>el==num).length
console.log(occurance)

var occurance = arr.reduce((occ, el)=>{
    return el == num ? occ+1 : occ
}, 0)

console.log(occurance)


//find occurance of every element in an array.
var occ = {}
arr.forEach(el=>{
    if(occ[el] === undefined){
        //element is not present in the object
        occ[el] = 1
    }else{
        //element is present in the object
        occ[el] = occ[el]+1
    }
})


console.log(occ)

var occObj = arr.reduce((occ, el)=>{
    if(occ[el] === undefined){
        occ[el] = 1
    }else{
        occ[el] = occ[el]+1
    }

    return occ
}, {})

console.log(occObj)

var person = {
    name:"pooja",
    lastName:"Tiwari",
    course:"mern"

}


//for in loop
for(key in person){
    console.log(key)
}

var keys = Object.keys(person)
console.log(keys)


//find max occured number in given 

// console.log("occ obj", occObj)

var occuredNums = Object.keys(occObj)
console.log(occuredNums)
var biggestOcc = occObj[occuredNums[0]]
var biggestVal = occuredNums[0]

var biggestOccObj = {}

occuredNums.forEach(el=>{
    if(occObj[el] > biggestOcc){
        biggestOcc = occObj[el]
        biggestVal = el
    }
})

biggestOccObj[biggestVal] = biggestOcc

console.log(biggestVal, biggestOcc, biggestOccObj)



var arr1 = [2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 1 , 4, 5, 3, 4, 9]
// var uniq = [2, 3, 4, 5, 6, 7, 1, 9]

var uniq = []

arr1.forEach(el=>{

    if(!uniq.includes(el)){
        uniq.push(el)
    }
})

console.log(uniq)


var product = [
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"xyz"},
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"mno"},
    {title:"abc", brand:"abc"},
    {title:"abc", brand:"xyz"},
    {title:"abc", brand:"abc"},
]

var uniqBrandsArr =[]


product.forEach(product=>{
    if(!uniqBrandsArr.some(el=>el.brand == product.brand)){
        uniqBrandsArr.push(product)
    }
})

console.log(uniqBrandsArr)




// 27

var arr1 = [1, 10, 5, 10, 25, 12, 84, 12]
var arr2 = [1, 10, 5, 10, 84, 90, 12, 12, ]

var common = []
var aIntersectionb = []
var bIntersectionA = []

var unCommon = []

var universal = []




arr1.forEach(el=>{
    if(arr1.includes(el) && arr2.includes(el)){
        common.push(el)
    }
})

console.log("common",common)


common.forEach(el=>{
    if( arr1.includes(el) && arr2.includes(el)){
        unCommon.push(el)
    }
})


console.log("uncommon",unCommon)
arr1.forEach(el=>{
    if(!common.includes(el)){
        aIntersectionb.push(el)
    }
})
console.log(aIntersectionb)

arr2.forEach(el=>{
    if(!common.includes(el)){
        bIntersectionA.push(el)
    }
})
console.log(bIntersectionA)

var result = aIntersectionb.concat(bIntersectionA).concat(common)

console.log(result)

var concated = arr1.concat(arr2)

var universal =concated.reduce((unq, el)=>{
     if(!unq.includes(el)){
        unq.push(el)
     }
     return unq
},[])

console.log(universal)





var arr = [1, 10, 5, 10, 25, 12, 84, 12, 1, 10, 5, 10, 84, 90, 12, 12]
var evenSum = 0
var oddSum = 0

arr.forEach(el=>{
    el%2 == 0 ? evenSum+= el : oddSum+=el
})

console.log(evenSum,oddSum)


var allMaxima = []
var allMinima  = []
var minima

for(var i= 1; i<arr.length-1 ; i++){
    var left = arr [i-1]
    var current = arr [i]
    var right = arr[i+1]
    if(left>current && right>current){
        allMaxima.push(arr[i])
    }else{
        allMinima.push(arr[i])
    }
}
console.log(allMinima,allMaxima)


// 28
var arr = [1, 10, 5, 10, 25, 12, 84, 12, 1, 10, 5, 10, 84, 90, 12, 12]
var n = 5


function sumOfArr(arr){
  
    // return arr.reduce((sum, el)=>{
    //     return sum+el
    // }, 0)

    var sum =  arr.reduce((sum, el)=>{
        return sum+el
    }, 0)

    return sum

}

var maxArr = arr.slice(0, n)
var maxSum = sumOfArr(maxArr)


for(var i=n-1; i<arr.length-n; i++){
    var slice = arr.slice(i, i+n)
    var sumOfSlice = sumOfArr(slice)

    if(sumOfSlice > maxSum ){
        maxSum = sumOfSlice
        maxArr = slice
    }
}


console.log(maxSum, maxArr)



var arr = [1, 10, 5, 10, 25, 12, 84, 12, 1, 10, 5, 10, 84, 90, 12, 12]


var max= arr.sort((item1 , item2)=>{
    return item2- item1
}).slice(0,n)

console.log(max)