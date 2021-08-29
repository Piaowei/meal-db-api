// step 1
const loadQuotes = () => {
	fetch('https://api.kanye.rest')
		.then(res => res.json())
		.then(data => displayQuote(data));
}
// step2
const displayQuote = quote => {
	const quoteElement = document.getElementById('quote');
	quoteElement.innerText = quote.quote;
}
