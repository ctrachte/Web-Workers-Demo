
function worker_function() {
  var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
          var anHttpRequest = new XMLHttpRequest();
          anHttpRequest.onreadystatechange = function() {
              if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                  aCallback(anHttpRequest.responseText);
          }

          anHttpRequest.open( "GET", aUrl, true );
          anHttpRequest.send( null );
      }
  }

  var client = new HttpClient();
    client.get('https://api.darksky.net/forecast/369e1a0d03a6d8ad3076a8c258c6c28c/34.840926825303605, -92.25945627583154', function(response) {
      console.log(response);
      postMessage(response);
    });
}
// This is in case of normal worker start
// "window" is not defined in web worker
// so if you load this file directly using `new Worker`
// the worker code will still execute properly
if(window!=self) {
  worker_function();
}
