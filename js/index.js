// Your code goes here
//mouseover
let nav = document.querySelector('nav');
nav.addEventListener("mouseover", function(event){
    event.target.style.color = "pink";
});
//focus
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
  event.target.style.background = 'grey';    
});
password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});
//dbclick
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
//select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);