var  makeStopwatch=function(){
    console.log("initialized");
    var elapsed=0;
  console.log(elapsed);
    var stopwatch=function(){
        console.log("stopwatch");
        return elapsed;
    };
    var increase=function(){elapsed++;};
    setInterval(increase,1000);
    return stopwatch;
};

var watch=makeStopwatch();
watch();
