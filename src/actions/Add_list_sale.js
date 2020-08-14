import { ADD_LIST_SALE } from "../store/actions";

const Add_list_sale = (listsale) => {
  return (dispatch) => {
    dispatch({
      type: ADD_LIST_SALE,
      payload: listsale,
    });
  };
};

export default Add_list_sale;
