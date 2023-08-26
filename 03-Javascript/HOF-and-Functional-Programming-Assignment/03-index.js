const MobileStore = {
    galaxyS22: 599,
    galaxyS23: 799,
    galaxyS22Ultra: 799,
    galaxyS23Ultra: 999
}

const exchangeRate = 80;
function convertToRupees(item, priceInUSD) {
    const priceInRupees = priceInUSD * exchangeRate;
    return { item, priceInRupees}; 
}
const mobileStoreInRupees = Object.keys(MobileStore).map(item => {
  const priceInUSD = MobileStore[item];
  return convertToRupees(item, priceInUSD);
});
console.log(mobileStoreInRupees);

// output: [
//     { item: 'galaxyS22', priceInRupees: 47920 },
//     { item: 'galaxyS23', priceInRupees: 63920 },
//     { item: 'galaxyS22Ultra', priceInRupees: 63920 },
//     { item: 'galaxyS23Ultra', priceInRupees: 79920 }
//   ]
  