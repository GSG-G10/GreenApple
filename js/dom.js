//Random background API images
const bodyBackground = document.querySelector(".bodyBg");
const searchResultDiv = document.querySelector(".searchResult");
const container = document.querySelector(".container");
const httpStatusMessage = document.querySelector(".statusHandler01");

function showRecipes(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.hits.map((result) => {
        generatedHTML += `
        <div class="item">
          <img src="${result.recipe.image}" alt="img">
          <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-btn" target="_blank" href="${result.recipe.url
            }">View Recipe</a>
          </div>
          <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
          <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0
                ? result.recipe.dietLabels
                : "No Data Found"
            }</p>
          <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        </div>
      `;
    });
    searchResultDiv.innerHTML = generatedHTML;
}
