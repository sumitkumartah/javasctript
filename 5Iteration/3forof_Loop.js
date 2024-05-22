//for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
//1 2 3 4 5



const greeting="Hello world!"
for (const greet of greeting) {
    // console.log(`Each char is = ${greet}`);
}
/*
Each char is = H
Each char is = e
Each char is = l
Each char is = l
Each char is = o
Each char is =
Each char is = w
Each char is = o
Each char is = r
Each char is = l
Each char is = d
Each char is = !   
*/



//Maps
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

// console.log(map1.get('a'));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// Expected output: 2





const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/



// loop in map (for of loop)
for(const key of map){
    console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ] 
*/


for(const [key, value] of map)
    {
        console.log(key,` :- `,value)
    }
    /*
IN  :-  India
USA  :-  United States of America
Fr  :-  France
*/




