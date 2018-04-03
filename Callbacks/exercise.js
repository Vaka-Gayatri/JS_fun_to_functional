var funcCaller=function(func,arg){
    return func(arg);
};
console.log(funcCaller);
var firstVal=function(arr,func){
  func(arr[0],0,arr);
};
firstVal=function(list,func){
  if(Array.isArray(list)){
    func(arr[0],0,arr);
  } else{
    for(var k in list){
      return func(list[k],k,list);
    }
    //var propArr=object.keys(list);
    func(list[proparr[0]],proparr[0],list)
  }
}
