var arg = process.argv[2];

var replaceArg = arg.replace(/;/g, "");
var multiSpace = replaceArg.replace(/\s\s+/g, ' ');
var splitArg = multiSpace.split(" ");
var str = "";
for (var i = 1; i <= splitArg.length; i = i + 2) {
  str += splitArg[i] + " " + splitArg[i - 1] + ",";
}
var finalString = str.slice(0, -1);
console.log(finalString);