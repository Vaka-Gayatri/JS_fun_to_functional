//question 1 and 2
var nonsense=function(string){
    var blab=function(){
  console.log(string);
  };
  setTimeout(blab,2000);
  blab();
};
  nonsense("blah blah blah");

// question 3
var nonsense=function(string){
    var blab=function(){
  console.log(string);
  };
return blab;
};
var blabLater = nonsense("blah blah blah");
blabLater();
var blabAgainLater=nonsense("Hahaha!");
blabAgainLater();
blabLater();
//question 5
var lastNameTrier=function(firstName){
  var innerFunction=function(lastName){
    console.log(firstName+" "+lastName)
  };
  return innerFunction;
};
var firstNameGayatri=lastNameTrier("Gayatri");
firstNameGayatri("vaka");

var storyWriter=function(){
    var story=" ";
    return{
        addwords:function(str){
            story+=str+" ";
            return story.trim();
        },
        erase:function(){
            story=" ";
        }
    };
};
var storyOfMyLife=storyWriter();
console.log(storyOfMyLife.addwords("I started to learn things."));
console.log(storyOfMyLife.addwords("And I am also learning from my mistakes."));
storyOfMyLife.erase();
