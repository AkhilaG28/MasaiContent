var nums = [1, 2, 3, 4];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log(sum);

//without initial value
var out = nums.reduce(function (acc, el) {
  return acc + el;
});

console.log(out);

//iteration     acc             el            acc+el
//1st          nums[0]=1      nums[1] = 2      1+2 = 3
//2nd          3                nums[2] = 3     3+3 = 6
//3            6                nums[3] = 4     6+4 = 10

//with initial value
var accumulator = function (acc, el) {
  return acc + el;
};

var res = nums.reduce(accumulator, 0);
console.log(res);

//iteration         acc             el              acc+el
//1st               0              nums[0] = 1      0+1 = 1
//2nd               1              nums[1] = 2      1+2 = 3
//3rd               3               nums[2] = 3     3+3 = 6
//4th               6               nums[3] = 4     6 + 4 = 10

//acc => sum
//el => nums[i]

//Chaining

//nums= [1,2,3,4] => map => cubes => even => sum

var res = nums
  .map(function (elem) {
    return elem ** 3;
  })
  .filter(function (elem) {
    return elem % 2 == 0;
  })
  .reduce(function (acc, el) {
    return acc + el;
  });

console.log(res);

//forEach                   map           filter          reduce
//i => arr                i=>arr        i => arr            i=>arr
//o => undefined        o => arr        o=> arr             o=>single value

//map.filter
//forEach.filter => not possible
//reduce.map
//map.filter.forEach
