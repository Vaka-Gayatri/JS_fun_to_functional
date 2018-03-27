var box={};
box["material"]="cardboard";
box[0]="meow";
box["^&*"]="testing 123";
//for(var cow in box){
for(var key in box){console.log(key); //property names
//console.log(box["key"]); //undefined
console.log(box[key]); //values of properties
}
//console.log(box[cow]);
//console.log(cow);
//}
