//prime no

function isPrime(num) {
  var factors = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    console.log("Prime");
  } else {
    console.log("Not prime");
  }
}

isPrime(1);

var nums = [1, 2, 3];

console.log(nums);
var res = "";
for (var i = 0; i < nums.length; i++) {
  //  console.log(nums[i]);
  res += nums[i] + " ";
}

console.log(res);
console.log(nums.join(" - X - "));
var str = "    Hello World    ";
console.log(str);
str = str.trim();
console.log(str);
