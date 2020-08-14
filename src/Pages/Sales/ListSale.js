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

import AddNotification from "../../actions/AddNotification";
import Add_list_sale from "../../actions/Add_list_sale";
import { Add_sale_api, Get_products } from "../../Api_calls";

const ListSale = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [employee_id, setemployee_id] = useState(1);
  const [payment_type_id, setPayment_type_id] = useState("");
  const [des, setDes] = useState("");
  const [discount, setDiscount] = useState(0);
  const [products, setProducts] = useState([]);

  let [max_quantity, setMax_quantity] = useState(1);

  useEffect(() => {
    Get_products().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleMethod = (e) => {
    setPayment_type_id(e.target.value);
  };

  const [inputList, setInputList] = useState([
    {
      product: "",
      quantity: 1,
      rate: "",
      total_price: "",
      id: "",
      vat: 0,
    },
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    let per_price_obj = products.find((item) => {
      if (item.name === list[index].product) {
        return item.price;
      } else return "";
    });
    setMax_quantity(per_price_obj.quantity);

    list[index].rate = per_price_obj.price;
    list[index].id = per_price_obj.id;

    if (max_quantity < list[index].quantity) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    } else {
    }

    let multi1 = inputList[index].quantity * inputList[index].rate;
    let multi2 = inputList[index].quantity * per_price_obj.vat;
    let after_vat = multi1 - multi2;
    list[index].total_price = after_vat;
    list[index].vat = per_price_obj.vat;
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
    setInputList([
      ...inputList,
      { product: "", quantity: "", rate: "", total_price: "" },
    ]);
  };

  const reducer = (accumulator, item) => {
    let multi = item.rate * item.quantity;
    let multi2 = item.vat * item.quantity;
    let after_vat = multi - multi2;
    return accumulator + after_vat;
  };
  const total = inputList.reduce(reducer, 0);

  const sale_order = {
    employee_id: parseInt(employee_id),
    quantity: inputList.map((item) => {
      return parseInt(item.quantity);
    }),
    discount: discount,
    payment_method: payment_type_id,
    product_id: inputList.map((item) => {
      return parseInt(item.id);
    }),
    products: inputList,
    total: total,
  };
  console.log(sale_order);

  var d = new Date(); // for now
  let h = d.getHours(); // => 9
  let m = d.getMinutes(); // =
  let t = `${h}: ${m}`;
  const handleAddOrder = () => {
    const notification = {
      time: t,
      message: "New Sale Added",
      data: sale_order,
      route: "/sales/list-sale-details",
    };
    Add_list_sale(sale_order);
    Add_sale_api(sale_order);
    dispatch(AddNotification(notification));
    setOpen(false);
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">ADD A NEW LIST SALE</Card.Title>
        {open && (
          <div>
            <h3 style={{ textAlign: "center", color: "red" }}>
              Max Quantity Exceeded
            </h3>
            <h4 style={{ textAlign: "center" }}>
              Available Quantity Is : {max_quantity}
            </h4>
          </div>
        )}
      </Card.Header>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Col sm={4}>
            <TextField
              disabled
              id="standard-basic"
              type="number"
              label="Employ Id"
              value={employee_id}
              // onChange={(e) => setemployee_id(e.target.value)}
            />
          </Col>

          <Col sm="12" style={{ marginTop: "15px" }}>
            {inputList.map((x, i) => {
              return (
                <Row>
                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Product Name
                      </InputLabel>
                      <Select
                        name="product"
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={x.product}
                        onChange={(e) => handleInputChange(e, i)}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        {products.map((item) => (
                          <MenuItem value={item.name}>{item.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                  <Col sm={4}>
                    <TextField
                      name="quantity"
                      id="standard-basic"
                      type="number"
                      label="Quantity"
                      value={x.quantity}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      disabled
                      name="rate"
                      id="standard-basic"
                      type="number"
                      label="Price Per quantity"
                      value={x.rate}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>

                  <Col sm={4}>
                    <TextField
                      disabled
                      name="total_price"
                      id="standard-basic"
                      type="number"
                      label="Price After Vat"
                      value={x.total_price}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>

                  <Col sm={4}>
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
                        Add Product
                      </Button>
                    )}
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col sm={4}>
            <TextField
              name="discount"
              id="standard-basic"
              type="number"
              label="Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.valueAsNumber)}
            />
          </Col>
          <Col sm={4}>
            <TextField
              name="discount"
              id="standard-basic"
              type="number"
              label="Total Price"
              value={total}
              disabled
            />
          </Col>

          <Col sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Paying By</InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={payment_type_id}
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
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              vlaue={des}
              onChange={(e) => setDes(e.target.value)}
            />
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
          <Link
            to={{
              pathname: "/sales/sale-details",
              state: { product: sale_order },
            }}
          >
            <Button
              style={{ backgroundColor: "#18191c", color: "white" }}
              variant="contained"
              startIcon={<FcAdvance />}
              onClick={handleAddOrder}
            >
              ADD SALE
            </Button>
          </Link>
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

export default ListSale;
