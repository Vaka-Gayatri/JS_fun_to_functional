//question 1
var AnimalTestUser=function(username){
  return {
    "username":username
  }
};
console.log(AnimalTestUser("CottonBall"));
//question 2
function AnimalTestUser(username){
   var argLength=arguments.length;
   var otherArgs=[];
   if(argLength>1){
     for(var i=1;i<argLength;i++){
    otherArgs.push(arguments[i]);
  }
}
return{
  username:username,
  otherArgs:otherArgs
};
}
//question 3
function AnimalCreator(username,species,tagline,noises,friends){
  return {
    "username":username,
    "species":species,
    "tagline":tagline,
    "noises":noises,
    "friends":[]
  };
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
       // username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: []
      // }
      //question 4 & 5
function addFriend(animal,friend){
  //animal.friends.push(friend);
  animal.friends.push(friend.username);
}
var cow=AnimalCreator("Moo","cow","got milk?",["moo","moooo"]);
console.log(cow);
var llama=AnimalCreator("zeny","llama","lllll",["sdf","sdfsf"]);
console.log(llama);
addFriend(sheep,cow);
console.log(sheep);
addFriend(sheep,llama);
console.log(sheep);
//question 6
var myFarm=[sheep,cow,llama];
addFriend(cow,sheep);
addFriend(llama,cow);
console.log(myFarm);

//question 7

function addMatchesArray(farm){
  for(var animal in farm){
    farm[animal].matches=[];
  }
}
addMatchesArray(myFarm);
console.log(myFarm[0]);

//question 8

function giveMatches(farm){
  for(var animal in farm){
    //would be better as a for loop with semi-colons
    farm[animal].matches.push(farm[animal].friends[0]);
    }
}
giveMatches(myFarm);
console.log(myFarm[0]);
