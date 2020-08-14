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
  let item_cost = multi1 - (multi2 + product.invoice.discount);

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col md={3}>
            <h3>Invoice Id</h3>
            <h4>{product.invoide_id}</h4>
          </Col>
          <Col md={3}>
            <h3>Employee Id</h3>
            <h4> {product.employee_id}</h4>
            <h4>{product.created_at}</h4>
          </Col>
          <Col md={3}>
            <h3>Product info</h3>
            <h4>Category Id-{product.product.cat_id}</h4>
            <h4>Brand Id-{product.product.brand_id}</h4>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Vat</TableCell>
                <TableCell align="right">Price Per Qty</TableCell>
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
                <TableCell colSpan={1}>Total</TableCell>
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
