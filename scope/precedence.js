var g="global";
function go(){
  var l="local";
  var g="in here!";
  console.log(g+" inside go");
}
go();
console.log(g+ " outside go!");


//Another Example:
var inBlock =false;
for(var i=0;i<5;i++){
  var inBlock=true;
}; !
if(inBlock){
  console.log("Is there block scope? "+ !inBlock);
}
