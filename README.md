# What is Prototype in JavaScript?
Prototype-based programming is an OOP model that doesn't use classes, but rather it first accomplishes the behavior of any class and then reuses it (equivalent to inheritance in class-based languages) by decorating (or expanding upon) existing prototype objects. (Also called classless, prototype-oriented, or instance-based programming.)

The original (and most canonical) example of a prototype-based language is Self developed by David Ungar and Randall Smith. However, the class-less programming style is increasingly popular, and has been adopted for programming languages such as JavaScript, Cecil, NewtonScript, Io, MOO, REBOL, Kevo, Squeak (when using the Viewer framework to manipulate Morphic components), and several others.

# Is there several object included in core of JavaScript?
JavaScript has several objects included in its core, for example, there are objects like Math, Object, Array, and String.

# Hence, Do we able to create a custom object for my own?
Yes, you can create a custom object to your own and there is hidden prototype in your custom object.

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

# Let's start with coding
Since there is no **class** keyword for prototype based programming, it was not a problem.

## Create a super class and instance object
```javascript
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
```
