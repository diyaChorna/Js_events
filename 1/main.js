// let doMy = document.querySelector('.box');
// doMy.style.background = 'pink';

// let sel = y => document.querySelector(y)

// sel('.box').onmouseover = function(){
//       this.style.background = 'rgb(219, 0, 48)';
// }
// sel('.box').onmouseout = function(){
//       this.style.background = 'pink';
// }

// }
let color = ['rgb(219, 0, 48)', 'rgb(116, 7, 218)', 'rgb(53, 7, 218)'];
let box = document.querySelector('.box');
let count =0;
if(count <=2){
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = color[count];
        count++;
        if(count ===3){
            count = 0;
        }
    })
    box.addEventListener('mouseout', function(){
        box.style.backgroundColor = '';
    })
}

