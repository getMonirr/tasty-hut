const getMealData = (searchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMealData(data.meals))
}

const setMealData = data => {
    data.forEach(meal => {
        const { strMeal: title, strMealThumb: mealImg,idMeal} = meal;
        // console.log(meal);
        displayMealUI(title, mealImg,idMeal);
    });
}

const displayMealUI = (title,img,idMeal) => {
    const mealContainer = document.getElementById('meal-container');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card card-side bg-base-100 shadow-xl">
    <figure><img class="h-full" src="${img}" alt="Movie" /></figure>
    <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions justify-end">
            <button onclick="handleDetails(${idMeal})" class="btn btn-primary">Show details</button>
        </div>
    </div>
    </div>
    `;
    mealContainer.appendChild(div);
}

const handleDetails  = async(idMeal) => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await fetch(url);
    const data = await res.json();
    
}

getMealData('fish')