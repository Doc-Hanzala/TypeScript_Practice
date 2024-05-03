// <----- Union type ------>

let tax: number | string = 100;
tax = "100";
console.log(tax);

// ----------------------
let reqStatus: "pending" | "error" | "success" = "pending";
reqStatus = "success";
console.log(reqStatus);

// ---------------
let houseNo: 23 | 34 | 45 = 45;
houseNo = 23;
console.log(houseNo);

// <-------------- Any type ----------->
let lastName: any = "hanzala";
lastName = 234;
console.log(lastName);

// challenge 1
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

console.log(orderStatus);

// challenge 2
let discount:number |string=20
discount='20%'

console.log(discount);
