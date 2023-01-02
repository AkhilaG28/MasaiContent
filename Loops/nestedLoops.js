//* * * * * * * * * *
//* * * * * * * * * *
//* * * * * * * * * *
//* * * * * * * * * *
//* * * * * * * * * *

for (var field = 1; field < 6; field++) {
  var bag = "";
  for (var seed = 1; seed < 11; seed++) {
    bag += " * ";
  }
  console.log(bag);
}

for (var Sulthan = 1; Sulthan < 11; Sulthan++) {
  for (var Bahubali = 1; Bahubali < 11; Bahubali++) {
    if (Bahubali == Sulthan) {
      continue;
    }
    console.log("Bahubali = " + Bahubali + ", Sulthan = " + Sulthan);
  }
}
//(s = 1), (b = 1);
//(b = 2), (s = 1);
//s = 2, b =1
//s= 2 , b = 2 => b = 3
//s =2 , b = 1,

//conitnue =>
//break =>
