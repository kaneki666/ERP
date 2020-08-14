import { ADD_PURCHASE } from "../store/actions";

const Add_purchase = (purchases) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PURCHASE,
      payload: purchases,
    });
  };
};

export default Add_purchase;
