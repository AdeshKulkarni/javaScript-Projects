const number1 = document.querySelector('#num1');
const number2 = document.querySelector('#num2');

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const mulBtn = document.querySelector('#mul');
const divBtn = document.querySelector('#div');

const result = document.querySelector('.ans');

addBtn.addEventListener('click', () => {
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    

    result.textContent = n1 + n2;
});

subBtn.addEventListener('click', () => {    
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    

    result.textContent = n1 - n2;
});

mulBtn.addEventListener('click', () => {    
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    

    result.textContent = n1 * n2;
});

divBtn.addEventListener('click', () => {    
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    

    result.textContent = n1 / n2;
});