var a = 3;

var b = 3;

var c = 8;
var d = 4;

var add = a + b;

var diff = a - b;

var multiply = a * b;

var divide = a / b;

console.log(add);

//function nameFn(){
//    code block
//}
//nameFn()

//functions => 4 diff funcs

function sum(a, b) {
  var addition = a + b;
  return addition;
}

sum(8, 4);
sum(2, 3);

function product(c, d) {
  var multiplication = c * d;
  return multiplication;
}
var z = sum(2, 3);
var q = product(2, sum(2, 3));

//arguments/parameters
//(parameters) => c, d;

//a,b ,c => ((a+b) * c )^3

function exponentiation(x, y) {
  console.log(x ** y);
}

exponentiation(q, 3);
