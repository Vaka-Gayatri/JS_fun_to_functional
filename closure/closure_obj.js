function counter(){
    var n=0;
    return{
        count:function(){return ++n;},
        reset:function(){n=0;}
    };
};
var myCounter=counter();
console.log(myCounter);
console.log(myCounter.count);
console.log(myCounter.count());
console.log(myCounter["count"]());
console.log(myCounter.reset);
console.log(myCounter.reset());
console.log(myCounter["reset"]());
