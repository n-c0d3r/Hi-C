
var Scopes=require('../Scopes/Scopes');

var IScopesData=require('../Interfaces/IScopesData');

var ToScope=require('./ToScopes');


var LinesOfFilesToScopes = function(linesOfFiles){
    var filesScopes=[];

    var globalScope=new Scopes.GlobalScope();
    globalScope.isGlobal=true;

    //Create rootScopes;
    for(var i=0;i<linesOfFiles.length;i++){
        filesScopes[i]=new Scopes.FileScope();
        filesScopes[i].parent=globalScope;
        filesScopes[i].lines=linesOfFiles[i];

    }

    result = new IScopesData();
    result.globalScope=globalScope;
    result.filesScopes=filesScopes;
    return result;
}


module.exports = LinesOfFilesToScopes;