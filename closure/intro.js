var closureAlert =function(){
    var x="Help! I'm variable stuck in the closure";
    var alerter=function(){
      console.log(x);
    };
    alerter();
};
closureAlert();
