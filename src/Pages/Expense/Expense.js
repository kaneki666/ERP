import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FcViewDetails, FcPlus, FcAdvance } from "react-icons/fc";
import { IconContext } from "react-icons";
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
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import {
  Add_expense_api,
  Edit_expense_api,
  Delete_expense_api,
  Get_expense_api,
} from "../../Api_calls";
import AddNotification from "../../actions/AddNotification";

const Journal = () => {
  // const classes = useStyles();
  // const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  // const [date, setDate] = useState("");
  // const [from_account, setFromaccount] = useState("");
  // const [to_account, setToaccount] = useState("");
  // const [amount, setAmount] = useState("");
  // const [des, setDes] = useState("");
  // const [voucher_no, setVoucherno] = useState("");
  const [state, setState] = useState({
    columns: [
      { title: "EmployeeID", field: "employee_id" },
      { title: "name", field: "name" },

      { title: "Description", field: "description" },
      { title: "Amount", field: "amount" },
    ],
    data: [],
  });

  useEffect(() => {
    Get_expense_api().then((res) => {
      setState((prevState) => {
        const data = res.data;

        return { ...prevState, data };
      });
    });
  }, []);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleAddJournal = () => {
  //   const expense_data = {
  //     employee_id: employee_id,
  //     description: description,
  //     amount: amount,
  //     date: date,
  //     name: name,
  //   };
  //   const notification = {
  //     time: date,
  //     account: from_account,
  //     message: "New Expense Added",
  //   };
  //   setState((prevState) => {
  //     const data = [...prevState.data];
  //     data.push(journal);
  //     return { ...prevState, data };
  //   });
  //   dispatch(AddNotification(notification));
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        startIcon={<FcPlus />}
      >
        ADD NEW EXPENSE
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
                <Card.Title as="h5">ADD A NEW EXPENSE</Card.Title>
              </Card.Header>
              <Card.Body>
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={4}>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        From Account
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        displayEmpty
                        className={classes.selectEmpty}
                        value={from_account}
                        onChange={(e) => setFromaccount(e.target.value)}
                      >
                        <MenuItem value="Loyal Garments">
                          Loyal Garments
                        </MenuItem>
                        <MenuItem value="Arafat Garments">
                          Arafat Garments
                        </MenuItem>
                        <MenuItem value="Rumi Garments">Rumi Garments</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        To Account
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={to_account}
                        onChange={(e) => setToaccount(e.target.value)}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="Loyal Garments">
                          Loyal Garments
                        </MenuItem>
                        <MenuItem value="Arafat Garments">
                          Arafat Garments
                        </MenuItem>
                        <MenuItem value="Rumi Garments">Rumi Garments</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid tem xs={6} sm={4}>
                    <TextField
                      type="number"
                      required
                      id="standard-required"
                      label="Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Grid>

                  <Grid tem xs={6} sm={4}>
                    <TextField
                      type="number"
                      required
                      id="standard-required"
                      label="Journal Voucher No"
                      value={voucher_no}
                      onChange={(e) => setVoucherno(e.target.value)}
                    />
                  </Grid>

                  <Grid tem xs={6} sm={4}>
                    <TextField
                      id="standard-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </Grid>
                </Grid>
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
                    onClick={handleAddJournal}
                  >
                    ADD JOURNAL
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Fade>
      </Modal> */}
      <MaterialTable
        style={{ marginTop: "20px" }}
        title="EXPENSE LIST"
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              Add_expense_api(newData);
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              Edit_expense_api(newData);
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
              Delete_expense_api(oldData.id);
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

export default Journal;
