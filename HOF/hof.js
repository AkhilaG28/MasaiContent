var sweets = ["Gulab Jamun", "Kova", "Kalakand", "Laddu"];

for (var i = 0; i < sweets.length; i++) {
  console.log(sweets[i]);
}
var box = [];
sweets.forEach(function (elem, index, array) {
  box.push(elem);
});

console.log(box);

//forEach => for loop
//elem => sweets[i]
//index => i
//array => sweets

//el,i,a

var res = sweets.forEach(function (elem) {
  return elem;
});

console.log(res);

var nums = [1, 2, 3, 4, 5, 6];

var output = nums.filter(function (elem) {
  return elem % 2 == 0;
});

console.log(output);
//elem if true
