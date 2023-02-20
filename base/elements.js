let headerEl = document.createElement("header");
let headerAEl = document.createElement("a");
headerAEl.appendChild(document.createTextNode("TacoBlayno's Website"));
headerAEl.href = "/home.html"
headerEl.appendChild(headerAEl);
document.body.appendChild(headerEl);

let footerEl = document.createElement("footer");
let thanksEl = this.document.createElement("a");
thanksEl.appendChild(document.createTextNode("Thanks"));
thanksEl.href = "/thanks.html"
footerEl.appendChild(thanksEl);
document.body.appendChild(footerEl);
