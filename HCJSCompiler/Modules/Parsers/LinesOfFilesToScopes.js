
var IScope=require('../Interfaces/IScope');

var IScopesData=require('../Interfaces/IScopesData');

var ToScope=require('./ToScopes');


var LinesOfFilesToScopes = function(linesOfFiles){
    var filesScopes=[];

    var globalScope=new IScope();
    globalScope.isGlobal=true;

    //Create rootScopes;
    for(var i=0;i<linesOfFiles.length;i++){
        filesScopes[i]=new IScope();
    }

    result = new IScopesData();
    result.globalScope=globalScope;
    result.filesScopes=filesScopes;
    return result;
}


module.exports = LinesOfFilesToScopes;