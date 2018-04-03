var add=function(num){
    var num1=num;
    var addToNum1=function(num2){
        return num1+num2;
    };
    return addToNum1;
};
 console.log(add(5));
 var add5=add(5);
 console.log(add5);
 console.log(add5(2));
 console.log(add5(20));
 var add5=add(10)
 console.log(add5(2));
