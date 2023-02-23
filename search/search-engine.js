let searchEl = document.getElementById("search-bar");
let searchElDiv = document.getElementById("search-div");

searchEl.addEventListener("keydown", function(event) {
  search(searchEl.value); });

function search(value) {
  let values = value.split(" ");
  
  searchElDiv.innerHTML = "";

  function searchTags(values, xml) {
    console.log(xml);
    let xmlDoc = xml.responseXML;
    console.log(xmlDoc);
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
}
