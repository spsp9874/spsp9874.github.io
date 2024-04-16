const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let answer = '';

async function getJsonWithFetch() {
    //console.log("Test");
    try {
        const response = await fetch('https://cat-fact.herokuapp.com');
        
            const JsonData = await response.json;

            console.log(JsonData);
            Image.src=JsonData[0]["http://placekitten.com/200/300"];

    } catch (err) {
        console.log(err);
        alert('Failed to fetch new cat');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer() {
    answerText.textContent = answer;
}

getQuote();