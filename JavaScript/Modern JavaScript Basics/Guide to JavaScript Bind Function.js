const userOne = {
    firstName: 'Ian',
    lastName: 'Merritt'
}

const userTwo = {
    firstName: 'Jane',
    lastName: 'Link'
}

const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

// const fullName = () => {
//     return `${this.lastName}, ${this.firstName}`; ----- doenst work, brings back undefined.
// }

const Ian = fullName.bind(userOne);
const Jane = fullName.bind(userTwo);

Ian();
Jane();