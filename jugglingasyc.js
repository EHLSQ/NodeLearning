var http = require('http');
var urls = process.argv.slice(2);
var counter = 0;

var finalResults = [];

getUrls(urls);

function getUrls(urls) {
  urls.forEach(function(url) {
    //get request to the url
    http.get(url, function(response) {
      counter++;
      var results = [];
      response.setEncoding("utf8");
      //add listener to the data event
      //data event triggers multiple times
      response.on("data", function(data) {
        // console.log(counter);
        results.push(data);
      });
      response.on("end", function() {
        // console.log('done with ' + counter);
        finalResults.push(results.join(''));
        if(counter == 3) {
          finalResults.forEach(function (result) {
            console.log(result);
          });
        }
      });
    });
  });
}
