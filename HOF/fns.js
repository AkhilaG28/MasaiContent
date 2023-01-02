function javascript() {
  console.log("This is a basic function in js");
}

javascript();

var b = function () {
  console.log("Anonymous function");
};

b();

function sum(a, b) {
  return a + b;
}

sum(2, 3);
var z = sum(4, 5);

function product(c, d) {
  console.log(c * d);
}

product(sum(6, 8), 2);
//a,b => parameters

//2,3 4,5 => arguments

//Callback function

function eatBreakfast(callback, item) {
  callback();
  console.log("I will eat", item, "for breakfast");
}

eatBreakfast(doBrush, "Dosa");

function doBrush() {
  console.log("Brush your teeth first");
}
//doBrush();

//Sequence / Order of execution
//31 = 34
// 36 => 31 => 32 => 38 => 39 => 40 => 33 => 34
