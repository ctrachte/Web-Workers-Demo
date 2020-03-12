
function worker_function() {
  let data = fetch('https://api.darksky.net/forecast/369e1a0d03a6d8ad3076a8c258c6c28c/34.840926825303605, -92.25945627583154').then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    postMessage(data.currently.summary);
  }).catch(function() {
    console.log("ERROR FETCHING WEATHER DATA");
    postMessage("ERROR FETCHING WEATHER DATA");
  });
}
// This is in case of normal worker start
// "window" is not defined in web worker
// so if you load this file directly using `new Worker`
// the worker code will still execute properly
if(window!=self) {
  worker_function();
}
