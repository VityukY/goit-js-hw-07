const inputRef = document.querySelector('#validation-input');
const validationValueRef = document.querySelector('[data-length="6"]');

inputRef.addEventListener('blur', (event) => {
    console.dir(event.target.value)
    if (inputValidationHandler(event)){
        inputRef.id = 'validation-input-valid'}
    else {
        inputRef.id = 'validation-input-invalid'}



})

function inputValidationHandler (event) {
    return event.target.value.length === Number(validationValueRef.dataset.length)

}

