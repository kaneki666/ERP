import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  FcManager,
  FcAddressBook,
  FcNews,
  FcNumericalSorting12,
  FcPhone,
  FcCalendar,
} from "react-icons/fc";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { Card } from "react-bootstrap";

import AddNotification from "../../actions/AddNotification";
import { Add_employee_api } from "../../Api_calls";

const AddEmployee = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [joining_date, setJoining_date] = useState("");
  const [nid, setNid] = useState("");
  const [phone, setPhone] = useState("");

  const AddEmployee = () => {
    const data = {
      name: name,
      address: address,
      designation: designation,
      joining_date: joining_date,
      nid: nid,
      phone: phone,
    };
    Add_employee_api(data);
  };
  console.log(joining_date);
  return (
    <Card>
      <Card.Header>ADD EMPLOYEE</Card.Header>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={6} sm={4}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcManager />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              className={classes.margin}
              id="input-with-icn-textfield"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcAddressBook />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              className={classes.margin}
              id="input-with-icon-texfield"
              label="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcNews />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="date"
              label="Joining Date"
              type="date"
              value={joining_date}
              onChange={(e) => setJoining_date(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcCalendar />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfiel"
              label="NID NO"
              value={nid}
              onChange={(e) => setNid(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcNumericalSorting12 />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FcPhone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
      <Card.Footer>
        <Button variant="outlined" color="secondary" onClick={AddEmployee}>
          ADD EMPLOYEE
        </Button>
      </Card.Footer>
    </Card>
  );
};
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default AddEmployee;
