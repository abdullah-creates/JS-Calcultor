var box = document.getElementById('screen');

function display(number){
    box.value += number;
}

function calculate(){
    try {
        box.value = eval(box.value);    
    } 
    catch{
        box.value = 'Invalid';
    }
}

function reset(){
    box.value = '';
}

function del(){
    box.value = box.value.slice(0, -1);
}
