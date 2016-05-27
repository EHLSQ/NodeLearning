var http = require('http');
var urls = process.argv.slice(2);
var counter = 0;
var index = 0;

var results = [];

getUrls(urls);

function getUrls(urls) {
  for( var i = 0; i < urls.length; i++){
    getHttp(urls[i], i);
}

function getHttp(url, index) {
  http.get(url, function(response) {
    var result = "";
    response.setEncoding("utf8");
    //add listener to the data event
    //data event triggers multiple times
    response.on("data", function(data) {
      result += data;
    });
    response.on("end", function() {
      // console.log(counter + " " + result);
      results[index] = result;
      counter++;
      if(counter == 3) {
        for(var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
    });
  });
}
}
