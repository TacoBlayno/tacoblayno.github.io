let headerEl = document.createElement("header");
let headerAEl = document.createElement("a")
headerAEl.appendChild(document.createTextNode("TacoBlayno's Website"));
headerEl.appendChild(headerAEl);
document.body.appendChild(headerEl);

document.body.addEventListener("load", function() {
  let footerEl = document.createElement("footer");
  let thanksEl = this.document.createElement("a");
  thanksEl.appendChild(document.createTextNode("Thanks"));
  footerEl.appendChild(thanksEl);
  document.body.appendChild(footerEl);
});