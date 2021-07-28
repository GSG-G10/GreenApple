let searchQuery = "";

//  General Action
function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });
  xhr.open("GET", url);
  xhr.send();
}

// Random background API images
(function randomImageGenerator() {
  const url = "https://foodish-api.herokuapp.com/api/";
  api(url, (response) => {
    bodyBackground.style.backgroundImage = `url(${response.image})`;
  });
})();

//Recipe Search API 
addListener("form", "submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  const recipeURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  api(recipeURL, showRecipes);
});
