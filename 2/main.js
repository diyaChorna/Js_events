let box = document.querySelector('.box');
box.addEventListener('mouseover', function(){
    box.style.backgroundColor = 'rgb(112, 197, 247)';
    box.textContent = 'Хочеш знати який?';
})
box.addEventListener('mouseout', function(){
    box.style.backgroundColor = 'pink';
    box.textContent = 'У мене є секрет!';
})
box.addEventListener('mousedown', function(){
    box.style.backgroundColor = 'rgb(51, 241, 130)';
    box.textContent = 'А я тобі не скажу';
})
box.addEventListener('mouseup', function(){
    box.style.backgroundColor = 'rgb(112, 197, 247)';
    box.textContent = 'Хочеш знати який?';
})