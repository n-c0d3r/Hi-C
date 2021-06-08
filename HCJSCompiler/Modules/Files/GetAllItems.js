
const fs = require('fs');



var GetAllItems = function(dirPath,input){
    var result=[];

    if(input!=null){
        result=input;
    }

    var items=fs.readdirSync(dirPath);

    items.forEach(
        item=>{
            if(fs.statSync(dirPath+"/"+item).isFile()){
                result.push(dirPath+"/"+item);
            }
            else{
                result=GetAllItems(dirPath+"/"+item,result);
            }
        }
    );

    return result;
}

module.exports=GetAllItems;