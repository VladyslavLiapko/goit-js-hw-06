const counterValue = document.getElementById('value'); 
counterValue.setAttribute('value', 0)

const incrementListenerBtn = document.querySelector('[data-action="increment"]');
const decrementListenerBtn = document.querySelector('[data-action="decrement"]');

incrementListenerBtn.addEventListener("click", () => {
   var value = parseInt(counterValue.getAttribute('value'))+1; 

   counterValue.setAttribute('value', value);

   counterValue.innerHTML = value;
  });

decrementListenerBtn.addEventListener("click", () => {
    var value = parseInt(counterValue.getAttribute('value'))-1; 

    counterValue.setAttribute('value', value);
 
    counterValue.innerHTML = value;
});
