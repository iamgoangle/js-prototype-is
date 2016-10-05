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

// Add member and behavior to Human
Human.prototype.nationallity = "Thai";
Human.prototype.getNationality = function () {
	return this.nationallity;
}

// instance object
// using new keyword
const Pratud = new Human("Pratud", "Junoishi", 99);

// using Object.create() method
const Prawee = Object.create(Human);
Prawee.firstname = "Prawee";
Prawee.lastname = "Wongnai";
Prawee.age = 78;

console.log(Pratud);
console.log(Prawee);
