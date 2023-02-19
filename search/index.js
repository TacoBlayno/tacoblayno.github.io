class DisplayTags {
  constructor(xmlDoc) {
    this._xmlDoc = xmlDoc;
    this._pages = pagesValues(this._xmlDoc.documentElement);
    console.log(this._pages);
  }
  get pagesValues() {
    return this._pages;
  }
  set pagesValues(xmlDoc) {
    let map = new Map();
    if (xmlDoc.childNodes.length > 1) {
      let array = [];
      for (const element of xmlDoc.childNodes) {
        if (element.nodeType == 1) {
          array.push(this._getPagesValues(element));
        }
      }
      map.set(xmlDoc, array);
    } else {
      if (xmlDoc.firstChild.nodeType == 3) {
        map.set(xmlDoc, xmlDoc.firstChild);
      } else if (xmlDoc.firstChild.nodeType == 1) {
        map.set(xmlDoc, this._getPagesValues(xmlDoc.firstChild));
      }
    }
    return map;
  }
}

let searchEl = document.getElementById("search-bar");
let viewAllEl = document.getElementById("view-all");
let searchElDiv = document.getElementById("search-div");
let veiwAlElDiv = document.getElementById("view-all-div");

searchEl.addEventListener("keydown", function(event) {
  search(searchEl.value); });

viewAllEl.addEventListener("click", viewAll);

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

function viewAll() {
  let displayTags;
  let xmlRequest = new XMLHttpRequest();
  console.log(xmlRequest);
  xmlRequest.addEventListener("load", function (values) {
    if (this.readyState == 4 && this.status == 200) {
      displayTags = new DisplayTags(xmlRequest.responseXML);
    }
  });

  xmlRequest.open("GET", "https://tacoblayno.github.io/search/information");
  xmlRequest.send();
}
