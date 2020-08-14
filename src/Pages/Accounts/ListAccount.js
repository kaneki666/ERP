import React, { useState } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import {
  FcManager,
  FcPlus,
  FcAdvance,
  FcPhone,
  FcAddressBook,
  FcNumericalSorting12,
} from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Col, Card } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

import AddNotification from "../../actions/AddNotification";
import Add_account from "../../actions/Add_account";

const ListAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState("");
  const [accountno, setAccountno] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [des, setDes] = useState("");
  const [address, setAddress] = useState("");

  const [state, setState] = useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Account Name", field: "account" },
      { title: "Account No", field: "accountno" },
      { title: "Address", field: "address" },
      { title: "Account type", field: "type" },
      { title: "Phone No", field: "number" },
    ],
    data: [
      {
        id: 1,
        account: "sadman",
        accountno: 1,
        address: "Wireless",
        type: "admin",
        number: "01764225218",
      },
      {
        id: 2,
        account: "Arafat Garments",
        accountno: 2,
        address: "Gec",
        type: "user",
        number: "01764225987",
      },
      {
        id: 3,
        account: "Loyal Garments",
        accountno: 3,
        address: "2no gate",
        type: "user",
        number: "01764275987",
      },
      {
        id: 4,
        account: "Rumi Garments",
        accountno: 4,
        address: "Agrabad",
        type: "user",
        number: "017687225987",
      },
    ],
  });

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleAccountno = (e) => {
    setAccountno(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOrder = () => {
    const id = Math.floor(Math.random() * 10000);
    let d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const notification = {
      time: date,
      account: account,
      message: "New Account Added",
      route: "#",
    };
    const account_details = {
      id: id,
      account: account,
      accountno: accountno,
      address: address,
      number: number,
      des: des,
      type: type,
    };
    setState((prevState) => {
      const data = [...prevState.data];
      data.push(account_details);
      dispatch(Add_account(data));
      return { ...prevState, data };
    });
    dispatch(AddNotification(notification));
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        startIcon={<FcPlus />}
      >
        ADD A NEW PURCHASE
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">ADD A NEW ACCOUNT</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        label="Account Name"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
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
                        id="input-with-icon-textfield"
                        label="Account No"
                        value={accountno}
                        onChange={handleAccountno}
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
                        label="Phone No"
                        value={number}
                        onChange={handleNumber}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FcPhone />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">
                          Account Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-placeholder-label-label"
                          id="demo-simple-select-placeholder-label"
                          value={type}
                          onChange={handleType}
                          displayEmpty
                          className={classes.selectEmpty}
                        >
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="User">User</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        className={classes.margin}
                        id="input-with-icon-textfield"
                        label="Address"
                        value={address}
                        onChange={handleAddress}
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
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        vlaue={des}
                        onChange={(e) => setDes(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Card.Body>
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
                    onClick={handleAddOrder}
                  >
                    ADD ORDER
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Fade>
      </Modal>
      <MaterialTable
        style={{ marginTop: "20px" }}
        title="Purchase Order"
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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

export default ListAccount;
