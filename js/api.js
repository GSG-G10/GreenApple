//  General Action
function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });
  xhr.open("GET", url);
  xhr.send();
}
