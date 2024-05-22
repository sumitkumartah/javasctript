//select the form
const form=document.querySelector('form')

//this usecase will give empty after submit the form
// const height=parseInt(document.querySelector('#height').value)

//we have to stop the value which will go to browser 
form.addEventListener('submit', function(e){
   //handle the default action of the form
   e.preventDefault()

   //take height and weight form the FORM in int
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const result=document.querySelector('#results')


   if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`please give a valid height ${height}`
   }else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`please give a valid height ${weight}`
   }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
   }

})