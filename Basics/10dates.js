// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate=new Date()

console.log(typeof myDate) //object

console.log(myDate) //Output : 2023-10-09T14:38:09.847Z








// ///////////We can use various methods to convert this date into more readable value.

// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (India Standard Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (India Standard Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z






//////////////////////////////////////////////////////////////////////////////






// let myCreateddate=new Date(2023, 0, 23)
// console.log(myCreateddate.toDateString()) //Mon Jan 23 2023


// let myNewCreateddate=new Date(2023, 0, 23,5,3)
// console.log(myNewCreateddate.toLocaleString()) //23/1/2023, 5:03:00 am

// //yy-mm-dd type
// let anotherCreateddate=new Date("2024-01-14")
// console.log(anotherCreateddate.toLocaleDateString()) // 14/1/2024

// //mm-dd-yy type
// let anotherOneCreateddate=new Date("02-24-24")
// console.log(anotherOneCreateddate.toLocaleDateString()) // 24/2/2024



////////////////////////////////////////////////////////////////////////////////////




// let myTimeStamp=Date.now()
// console.log(myTimeStamp) //1715076586457 (January 01, 1970 to now total milisecond )

// let present =new Date("01-14-24")
// console.log(present.getTime()) //1705170600000  (from this jan 14 to now total miliseconds)


// //it give the output in seconds
// console.log(Math.floor(Date.now() /1000))//1715077096





/////////////////////////////////////////////////////////////////////////////////////

let newdate= new Date()
console.log(newdate); //2024-05-07T10:22:49.923Z
console.log(newdate.getMonth()) //4
console.log(newdate.getDate()) //7