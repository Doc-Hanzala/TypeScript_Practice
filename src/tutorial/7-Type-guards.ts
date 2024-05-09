function processInput(input: string | number) {
  if (typeof input === "number") {
    return input * 2;
  }else{
    return input.toUpperCase()
  }
}

const typeNumber = processInput(23)
const typeString = processInput("hanzala")

// console.log(typeNumber);
console.log(typeString);


