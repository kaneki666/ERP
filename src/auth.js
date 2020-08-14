const checkAuth = () => {
  const token = localStorage.getItem("usertoken");

  if (!token) {
    return false;
  }
  //   try {
  //     const decode = token;
  //     const exp_time = decode.exp;

  //     if (exp_time < new Date().getTime() / 1000) {
  //       return false;
  //     }
  //   } catch (e) {
  //     return false;
  //   }

  return true;
};
export default checkAuth;
