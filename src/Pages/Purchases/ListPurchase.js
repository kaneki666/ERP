import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { FcViewDetails, FcPlus, FcAdvance, FcMinus } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Add_list_purchase from "../../actions/Add_list_purchase";
import AddNotification from "../../actions/AddNotification";
import {
  Get_supplier_api,
  Get_products,
  Get_purchase_api,
  Add_purchase_api,
  Edit_purchase_api,
  Delete_purchase_api,
} from "../../Api_calls";

const ListPurchase = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [supplier_id, setSupplierid] = useState("");
  const [product_id, setProductid] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  const [des, setDes] = useState("");
  const [state, setState] = useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Date", field: "date" },
      { title: "Supplier Id", field: "supplier_id" },
      { title: "Total", field: "cost" },
      { title: "Payment Method", field: "payment_method" },
      {
        title: "Details",
        field: "imageUrl",
        render: (rowData) => (
          <Link
            to={{
              pathname: "/purchases/list-purchase-detail",
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
    data: [],
  });

  useEffect(() => {
    Get_purchase_api().then((res) => {
      setState((prevState) => {
        const data = res.data;
        dispatch(Add_list_purchase(data));
        return { ...prevState, data };
      });
    });
    Get_products().then((res) => setProducts(res.data));
    Get_supplier_api().then((res) => setSuppliers(res.data));
  }, []);

  const handleMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSupplier = (e) => {
    setSupplierid(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const total = inputList.reduce(reducer, 0);

  const handleAddOrder = () => {
    const purhase_order = {
      date: date,
      supplier_id: parseInt(supplier_id),
      cost: parseInt(total),
      product_id: parseInt(product_id),
      payment_method: payment_method,
      desc: des,
    };
    var d = new Date(); // for now
    let h = d.getHours(); // => 9
    let m = d.getMinutes(); // =
    let t = `${h}: ${m}`;
    const notification = {
      time: t,
      message: "New Purchase List",
      data: purhase_order,
      route: "/purchases/list-purchase-detail",
    };
    Add_purchase_api(purhase_order);
    setState((prevState) => {
      const data = [...prevState.data];
      data.push(purhase_order);
      dispatch(Add_list_purchase(data));
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
                <Card.Title as="h5">ADD A NEW PURCHASE ORDER</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={4}>
                    <TextField
                      required
                      onChange={(e) => setDate(e.target.value)}
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2020-07-14"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={date}
                    />
                  </Col>
                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Suppliter Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={supplier_id}
                        onChange={handleSupplier}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        {suppliers.map((item) => {
                          return (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Col>

                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Product Name
                      </InputLabel>
                      <Select
                        required
                        id="standard-required"
                        label="Product Name"
                        value={product_id}
                        onChange={(e) => {
                          setProductid(e.target.value);

                          products.filter((item) => {
                            if (item.id === e.target.value) {
                              setQuantity(item.quantity);
                              setRate(item.price);
                            }
                          });
                        }}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        {products.map((item) => {
                          return (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      disabled
                      id="standard-basic"
                      type="number"
                      label="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      disabled
                      id="standard-basic"
                      type="number"
                      label="Price Per Qty"
                      value={rate}
                    />
                  </Col>

                  <Col sm={4}>
                    <TextField
                      required
                      name="discount"
                      id="standard-basic"
                      type="number"
                      label="Discount"
                      value={discount}
                      onChange={(e) => {
                        setDiscount(e.target.value);
                        const multi = quantity * rate;
                        setTotal(multi - e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      disabled
                      name="total_price"
                      id="standard-basic"
                      type="number"
                      label="Total Price"
                      value={total}
                    />
                  </Col>
                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Paying By
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={payment_method}
                        onChange={handleMethod}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="Cash">Cash</MenuItem>
                        <MenuItem value="Bank">Bank</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>

                  <Col>
                    <TextField
                      required
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
              Edit_purchase_api(newData);
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    dispatch(Add_list_purchase(data));
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              Delete_purchase_api(oldData.id);
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  dispatch(Add_list_purchase(data));
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

export default ListPurchase;
