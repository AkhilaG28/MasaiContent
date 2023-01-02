var movies = ["Thor", "Dr Strange", "Spider Man", "Iron Min"];

var heros = ["Chris Hemsworth", "Benedict", "Tom", "Robert"];

console.log(movies);

movies[movies.length - 1] = "Iron Man";

console.log(movies);

for (var i = 0; i < movies.length; i++) {
  console.log(movies[i], " - ", heros[i]);
}

movies.pop();
console.log(movies);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//nums.pop();
//nums.pop();
//nums.pop();

for (var i = 1; i < 4; i++) {
  nums.pop();
}

console.log(nums);

for (var i = 1; i <= 3; i++) {
  console.log(nums[i - 1]);
}

for (var i = 0; i < nums.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(nums[i]);
}

for (var i = 0; i < nums.length; i++) {
  if (i == 3 || i == 5) {
    continue;
  }
  console.log(nums[i]);
}

//console.log(movies[6]);

var str = "Masai School";

console.log(str.length, "string length");
//length of password

var string1 = "Scholl";
//string1 = "School";
var res = "";
for (var i = 0; i < string1.length; i++) {
  console.log(string1[i]);
  if (i == 4) {
    res += "o";
  } else {
    res += string1[i];
  }
}

console.log(res);

//masai => MASAI
