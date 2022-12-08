function addToList() {
  ourList = document.getElementById("ourList").children;

  listLength = ourList.length;

  for( i=o; i<listLength; i++){
    listLength = listLength - 1;

    if(i===listLength)
      ourList[i].remove();
  }

}

document.getElementById("myBtn").addEventListener("click", removeFromList);
