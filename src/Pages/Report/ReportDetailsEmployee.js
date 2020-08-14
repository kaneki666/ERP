import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FcPrint } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrintComponents from "react-print-components";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { IconContext } from "react-icons";

const SaleDetails = (props) => {
  const product = props.listSale;
  const classes = useStyles();
  let multi1 = product.product.price * product.product.quantity;
  let multi2 = product.product.vat * product.product.quantity;
  let item_cost = multi1 - multi2;
  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <h3>SALE ID</h3>
          <h4>{product.id}</h4>
          <h4>{product.created_at}</h4>
        </div>
        <div className={classes.floatLeft}>
          <h2>{product.employee.name}</h2>
          <h3>Employee Id-{product.employee_id}</h3>
          <h3>{product.employee.address}</h3>
          <h3>{product.employee.designation}</h3>
          <h4>{product.employee.phone}</h4>
        </div>
      </Card.Header>

      <Card.Body>
        <Row>
          <Col sm={4}>
            <h4>Product Information</h4>
            <h5>Product Id-{product.product.id}</h5>
            <h5>{product.product.name}</h5>
          </Col>

          <Col sm={4}>
            <h3>Product Description</h3>
            <p>Brand Id -{product.product.brand_id}</p>
            <p>Category Id- {product.product.cat_id}</p>
            <p>Product Code- {product.product.product_code}</p>
          </Col>
        </Row>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Vat</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={product.id}>
                <TableCell align="right">{product.product.name}</TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.invoice.discount}</TableCell>
                <TableCell align="right">{product.product.vat}</TableCell>
                <TableCell align="right">{product.product.price}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell align="right">{item_cost}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card.Body>
    </Card>
  );
};

const ListSaleDetail = (props) => {
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
        <SaleDetails listSale={product} />
      </PrintComponents>

      <SaleDetails listSale={product} />
    </div>
  );
};

export default ListSaleDetail;

const useStyles = makeStyles({
  floatRight: {
    float: "right",
  },
  floatLeft: {
    float: "left",
  },
  table: {
    minWidth: 650,
  },
});
