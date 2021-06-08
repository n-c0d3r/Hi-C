
const fs = require('fs');



module.exports=function(filePaths){
    var result=[];

    for(var i=0;i<filePaths.length;i++){
        result.push(fs.readFileSync(filePaths[i]).toString());
    }

    return result;
}