// class Instructor {
//     constructor({ name, role = 'Assistant' }) {
//         this.name = name;
//         this.role = role;
//     }

//     renderDetails() {
//         console.log(`${this.name}: ${this.role}`);
//     }

//     static helloWorld() {
//         console.log('Hi there');
//     }

//     static canTeach(Instructor) {
//         return (Instructor.role === 'classroom');
//     }
// }

// // Instructor.helloWorld();

// let ian = new Instructor({ 'name': 'Ian'});
// console.log(
//     `${ian.name} can teach: ${Instructor.canTeach(ian)}`
// );

// let seth = new Instructor({ 'name': 'Seth', 'role' : 'classroom'});
// console.log(
//     `${seth.name} can teach: ${Instructor.canTeach(seth)}`
// );

class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

let choice1 = new Home({ 'type': "house"});
let choice2 = new Home({ 'type': "apartment"});
console.log(choice1);
console.log(choice2);



