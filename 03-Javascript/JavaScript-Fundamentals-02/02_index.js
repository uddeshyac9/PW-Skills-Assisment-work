function calculateTotalcartPrice(prices){
    let total =0;
    for (let price of prices) {
      total+= price;
    }
    return total;
}
// prices array
cartprices = [199,299,4999,499];
const totalCartPrice = calculateTotalcartPrice(cartprices);
console.log(`The total sum of prices in the cart is: ${totalCartPrice}`);