function sayMyname(){
    console.log("S")
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}

//execte the function
// sayMyname() 
/*S
  U
  M
  I
  T
*/




//add two numbers
function addTwoNumbers(num1, num2)
{
    console.log(num1+num2);
}

// addTwoNumbers() //NaN
// addTwoNumbers(4,5) //9
// addTwoNumbers(4,"5") //45
// addTwoNumbers(4,"a")//4a
// addTwoNumbers(4,null) //4

// const res=addTwoNumbers(3,4)  //7
// console.log(`Result=${res}`)  //Result=undefined

// Here is a problem ...result is undefine here so we have to return within the function 


function addNum(num1, num2)
{
    console.log("Sumit")
   return num1+num2;
}
const result=addNum(3,4)
console.log(`Result=${result}`) 
//Sumit
//Result=7


function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("Sumit") //no output bcz i wasn't print it

console.log(loginUserMessage("Sumit")); //Sumit just logged in

console.log(loginUserMessage()); //undefined just logged in





//lets fixx it by using if 
function UserMessage(username){
    if(username==undefined)  //if(!username)
        {
            console.log("please enter a username");
            return
        }
    return `${username} just logged in`
}

console.log(UserMessage()); //please enter a username







//give a default message
function Message(username="sam"){
    if(username==undefined)  //if(!username)
        {
            console.log("please enter a username");
            return
        }
    return `${username} just logged in`
}

console.log(Message()); //sam just logged in
