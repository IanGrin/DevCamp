const getAverage = arr => {
    // sum the values from the array
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    //get the length of the array
    
    // divide the array sum by the length
    return sum / arr.length;
}


getAverage([1, 2, 3, 4, 5]); // = 15

// total: 0
// currentValue: 1
// 1

// total: 1
// currentValue: 2
// 3

// total: 3
// currentValue: 3
// 6

// total: 6
// currentValue: 4
// 10

// total: 10
// currentValue: 5
// 15