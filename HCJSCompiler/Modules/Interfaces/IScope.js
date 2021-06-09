module.exports=class{
    constructor(){
        this.parent=null;
        this.childs=[];
        this.isGlobal=false;
        this.lines=[];
        this.vars=new Object();
    }
    

    IsDefination(lineIndex,varName){

        var line=this.lines[lineIndex];

        var lastIndexOfVarName=line.length-1;

        for(var i=0;i<line.length-varName.length;i++ ){
            
        }

        

        return true;
    }

}