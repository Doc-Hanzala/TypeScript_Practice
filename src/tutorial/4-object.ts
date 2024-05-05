let subjects: { favSub: string; leastFavSubject: string } = {
  favSub: "eye",
  leastFavSubject: "pharma",
  age: 23,
};

subjects.favSub = "medicine";
// subjects.leastFavSubject=23

console.log(subjects);

let boy = { name: "hanzala", age: 24 };
let girl = { name: "amal", age: 2 };
let bo1={name:'haris'}

let studentOf : {name:string,age?:number}[]=[boy,girl,bo1]
