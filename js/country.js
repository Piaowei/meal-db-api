const loadCountries = () => {
	fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => displayCountris(data));
}
loadCountries();
const displayCountris = (countries) => {
	const countriesDiv = document.getElementById("countries-id");
	countries.forEach(country => {
		const div = document.createElement('div');
		div.classList.add('country-class');
		div.innerHTML = `
		<h3>${country.name}</h3>
        <p>${country.capital}</p>
		<button onclick="loadCountryByName('${country.name}')" >Details</button>
		`;
		countriesDiv.appendChild(div);

		/* 		// add h3
				const h3 = document.createElement('h3');
				h3.innerText = country.name;
				div.appendChild(h3);
		
				// add detailes
				const p = document.createElement('p');
				p.innerText = country.capital;
				div.appendChild(p);
				countriesDiv.appendChild(div); */



	});

}

const loadCountryByName = name => {
	const url = `https://restcountries.eu/rest/v2/name/${name}`;
	console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = country => {
	const countriesDiv = document.getElementById("country-detail");
	countriesDiv.innerHTML = `
	<h4>${country.name}</h4>
	<p>${country.population}</p>
	<img width="200px" src="${country.flag}" alt="">
	`;
}