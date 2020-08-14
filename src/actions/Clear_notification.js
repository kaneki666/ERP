import { CLEAR_NOTIFICATIONS } from "../store/actions";

const Add_notification = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATIONS,
    });
  };
};

export default Add_notification;
