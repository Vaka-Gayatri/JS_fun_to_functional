var g="global";
function blender(fruit){
  var b=fruit;
  var y=yogurt;
  function bs(){
    var x="asdf";
    alert(b+" and "+ y +" makes "+b+" swirl");
  }
  bs();
}
blender("blueberry");

//variable x can't be accessed by parent function but child function
//(function bs()) could access the variables in the parent and global scope.
