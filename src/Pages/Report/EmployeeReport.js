import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

import { Link } from "react-router-dom";

import avatar3 from "../../assets/images/user/avatar-3.jpg";

const EmployeeReport = (props) => {
  const data = props.reportdata;

  const price_array = data.map((item) => {
    let multi1 = item.product.price * item.product.quantity;
    let multi2 = item.product.vat * item.product.quantity;
    let item_cost = multi1 - multi2;
    return item_cost;
  });

  const reducer = (accumulator, item) => {
    return accumulator + item;
  };

  const total = price_array.reduce(reducer, 0);
  return (
    <Col md={6} xl={12} style={{ marginTop: "40px" }}>
      <Card className="Recent-Users">
        <Card.Header>
          <Card.Title as="h5">Employee Sales Report</Card.Title>
        </Card.Header>
        <Card.Body className="px-0 py-2">
          <Table responsive hover>
            <tbody>
              <tr className="unread">
                <td>
                  <h6 className="rounded-circle">Seller Avatar</h6>
                </td>

                <td>
                  <h6 className="mb-1">Seller Name</h6>
                  <p className="m-0">Sold Item</p>
                </td>
                <td>
                  <h6 className="mb-1">Price</h6>
                  <p className="m-0">Discount</p>
                </td>
                <td>
                  <h6 className="text-muted">Time</h6>
                  <p className="m-0">Payemnt Method</p>
                </td>
                <td>
                  <a href="#" className="label theme-bg text-white f-12">
                    Details
                  </a>
                </td>
              </tr>
              {data &&
                data.map((item) => {
                  let multi1 = item.product.price * item.product.quantity;
                  let multi2 = item.product.vat * item.product.quantity;
                  let item_cost = multi1 - multi2;

                  return (
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar3}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">{item.employee.name}</h6>
                        <p className="m-0">{item.product.name}</p>
                      </td>
                      <td>
                        <h6 className="mb-1">{item_cost}</h6>
                        <p className="m-0">{item.discount}</p>
                      </td>
                      <td>
                        <h6 className="text-muted">{item.created_at}</h6>
                        <p className="m-0">{item.payment_method}</p>
                      </td>
                      <td>
                        <Link
                          to={{
                            pathname: "/report/sale-details-employee",
                            state: { product: item },
                          }}
                        >
                          <p className="label theme-bg text-white f-12">
                            Details
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <Card.Footer>
            <Row>
              <Col md={6}>
                <h4 className="mb-1">Total Price--</h4>
              </Col>
              <Col md={6}>
                <h4 className="mb-1">{total}</h4>
              </Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EmployeeReport;
