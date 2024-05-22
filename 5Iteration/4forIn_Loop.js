const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//acess key by using for in loop
for (const key in myObject) { 
    // console.log(key)
}
/*js
cpp
 rb
swift*/

// acess object by using for in loop
for (const key in myObject) { 
    // console.log(myObject[key])
}
/*
javascript
C++
ruby
swift by apple
*/




//for in loop in array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
/*
js
rb
py
java
cpp
*/




const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    
    console.log(key) //output isn't come because map is not iteratable like that
}


/*

*/