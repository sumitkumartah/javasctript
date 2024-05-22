//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);   //false (id and another id is differnt)

// const bigNumber = 3456543576654356754n






// Reference (Non primitive)

// Array, Objects, Functions

// array
const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros); object  

// object 
let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof myObj);// object 

// function 
const myFunction = function(){
    console.log("Hello world");
}  
console.log(myFunction());  //Hello world
console.log(typeof myFunction);  
// function   ( object function )