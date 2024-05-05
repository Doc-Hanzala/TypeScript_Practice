// number type array
let nums: number[] = [23, 23, 23, 324, 345, 345];
nums.push(23);
// console.log(nums);

// string type
let students: string[] = ["hanzala", "ikrama", "wosqa", "baina"];
students.push("amal");
// console.log(students);

// empty
let favSubjects: [] = [];
favSubjects = [];
// console.log(favSubjects);

let cats = [];
cats = ["hanzala", "wosqa", 23];
// console.log(cats);

// uion type in arrays

let array: (string | number)[] = ["hanzala", 23, "wosqa"];

// challenge 1

let tempInFsd: number[] = [23, 45, 12, 43];
// tempInFsd = ["hanzala"];
console.log(tempInFsd);

// challenge 2

let colors: string[] = ["red", "green", "yellow"];
// colors.push(false);
console.log(colors);

// challenge

let mixedTypeArr: (number | string)[] = ["hanzala", "wosqa", 23, 43];
// mixedTypeArr.push(false);
console.log(mixedTypeArr);
