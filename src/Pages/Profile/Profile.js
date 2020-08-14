import React from "react";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Avatar from "../../assets/images/user/avatar-2.jpg";

const Profile = () => {
  const classes = useStyles();
  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <img src={Avatar} />
        </div>
        <div className={classes.floatLeft}>
          <h3>Jhon Doe</h3>
          <h5>Accountant</h5>
        </div>
      </Card.Header>
      <Card.Body>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}>
            <h4>Company Name:</h4>
            <h5>Arafat Garments</h5>
          </Grid>
          <Grid item xs={6} sm={4}>
            <h4>Mobile Number:</h4>
            <h5>01764225218</h5>
          </Grid>
          <Grid item xs={6} sm={4}>
            <h4>Address:</h4>
            <h5>2 No gate</h5>
          </Grid>
        </Grid>
      </Card.Body>
    </Card>
  );
};

export default Profile;

const useStyles = makeStyles({
  floatRight: {
    float: "right",
  },
  floatLeft: {
    float: "left",
    marginTop: "20px",
  },
  table: {
    minWidth: 650,
  },
});
