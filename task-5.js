/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.*/

const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', nameInputHendler);

function nameInputHendler (event) {
    console.dir(event);
    nameOutputRef.textContent = event.target.value;
    if (event.target.value===''){
        nameOutputRef.textContent = 'незнакомец'
    }
}

