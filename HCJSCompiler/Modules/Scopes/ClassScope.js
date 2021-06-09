var IScope=require("../Interfaces/IScope");

module.exports=class extends IScope{
    constructor(){
        super();
        this.parent=null;
        this.childs=[];
        this.isGlobal=false;
        this.lines=[];
    }

    IsDefination(lineIndex,varName){
        return true;
    }

}