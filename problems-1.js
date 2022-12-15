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

var studentShuffled = students.sort((a,b)=>{
    return Math.random()
})
console.log(studentShuffled)

var n =( problems.length - problems.length%students.length) / students.length

for (var i = 0; i<students.length ; i++ ){
    var startIndex = i*n
    var endIndex = i*n+n
    var student = students[i]
    studentPrb[student] = shuffled.slice(startIndex,endIndex)
}

console.log("ds",studentPrb)


var validations = [
    {id:"username", isError:false
},
    {id:"email", isError:true},
    {id:"confirmEmail", isError:true},
    {id:"password", isError:true},  
  ]

 var result = validations.some((el)=> el.isError)

  console.log(result)



  var cards = [
    "clubs 2",
    "clubs 3",
    "clubs 4",
    "clubs 5",
    "clubs 6",
    "clubs 7",
    "clubs 8",
    "clubs 9",
    "clubs 10",
    "clubs Joker",
    "clubs Queen",
    "clubs King ",
    "clubs Ace ",
    
    "diamonds 2",
    "diamonds 3",
    "diamonds 4",
    "diamonds 5",
    "diamonds 6",
    "diamonds 7",
    "diamonds 8",
    "diamonds 9",
    "diamonds 10",
    "diamonds Joker",
    "diamonds Queen",
    "diamonds King ",
    "diamonds Ace ",

    
    "heart 2",
    "heart 3",
    "heart 4",
    "heart 5",
    "heart 6",
    "heart 7",
    "heart 8",
    "heart 9",
    "heart 10",
    "heart Joker",
    "heart Queen",
    "heart King ",
    "heart Ace ",
    
    "spades 2",
    "spades 3",
    "spades 4",
    "spades 5",
    "spades 6",
    "spades 7",
    "spades 8",
    "spades 9",
    "spades 10",
    "spades Joker",
    "spades Queen",
    "spades King ",
    "spades Ace ",
  ]
 

var player = ["ankush", "raghav", "amanjeet", "rohit"]


var playerPrb = {}
var shuffled = cards.sort((a,b)=>{
    return Math.random() - 0.5
})

var n =( cards.length - cards.length%player.length) / player.length

for (var i = 0; i<player.length ; i++ ){
    var startIndex = i*n
    var endIndex = i*n+n
    var players = player[i]
    playerPrb[players] = shuffled.slice(startIndex,endIndex)
}

console.log("ds",playerPrb)