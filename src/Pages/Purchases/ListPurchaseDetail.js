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

const Puchase = (props) => {
  const product = props.purchase;
  const classes = useStyles();

  const multi1 = product.product.price * product.product.quantity;
  const multi2 = product.product.vat * product.product.quantity;
  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <h3>PURCHASE INVOICE</h3>
          <h4>{product.id}</h4>
        </div>
        <div className={classes.floatLeft}>
          <h3>{product.date}</h3>
          <h3>Payment Method:</h3>
          <h6>{product.payment_method}</h6>
        </div>
      </Card.Header>

      <Card.Body>
        <Row>
          <Col sm={4}>
            <h3>Supplier Info:</h3>
            <h6>{product.supplier.name}</h6>
            <h6>{product.supplier.address}</h6>
          </Col>
          <Col sm={4}>
            <h3>Order Description:</h3>
            <p>{product.desc}</p>
          </Col>
          <Col sm={4}>
            <h3>Company Name:</h3>
            <p>{product.supplier.company_name}</p>
          </Col>
        </Row>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Category ID</TableCell>
                <TableCell align="right">Brand Id</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Vat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={product.product.id}>
                <TableCell component="th" scope="row">
                  {product.product.id}
                </TableCell>
                <TableCell align="right">{product.product.name}</TableCell>
                <TableCell align="right">{product.product.cat_id}</TableCell>
                <TableCell align="right">{product.product.brand_id}</TableCell>
                <TableCell align="right">{product.product.quantity}</TableCell>
                <TableCell align="right">{product.product.price}</TableCell>
                <TableCell align="right">{product.product.vat}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell align="right">{multi1 - multi2}Tk</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card.Body>
    </Card>
  );
};

const ListPurchaseDetail = (props) => {
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
        <Puchase purchase={product} />
      </PrintComponents>

      <Puchase purchase={product} />
    </div>
  );
};

export default ListPurchaseDetail;

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
