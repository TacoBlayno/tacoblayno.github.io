"use strict";
customElements.define("terminal-api", class extends HTMLElement {
	get version() {
		return "v1.1.0";
	}
	
	_format(val) {
		let tags = [];
		val = val.split('\n');
		val.forEach(val => {
			let fooEl = document.createElement("span");
			fooEl.textContent = val;
			tags.push(fooEl);
			tags.push
				(document.createElement("br"));
		});
		if (val[val.length-1] != "") tags.pop().remove();
		return tags;
	}

	_stdcss(el) {
		el.style.color = this._color;
		el.style.fontFamily = this._family;
		el.style.fontStyle = this._style;
		el.style.fontWeight = this._weight;
		el.style.textDecoration
			= this._decoration;
		el.style.background = this._bg;
		return el;
	}
	
	default() {
		this.defaultStyle();
		this.defaultText();
	}
	
	defaultText() {
		this._color = this._el.style.color;
		this._family = this._el.style.fontFamily;
		this._style = this._el.style.fontStyle;
		this._weight = this._el.style.fontWeight;
		this._decoration = this._el.style.textDecoration;
		this._bg = this._el.style.background;
	}
	
	defaultStyle() {
		this._el.style.background = "#333";
		this._el.style.position = "absolute";
		this._el.style.top = "2%";
		this._el.style.left = "2%";
		this._el.style.borderRadius = "5px";
		this._el.style.width = "94%";
		this._el.style.height = "94%";
		this._el.style.margin = "2%";
		this._el.style.padding = "1em";
		this._el.style.boxSizing = "border-box";
		this._el.style.color = "#fff";
		this._el.style.overflow = "scroll";
	}
	
	read(terminating=13) {
		let fooEl = document.createElement("span");
		let barEl = document.createElement("input");
		barEl = this._stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";

		fooEl.appendChild(barEl);
		this._el.appendChild(fooEl);

		barEl.focus();
		
		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
				if (event.keyCode != terminating) return;
				this._input = barEl.value;
				barEl.remove();
				fooEl = this._stdcss(fooEl);
				fooEl.textContent = this._input;
				this._el
					.appendChild
					(document
					.createElement("br"));
				resolve();
			});
		});
	}
	
	readf(terminating=13) {
		let fooEl = document.createElement("span");
		let barEl = document.createElement("input");
		
		barEl = this._stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";
		
		fooEl.appendChild(barEl);
		this._el.appendChild(fooEl);
		
		barEl.focus();

		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
			if (event.keyCode != terminating) return;
			this._input = barEl.value;
			barEl.remove();
			fooEl = this._stdcss(fooEl);
			fooEl.textContent = this._input;
			this._el
				.appendChild
				(document
				.createElement("br"));
			terminating = "";
			for (let i = 0; i < this._input.length; i++) {
				switch (this._input[i]) {
					case '\\':
						i++;
						switch (this._input[i]) {
							case 'n':
								terminating += '\n';
								break;
							default: terminating += '\\' + this._input[i];
						}
						
						break;
					default: terminating += this._input[i]
				}
			}
			this._input = terminating;
			resolve();
			});
		});
	}
	
	readchar() {
		let fooEl = document.createElement("span");
		let barEl = document.createElement("input");
		
		barEl = this._stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";

		fooEl.appendChild(barEl);
		this._el.appendChild(fooEl);
		
		barEl.focus();
		
		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
			this._input = barEl.value;
			barEl.remove();
			fooEl = this._stdcss(fooEl);
			fooEl.textContent = this._input;
			this._el
				.appendChild
				(document
				.createElement("br"));
			resolve();
			});
		});
	}
	
	get input() { return this._input; }

	print(val) {
		let fooEl = document.createElement("span");
		fooEl.textContent = val;
		fooEl = this._stdcss(fooEl);
		this._el.appendChild(fooEl);
	}
	
	printf(val) {
		let tags = this._format(val);
		tags.forEach(fooEl => {
			this._stdcss(fooEl);
			this._el
				.appendChild(fooEl);
		});
	}
	
	println(val) {
		let fooEl = document.createElement("span");
		fooEl.textContent = val;
		fooEl = this._stdcss(fooEl);
		this._el.appendChild(fooEl);
		this._el
			.appendChild
			(document.createElement("br"));
	}
	
	printlnf(val) {
		let tags = this._format(val);
		tags.forEach(fooEl => {
			this._stdcss(fooEl);
			this._el
				.appendChild(fooEl);
		});
		this._el.appendChild
			(document.createElement("br"));
	}
	
	ln() {
		this._el.appendChild
			(document.createElement("br"));
	}

	unprint() {
		this._el.lastElementChild.remove();
	}

	clear() {
		while (this._el.firstElementChild) this._el.firstElementChild.remove();
	}
	
	set color(str = this._el.style.color) {
		this._color = str;
	}
	
	get color() { return this._color; }
	
	set bg(str = this._el.style.background) {
		this._bg = str;
	}
	
	get bg() { return this._bg; }
	
	set family(str = this._el.style.fontFamily) { this._family = str; }
	
	get family() { return this._family; }
	
	set style(str = this._el.style.fontStyle) {
		this._style = str;
	}
	
	get style() { return this._style; }
	
	set weight(str = this._el.style.fontWeight) {
		this._weight = str;
	}
	
	get weight() { return this._weight; }
	
	set decoration(str = this._el.textDecoration) {
		this._decoration = str;
	}
	
	get decoration() { return this._decoration; }

	constructor() {
		super();
		this
			._shadow
				= this
					.attachShadow
						({
							mode: "closed"
						});
						
		this._el = document.createElement("div");
		this._shadow.appendChild(this._el);

		this.default();
	}
});
