const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop
coding.forEach( function (item){
    // console.log(item)
})



//Arrow function in forEach loop
coding.forEach((item) =>{
    // console.log(item)
})
/*
js
ruby
java
python
cpp
*/


//external funtion
function printme(item)
{
    console.log(item);
}
// coding.forEach(printme)



//by using arrow funtion and forEach loop we can acess array item, index, whole array together
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/




//acess object within a array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
  console.log(item.languageName);
})
/*
javascript
java
python
*/