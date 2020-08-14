import React, { useState, useEffect } from "react";
import { FcPrint, FcEditImage, FcAdvance } from "react-icons/fc";
import PrintComponents from "react-print-components";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Row, Col, Card } from "react-bootstrap";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import { Edit_product, Get_brands, Get_catagories } from "../../Api_calls";

const ProductComponent = (props) => {
  const product = props.productdata;
  const classes = useStyles();
  const [name, setName] = useState(product.name);
  const [product_code, setProduct_code] = useState(product.product_code);
  const [cat_id, setCat_id] = useState(product.cat_id);
  const [price, setPrice] = useState(product.price);
  const [vat, setVat] = useState(product.vat);
  const [brand_id, setBrand_id] = useState(product.brand_id);
  const [qty, setQty] = useState(product.quantity);
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const multi = price * qty;
  const total = multi - vat;

  useEffect(() => {
    Get_brands().then((res) => {
      setBrands(res.data);
    });
    Get_catagories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = () => {
    setOpen(false);
    const product_data = {
      id: product.id,
      name: name,
      product_code: product_code,
      cat_id: cat_id,
      price: parseInt(price),
      qty: parseInt(qty),
      vat: parseInt(vat),
      brand_id: brand_id,
    };
    Edit_product(product_data);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        startIcon={<FcEditImage />}
      >
        EDIT PRODUCT
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
                      required
                      disabled
                      id="standard-required"
                      label="Product code"
                      value={product_code}
                      type="number"
                      onChange={(e) => setProduct_code(e.target.value)}
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
                      value={qty}
                      type="number"
                      onChange={(e) => setQty(e.target.value)}
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
                    CONFIRM EDIT
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Fade>
      </Modal>
      <Card style={{ marginTop: "20px" }}>
        <Card.Header>
          <h2>PRODUCT DETAILS:</h2>
          <h3>{name}</h3>
          <div style={{ float: "right" }}>
            <h4 className="f-w-300 d-flex align-items-center m-b-0">
              Date-{product.created_at}
            </h4>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row d-flex align-items-center">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <h4>Per Unit Price:</h4>
                <h5>{price}</h5>
              </Grid>
              <Grid item xs={6} sm={4}>
                <h4>Vat:</h4>
                <h5>{vat}</h5>
              </Grid>
              <Grid item xs={6} sm={4}>
                <h4>In Stock: </h4>
                <h5>{qty}</h5>
              </Grid>
              <Grid item xs={6} sm={4}>
                <h4>Brand id: </h4>
                <h5>{brand_id}</h5>
              </Grid>
              <Grid item xs={6} sm={4}>
                <h4>Category id: </h4>
                <h5>{cat_id}</h5>
              </Grid>
            </Grid>
          </div>
          <h4 style={{ textAlign: "center" }}>Total Price: </h4>
          <h5 style={{ textAlign: "center" }}>{total}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

const ProductDetails = (props) => {
  const { product } = props.location.state;
  return (
    <div>
      <PrintComponents
        trigger={
          <Tooltip title="Print" arrow>
            <IconButton>
              <IconContext.Provider value={{ size: "2em" }}>
                <FcPrint />
              </IconContext.Provider>
            </IconButton>
          </Tooltip>
        }
      >
        <ProductComponent productdata={product} />
      </PrintComponents>

      <ProductComponent productdata={product} />
    </div>
  );
};

export default ProductDetails;

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
