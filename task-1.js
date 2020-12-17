const allCategoriesRef = document.querySelectorAll('.item');
console.log (`В списке ${allCategoriesRef.length} категории.`);


const categoryDetails = (categiryRef) =>{
    
    const categoryTitleRef = categiryRef.firstElementChild;
   /* console.log (categoryTitleRef.textContent)*/

    const listCategoryRef = categiryRef.lastElementChild;
   /* console.log(listCategoryRef.children.length)*/

    return `Категория: ${categoryTitleRef.textContent}. Количество элементов: ${listCategoryRef.children.length}`

}


allCategoriesRef.forEach(category => {console.log(categoryDetails(category))});



