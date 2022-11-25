//assigning variables to query Selectors
const numberButtons = document.querySelectorAll('.button');
const display = document.querySelector('#output');

//loop for the buttons so all buttons can be selected
for(let b = 0; b < numberButtons.length; b++){
    numberButtons[b].addEventListener('click',()=>{
        // console.log(numberButtons[b].innerText)
        let button = numberButtons[b].innerText;
        display.value += button;
    })
}
let decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', (e)=>{
    display.value += decimalBtn.innerText
})

//Equation and display on the input element
let equal = document.querySelector('#equalBtn');
equal.addEventListener('click', ()=> {
        try{
            display.value = eval(display.value);
        }catch{
            display.value = 'Error!';
        }
    
})

//delete button
let del = document.querySelector('#delBtn');
del.addEventListener('click', ()=>{
    display.value = "";
})

//decimal

// if (/\b./.test(numberButtons)){
    //     numberButtons += display;
    // }
    
    
    // function idk(){

    // const decBtn = document.querySelector('#decimal');
    // const disabledButton = ()=>{
    //     decBtn.disabled = true
    // }
    // decBtn.addEventListener('click', ()=>{
    //     if (display.innerHTML == decNone){
    //         decBtn.disabled = true    
    //     }
        
    // })      
    // }
    
display.addEventListener('input',function(e) {
    let decNone = /\.$/;
    let currentValue = e.target.value;
    console.log(decNone.test(currentValue));
});



// btn = /\b./;

// button(includes(/\b"."/))

// if (btn == true) {
//     numberButtons += display;
// } 
