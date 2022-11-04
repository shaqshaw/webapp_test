window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

function renderAlert() {
  alert("you clicked", window.getCookie('gogl'));  
}
document.getElementById("myBtn").addEventListener("click", renderAlert);
