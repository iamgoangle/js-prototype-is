// there are 2 options to create a function in JavaScript
// http://www.w3schools.com/js/js_function_definition.asp

// Create a super class by function expression
const Human = {
	firstname: "Teerapong",
	lastname: "Singthong",
	idCard: 1234567890,
	getName: function () {
		return `${this.firstname} ${this.lastname}`;
	},
	run: function (behavior) {
		return (behavior !== "") ? behavior : "run fast";
	}
};

// Create new object
const Aong = Object.create(Human);

// Override properies
Aong.firstname = "Thanakorn";
Aong.lastname = "Doung";
Aong.idCard = 5555;

// Override method
console.log(Aong.getName());
console.log(Aong.run("Super fast"));
console.log(Aong.getIdCard());
