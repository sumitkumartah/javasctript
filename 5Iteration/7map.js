//MAP function (it also store arr on a variable or a constant)

const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myAns= myNums.map( (num)=> num+10)
// console.log(myAns);
// [ 11, 12, 13, 14, 15,  16, 17, 18, 19, 20]

//by using scope we have to return
// const myAns= myNums.map( (num)=>{ 
//     return num+10
// })






//CHAINNING (Using multiple function together is called chainning)
let CHAINNING= myNums
              .map( (num)=> num*10)
              .map( (num)=> num+1)
console.log(CHAINNING) 
// [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]



CHAINNING= myNums
              .map( (num)=> num*10)
              .map( (num)=> num+1)
              .filter( (num)=> num>=40)
console.log(CHAINNING) 
// [41,  51, 61, 71, 81, 91, 101]