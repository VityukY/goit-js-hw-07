const renderRef = document.querySelector('[data-action="render"]')
const boxCobteinerRef = document.querySelector('#boxes')
const cleanButtonRef = document.querySelector('[data-action="destroy"]')
const controlsAreaRef = document.querySelector('#controls')
const inputNumberRef = controlsAreaRef.firstElementChild;


cleanButtonRef.addEventListener('click', cleanHendler)

renderRef.addEventListener('click', () => {
    const boxArray = [];
    let valueOrderdBox = Number(inputNumberRef.value)  
    while (valueOrderdBox > 0){
        boxArray.push (newBoxHandler(valueOrderdBox,Number(inputNumberRef.value)));
        valueOrderdBox-=1;
    }
    boxCobteinerRef.append(...boxArray);
})

function newBoxHandler(restBoxes,orderedBoxes) {
    const box = document.createElement('div');
    box.style.backgroundColor  = get_random_color();
    if (orderedBoxes===restBoxes){
        console.log('то что нужно')
        box.style.width = '30px';
        box.style.height = '30px';
    } else {
        console.log('второе то что нужно')
        let factor = Number(orderedBoxes) - Number(restBoxes);
        const currentSize = 30+10*factor;
        box.style.width = currentSize+'px';
        box.style.height = currentSize+'px';

    }
    return box;
}

function cleanHendler () {
    while (boxCobteinerRef.firstChild){
        boxCobteinerRef.removeChild (boxCobteinerRef.firstChild)
    }
}
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

