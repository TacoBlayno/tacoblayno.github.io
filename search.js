var searchEl = document.getElementById("search-bar");
var searchElDiv = document.getElementById("search-div");

searchEl.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    search(searchEl.value);
  };
});

function search(value) {
  values = value.split(" ");
  delete value;
  
  searchElDiv.innerHTML = "";
  let webPages = {
    "Minecraft" : minecraftFolder(), /*{
      "Home" : {
        "discription" : "hallo",
        "src" : "https://tacoblayno.github.io/minecraft/home",
        "discription" : "Hello",
      },
      "Parkour Generator" : {},
      "Shape Comands" : {},
    },*/
    "History" : {},
    //"" : {},
  };
  
  console.log(webPages["Minecraft"]);
  
  function searchKeys(value, object) {
    if (object[values[0]]) {
      if (typeof(object[values[0]]) === "object") {
        if (values.length > 0) {
          let newValue = [];
          for (index = 1; index < values.length; index++) {
            newValue.push(values[index]);
          }
          if (searchKeys(newValue, values[0]) === false) {
            let searchElP = document.createElement("p");
            searchElP.appendChild(document.createTextNode(object[0]["discription"]));
            searchElDiv.apppendChild(searchElP);
            return true;
          } else {
            let searchElP = document.createElement("p");
            console.log(object);
            console.log(object.toString());
            searchElP.appendChild(document.createTextNode(object["discription"]));
            searchElDiv.appendChild(searchElP);
            return true;
          }
        } else {
          document.write();
        }
      } else {
        return false;
      }
    }
  }
  
  searchKeys(values, webPages)
}
