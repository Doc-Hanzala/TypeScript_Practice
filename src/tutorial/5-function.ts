function intro(name: string) {
  console.log(`my name is ${name.toUpperCase()}`);
}

// intro("hanzala");

function age1(age: number) {
  console.log(`my age is ${age}`);
}

// age1(23);

function calculateDiscount(price: number): (number | string) {
  const hasDiscount = true;

  if (hasDiscount) {
    return "hanzala is good boy";
  }
  return price * 2;
}

const YourDiscount = calculateDiscount(23);
console.log(YourDiscount);


// challenge
/* 
Create a new array of names.
Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
Use this function to check if various names are in your array and log the results.
*/

let names:string[] = ['hanzala','ikrama','wosqa']

function checkName(name:string):boolean{
    return names.includes(name)
}

const hanzala = checkName('hanzala')

console.log(hanzala);
