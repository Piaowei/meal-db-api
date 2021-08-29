document.getElementById('error-messege').style.display = 'none';


const searchFood = () => {
	const inputField = document.getElementById("meal-input").value;
	document.getElementById("meal-input").value = "";

	if (inputField == "") {
		const toolTipBar = document.getElementById("tooltip-id");
		const tooltipDiv = document.createElement('div')
		tooltipDiv.id = "hey"
		tooltipDiv.innerHTML = `
		<div class="alert alert-danger" role="alert">
		A simple danger alert—check it out!
	  </div>
		`;
		toolTipBar.appendChild(tooltipDiv);
	}
	else {
		document.getElementById('hey').textContent = "";
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`
		fetch(url)
			.then(res => res.json())
			.then(data => displayFood(data.meals))
			.catch(error => displayError(error));
	}


}

const displayError = error => {
	document.getElementById('error-messege').style.display = 'block';
}

const displayFood = meals => {
	const searchResult = document.getElementById("search-result");
	document.getElementById("search-result").textContent = "";
	meals.forEach(meal => {
		// console.log(meals);
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `
		<div onclick="mealDetails(${meal.idMeal})" class="card h-100">
			<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${meal.strMeal}</h5>
				<p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
			</div>
		</div>
		`;
		searchResult.appendChild(div);
	});
}

const mealDetails = (mealId) => {
	// console.log(mealId);
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
		.then(res => res.json())
		.then(data => displaySingleDetails(data.meals[0]));
}

const displaySingleDetails = mealDetail => {
	const singleCard = document.getElementById("single-card");
	document.getElementById("single-card").textContent = "";
	const div = document.createElement('div');
	div.classList.add('card')
	div.innerHTML = `			
	<div class="card w-100" style="width: 18rem;">
		<img src="${mealDetail.strMealThumb}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">${mealDetail.strInstructions.slice(0, 100)}.</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
			`;
	singleCard.appendChild(div);
}





















// Event handler
document.getElementById("meal-input-btn").addEventListener('click', function () {
	searchFood();
})