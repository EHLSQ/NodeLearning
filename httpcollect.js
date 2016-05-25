var http = require('http');
var url = process.argv[2];


//response is an event that will be emitted when response headers have
//been recieved. You can add listeners to the response object for data
// and end. Until data is consumed, the end event will not fire.
http.get(url, function(response) {
  var result = "";
  response.on("data", function(data) {
    result += data.toString();
  });
  response.on("end", function() {
    console.log(result.length);
    console.log(result);
  });
});
