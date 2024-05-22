// const clock=document.querySelector('#clock');
const clock=document.getElementById('clock');

//for every second update of the time i use setInterval
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
