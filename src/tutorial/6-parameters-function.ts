// optional prameter

function calculateDiscounts(price: number, discount?: number): number {
  return price - (discount || 0);
}

const ahmadPrice = calculateDiscounts(100, 45);
console.log(ahmadPrice);

// default parameter

function totalFee(fee: number, fine: number = 0): number {
  return fee + fine;
}

const hanzalaTanveer = totalFee(234, 34);
const wosqaTanveer = totalFee(500);

console.log(hanzalaTanveer);
console.log(wosqaTanveer);
