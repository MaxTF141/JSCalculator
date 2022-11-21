// let number = Array.from(document.querySelectorAll('[data-number]'));
// let operator = document.querySelectorAll('[data-operator]');
// let equals = document.querySelector('data-equals');
// let clear = document.querySelector('clear');

// number.addEventListener('click', (e)=>{
//     let display = document.querySelector('.display').value;
//     document.querySelector('.display').innerHTML = display.replace('0', number);
// })

let display = document.querySelector('.display');
let buttons = document.getElementsByClassName('button');

buttons.map (button =>{
    button.addEventListener('switch', function(e){
        switch(e.target.innerText){
            case 'del':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = ""
                }
                break;
                default:
                    display.innerText += e.target.innerText;
        }
    });
});