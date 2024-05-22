let variable=null

console.log(typeof(variable))  //object

//convert into number
let convertIntoNumber=Number(variable)  

//check type of convertIntoNumbe
console.log(typeof(convertIntoNumber))   //number

//print 
console.log(convertIntoNumber) //0
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0




//convert into boolean 
let v
console.log(typeof(v))  //undefined

//convert into number
let convertIntoBoolean=Boolean(v)  

//check type of convertIntoBoolean
console.log(typeof(convertIntoBoolean))   //boolean

//print 
console.log(convertIntoBoolean)   //false

// 1 => true; 0 => false
// "" => false
// "sumit" => true
//null=> false
//undefined=> false







//convert into string
let n
console.log(typeof(n))   //undefined

//convert into string  
let convertIntoString=String(n)  

//check type of convertIntostring
console.log(typeof(convertIntoString)) //string

//print 
console.log(convertIntoString)  //undefined

// 123=> "123"
//"null"=> null
//undefined => undefined