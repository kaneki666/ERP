import { TOTAL_PRODUCT } from "../store/actions";

const Total_product = (amount) => {
  return (dispatch) => {
    dispatch({
      type: TOTAL_PRODUCT,
      payload: amount,
    });
  };
};

export default Total_product;
