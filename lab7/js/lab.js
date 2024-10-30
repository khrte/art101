//Kaz Harte
// October 28th, 2024

function NameFile() {
  var UserName = window.prompt("Dude, whats your FREAKIN name? ");
  console.log("UserName =", UserName );
  // makes things sortable for array
  var nameArray = UserName.split('');
  console.log("nameArray =", nameArray);
  // organizes everything
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // bringing everything back together
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted

}

function OtherName() {
  var NameUser = window.prompt("Dude, I'm trying things out! ");
  console.log("NameUser =", NameUser);
  // sorts name in one line
  var newName = NameUser.toLowerCase().split("").sort().join("");
  console.log("NewName =", newName);

  return newName
}

//output
document.writeln("LIAR! You're name is actually: ", OtherName(), "<br>");