const name="Sumit"
const repoCount=100

//concatination in string 
// console.log(name + repoCount + " value"); //Sumit100 value

//concatination in string by using string interpolation
console.log(`My name is ${name} and my marks is = ${repoCount}`);


// string decleration like object 
const gameName=new String('Sumit_rcb') //here basically create a string object

// acess the keys of the string 
// console.log(gameName[1]);  //print u


//acess the prototype
// console.log(gameName.__proto__) //print {}

//length of the string 
// console.log(gameName.length)  //print 5

//print the string in upperletter
// console.log(gameName.toUpperCase()) //print SUMIT
//it will not effect on the uppercase just print the string un uppercase


//check in which index which character
// console.log(gameName.charAt(2))  //print m


//check in which character is in which index
// console.log(gameName.indexOf('i')) //print 3


 //substring (print start to end-1)
// const newString=gameName.substring(0,4) //here print 0 to 4-1
// console.log(newString) //print Sumi


// //slice method(it supports negetive value also)
//  const anotherString=gameName.slice(-8, 4)
//  console.log(anotherString)  //print umi



//  //trim the extra space 
//  const newString="   sumit  "
//  console.log(newString); //print    __sumit
//  console.log(newString.trim()); //print sumit 


//  //replace() (use to replace character in a string)
//  const url="https://sumit.com%20sumitkumar"
//  console.log(url.replace('%20', '-')) //print https://sumit.com-sumitkumar

// console.log(url.includes('sumit')) //print true




// split 
console.log(gameName.split('_'))  //[ 'Sumit', 'rcb' ]