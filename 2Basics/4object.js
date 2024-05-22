// const tinderUse=new Object() //singleton object
const tinderUse={}   //non singeleton object

console.log(tinderUse) //{}


tinderUse.id="123abc"
tinderUse.name="sumit"
tinderUse.isLogedIn=false

// console.log(tinderUse); //{ id: '123abc', name: 'sumit', isLogedIn: false }


const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sumit",
            lastname:"Tah",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) //sumit



// assign many objects into one object 
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

const obj3=Object.assign({}, obj1, obj2, obj4)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// assign within one object by using spread operator 
const obj={...obj1, ...obj2, ...obj4}//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }




//sometime when object come from database it will come in array of object format example->

const users=[
    {
        id: 123,
        email:"abc@gmail.com"

    },
    {
        id: 123,
        email:"abc@gmail.com"

    },
    {
        id: 123,
        email:"abc@gmail.com"

    }
]

console.log( users[1].email) //abc@gmail.com


//acess onle the keys of the object
console.log(Object.keys(tinderUse));//[ 'id', 'name', 'isLogedIn' ]

//acess onle the values of the object
console.log(Object.values(tinderUse))// [ '123abc', 'sumit', false ]

console.log(Object.entries(tinderUse))//[ [ 'id', '123abc' ], [ 'name', 'sumit' ], [ 'isLogedIn', false ] ] 

console.log(tinderUse.hasOwnProperty('isLogedIn'));