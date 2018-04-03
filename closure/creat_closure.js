var sayAlice=function(){
  var makeLog=function(){
    console.log(alice);
  };
  var alice="Why hello there, Alice!";
  return makeLog;
};
var whatDoesSheSay=sayAlice();
whatDoesSheSay(); //"Why hello there, Alice!"
