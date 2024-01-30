let website_input = document.querySelector("#website");
let username_input = document.querySelector("#username");
let password_input = document.querySelector("#password");

let submit_button = document.querySelector(".btn");

submit_button.addEventListener("click", function (event) {

event.preventDefault();
let website = website_input.value;
let username = username_input.value;
let password = password_input.value;

localStorage.setItem("website", website);
localStorage.setItem("username", username);
localStorage.setItem("password", password);

var website_new = localStorage.getItem("website");
var username_new = localStorage.getItem("username");
var password_new = localStorage.getItem("password");

var newTable = document.createElement("table");

var deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";

deletebtn.style.backgroundColor = "red";
deletebtn.style.color = "white";
deletebtn.style.border = "none";
deletebtn.style.padding = "10px";
deletebtn.style.margin = "10px";
deletebtn.style.fontSize = "17px";
deletebtn.style.borderRadius = "10px";


newTable.style.border = "2px solid blue";  
newTable.style.padding = "10px";
newTable.style.backgroundColor = "lightblue";
newTable.style.textAlign = "center";
newTable.style.fontSize = "17px";
newTable.style.width = "600px";
newTable.style.margin = "10px";

var headerRow = newTable.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);

headerCell1.textContent = "Website";
headerCell2.textContent = "Username";
headerCell3.textContent = "Password";

var dataRow = newTable.insertRow(1);
var dataCell1 = dataRow.insertCell(0);
var dataCell2 = dataRow.insertCell(1);
var dataCell3 = dataRow.insertCell(2);

dataCell1.textContent = website_new;
dataCell2.textContent = username_new;
dataCell3.textContent = password_new;

deletebtn.addEventListener("click", function (event) {
newTable.remove();
deletebtn.remove();
});


let newdiv = document.querySelector(".maincontainer");

newdiv.appendChild(deletebtn);

newdiv.appendChild(newTable);

});


