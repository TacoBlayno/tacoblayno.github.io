"use strict";
customElements.define("terminal-api", class extends HTMLElement {
	get version() {
		return "v1.1.0";
	}
	
	#format(val) {
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

	#stdcss(el) {
		el.style.color = this.#color;
		el.style.fontFamily = this.#family;
		el.style.fontStyle = this.#style;
		el.style.fontWeight = this.#weight;
		el.style.textDecoration
			= this.#decoration;
		el.style.background = this.#bg;
		return el;
	}
	
	default() {
		this.defaultStyle();
		this.defaultText();
	}
	
	defaultText() {
		this.#color = this.#el.style.color;
		this.#family = this.#el.style.fontFamily;
		this.#style = this.#el.style.fontStyle;
		this.#weight = this.#el.style.fontWeight;
		this.#decoration = this.#el.style.textDecoration;
		this.#bg = this.#el.style.background;
	}
	
	defaultStyle() {
		this.#el.style.background = "#333";
		this.#el.style.position = "absolute";
		this.#el.style.top = "2%";
		this.#el.style.left = "2%";
		this.#el.style.borderRadius = "5px";
		this.#el.style.width = "94%";
		this.#el.style.height = "94%";
		this.#el.style.margin = "2%";
		this.#el.style.padding = "1em";
		this.#el.style.boxSizing = "border-box";
		this.#el.style.color = "#fff";
		this.#el.style.overflow = "scroll";
	}
	
	read(terminating=13) {
		let fooEl = document.createElement("span");
		let barEl = document.createElement("input");
		barEl = this.#stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";

		fooEl.appendChild(barEl);
		this.#el.appendChild(fooEl);

		barEl.focus();
		
		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
				if (event.keyCode != terminating) return;
				this.#input = barEl.value;
				barEl.remove();
				fooEl = this.#stdcss(fooEl);
				fooEl.textContent = this.#input;
				this.#el
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
		
		barEl = this.#stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";
		
		fooEl.appendChild(barEl);
		this.#el.appendChild(fooEl);
		
		barEl.focus();

		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
			if (event.keyCode != terminating) return;
			this.#input = barEl.value;
			barEl.remove();
			fooEl = this.#stdcss(fooEl);
			fooEl.textContent = this.#input;
			this.#el
				.appendChild
				(document
				.createElement("br"));
			terminating = "";
			for (let i = 0; i < this.#input.length; i++) {
				switch (this.#input[i]) {
					case '\\':
						i++;
						switch (this.#input[i]) {
							case 'n':
								terminating += '\n';
								break;
							default: terminating += '\\' + this.#input[i];
						}
						
						break;
					default: terminating += this.#input[i]
				}
			}
			this.#input = terminating;
			resolve();
			});
		});
	}
	
	readchar() {
		let fooEl = document.createElement("span");
		let barEl = document.createElement("input");
		
		barEl = this.#stdcss(barEl);
		
		barEl.style.background = "none";
		barEl.style.outline = "none";
		barEl.style.border = "none";
		
		barEl.style.fontSize = "1em";
		barEl.style.fontFamily = "inherit";
		barEl.style.padding = "inherit";

		fooEl.appendChild(barEl);
		this.#el.appendChild(fooEl);
		
		barEl.focus();
		
		return new Promise(resolve => {
			barEl.addEventListener("keyup", (event) => {
			this.#input = barEl.value;
			barEl.remove();
			fooEl = this.#stdcss(fooEl);
			fooEl.textContent = this.#input;
			this.#el
				.appendChild
				(document
				.createElement("br"));
			resolve();
			});
		});
	}
	
	get input() { return this.#input; }

	print(val) {
		let fooEl = document.createElement("span");
		fooEl.textContent = val;
		fooEl = this.#stdcss(fooEl);
		this.#el.appendChild(fooEl);
	}
	
	printf(val) {
		let tags = this.#format(val);
		tags.forEach(fooEl => {
			this.#stdcss(fooEl);
			this.#el
				.appendChild(fooEl);
		});
	}
	
	println(val) {
		let fooEl = document.createElement("span");
		fooEl.textContent = val;
		fooEl = this.#stdcss(fooEl);
		this.#el.appendChild(fooEl);
		this.#el
			.appendChild
			(document.createElement("br"));
	}
	
	printlnf(val) {
		let tags = this.#format(val);
		tags.forEach(fooEl => {
			this.#stdcss(fooEl);
			this.#el
				.appendChild(fooEl);
		});
		this.#el.appendChild
			(document.createElement("br"));
	}
	
	ln() {
		this.#el.appendChild
			(document.createElement("br"));
	}

	unprint() {
		this.#el.lastElementChild.remove();
	}

	clear() {
		while (this.#el.firstElementChild) this.#el.firstElementChild.remove();
	}
	
	set color(str = this.#el.style.color) {
		this.#color = str;
	}
	
	get color() { return this.#color; }
	
	set bg(str = this.#el.style.background) {
		this.#bg = str;
	}
	
	get bg() { return this.#bg; }
	
	set family(str = this.#el.style.fontFamily) { this.#family = str; }
	
	get family() { return this.#family; }
	
	set style(str = this.#el.style.fontStyle) {
		this.#style = str;
	}
	
	get style() { return this.#style; }
	
	set weight(str = this.#el.style.fontWeight) {
		this.#weight = str;
	}
	
	get weight() { return this.#weight; }
	
	set decoration(str = this.#el.textDecoration) {
		this.#decoration = str;
	}
	
	get decoration() { return this.#decoration; }

	constructor() {
		super();
		this
			.#shadow
				= this
					.attachShadow
						({
							mode: "closed"
						});
						
		this.#el = document.createElement("div");
		this.#shadow.appendChild(this.#el);

		this.default();
	}
});
