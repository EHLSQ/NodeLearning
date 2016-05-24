var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var extName = '.' + process.argv[3];

fs.readdir(dirName, function(err, list) {
  for(var i = 0; i < list.length; i++) {
    if(path.extname(list[i]) == extName) {
      console.log(list[i]);
    }
  }
});
