//At first take button
const buttons=document.querySelectorAll('.button')

//select the body
const body=document.querySelector('body')

buttons.forEach(function(b) {
  console.log(b);

  b.addEventListener('click',function(e){
    console.log(e);//pointerEvent{isTrusted: true}
    console.log(e.target);  
    // HTMLSpanElement
        // attributes: Object
        //  class: "button"
        //  id: "white"
    // so from here we can select id 
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    else{
      body.style.backgroundColor=e.target.id;
    }
  })
});