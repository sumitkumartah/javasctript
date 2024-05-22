// let a=10;
// let b=20
// var c=30
// console.log(a) //10
// console.log(b); //20
// console.log(c); //30





// if(true){
//   let a=100;
//  let b=200
//  var c=300
// }
// console.log(a) //error
// console.log(b); //error
// console.log(c); //300         c value will automatically take here as c is declare in var (it is treated as global variable)




let b=100
var c=600
if(true){
   let b=200
   var c=300
   console.log("Inner b= ",b) //Inner b=  200
  }
  console.log(b); //100
  console.log(c); //300  