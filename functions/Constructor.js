function AnimalMaker(name){
  return{
    speak:function(){
      console.log("my name is ",name);
    }
  };
};
var myAnimal=AnimalMaker("cheetah");
console.log(myAnimal);
console.log(myAnimal.speak());
console.log(myAnimal["speak"]());
