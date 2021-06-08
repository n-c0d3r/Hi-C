//Get Argv
var argv=process.argv;
var projectPath=argv[2];

//Create Compiler
var compiler=new (require(__dirname+"/asModule_HCJSCompiler"))();

//Setup Compiler
compiler.settings.projectPath=projectPath;

//Read Project Sources
compiler.Read();

//CPP Compile
var cpp = compiler.CPPCompile();