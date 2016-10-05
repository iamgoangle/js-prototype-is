// Create based class "Human"
function Human (firstname, lastname, age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;

	this.getFirstName = function () {
		return this.firstname;
	}

	this.getLastName = function () {
		return this.lastname;
	}

	this.getAge = function () {
		return this.age;
	}
}

// Create (derive / sub-class)
// and (extends / inherit)
// from (base class or super class)
function Male () {
	this.hair = "Short";

	this.getHair = function () {
		return this.short;
	}

	this.run = function () {
		return "fast";
	}
}

Male.prototype = new Human();

// instance object
const Aong = new Male();
Aong.firstname = "Thanakorn";
console.log(Aong.getFirstName());
