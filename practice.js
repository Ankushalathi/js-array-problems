var arr = [ 1,8,9,2,0,6]

var newArr = []
var zeroArr = []

arr.forEach(el=>{
    if(el !==0){
        newArr.push(el)
    }else{
        zeroArr.push(el)
    }
})

var newarr = newArr.concat(zeroArr)
console.log(newarr)

// 
var arr = [ 1,8,9,2,0,6,-1,8]
var big =0
var small = 0

arr.filter(el=>{
    if(el> big){
        big = el
    }if(el< small){
        small = el
    }
})
console.log(big + small)

// find postive negtive in this array

var arr = [1, -5, 0, 1, -8, 0 ,6, -1]
var pos = []
var neg = []

arr.forEach(el=>{
    if(el>=0){
        pos.push(el)
    }else{
        neg.push(el)
    }
})

console.log(pos ,neg)

// sum of this array 
var arr = [1,3 ,[4,5],6,5,[5,8]]
var sum = 0

arr.forEach(el=>{
    if(!Array.isArray(el)){
        sum += el
    }
})
console.log(sum)

// 
var arr =  [1,8,9,5,4,8,8,7,1,1,7]

var num = 8


var result = arr.filter(el=>el ==num).length
console.log(result)

// count array element
var occObj = {}

arr.forEach(el=>{
    if(occObj[el]=== undefined){
        occObj[el]=1
    }else{
       occObj[el]= occObj [el]+1
    }
})

console.log(occObj)

var object = {1: 3, 4: 1, 5: 1, 7: 2, 8: 3, 9: 1}

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

var occuredNums = Object.keys(occObj)
console.log(occuredNums)
var biggestOcc = occObj[occuredNums[0]]
console.log("bigesst",biggestOcc)
var biggestVal = occuredNums[0]

var biggestOccObj = {}

occuredNums.forEach(el=>{
    if(occObj[el] > biggestOcc){
        biggestOcc = occObj[el]
        biggestVal = el
    }
})

biggestOccObj[biggestVal] = biggestOcc

console.log("big0",biggestVal, biggestOcc,"jj", biggestOccObj)



// 

var arr1 =  [ 1,8,9,8,5,3,1,5,1,1,1,7,6]

var arr2 = []

arr1.forEach(el=>{
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

var uniqBrandsArr =[]


product.forEach(product=>{
    if(!uniqBrandsArr.some(el=>el.brand == product.brand)){
        uniqBrandsArr.push(product)
    }
})

console.log(uniqBrandsArr)

var problems = [
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5",
    "task 6",
    "task 7",
    "task 8",
    "task 9",
    "task 10",
    "task 11",
    "task 12",
    "task 13",
    "task 14",
    "task 15",
    "task 16",
    "task 17",
    "task 18",
    "task 19",
    "task 20",
]

var students = ["ankush", "raghav", "amanjeet", "rohit"]

var studentPrb = {}
var shuffled = problems.sort((a,b)=>{
    return Math.random() - 0.5
})

var n =( problems.length - problems.length%students.length) / students.length

for (var i = 0; i<students.length ; i++ ){
    var startIndex = i*n
    var endIndex = i*n+n
    var student = students[i]
    studentPrb[student] = shuffled.slice(startIndex,endIndex)
}

console.log("ds",studentPrb)



// 3_08

var arr = [2, 3, 2, 3, 4, 1, 2, 3, 3 ,4, 5, 5, 6, 5, 4]

var getEvenOddCount = (arr)=>{
  var count =  {even:0, odd:0}
  arr.forEach(el => {
      if(el%2 == 0){
        count.even = count.even+1
      }else{
        count.odd = count.odd+1
      }
  });
  return count
}

var maxArr = []

for(var i=0; i<=arr.length; i++){
  for(var j=0; j<=arr.length; j++){
    var slice = arr.slice(i, j)
    
    if(slice.length%2 !== 0) continue

    // var even = getEvenOddCount(slice).even
    // var odd = getEvenOddCount(slice).odd
    var {even, odd} = getEvenOddCount(slice)

    if(even == odd && slice.length > maxArr.length){
      maxArr = slice
    }
  }
}

console.log(maxArr)

//destructing
// let person = {
//   name:"geeksdoor",
//   age:7
// }


// var name = person.name
// var age = person.age

// var {age, name} = person



var arr = [1011, 303049, 123080074, 2340324]

///[111, 9433, 478321, 423432]


var final = []

arr.forEach(el=>{
  var num = 0
  while(el != 0){
    var last = el%10
    el = (el-(el%10))/10
    if(last == 0) continue
    num = num*10+last
  }

  final.push(num)
})

console.log(final)
