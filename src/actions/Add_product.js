import { ADD_PRODUCT } from "../store/actions";

const Add_product = (product) => {
  console.log(product);
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };
};

export default Add_product;
