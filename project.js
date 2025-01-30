const searchbox = document.querySelector('.form-control')
const searchbtn = document.querySelector('.btn-outline-success')
const recipecontainer = document.querySelector('.reciepe-container')


const fetchreceipes =async(query) => {
    const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response =await data.json();
    
    response.meals.forEach(meal => {
       const reciepeDiv =document.createElement('div');
       reciepeDiv.classList.add('recipe');
       reciepeDiv.innerHTML=`
        <div class="image-container"style="background-color:white">
          <img src="${meal.strMealThumb}">
          <h1>${meal.strMeal}</h1>
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

