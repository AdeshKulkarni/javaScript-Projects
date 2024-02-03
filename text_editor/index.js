let select = document.querySelector("#mySelect");
let input = document.querySelector("#myInput");
// console.log(input)

function shiftText() {
  let selectedOption = select.options[select.selectedIndex].value;
  // console.log(selectedOption)

  if (selectedOption === "option1") {
    input.style.fontWeight = "bold";
  } else if (selectedOption === "option2") {
    input.style.fontStyle = "italic";
  } else if (selectedOption === "option3") {
    input.style.textDecoration = "underline";
  } else if (selectedOption === "option4") {
    input.style.textAlign = "center";
  } else if (selectedOption === "Do_Nothing") {
    input.style = " ";
  }
}

function font_change() {
  // let input_change = input.value;
  let select_font = document.querySelector("#font-drop_down");

  let Option_Font = select_font.options[select_font.selectedIndex].value;

  switch (Option_Font) {
    case "Do_Nothing":
      input.style.fontSize = ""; // Reset to default
      break;
    case "one":
      input.style.fontSize = "10px";
      break;
    case "two":
      input.style.fontSize = "20px";
      break;
    case "three":
      input.style.fontSize = "25px";
      break;
    case "four":
      input.style.fontSize = "30px";
      break;
    case "five":
      input.style.fontSize = "35px";
      break;

    case "six":
      input.style.fontSize = "40px";
      break;
    case "seven":
      input.style.fontSize = "45px";
      break;
    case "eight":
      input.style.fontSize = "50px";
      break;
    case "nine":
      input.style.fontSize = "55px";
      break;
    case "ten":
      input.style.fontSize = "60px";
      break;

    default:
      input.style.fontSize = ""; // Reset to default
      break;
  }
}

function change_Color() {
  let select_Color = document.querySelector("#color-drop_down");

  let Option_Color = select_Color.options[select_Color.selectedIndex].value;

 switch (Option_Color) {
    case "c1":
      input.style.fontSize = "black";
      break;
    case "c2":
      input.style.color = "green";
      break;
    case "c3":
      input.style.color = "red";
      break;
    case "c4":
      input.style.color = "yellow";
      break;

    case "c5":
      input.style.color = "blue";
      break;
    case "c6":
      input.style.color = "purple";
      break;
    case "c7":
      input.style.color = "orange";
      break;
    case "c8":
      input.style.color = "brown";
      break;
    case "c9":
      input.style.color = "gray";
      break;
    case "c10":
      input.style.color = "pink";
      break;
  }

 

}
function change_Color_back(){
  let select_Color_back = document.querySelector("#back-drop_down");
  

  let Option_Color_back = select_Color_back.options[select_Color_back.selectedIndex].value;
  
  // if(Option_Color_back === "Bc1") {
  //   input.style.backgroundColor = "white";
  // }
  // else if(Option_Color_back === "Bc2"){
  //   input.style.backgroundColor = "Green"
  // }

  switch (Option_Color_back) {
    case "Bc1":
      input.style.backgroundColor = "white";
      break;
    case "Bc2":
      input.style.backgroundColor = "green";
      break;
    case "Bc3":
      input.style.backgroundColor = "red";
      break;
    case "Bc4":
      input.style.backgroundColor = "yellow";
      break;

    case "Bc5":
      input.style.backgroundColor = "blue";
      break;
    case "Bc6":
      input.style.backgroundColor = "purple";
      break;
    case "Bc7":
      input.style.backgroundColor = "orange";
      break;
    case "Bc8":
      input.style.backgroundColor = "brown";
      break;
    case "Bc9":
      input.style.backgroundColor = "gray";
      break;
    case "Bc10":
      input.style.backgroundColor = "pink";
      break;
  }
}
