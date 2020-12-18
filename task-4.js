const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value')
const incrementButtonRef = document.querySelector('[data-action="increment"]');




incrementButtonRef.addEventListener('click', () => {
    let currentValue = valueRef.textContent;
    currentValue = Number(currentValue);
    currentValue+=1;
    valueRef.textContent = currentValue;
});

decrementButtonRef.addEventListener('click', () => {
    let currentValue = valueRef.textContent;
    currentValue = Number(currentValue);
    currentValue-=1;
    valueRef.textContent = currentValue;
});