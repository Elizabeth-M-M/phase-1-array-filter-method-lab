// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(arr, str) {
    let newArr = arr.filter((item) => item.localeCompare(str, undefined, { sensitivity: 'accent' }) === 0);
    return newArr;
}
console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(arr, str) {
    let newArr = arr.filter((item) => {
        let num = str.length;
        if (item.slice(0, num) === str) {
            return item
        }
    });
    return newArr;
}

// console.log(fuzzyMatch(drivers, "Sa"))

function matchName(arr, str) {
    let newArr = arr.filter((item) => item.name === str);
    return newArr;
}
// console.log(drivers)
// console.log(matchName(drivers, "Bobby"))



