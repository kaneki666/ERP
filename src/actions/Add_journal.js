import { ADD_JOURNAL } from "../store/actions";

const Add_journal = (journal) => {
  return (dispatch) => {
    dispatch({
      type: ADD_JOURNAL,
      payload: journal,
    });
  };
};

export default Add_journal;
