// toThePowerOf(2, 3) => 8;
// Reduce (research this tool);

const { round } = require("lodash");

// console.log(Math.pow(7, 3));//?

// const toThePowerOf = (num, exp) => {
//     const items = Array(exp).fill(num);
// }

// Array(3).fill(2);//?
// // 2 * 2 * 2]

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}
toThePowerOf(2, 3);//?
toThePowerOf(3, 3);//?
toThePowerOf(10, 120);//?