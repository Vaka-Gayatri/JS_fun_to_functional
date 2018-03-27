var box=[];
box["size"]=9;
box["0"]="meow";
box.push("whoohoo!");
for(var i=0;i<box.length;i++){
  console.log(box[i]);//meow, whoohoo!
//console.log(i);//0,1
}
for(var k in box){
console.log(box[k]);//meow,whoohoo!,9
}
