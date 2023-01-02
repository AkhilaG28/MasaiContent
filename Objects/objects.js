var details = ["Cherry", "c2", 22, false];
details.push(32);

//console.log(details[10]);

for (var i = 0; i < details.length; i++) {
  //  console.log(details[i]);
}

details[1] = "c3";
//console.log(details);
details.pop();
//console.log(details);

var studentObj = {
  name: "Cherry",
  age: 22,
  drivingLicense: false,
  section: "c2",
};
//Dot notation
//objectName.keyName
console.log(studentObj.name);
console.log(studentObj.hobby);
studentObj.section = "c3";
//console.log(studentObj);
studentObj.roll = 32;

//Bracket notation
//objectName["KeyName"]
//console.log(studentObj["age"]);
studentObj["section"] = "c4";
studentObj["hobby"] = "Dancing";
//console.log(studentObj);
delete studentObj["hobby"];
console.log(studentObj);

//name,age,
for (var key in studentObj) {
  console.log(key);
  console.log(studentObj[key]);
}

//studentObj.key
//studentObj['name']
