//add so many items in the function so i have to handle this by using function

function calculateCartPrice(...num1){
   return num1
}
console.log(calculateCartPrice(200,500,600,2000,4000));  //[ 200, 500, 600, 2000, 4000 ]


function calculatePrice(val1, val2, ...num1){
    return num1
 }
 console.log(calculatePrice(200,500,600,2000,4000));  //[ 600, 2000, 4000 ]








//object pass in function
const user={  //object
    username:"sumit",
    price:1999
}
//function
function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) //username is sumit and price is 1999

//we can also pass object manually
handleObject({ username:"sam", price:"19999"})  //username is sam and price is 19999







//pass array in the funcion
const myArray=[12,988,67,54]
function returnsecondValue(getValue)
{
    return getValue[1];
}
console.log(returnsecondValue(myArray)) //988

//manually pass array
console.log(returnsecondValue([100,700,500,400]))  //700
