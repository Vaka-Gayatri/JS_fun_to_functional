var box={};
box["material"]="cardboard";
var key="material";
box["key"];//undefined
box.key;//undefined
box[key]; //"cardboard"
var 0="first" //undefined
box[0]="meow";
box["^*&"]="testing 123";
var test=box["^*&"];
