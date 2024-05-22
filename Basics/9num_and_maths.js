const score=400
console.log(score);  //400

const balance =new Number(100)
console.log(balance); //[Number: 100]

//convert to string and find the length 
// console.log(balance.toString().length)  //3


//after point how many number will show
// console.log(balance.toFixed(2)) //100.00


//toPrecision()
// const anotherNumber = 123.8965;

// console.log(anotherNumber.toPrecision(2)); // Outputs: 1.2e+2
// console.log(anotherNumber.toPrecision(3)); // Outputs: 124
// console.log(anotherNumber.toPrecision(4)); // Outputs: 123.9



//toLocalString()   converts the nomof zeroes in the structure format
const hundreds=1000000
// console.log(hundreds.toLocaleString()) //10,00,000 (converts into usa style)
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000 (indian values)




//***************************MATHS************************** */

// console.log(Math)  //Object [Math] {}

// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.9)) //4
// console.log(Math.min(4,3,8,9,2)) //2
// console.log(Math.max(4,3,8,9,2)) //2

//take random value from zero to one
// console.log(Math.random())

// take random value starting from one to nine
console.log(Math.floor(Math.random()*10) +1)

//take random within a max and min limit
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)