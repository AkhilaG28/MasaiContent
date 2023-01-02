var string1 = "masai school";

var lower = "abcdefghijklmnopqrstuvwxyz";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var output = "";

for (var i = 0; i < string1.length; i++) {
  for (var j = 0; j < lower.length; j++) {
    if (string1[i] === lower[j]) {
      output += upper[j];
    }
  }
}

console.log(output);
