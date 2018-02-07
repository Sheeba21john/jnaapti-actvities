var arr= [1,2,3,4,5];


Array.prototype.filterMap = function (func1, func2){
  var result = [];
  for (var num in arr){
  //object created when function is invoked
  if (func1(arr[num])){
      result.push(func2(arr[num]));
    }     
  }
  return result;
}
 

var output = arr.filterMap(function(x) {
    return x % 2 == 0;
}, function(x) {
    return x * x;
});
console.log(output);