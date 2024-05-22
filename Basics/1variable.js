const accountId=123456
// it is a contstant will not change in the code 

let accountEmail="abc@gmail.com"
// it is a variable we can change its value

var accountPassword="757564"
//it is also a varible but it has issue in block scope and functional scope so we just avoid this

accountCity="KOLKATA"
//if we don't write anything before the variable js will automatically take it variable


console.log( accountId)
//it help to print

console.table([accountId, accountEmail, accountPassword, accountCity])
//it will print in a table format

accountEmail="xyz@gmail.com"
//change the email

let accountName;
//if we don't give any value and print it .....it will print undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountName])

// node basics/variable.js