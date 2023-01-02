//for(initialisation = A;condition = B;iteration/updation = D){
//    code block = C
//}

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

//A B C D B C D B C D B C D... B C D B

//i = 1 => i <= 10 => 1 => i++ => 2
//i <= 10 => 2 <= 10 => 2 i++ => 3
//i = 10 => i <= 10 => 10<=10 => 10 => 11
//i = 11 => i <= 10

//2,4,6,8,....20

for (var i = 1; i < 11; i++) {
  console.log(i * 2);
}

for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}
