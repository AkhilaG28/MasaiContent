var classroom = [
  { name: "Cherry", age: 12 },
  { name: "Choco", age: 14 },
  { name: "Cherry", age: 12 },
];

for (var i = 0; i < classroom.length; i++) {
  console.log(classroom[i].name, classroom[i]["age"]);
}

var products = [
  { name: "Speakers", price: 10000, rating: 3 },
  { name: "Headphones", price: 3000, rating: 4 },
  { name: "Laptop", price: 50000, rating: 4.5 },
];

var minPrice = products[0].price;

for (var i = 1; i < products.length; i++) {
  if (minPrice > products[i].price) {
    minPrice = products[i].price;
  }
}

console.log(minPrice);

for (var i = 0; i < products.length; i++) {
  if (products[i].rating >= 4) {
    console.log(products[i]);
  }
}

var studentObj = {
  name: "Cherry",
  age: 12,
  print: function () {
    console.log("Object method inside an object");
  },
};

studentObj.print();

var arr1 = ["Iphone", "iPad", "Macbook"];
var arr2 = [60000, 25000, 90000];

var productsData = [];

for (var i = 0; i < arr1.length; i++) {
  var obj = {};
  obj.name = arr1[i];
  obj["price"] = arr2[i];
  productsData.push(obj);
}

console.log(productsData);
