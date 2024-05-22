// const user={
//     username:"Sumit",
//     price:1999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to my website`)
//     }
// }
// user.welcomeMessage() //Sumit , welcome to my website

// user.username='sam'
// user.welcomeMessage() //sam , welcome to my website






const user={
    username:"Sumit",
    price:1999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`)

        console.log(this)
    }
}
// user.welcomeMessage()
user.username='sam'
// user.welcomeMessage() 
// console.log(this)
/*
Sumit , welcome to my website
{
  username: 'Sumit',
  price: 1999,
  welcomeMessage: [Function: welcomeMessage]
}

sam , welcome to my website
{
  username: 'sam',
  price: 1999,
  welcomeMessage: [Function: welcomeMessage]
}

{}
*/





// function chai(){
   
//     console.log(this);
// }
// chai()  //here give many value




// function chai(){
//     let username="sumit"
//     console.log(this.username);
// }
// chai()//undefined  (this only use within object)




//+++++++++++++++++++++ARROW +++++++++++++++++++++++++++


// const chai = () => {
//     let username = "sumit";
//     console.log(this.username);
// }

// chai(); // Output: undefined


// arrow function 
// const addTwo =(num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)); //7



//implicit arrow function
const addTwo=(num1, num2)=>(num1+num2)
console.log(addTwo(3,4)); //7

// //object 
// const objectreturn=(num) =>({username:"sumit"})
// console.log(objectreturn(3)) //{ username: 'sumit' }



const objectreturn = (num) => ({ username: "sumit" }); // Returns an object with username property set to "sumit"
const result = objectreturn(3); // Call the function and store the returned object
result.username = "sam"; // Modify the username property of the returned object
console.log(result); // Logs the modified object to the console
//{ username: 'sam' }