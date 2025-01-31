const searchbox = document.querySelector('.form-control')
const searchbtn = document.querySelector('.btn-outline-success')
const recipecontainer = document.querySelector('.reciepe-container')


const fetchreceipes =async(query) => {
    const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response =await data.json();

    recipecontainer.innerHTML="";
    
    response.meals.forEach(meal => {
       const reciepeDiv =document.createElement('div');
       reciepeDiv.classList.add('recipe');
       reciepeDiv.innerHTML=`
        <div class="image-container">
          <img src="${meal.strMealThumb}">
          <h3>${meal.strMeal}</h3>
          <p>${meal.strArea} Dish</p>
          <p>${meal.strCategory}</p>
          <button class="button-container">View Recipe</button>
          </div>
       
       `
       
       recipecontainer.appendChild(reciepeDiv);

       

    });
    document.querySelectorAll(".button-container").forEach(button => {
        button.addEventListener("click", (e) => {
            const mealID = e.target.getAttribute("data-id");
            fetchMealDetails(mealID);
        });
    });

}

    


searchbtn.addEventListener("click", (e) =>{
    e.preventDefault()
    const searchinput = searchbox.value.trim();
    fetchreceipes(searchinput);
});

