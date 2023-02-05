var searchEl = document.getElementById("search-bar");
var searchElDiv = document.getElementById("search-div");

searchEl.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    document.write();
    search(searchEl.value);
  };
});

function search(value) {
  var values = value.split(" ");
  delete value;
  
  searchElDiv.innerHTML = "";
  let webPages = retrieveData() /*{
    Minecraft : minecraftFolder(),
    History : {},
    //"" : {},
  };*/
  
  console.log(webPages["Minecraft"]);
  
  function searchKeys(values, object) {
    console.log(object[values[0]])
    if (object[values[0]]) {
      console.log("25-55");
      if (typeof(object[values[0]]) === "object") {
        if (values.length > 0) {
          let newValues = [];
          for (index = 1; index < values.length; index++) {
            newValues.push(values[index]);
            console.log("30-31");
            console.log(newValues);
          }
          if (searchKeys(newValues, object[values[0]]) === false) {
            let searchElP = document.createElement("p");
            searchElP.appendChild(document.createTextNode(object[values[0]]["discription"]));
            console.log(object[values[0]]);
            searchElDiv.appendChild(searchElP);
            console.log("34-38");
            return true;
          } else {
            let searchElP = document.createElement("p");
            console.log(object[values[0]]);
            console.log(object.toString());
            searchElP.appendChild(document.createTextNode(object[values[0]]["discription"]));
            searchElDiv.appendChild(searchElP);
            console.log("40-46");
            return true;
          }
        } else {
          console.log("49");
        }
        console.log("27-51");
      } else {
        console.log("54-55");
        return false;
      }
    } else {
      return false;
    }
  }
  
  searchKeys(values, webPages);
}
