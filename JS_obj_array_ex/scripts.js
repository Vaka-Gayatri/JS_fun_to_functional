//Use this file to implement Part One of your project
var animal={};
animal.username="Dog";

animal["tagline"]="Most people love me";
var noises=[];
animal.noises=noises;
console.log(animal);
var count=0;
for(var key in animal){
  //console.log(key);
  count++;//count=count +1
  if(key==="username"){
    console.log("Hi my name is "+animal.username);
  }
  else if(key==="tagline") {
    console.log("I like to say "+animal.tagline);
  }
};
var noiseArray=["bark"];
noiseArray.unshift("woof");
noiseArray.push("wow!");
noiseArray[3]="growl";
console.log(noiseArray.length);
console.log(noiseArray);
animal.noises=noiseArray;
console.log(animal);
var animals=[];
animals.push(animal);
var quackers={username:"DaffyDuck",tagline:"yippeee!",noises:["quack","honk","sneez","growl"]
};
animals[animals.length]=quackers;
console.log(animals);
var honeyBadger={};
honeyBadger.username="Randall"
honeyBadger.tagline="honey badger don't care";
honeyBadger.noises=["screech","growl"];

var cat={
  username:"kitten",
tagline:"pet me!",
noises:["purr","hiss","meow"]
};
//Nesting objects
var friends=[];
friends.push(animals[0].username,animals[1].username);
console.log(friends);
var relationships={};
relationships.friends=friends;
console.log(relationships);
console.log(Object.keys(relationships).length);
//console.log(relationships.length);//undefined
var matches=[];
relationships.matches=matches;
relationships.matches.push("pig");
console.log(relationships);
for (var i=0;i<animals.length;i++){
  animals[i].relationships=relationships;
  }
  console.log(animals);
