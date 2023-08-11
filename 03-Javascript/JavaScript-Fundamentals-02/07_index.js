const genrateOtp = () => {
    const min = 1000;
    const max = 9999;
    const randomOtp = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomOtp
  }
  const otp = genrateOtp();
  console.log(`Your four digit otp is ${otp}`)