let searchEl = document.getElementById("search-bar");
let searchSubmitEl = document.getElementById("search-submit");
let searchElDiv = document.getElementById("search-div");

searchEl.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    search(searchEl.value);
  };
});

searchSubmitEl.addEventListener("click", function() { search(searchEl.value); });

function search(value) {
  let values = value.split(" ");
  
  searchElDiv.innerHTML = "";

  function searchTags(values, xml) {
    console.log(xml);
    let xmlDoc = xml.responseXML;
    console.log(xmlDoc);
    searchElDiv.appendChild((document.createTextNode(xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue)));
  }

  let xmlRequest = new XMLHttpRequest();
  console.log(xmlRequest);
  xmlRequest.addEventListener("load", function (values) {
    if (this.readyState == 4 && this.status == 200) {
      searchTags(values, xmlRequest);
    }
  });

  xmlRequest.open("GET", "https://tacoblayno.github.io/search/information");
  xmlRequest.send();

  /*function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        searchTags(values, this);
      }
    };

    xmlhttp.onerror = () => {
      console.log("Error while getting XML.");
    };

    xmlhttp.open("GET", "https://tacoblayno.github.io/search/information.xml");
    xmlhttp.responseType = "document";
    xmlhttp.send();
  }

  loadXMLDoc();

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("description");
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
  searchElDiv.innerHTML = txt;
}

  let webPages = retrieveData() {
    Minecraft : minecraftFolder(),
    History : {},
    //"" : {},
  };
  
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
  
  searchKeys(values, webPages);*/
}
