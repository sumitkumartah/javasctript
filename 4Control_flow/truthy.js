// userEmail="abc&gmail.com"

// if(userEmail)
//     {
//         console.log("Got user email");
//     }else{
//         console.log("Don't have user email");
//     }


// Insted of that if there are Array 
userEmail=[]

if(userEmail)
    {
        console.log("Got user email");
    }else{
        console.log("Don't have user email");
    }
//Got user email (empty array so we consider it true)




//falsy values->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// (only these are false value and other are true)

//truthy values
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
    //     console.log("Array is empty");
    // }


    //object check
    const emptyObj = {}
    if (Object.keys(emptyObj).length === 0) {
        console.log("Object is empty");
    }
    
    // Object.keys(emptyObj)  -> get keys of the object which wwe get in array from  


// If you run in website console 
// false==0 //output: true
// false==''//output: true
// 0==''    //output: true







// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10 //(if val1 is undefined then val1=5)
// console.log(val1) //5



 val1 = null ?? 10
//console.log(val1) //10

 val1 = undefined ?? 15
 //console.log(val1) //15


val1 = null ?? 10 ?? 20  //assign the first value -> 10
//console.log(val1)//10



// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")