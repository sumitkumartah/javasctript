

//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"sumit",
    "full name":"Sumit Kumar Tah",
    [mySym]:"mykey1",
    age: 18,
    location:"Kolkata",
    email:"abc@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday", "Saturday"]
}

//acess the object
console.log(jsUser.email) //abc@gmail.com
console.log(jsUser["email"]) ////abc@gmail.com


//if key is in string decleration then we have to access this by like array acess
console.log(jsUser["full name"]); //Sumit Kumar Tah


// //acess the symbol
// console.log(jsUser.mySym)  //undefined
// console.log(typeof mySym)  //symbol

// // better way 
console.log(jsUser[mySym])  //mykey1
console.log(typeof mySym)  //symbol




//object value change
jsUser.email="xyz@gmail.com"
console.log(jsUser); 
// output-> 
//  {
//     name: 'sumit',
//     'full name': 'Sumit Kumar Tah',
//     age: 18,
//     location: 'Kolkata',
//     email: 'xyz@gmail.com',
//     isLoggedin: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }




//object freeze 
// Object.freeze(jsUser) //(we can't update any object value after this)
jsUser.email="pqr@gmail.com"
// output-> 
//  {
//     name: 'sumit',
//     'full name': 'Sumit Kumar Tah',
//     age: 18,
//     location: 'Kolkata',
//     email: 'xyz@gmail.com',
//     isLoggedin: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }



//function in object
jsUser.greeting=function(){
    console.log("Hello js user")
}
//console.log(jsUser.greeting) //[Function (anonymous)]

console.log(jsUser.greeting()) //Hello js user


jsUser.greetingTwo=function()
{
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsUser.greetingTwo()) //Hello js user, sumit