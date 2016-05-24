var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extName, callback) {
  extName = '.' + extName;
  fs.readdir(dirName, function(err, list) {
    if(err) {
      callback(err, null);
    } else {
      result = [];
      for(var i = 0; i < list.length; i++) {
        if(path.extname(list[i]) == extName) {
          result.push(list[i]);
        }
      }
      callback(null, result);
    }
  });
};
