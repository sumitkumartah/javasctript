const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10



// initialValue=0
// accumulator=0
// currentValue=1
// accumulator+currentValue=0+1=1
// -------------------------
// accumulator=1
// currentValue=2
// accumulator+currentValue=1+2=3
// ------------------------------
// accumulator=3
// currentValue=3
// accumulator=6
// -----------------------
// accumulator=6
// currentValue=4
// . . .






const myNums=[1, 2, 3]
//by using function
const myTotal= myNums.reduce( function(acc,curr){
    console.log(`acc: ${acc} and currval: ${curr}`);
    return acc+curr
}, 3)
console.log(myTotal); 
/*
acc: 3 and currval: 1
acc: 4 and currval: 2
acc: 6 and currval: 3
*/


//by using arrow
const mySum=myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);//6






const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalPrice= shoppingCart.reduce( (acc, item)=> acc+item.price , 0)
console.log(totalPrice) //22996


//by using forEach loop
let sum = 0;
shoppingCart.forEach( (item) => {
    sum += item.price;
});

console.log(totalPrice); // 22996