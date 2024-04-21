const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - By " + author.innerHTML, "Tweet Window", "width=600,height=300");
}

function readQuote() {
    const textToSpeak = quote.innerText + " By " + author.innerText;
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.lang = 'en-US'; // Set language to English (United States)
    window.speechSynthesis.speak(speech);
}
