import { ADD_SALE_ORDER } from "../store/actions";

const Add_sale_order = (saleorder) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SALE_ORDER,
      payload: saleorder,
    });
  };
};

export default Add_sale_order;
