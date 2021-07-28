let searchQuery = "";
const APP_ID = "89a1d13b";
const APP_key = "3f2a61e5b8ace018b67bc8fde3473cac";
//  General Action
function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    if (xhr.readyState == 4) {
      if (200 <= xhr.status && xhr.status <= 299) {
        let response = JSON.parse(xhr.responseText);
        return callback(response);
      } else if (300 <= xhr.status && xhr.status <= 399) {
        httpStatusMessage.textContent = "Redirection messages";
        httpStatusMessage.style.disply = "block";
      } else if (400 <= xhr.status && xhr.status <= 499) {
        httpStatusMessage.textContent = "Client error responses";
        httpStatusMessage.style.disply = "block";
      } else if (500 <= xhr.status && xhr.status <= 599) {
        httpStatusMessage.textContent = "Server error responses";
        httpStatusMessage.style.disply = "block";
      }
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
