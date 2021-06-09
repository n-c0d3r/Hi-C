
var ToLines=require(__dirname+"/ToLines");


module.exports=function(fileDatas,lineBreakChar){
    var result=[];
    for(var i=0;i<fileDatas.length;i++){
        result.push(ToLines(fileDatas[i],lineBreakChar));
    }
    return result;
}