const loadMeals =() =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res =>res.json())
    .then(data =>displaymeals(data))
}

const displaymeals =meals =>{
    const mealscontainer =document.getElementById('meal-container');
     meals.forEach(meal => {
        console.log(meal);

        const mealDiv =document.createElement('div');
        mealDiv.innerHTML =`
        <div class="col">
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `;
        mealscontainer.appendChild(mealDiv);
        
     });

}

loadMeals();