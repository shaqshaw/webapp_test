function addToList() {
  userTextEntry = document.getElementById("ourAddition").value;

  var ourList = document.getElementById("ourList");
  var newAddition = document.createElement("li");
  newAddition.appendChild(document.createTextNode(userTextEntry));
  ourList.appendChild(newAddition);

  document.getElementById("ourAddition").value="";
}

document.getElementById("myBtn").addEventListener("click", addToList);
