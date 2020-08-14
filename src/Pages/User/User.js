import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FcPlus, FcAdvance, FcMinus } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Row, Col, Card } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { Get_employee_api, Add_user_api } from "../../Api_calls";

const User = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employee_id, setEmployee_id] = useState("");
  const [role_id, setRole_id] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Get_employee_api().then((res) => {
      setData(res.data);
    });
  }, []);

  let user_data = {
    name: name,
    email: email,
    password: password,
    employee_id: employee_id,
    role_id: role_id,
  };
  const handleadduser = () => {
    Add_user_api(user_data);
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">ADD A NEW USER</Card.Title>
      </Card.Header>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Col sm={4}>
            <TextField
              id="standard-basic"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col sm={4}>
            <TextField
              id="standard-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col sm={4}>
            <TextField
              name="quantity"
              id="standard-basic"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Employee Id</InputLabel>
              <Select
                name="product"
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                type="password"
                value={employee_id}
                onChange={(e) => setEmployee_id(e.target.value)}
                displayEmpty
                className={classes.selectEmpty}
              >
                {data.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>

          <Col sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={role_id}
                onChange={(e) => setRole_id(e.target.value)}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value={1}>Manager</MenuItem>
                <MenuItem value={2}>Cashier</MenuItem>
                <MenuItem value={1}>Admin</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Grid>
      </div>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "#18191c", color: "white" }}
            variant="contained"
            startIcon={<FcAdvance />}
            onClick={handleadduser}
          >
            ADD USER
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    minWidth: 120,
  },
}));

export default User;
