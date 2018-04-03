var closureAlert =function(){
    var x=0;
    var alerter=function(){
        console.log(++x);
    };
    //console.log(alerter);
     return alerter;
    };
    var funcStorer=closureAlert();
    var funcStorer2=closureAlert();
funcStorer();  //1
funcStorer(); //2
funcStorer2();//1
