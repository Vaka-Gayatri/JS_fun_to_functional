var closureAlert =function(){
    var x="Help! I'm variable stuck in the closure";
    var alerter=function(){
        console.log(x);
    };
    setTimeout(alerter,3000);
    console.log("will still run right after");
    };
    closureAlert();
