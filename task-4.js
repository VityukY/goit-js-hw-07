const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value')
const incrementButtonRef = document.querySelector('[data-action="increment"]');


valueRef.dataset.value='0';

incrementButtonRef.addEventListener('click', () => {
    let currentValue = valueRef.dataset.value;
    currentValue = Number(currentValue);
    currentValue+=1;
    valueRef.dataset.value =currentValue;
    valueRef.textContent = valueRef.dataset.value;

});

decrementButtonRef.addEventListener('click', () => {
    let currentValue = valueRef.dataset.value;
    currentValue = Number(currentValue);
    currentValue-=1;
    valueRef.dataset.value =currentValue;
    valueRef.textContent = valueRef.dataset.value;
});