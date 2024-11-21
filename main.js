const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api_url = 'https://dummyjson.com/quotes/random';

async function getquote() {
    try {
        const response = await fetch(api_url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = ` ${data.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        quote.innerHTML = 'Failed to fetch quote.';
        author.innerHTML = '';
    }
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML+ "---- by " + author.innerHTML, "Tweet Window", "width=300", "height=150")
}