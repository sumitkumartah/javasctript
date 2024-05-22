
//array

const myArr=[0,1,2,3,4,5]
const myheros=["IronMan", "Thor"]
const myArr2=new Array(1,2,3,4,5,6)

console.log(myArr[2]) //2


//array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr); // [ 0, 1, 2, 3,4, 5, 6, 7]

// myArr.pop()
// console.log(myArr);  //[ 0, 1, 2, 3,4, 5, 6]


// myArr.unshift(9)  //add in the front
// console.log(myArr);  //[9, 0, 1, 2, 3,4, 5, 6]
// myArr.shift() //delete from the front
// console.log(myArr);  //[ 0, 1, 2, 3,4, 5, 6]



///////////////////////////////////////////////////////////////////////



// console.log(myArr.includes(9)) //false
// console.log(myArr.indexOf(9)) //-1 (as 9 is not exist)
// console.log(myArr.indexOf(4))//4


//convert the array into string
// const newArr=myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr) //0,1,2,3,4,5 (it converted into string)
// console.log(typeof myArr); //object
// console.log(typeof newArr); //string



//slice , splice


console.log('A =', myArr) //A = [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3) 
console.log(`Slice array= ${myn1}`) //Slice array= 1,2

console.log('B =', myArr) //B = [ 0, 1, 2, 3, 4, 5 ]


//splice
const myn2=myArr.splice(1,3)
console.log(`Splice array= ${myn2}`) //Splice array= 1,2,3
console.log('C =', myArr)   //C = [ 0, 4, 5 ]