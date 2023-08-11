const products = [
    { name:"laptop",price:80000 },
    { name:"laptop bag",price:2000 },
    { name:"mobile",price:70000 }, 
    { name:"mobile charger",price:1500 }, 
    { name:"watch",price: 20000 }, 
    
  ];
  // Find highest and lowest PRICE 
  const highest = products.reduce((max, product) => (product.price > max ? product.price : max), products[0].price);
  const lowest = products.reduce((min, product) => (product.price < min ? product.price : min), products[0].price)
   // WITH NAME
  const productWithHighestPrice = products.find(product => product.price === highest);
  const productWithLowestPrice = products.find(product => product.price === lowest);
  console.log(`The product with maximum amount is ${productWithHighestPrice.name} which is priced at Rs:${highest}`)
  console.log(`The product with minimum amount is ${productWithLowestPrice.name} which is priced at Rs:${lowest}`)