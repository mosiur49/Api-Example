
// const loadQuote = () =>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayquote(data))
// }

// const displayquote = quote =>{
//     const blockquote=document.getElementById('quote');
//     console.log(quote);
//     blockquote.innerHTML=quote.quote;
// }

function loadQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayquote(data))

}
function displayquote(quote){
    const blockquote =document.getElementById('quote');
    console.log(quote);
    blockquote.innerHTML=quote.quote
}



loadQuote();