let li = document.getElementsByClassName('.li');
li.addEventListener('mouseover', function(){
    li.style.color = `${this.value}`;
})