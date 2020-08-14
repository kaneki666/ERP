import { ADD_LIST_PURCHASE } from "../store/actions";

const Add_list_purchase = (listpurchases) => {
  return (dispatch) => {
    dispatch({
      type: ADD_LIST_PURCHASE,
      payload: listpurchases,
    });
  };
};

export default Add_list_purchase;
