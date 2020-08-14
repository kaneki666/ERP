import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { FcViewDetails, FcPlus, FcAdvance, FcMinus } from "react-icons/fc";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import AddNotification from "../../actions/AddNotification";
import Add_purchase from "../../actions/Add_purchase";

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

const PurchasesOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState("");
  const [state, setState] = useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Date", field: "date" },
      { title: "Account Name", field: "account" },
      {
        title: "Details",
        field: "imageUrl",
        render: (rowData) => (
          <Link
            to={{
              pathname: "/purchases/order-details",
              state: { product: rowData },
            }}
          >
            <IconContext.Provider
              value={{ className: "global-class-name", size: "1.5em" }}
            >
              <div>
                <FcViewDetails />
              </div>
            </IconContext.Provider>
          </Link>
        ),
      },
    ],
    data: [
      {
        id: "1",
        date: "7/10/2020",
        account: "Arafat Garments",
        products: [
          { id: 1, product: "Fibonacci Series", qty: 100 },
          { id: 2, product: "access point wrt20", qty: 200 },
        ],
      },
      {
        id: "2",
        date: "7/8/2020",
        account: "Loyal Garments",
        products: [
          { id: 1, product: "Fibonacci Series", qty: 100 },
          { id: 2, product: "access point wrt20", qty: 200 },
        ],
      },
      {
        id: "3",
        date: "7/8/2020",
        account: "Fake Garments",
        products: [
          { id: 1, product: "Fibonacci Series", qty: 100 },
          { id: 2, product: "access point wrt20", qty: 200 },
        ],
      },
    ],
  });

  const [inputList, setInputList] = useState([{ product: "", qty: "" }]);
  const [date, setDate] = useState("");
  const [orderno, setOrderno] = useState("");
  const [des, setDes] = useState("");

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { product: "", qty: "" }]);
  };

  const handleAddOrder = () => {
    const id = Math.floor(Math.random() * 10000);
    const purhase_order = {
      id: id,
      account: account,
      date: date,
      products: inputList,
      order_no: orderno,
      des: des,
    };
    const notification = {
      time: date,
      account: account,
      message: "New Purchase Order",
      route: "/purchases/order-details",
      data: purhase_order,
    };

    setState((prevState) => {
      const data = [...prevState.data];
      data.push(purhase_order);
      dispatch(Add_purchase(data));
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
        ADD NEW ORDER
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
                <Card.Title as="h5">ADD A NEW PURCHASE ORDER</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
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
                  </Col>
                  <Col>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Select Account
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={account}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="Loyal Garments">
                          Loyal Garments
                        </MenuItem>
                        <MenuItem value="Arafat Garments">
                          Arafat Garments
                        </MenuItem>
                        <MenuItem value="Fake Garments">Fake Garments</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>

                  <Col>
                    <TextField
                      required
                      id="standard-required"
                      label="Purchase Order No"
                      value={orderno}
                      onChange={(e) => setOrderno(e.target.value)}
                    />
                  </Col>
                  {inputList.map((x, i) => {
                    return (
                      <Row style={{ paddingLeft: "15px" }}>
                        <Col sm="4">
                          <TextField
                            name="product"
                            required
                            id="standard-required"
                            label="Product Name"
                            value={x.product}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </Col>
                        <Col sm="4">
                          <TextField
                            name="qty"
                            id="standard-basic"
                            type="number"
                            label="Quantity"
                            value={x.qty}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </Col>

                        <Col sm="4">
                          {inputList.length !== 1 && (
                            <Button
                              variant="contained"
                              color="secondary"
                              startIcon={<FcMinus />}
                              onClick={() => handleRemoveClick(i)}
                            >
                              Remove
                            </Button>
                          )}
                          {inputList.length - 1 === i && (
                            <Button
                              variant="contained"
                              color="primary"
                              startIcon={<FcPlus />}
                              onClick={handleAddClick}
                            >
                              Add
                            </Button>
                          )}
                        </Col>
                      </Row>
                    );
                  })}

                  <Col>
                    <TextField
                      id="standard-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </Col>
                </Row>
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
export default PurchasesOrder;
