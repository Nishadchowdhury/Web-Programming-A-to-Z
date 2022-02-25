const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear searchField 
    searchField.value = ''
  if(searchText == ''){
    alert('plese write something to show')
  }else{
    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
  }
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('srerchResult');
    
    searchResult.innerHTML = '';
    if(meals == null){
        const noResult = document.createElement('div');
        noResult.innerHTML = 
        `
        <div style="border:4px solid rgb(220,53,69);" class="bg-danger bg-opacity-25 rounded-3 text-center p-2 ">
        <Span class="fs-1 fw-bold">No</Span><span class="fs-3"> Result Found..! </span>
        </div>
        `
        searchResult.appendChild(noResult);
    }else{
      meals.forEach(meal => {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
        `
        <div class="col">
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)} </p>
        </div>
      </div>

      </div>
  
        `
        searchResult.appendChild(div);
    });
  }
}

const loadMealDetail = async mealid => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
    mealDetails.textContent = '';
    mealDetails.appendChild(div);
}