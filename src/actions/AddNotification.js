import { ADD_NOTIFICATIONS } from "../store/actions";

const Add_notification = (notification) => {
  return (dispatch) => {
    dispatch({
      type: ADD_NOTIFICATIONS,
      payload: notification,
    });
  };
};

export default Add_notification;
