
let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;
const ticketPriceChild = 100;
const ticketPriceAdult = 150;
const ticketPriceSenior = 120;
let totalchildprice = numberOfChilds * ticketPriceChild;
let totaladultprice = numberOfAdults * ticketPriceAdult;
let totalseniorprice = numberOfSeniors * ticketPriceSenior;
let totalPrice = totalchildprice + totaladultprice + totalseniorprice;
console.log(`The total ticket price is ${totalPrice}`);