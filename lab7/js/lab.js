//Kaz Harte
// October 28th, 2024


function OtherName() {
  var NameUser = window.prompt("Dude, I'm trying things out! ");
  console.log("NameUser =", NameUser);

  var newName = NameUser.toLowerCase().split("").sort().join("");
  console.log("NewName =", newName);

  return newName
}

//output
document.writeln("LIAR! You're name is actually: ", OtherName(), "<br>");