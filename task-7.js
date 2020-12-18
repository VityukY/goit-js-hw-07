const sizeControlerRef = document.querySelector('#font-size-control');
const textRef =  document.querySelector('#text');

sizeControlerRef.addEventListener('input', fontSizeHandler);

function fontSizeHandler (event){
    console.log (event)
    console.log(event.target.value)
    textRef.style.fontSize = event.target.value+'px';
} 