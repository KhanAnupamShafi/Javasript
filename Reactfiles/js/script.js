// const add3 = (...arr) => {
//     console.log(arr);
// };

// add3(1, 2, 3, 4, 5);

const newF = (...a) => {
    return a.filter((num) => num === 4);
};

console.log(newF(1, 2, 3, 4));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const newarr = arr.map((value) => {
    return value + "10";
});

console.log(newarr);