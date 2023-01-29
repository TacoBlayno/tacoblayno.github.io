var searchEl = document.getElementById("search");
searchEl.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    search(searchEl.value);
  };
});

function search(value) {
  document.write();
  let webPages = {
    "Minecraft" : {
      "Home" : {},
      "Parkour Generator" : {},
      "Shape Comands" : {},
    },
    "History" : {
      
    },
    //"" : {},
  };
  
  if (webPages[value]) {
  }
}
