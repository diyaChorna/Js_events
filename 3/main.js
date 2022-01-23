let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');

box1.addEventListener('mousedown', function(){
    box1.style.backgroundColor = 'black';
    let image1 = prompt('Напишіть перше посилання на зображення');
    box1.style.backgroundImage = `url(${image1})`;
    
})
box2.addEventListener('mousedown', function(){
    let image2 = prompt('Напишіть перше посилання на зображення');
    box2.style.backgroundImage = `url(${image2})`;
})
box3.addEventListener('mousedown', function(){
    let image3 = prompt('Напишіть перше посилання на зображення');
    box3.style.backgroundImage = `url(${image3})`;
})