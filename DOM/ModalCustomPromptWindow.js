// CUSTOM MODAL PROMPT WINDOW 
let promptBtn = document.getElementById('btn-prompt');
let promptEl = document.querySelector('.prompt');
let overlayEl = document.querySelector('.overlay');
let promptB1 = document.getElementById('promptOk');
let promptB2 = document.getElementById('promptCancel');
let input = document.getElementById('input')


function showPrompt(){
    promptEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden')
}
function hidePrompt(event){
   let value;
//    console.log(event.target.textContent)
   if (event.target.textContent === 'Ok') {
        value = input.value
   } else {
        value = null;
   }
   promptEl.classList.add('hidden');
   overlayEl.classList.add('hidden')
   console.log(value)
}
promptBtn.addEventListener('click',showPrompt)
promptB1.addEventListener('click',hidePrompt)
promptB2.addEventListener('click',hidePrompt)