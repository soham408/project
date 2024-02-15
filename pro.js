const api = "https://api.github.com/users/soham408";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const button = document.getElementById("button");


btn.addEventListener("click", getQuote);
button.addEventListener("click", tweet);


function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, + "____by" + author.innerHTML)
    
};

const text = document.getElementById(quote.innerHTML).textContent;
const bbtn = document.getElementById('copybtn');
bbtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(text + ++i);
});




