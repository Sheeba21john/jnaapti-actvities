function* lazyFilter(arr, filterFunc) {
  for (var item of arr) {
    if(filterFunc(item))
    yield item;
  }

}

for (var item of lazyFilter([1, 2, 3, 4], x => x % 2 == 0)){
    	console.log(item);
}