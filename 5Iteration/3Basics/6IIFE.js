//Immediately Invoked function expression (IIFE)

// previous me write function
function chai(){
    console.log(`DB connected`);
}
chai(); //DB connected





//IFFE

//named IIFE
(function one(){  
    console.log(`DB connected`);
})();   //DB connected
// Here after it we write semicolon bcz we want to stop this IIFE here and next IIFE we can write after that


//arrow function IIFE
//unnamed IIFE
((name) => {
    console.log(`${name} DB CONNECTED TWO`);
  })('sumit');
  