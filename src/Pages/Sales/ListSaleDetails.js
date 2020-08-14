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

  const reducer = (accumulator, item) => {
    let multi = item.rate * item.quantity;
    let multi2 = item.vat * item.quantity;
    let after_vat = multi - multi2;
    return accumulator + after_vat;
  };
  const item_cost = product.products.reduce(reducer, 0);

  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <h3>Payment Method</h3>
          <h4>{product.payment_method}</h4>
        </div>
        <div className={classes.floatLeft}>
          <h3>Employee Id</h3>
          <h4> {product.employee_id}</h4>

          <h4>{product.created_at}</h4>
        </div>
      </Card.Header>

      <Card.Body>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>

                <TableCell align="right">Vat</TableCell>
                <TableCell align="right">Price After Vat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.products.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="right">{item.product}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>

                  <TableCell align="right">{item.vat}</TableCell>
                  <TableCell align="right">{item.total_price}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell>Discount</TableCell>
                <TableCell>{product.discount}</TableCell>

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
