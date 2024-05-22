const marvel=["IronMan", "Thor", "SpiderMan"]
const dc=["SuperMan","flash", "batman" ]

// marvel.push(dc)
// console.log(marvel); //[ 'IronMan', 'Thor', 'SpiderMan', [ 'SuperMan', 'flash', 'batman' ] ]    --> take whoce dc arrat as a array elemnt here

// console.log(marvel[3][1]) //flash


// //concat()
// const allheroes=marvel.concat(dc)
// console.log(allheroes);//[ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'flash', 'batman' ]


// const all_newHeroes=[...marvel,...dc]
// console.log(all_newHeroes);//[ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'flash', 'batman' ]  /






// flat array print 
// const anotherAray=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]],9]

// console.log(anotherAray.flat(Infinity))




console.log(Array.isArray("sumit")) //false

console.log(Array.from("sumit")); //[ 's', 'u', 'm', 'i', 't' ]
console.log(Array.from({name:"sumit"})) //[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2,score3)) //[ 100, 200, 300 ]