var modularfilter = require('./modularfilter');

dirName = process.argv[2];
extName = process.argv[3];

modularfilter(dirName, extName, function(err, list) {
  if(err) {
    console.log("There was an error");
  } else {
    for(var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
  }
});
