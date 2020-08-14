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
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import Add_product from "../../actions/Add_product";
import AddNotification from "../../actions/AddNotification";
import {
  Add_product_api,
  Delete_product,
  Get_products,
  Get_catagories,
  Get_brands,
} from "../../Api_calls";

const ListProducts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [product_code, setProduct_code] = useState("");
  const [cat_id, setCat_id] = useState("");
  const [price, setPrice] = useState("");
  const [vat, setVat] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [des, setDes] = useState("");
  const [quantity, setquantity] = useState("");
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Product Code", field: "product_code", type: "numeric" },

      { title: "Price", field: "price", type: "numeric" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      {
        title: "Details",
        field: "imageUrl",
        render: (rowData) => (
          <Link
            to={{
              pathname: "/products/product-details",
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
    Get_products().then((res) => {
      setState((prevState) => {
        const data = res.data;
        dispatch(Add_product(data));
        return { ...prevState, data };
      });
    });
    Get_brands().then((res) => {
      setBrands(res.data);
    });
    Get_catagories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
    const prod_codee = Math.floor(Math.random() * 100000);
    setProduct_code(prod_codee);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = () => {
    const product_data = {
      name: name,
      product_code: product_code,
      cat_id: cat_id,
      price: parseInt(price),
      quantity: parseInt(quantity),
      vat: parseInt(vat),
      brand_id: brand_id,
    };
    var d = new Date(); // for now
    let h = d.getHours(); // => 9
    let m = d.getMinutes(); // =
    let t = `${h}: ${m}`;
    const notification = {
      time: t,
      name: name,
      message: "New Product Added",
      des: des,
      route: "/products/product-details",
      data: product_data,
    };

    setState((prevState) => {
      const data = [...prevState.data];
      data.push(product_data);
      dispatch(Add_product(data));
      return { ...prevState, data };
    });
    Add_product_api(product_data);
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
        ADD A NEW PRODUCT
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
                <Card.Title as="h5">ADD A NEW PRODUCT</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={4}>
                    <TextField
                      required
                      id="standard-required"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>

                  <Col sm={4}>
                    <TextField
                      disabled
                      required
                      id="standard-required"
                      label="Product code"
                      value={product_code}
                      type="number"
                    />
                  </Col>
                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={cat_id}
                        onChange={(e) => setCat_id(e.target.value)}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        {categories.map((item) => (
                          <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                  <Col sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Brand
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={brand_id}
                        type="number"
                        onChange={(e) => setBrand_id(e.target.value)}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        {brands.map((item) => (
                          <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      id="standard-required"
                      label="Price"
                      value={price}
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      id="standard-required"
                      label="Quantity"
                      value={quantity}
                      type="number"
                      onChange={(e) => setquantity(e.target.value)}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      required
                      id="standard-required"
                      label="Vat"
                      value={vat}
                      type="number"
                      onChange={(e) => setVat(e.target.value)}
                    />
                  </Col>
                  <Col sm={4}>
                    <TextField
                      id="standard-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      vlaue={des}
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
                    onClick={handleAddProduct}
                  >
                    ADD PRODUCT
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Fade>
      </Modal>
      <MaterialTable
        title="ALL PRODUCTS"
        style={{ marginTop: "20px" }}
        columns={state.columns}
        data={state.data}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
          filtering: true,
        }}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                Delete_product(oldData.id);
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  dispatch(Add_product(data));
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
};

export default ListProducts;

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
