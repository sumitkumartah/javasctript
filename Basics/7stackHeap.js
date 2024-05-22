// stack (premitive)

let myname="sumit"
let anothername=myname

// console.log(myname)  //sumit
// console.log(anothername) //sumit

anothername="kumar"

// console.log(myname)  //sumit
// console.log(anothername) //kumar
//it is happening for the stack memory



// heapMemory (non premitive) 
let userOne={
    email:"abc@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

// console.log(userOne.email); //abc@gmail.com
// console.log(userTwo.email); //abc@gmail.com

userTwo.email="xyz@email.com"

console.log(userOne.email); //xyz@gmail.com
console.log(userTwo.email); //xyz@gmail.com
//here as we use object and object is non premtive datatype so if i change in any variable then it will change parmanently