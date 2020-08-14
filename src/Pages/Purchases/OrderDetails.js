import React from "react";
import { Card } from "react-bootstrap";
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

const OrderDetails = (props) => {
  const product = props.purchaseOrder;
  const classes = useStyles();
  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <h2>PURCHASE ORDER</h2>
          <h6>No. #656</h6>
        </div>
        <div className={classes.floatLeft}>
          <h3>{product.account}</h3>
          <h4>{product.date}</h4>
        </div>
      </Card.Header>

      <Card.Body>
        <div className={classes.floatLeft}>
          <h4>Client information:</h4>
          <h5>SBI:-1231231231</h5>
        </div>
        <div className={classes.floatRight}>
          <h3>Order Description:</h3>
          <p>{product.des}</p>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Quantity(n)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.products.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.product}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card.Body>
    </Card>
  );
};

const Order = (props) => {
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
        <OrderDetails purchaseOrder={product} />
      </PrintComponents>

      <OrderDetails purchaseOrder={product} />
    </div>
  );
};

export default Order;

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
