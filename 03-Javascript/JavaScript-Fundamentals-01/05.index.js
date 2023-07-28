function calculateDeliveryTime(packageType) {
    let estimatedDeliveryTime;
  
    switch (packageType) {
      case "standard":
        estimatedDeliveryTime = "3-5 days";
        break;
      case "express":
        estimatedDeliveryTime = "1-2 days";
        break;
      case "overnight":
        estimatedDeliveryTime = "next day";
        break;
      default:
        estimatedDeliveryTime = "unknown";
        break;
    }
  
    console.log("Estimated Delivery Time for " + packageType + " package: " + estimatedDeliveryTime);
  }
  
  // Example usage:
  calculateDeliveryTime("standard");
  calculateDeliveryTime("express");
  calculateDeliveryTime("overnight");
  calculateDeliveryTime("unknown");
  