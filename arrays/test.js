var box=[];
box["size"]=9;
box["0"]="meow"
box["size"];//9
box[0];//"meow"
box.size;//9
//box.0;//error unexpected number
for(var k in box){
  console.log(k); //"size,"0"
console.log(box[k]);//9,"meow"
//console.log(box.k);//error variable can't be accessed with doctype
}
