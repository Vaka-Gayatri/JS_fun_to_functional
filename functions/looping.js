function AnimalMaker(name){
  return{
    speak:function(){
      console.log("my name is",name);
    }
  };
};
var animalNames=["sheep","Liger","Big Bird"];
var farm=[];

for(var i=0;i<animalNames.length;i++){
/  (farm[i]=AnimalMaker(animalNames[i]));
  //or we can use .push
  var animal=AnimalMaker(animalNames[i])
farm.push(animal);
  //or else we can write
console.log(farm.push(AnimalMaker(animalNames[i])));
console.log(farm[i].speak());
};
