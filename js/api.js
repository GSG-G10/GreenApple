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
