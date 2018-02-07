function cache(target, name, descriptor) {
  let originalFunc = descriptor.value;
  descriptor.value = (...args) => {
    console.log('Entering function', name);
    let value = originalFunc(...args);
    console.log('Finished function', name);
    return value;
  }
  return descriptor;
}

class SomeClass {
  @log
  fib(n) {
    if (n == 1)
      return [0, 1];
    else {
      var res = fib(n-1);
      res.push(res[res.length-1] + res[res.length-2]);
      return res;
    }
  }
}

let obj = new SomeClass();
console.log(obj.fib(100));