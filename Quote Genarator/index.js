const api_url = "https://api.quotable.io/random";

let quote_select = document.getElementById("quote");
let author_select = document.getElementById("author");
let btn = document.getElementById("btn")




async function get_quote(url) {
    const response = await fetch(url);
    var data  = await response.json();
    // console.log(data);
    quote_select.innerHTML = data.content;
    author_select.innerHTML = data.author;
}

get_quote(api_url);

btn.addEventListener('click' , function() {

    
    get_quote(api_url);
})