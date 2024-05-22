
const promiseOne=new Promise( function(resolve, reject){
    //do some async task like DB calls, Crypography, network
    setTimeout( function(){
        console.log('Async Task is completed');
        resolve()//connect with then()
    },1000)
});

//then directly coonect with resolve()
promiseOne.then(function(){
    console.log("Promice Consumed");
})

//output= Async Task is completed
//        Promice Consumed



//In another way
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("SOLVED");
})
//Async task 2
//SOLVED




//data consumption using resolve()
const promiseThree=new Promise( function(resolve, reject){
   setTimeout( function(){
    resolve({username:"SUMIT", email:"xyz@gmail.com"})
   }, 1000)
})

promiseThree.then( function(user){
    console.log(user);
})//{ username: 'SUMIT', email: 'xyz@gmail.com' }








//.then() ,.catch(), .finally()and their chainning 
const promiseFour=new Promise( function(resolve, reject){
    setTimeout(function(){
        let error=true;

        if(!error){
            resolve({username:"sumit", pass:1233})
        }else{
          reject("ERROR! something went wrong ")
        }
    }, 1000)
})

//chainning of then().then().catch().finally()
promiseFour.then( (user)=>{
    console.log(user);
    return user.username; //(this return will store in the next .then(Myuser) )
}).then( (Myuser)=>{
    console.log(Myuser);
}).catch( (error)=>{
    console.log(error);
}).finally( ()=>{
    console.log("FINALLY executed");
})

// if error=false output:
// { username: 'sumit', pass: 1233 }
// sumit
// FINALLY executed


// if error=true output:
// ERROR! something went wrong
// FINALLY executed












const promiseFive=new Promise( function(resolve, reject){
    setTimeout(function(){
        let error=true;

        if(!error){
            resolve({username:"javascript", pass:156458})
        }else{
          reject("ERROR! javascript went wrong ")
        }
    }, 1000)
})
//handle the promices by using async

//this will give error bcz thre are no error handling thing
// async function consumepromiseFive(){
//     const response=await promiseFive;
//     console.log(response);
// }

//to handle the errors write it in try catch block
async function consumepromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log('An error occurred:', error);
    }
}

consumepromiseFive()
// An error occurred: ERROR! javascript went wrong








// real time data  fetch

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))