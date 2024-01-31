let btn = document.querySelector('#addbtn');
let listcontainer = document.querySelector('#todocontainer');
let input = document.querySelector('#inputid');

btn.addEventListener('click', function(){
    let count = 0;
    count++;
    if(count >= 4){
        alert("You cannot enter more than 5 tasks!");
        return;
    }
    if(input.value == ""){
        alert("You must write something!");
        return;
    }
    if(input.value.length > 10){
        alert("You must write less than 20 characters!");
        return;
    }
    if (!isNaN(input.value)) {
        alert("You cannot enter numbers!");
        return;
    }


    if(input.value.length < 3){
        alert("You must write more than 3 characters!");
        return;
    }

  
    var paragraph = document.createElement('p');
    const newButton = document.createElement('button');
    newButton.style.color = "black"
    newButton.style.margin = "10px"
    newButton.style.padding = "10px"
    newButton.style.fontFamily = "Arial"
    newButton.style.fontWeight = "bold"
    newButton.style.textAlign = "center"
    newButton.style.backgroundColor = "red"
    newButton.style.borderRadius = "12px"
    newButton.style.cursor = "pointer"
    

    newButton.textContent = 'Remove';
   
    paragraph.style.color = "#fff"
    paragraph.style.margin = "10px"
    paragraph.style.padding = "10px"
    paragraph.style.fontFamily = "Arial"
    paragraph.style.fontWeight = "bold"
    paragraph.style.textAlign = "center"
    paragraph.style.backgroundColor = "#a1e4b0"
    paragraph.style.borderRadius = "12px"
    paragraph.style.cursor = "pointer"
    paragraph.style.width = "200px"
    // paragraph.style.height = "50px"
    // paragraph.style.fontSize = "20px"
    paragraph.style.textDecoration = "none"

    
    paragraph.innerHTML = input.value;

    // input.value = "";

    listcontainer.appendChild(paragraph);
    listcontainer.appendChild(newButton);

    newButton.addEventListener('click', function(){
        listcontainer.removeChild(paragraph);
        listcontainer.removeChild(newButton);
    });
   
    // paragraph.addEventListener('click', function(){
    //    
    // });
    // paragraph.addEventListener('dblclick', function(){
    //     listcontainer.removeChild(paragraph);
    // });

});

   
