class Vector {
	#x;
	#y;
	static add(vect1, vect2) {
		return new Vector(vect1.x + vect2.x, vect1.y + vect2.y);
	}
	static sub(vect1, vect2) {
		return new Vector(vect1.x - vect2.x, vect1.y - vect2.y);
	}
	static dotProd(vect1, vect2) {
		const theta1 = vect1.theta();
		const theta2 = vect2.theta();
		if (theta1 > theta1) {
			const theta = theta1 - theta2;
		}
		else {
			const theta = theta2 - theta1;
		}
		return vect1.mag() * vect2.mag() * Math.cos(theta);
	}
	//static crossProd(vect1, vect2) {}
	//static extProd(vect1, vect2) {}
	static mul(num) {
		return new Vector(vect.x * num, vect.y * num);
	}
	static div(num) {
		return new Vector(vect.x / num, vect.y / num);
	}
	static norm(vect) {
		const mag = Math.sqrt(this.#x * this.#x + this.#y * this.#y);
		return new Vector(vect.x / mag, vect.y / mag);
	}
	
	add(vect) {
		this.#x += vect.x;
		this.#y += vect.y;
	}
	sub(vect) {
		this.#x -= vect.x;
		this.#y -= vect.y;
	}
	mul(num) {
		this.#x *= num;
		this.#y *= num;
	}
	div(num) {
		this.#x /= num;
		this.#y /= num;
	}
	norm() {
		const mag = Math.sqrt(this.#x * this.#x + this.#y * this.#y);
		this.x /= mag;
		this.y /= mag;
	}
	mag() {
		return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
	}
	theta() {
		return Math.atan(this.#y/this.#x);
	}
	get x() {
		return this.#x;
	}
	set x(x) {
		this#x = x;
	}
	get y() {
		return y;
	}
	set y(y) {
		y = this.y;
	}
	constructor(x, y) {
		this.#x = x;
		this.#y = y;
	}
}
