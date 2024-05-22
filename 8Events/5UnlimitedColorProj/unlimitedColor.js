//generate a random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for (let i = 0; i < 6; i++) {
       //take random number
       color+=hex[Math.floor(Math.random()*16)]
        
    }
    return color;
}
console.log(randomColor());//#F00D44   (random color will generate)


//start changing color
let interValId;
const startChangingcolor=function(){
    //we can write it ouside of the function
    function chageColor(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!interValId){
    interValId=setInterval(chageColor, 1000);
 }
}
document.querySelector("#start").addEventListener('click',startChangingcolor)




//stop changing color
const stopChangingcolor=function(){
     clearInterval(interValId);
     interValId=null;
}
document.querySelector("#stop").addEventListener('click',stopChangingcolor)