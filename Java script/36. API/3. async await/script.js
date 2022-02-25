
//fetch এর একটা alternative version আছে , সেটা হল async , await (await ব্যেবহার fetch বা যেকোনো কাজের জন্য কিছুটা wait করানোর জন্য ।)


const loadMealDetail = mealid => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}


const loadMealDetail = async mealid => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
.
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
}
