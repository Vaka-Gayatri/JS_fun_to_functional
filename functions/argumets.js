var add=function(a,b){
  console.log(arguments);//logs[3,10,5]
  return a+b;
};
console.log(add(3,10,5));//13
//solution
var add=function(a,b) {
  results=0;
for(var i=0;i<arguments.length;i++){
    results+=arguments[i];
  }

return results;
};
console.log(add(3,4,20,90,7,9,11,34,56,79));
