
// numberButtons.addEventListener("click, button");

// function button () {
    //     document.getElementsById('#demo').innerHTML = "seven";
// }

// button();
// function button(){
    //     document.getElementsById('#display').innerHTML = "dgdgdg";
    // }

function assigning(){
    let display = document.querySelector('.display')   
    let numberButtons = document.querySelectorAll('data-number');
    let operatorButtons = document.querySelectorAll('data-operator');
    let deleteButton = document.querySelectorAll('data-delete');
    let equalsButton = document.querySelectorAll('data-equals');

    keys.addEventListener('click', e => {
        if (e.target.matches(button)){
            // do something 
        }
        const key = e.target
        const action = key.dataset.number
    })
}

