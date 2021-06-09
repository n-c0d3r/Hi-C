

//Import Interfaces
var ImportInterface=function(path){
    return require(__dirname+"/Modules/Interfaces/"+path);
}

var ICPPCompileResult=ImportInterface("ICPPCompileResult");

var ISourceData=ImportInterface("ISourceData");  

var ICompilerSettings=ImportInterface("ICompilerSettings");  



//Import String Modules
var ImportStringModule=function(path){
    return require(__dirname+"/Modules/String/"+path);
}

var ToLines=ImportStringModule("ToLines");
var ToLinesForAll=ImportStringModule("ToLinesForAll");






//Import Parsers
var ImportParsers=function(path){
    return require(__dirname+"/Modules/Parsers/"+path);
}

var LinesOfFilesToScopes=ImportParsers("LinesOfFilesToScopes");



//Import Others Lib  
const fs = require('fs');
var GetAllItems=require(__dirname + "/Modules/Files/GetAllItems.js");
var GetAllDatas=require(__dirname + "/Modules/Files/GetAllDatas.js");




module.exports=class{
    constructor(){
        this.settings=new ICompilerSettings();
    }


    Read(){
        var sourceData=new ISourceData();

        var projectPath=this.settings.projectPath;

        sourceData.dirPath=projectPath;

        sourceData.filePaths=GetAllItems(projectPath);

        sourceData.fileDatas=GetAllDatas(sourceData.filePaths);

        this.sourceData=sourceData;
        return sourceData;
    }


    CPPCompile(){
        let result=new ICPPCompileResult();

        var sourceData=this.sourceData;


        //Tolines
        var fileDatas = ToLinesForAll(sourceData.fileDatas);
        result.linesOfFiles = fileDatas;
        

        //GetScopes
        var scopesData=LinesOfFilesToScopes(result.linesOfFiles);
        result.scopesData=scopesData;

        return result;
    }


}