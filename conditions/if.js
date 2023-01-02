var snowing = true;

var shoes;

if (snowing) {
  shoes = "Boots";
} else {
  shoes = "Sneakers";
}

//if(condition) {
//    code block
//}

//condition => boolean

//if, if else, if else if else if .... else

var light = "red";

if (light === "red") {
  console.log("Vehicles must stop");
} else if (light === "green") {
  console.log("vehicles must move");
} else {
  console.log("Vehicles must slow down");
}

if (true) {
  console.log("this statement is true");
}

if (5 > 3) {
  console.log("5 is greater than 3");
}

var name1 = "Rahul";
var name2 = "Cherry";
if (name1 == name2) {
  console.log("names match");
} else {
  console.log("Names do not match");
}

//2000 10%, 3000 20%

var billAmount = 4000;
var disc1Bill = 3000;
var disc2Bill = 2000;

if (billAmount >= disc1Bill) {
  console.log("Disc of 20%");
} else if (billAmount >= disc2Bill) {
  console.log("Disc of 10%");
} else {
  console.log("No disc");
}

//false, 0, "", ``, "", null, undefined, Nan;

console.log(5 > 3 && 3 > 1 && -9 > 3);

if (5 > 1) {
  if (3 > 1) {
    console.log("Both are true statements");
  }
}

if (5 > 1 && 3 > 1) {
  console.log("Both statements are true");
}

//if (name === loginName && password === loginPassword) {
//  console.log("Login is successful");
//}

console.log(false || false);

//A => on => fan is on

//B => on => fan is off

//sign out and sign in
//if(!loggedIn) {
//    sign in
//}

//if (!admin) {
//  console.log("user dashboard");
//} else {
//  console.log("admin");
//}

//switch(option) {
//    case 1:
//        case2:
//        default:
//}

var option = 4;

switch (option) {
  case 1:
    console.log("Day 1 Monday");
    break;
  case 2:
    console.log("Day 2 Tuesday");
    break;
  case 3:
    console.log("Day 1 Wednesday");
    break;
  case 4:
    console.log("Day 2 Thursdays");
    break;
  case 5:
    console.log("Day 1 Friday");
    break;
  case 6:
    console.log("Day 2 Saturday");
    break;
  default:
    console.log("Sunday is holiday");
}

var char = "a";
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log("Vowel");
} else {
  console.log("consonant");
}

switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
