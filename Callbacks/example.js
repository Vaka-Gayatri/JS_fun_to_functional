var increment=function(n){return n+1;};
var square=function(n){return n*n;};
var doMathSoIDontHaveTo=function(n,func){return func(n);};
console.log(doMathSoIDontHaveTo(6,square));
console.log(doMathSoIDontHaveTo(10,increment));
