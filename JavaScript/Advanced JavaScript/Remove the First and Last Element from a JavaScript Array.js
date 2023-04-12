const removefirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least three elements in the array");
    }
}

removefirstAndLast([1, 2, 3])

removefirstAndLast(['a', 'b', 'c', 'd'])//?

console.log(removefirstAndLast([1, 2]))

// const str = '         good content         ';
// str.trim();//?

// let arr = ['ughhhh', 'good', 'another good one', 'uugggg'];
