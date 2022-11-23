//assigning variables to query Selectors
const numberButtons = document.querySelectorAll('.button');
const display = document.querySelector('#display');

//loop for the buttons so all buttons can be selected
for(let b = 0; b < numberButtons.length; b++){
    numberButtons[b].addEventListener('click',()=>{
        console.log(numberButtons[b].innerText)
        let button = numberButtons[b].innerText;
        display.value += button;
    })
}
//Equation and display on the input element
let equal = document.querySelector('#equalBtn');
equal.addEventListener('click', ()=> {
    display.value = eval(display.value)    
})
//delete button
let del = document.querySelector('#delBtn');
del.addEventListener('click', ()=>{
    display.value = "";
})
//decimal
