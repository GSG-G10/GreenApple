//Random background API images
const bodyBackground = document.querySelector(".bodyBg");
const searchResultDiv = document.querySelector(".searchResult");
const container = document.querySelector(".container");
const httpStatusMessage = document.querySelector(".statusHandler01");

function showRecipes(results) {
  container.classList.remove("initial");
  results.hits.map((result) => {
    let item = document.createElement("div");
    searchResultDiv.appendChild(item);
    item.setAttribute("class", "item");

    let recipeImg = document.createElement("img");
    recipeImg.src = result.recipe.image;
    item.appendChild(recipeImg);

    let flexContainer = document.createElement("div");
    flexContainer.setAttribute("class", "flex-container");
    item.appendChild(flexContainer);

    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerText = result.recipe.label;
    flexContainer.appendChild(title);

    let viewBtn = document.createElement("a");
    viewBtn.setAttribute("class", "view-btn");
    viewBtn.href = result.recipe.url;
    viewBtn.target = "_blank";
    viewBtn.innerText = "View Recipe";
    flexContainer.appendChild(viewBtn);

    let cal = document.createElement("p");
    cal.setAttribute("class", "item-data");
    cal.innerText = `Calories: ${result.recipe.calories.toFixed(2)}`;
    item.appendChild(cal);

    let dietLabels = document.createElement("p");
    dietLabels.setAttribute("class", "item-data");
    dietLabels.innerText = `Diet label: ${
      result.recipe.dietLabels.length > 0
        ? result.recipe.dietLabels
        : "No Data Found"
    }`;
    item.appendChild(dietLabels);

    let healthLabels = document.createElement("p");
    healthLabels.setAttribute("class", "item-data");
    healthLabels.innerText = `Health labels: ${result.recipe.healthLabels}`;
    item.appendChild(healthLabels);
  });
}
