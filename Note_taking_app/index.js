
let button = document.querySelector('#btn');

// let input_value = input.value;
// localStorage.clear();



button.addEventListener('click' , function(){
    let new_div = document.createElement('div');
    new_div.classList.add('new_div');
    new_div.style.width = '22%';
    new_div.style.height = '90px';
   
    new_div.style.margin = '13px';  
    new_div.style.display = 'flex'; 
    new_div.style.justifyContent = 'center';
    new_div.style.alignItems = 'center';
    new_div.style.justifyContent = "space-around";  


    new_div.style.border = '2px solid black';
    new_div.style.display = 'inline-block';
    

    new_div.style.backgroundColor = "red"
  
    let input = document.querySelector('#input').value;
    
   
    new_div.innerHTML = input;
    // console.log(input_value);
    
    document.body.appendChild(new_div); 

})



