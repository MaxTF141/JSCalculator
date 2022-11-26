//assigning variables to query Selectors
const numberButtons = document.querySelectorAll('.button');
const display = document.querySelector('#output');
let emptyArray = [];
//loop for the buttons so all buttons can be selected
for(let b = 0; b < numberButtons.length; b++){
    numberButtons[b].addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case '.':
                if(!emptyArray.includes('.') ){ 
                    display.value += e.target.innerText;
                    emptyArray.push(e.target.innerText);
                    console.log(emptyArray);
                }
                break;
                case '-':
                case '+':
                case '/':
                case '*':
                    if(!display.value.endsWith(e.target.innerText)){
                        display.value += e.target.innerText;
                        emptyArray = [];
                        console.log(emptyArray);
                    }
                break;
                default:                
                display.value += e.target.innerText;
                emptyArray.push(e.target.innerText)
                console.log(e.target.innerText)
                console.log(emptyArray)
            }
        })
    }
//Equal Button 
let equal = document.querySelector('#equalBtn');
equal.addEventListener('click', e => {
    switch(e.target.innerText){
        default:
            console.log(display.value);
        try{
            if(display.value == ''){
                display.value = ''
            }else{
            display.value = eval(display.value).toFixed(2)
            console.log(typeof(display.value))
            emptyArray = [];
            emptyArray = [...display.value.split('')]
            console.log(emptyArray);
        }
        }catch{
            display.value = 'Error!';
        }
    }
})
//delete button
let del = document.querySelector('#delBtn');
del.addEventListener('click', ()=>{
    display.value = display.value.slice(0, -1);
    emptyArray.pop();
})
