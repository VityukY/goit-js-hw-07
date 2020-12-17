const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsListRef = document.querySelector('#ingredients')


const createListItemRef = function (item){
    const ingredientsListItemRef = document.createElement('li');
    ingredientsListItemRef.textContent = item;
    return ingredientsListItemRef;
};

const listItemRef = ingredients.map(item => createListItemRef(item));
ingredientsListRef.append(...listItemRef);