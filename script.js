var bt = document.getElementById("random");
var co = document.getElementById("meal-cont");
bt.addEventListener('click', getMeal);

function getMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(resp => resp.json())
        .then(resp => {
            createMeal(resp.meals[0])

        });
}
function createMeal(meal) {

    let ht =
        `<div class="card" style="width: 90%;">
     <div class="card-body">
     <div class="container-fluid" id="head" >
       <h2 class="card-title">${meal.strMeal}</h2>
       <hr>
       <h4 class="card-subtitle mb-2 text-muted">${meal.strArea}</h4>
       </div>
       <p class="card-text">${meal.strInstructions}</p>
       <a href="${meal.strYoutube}" class="btn btn-dark">Check the recipe out on YouTube</a>
       
     </div>
   </div>
      `;
    co.innerHTML = ht;

}
