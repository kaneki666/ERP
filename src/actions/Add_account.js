import { ADD_ACCOUNT } from "../store/actions";

const Add_account = (account_details) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ACCOUNT,
      payload: account_details,
    });
  };
};

export default Add_account;
