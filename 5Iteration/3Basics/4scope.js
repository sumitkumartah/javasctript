
//nested scope
function One(){
    const username="Sumit"

    function Two(){
      const website="youtube"
      console.log(username);
    }
    //console.log(website);//give error we can't acess the website at outside of the block

    Two()
}
One()

// Sumit





if(true){
    const username="sumit"
    if(username==="sumit"){
        const website=" youtube"
        console.log(username+website)  //sumit youtube
    } 
    // console.log(website); //give error due to outside of the block
}
//console.log(username);  //give error due to outside of the block





// +++++++++++++++++++++++interesting +++++++++++++++++++++

console.log(addOne(8))
function addOne(num){
    return num+1
}

         




//console.log(addTwo(5));  //error
const addTwo= function(num)
{
    return num+2
}
console.log(addTwo(5)); //7
