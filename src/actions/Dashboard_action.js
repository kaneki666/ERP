import { DASHBOARD } from "../store/actions";

const Dashboard = (dashboard) => {
  return (dispatch) => {
    dispatch({
      type: DASHBOARD,
      payload: dashboard,
    });
  };
};

export default Dashboard;
