import React, { useState } from "react";
import { Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { FcTimeline, FcPrint } from "react-icons/fc";
import { IconContext } from "react-icons";

import Aux from "../../hoc/_Aux";

import avatar2 from "../../assets/images/user/avatar-2.jpg";

const PurchaseReport = () => {
  const [toDate, setTodate] = useState("");
  const [fromDate, setfromdate] = useState("");
  const data = [
    {
      name: "Arif Rahman",
      des: "Bought Jeans ",
      tax: "0",
      price: "2500",
      date: "11 MAY 12:56",
      cat_id: "1",
      brand_id: "3",
    },
    {
      name: "Arif Rahman",
      des: "Bought T-Shirts",
      tax: "120",
      price: "2800",
      date: "11 JULY 12:56",
      cat_id: "1",
      brand_id: "2",
    },
    {
      name: "Arif Rahman",
      des: "Bought Jeans ",
      tax: "100",
      price: "3500",
      date: "11 JULY 13:56",
      cat_id: "3",
      brand_id: "1",
    },
    {
      name: "Arif Rahman",
      des: "Bought Casual Pants",
      tax: "0",
      price: "4000",
      date: "11 JULY 14:06",
      cat_id: "2",
      brand_id: "6",
    },
    {
      name: "Arif Rahman",
      des: "Bought Jeans ",
      tax: "0",
      price: "2800",
      date: "11 JULY 15:26",
      cat_id: "6",
      brand_id: "8",
    },
    {
      name: "Arif Rahman",
      des: "Bought Jeans",
      tax: "0",
      price: "2900",
      date: "11 JUly 15:36",
      cat_id: "5",
      brand_id: "4",
    },
    {
      name: "Arif Rahman",
      des: "Bought Casual Pants",
      tax: "0",
      price: "4000",
      date: "11 JULY 14:06",
      cat_id: "2",
      brand_id: "2",
    },
    {
      name: "Arif Rahman",
      des: "Bought Jeans",
      tax: "0",
      price: "2800",
      date: "11 JULY 15:26",
      cat_id: "1",
      brand_id: "3",
    },
    {
      name: "Arif Rahman",
      des: "Bought T-Shirts",
      tax: "126",
      price: "2900",
      date: "11 JUly 15:36",
      cat_id: "5",
      brand_id: "4",
    },
  ];

  const reducer = (accumulator, item) => {
    let subtract = item.price - item.tax;
    return accumulator + subtract;
  };

  const total = data.reduce(reducer, 0);
  const tabContent = (
    <Col md={6} xl={12}>
      <Card className="Recent-Users">
        <Card.Header>
          <Card.Title as="h5">Todays Report| Custom Report</Card.Title>
          <Row>
            <Col sm={4}>
              <TextField
                required
                onChange={(e) => setfromdate(e.target.value)}
                id="date"
                label="From Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={fromDate}
              />
            </Col>
            <Col sm={4}>
              <TextField
                required
                onChange={(e) => setTodate(e.target.value)}
                id="date"
                label=" To Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={toDate}
              />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="px-0 py-2">
          <Table responsive hover>
            <tbody>
              <tr className="unread">
                <td>
                  <h6 className="rounded-circle">Buyer Avatar</h6>
                </td>
                <td>
                  <h6 className="mb-1">Buyer Name</h6>
                  <p className="m-0">Bought Items Des</p>
                </td>
                <td>
                  <h6 className="mb-1">Price</h6>
                  <p className="m-0">tax</p>
                </td>
                <td>
                  <h6 className="text-muted">
                    <IconContext.Provider
                      value={{ className: "global-class-name", size: "2em" }}
                    >
                      <div>
                        <FcTimeline /> Time
                      </div>
                    </IconContext.Provider>
                  </h6>
                </td>
                <td>
                  <h6 className="mb-1">Category Id</h6>
                  <p className="m-0">Brand Id</p>
                </td>
                <td>
                  <a href="#" className="label theme-bg text-white f-12">
                    Details
                  </a>
                </td>
              </tr>
              {data.map((item) => (
                <tr className="unread">
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="m-0">{item.des}</p>
                  </td>
                  <td>
                    <h6 className="mb-1">{item.price}</h6>
                    <p className="m-0">{item.tax}</p>
                  </td>
                  <td>
                    <h6 className="text-muted">
                      <IconContext.Provider
                        value={{ className: "global-class-name", size: "2em" }}
                      >
                        <div>
                          <FcTimeline /> {item.date}
                        </div>
                      </IconContext.Provider>
                    </h6>
                  </td>
                  <td>
                    <h6 className="mb-1">{item.cat_id}</h6>
                    <p className="m-0">{item.brand_id}</p>
                  </td>
                  <td>
                    <a href="#" className="label theme-bg text-white f-12">
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Card.Footer>
            <Row>
              <Col md={6}>
                <h4 className="mb-1">Total Price:--</h4>
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

  return (
    <Aux>
      <IconContext.Provider
        value={{ className: "global-class-name", size: "3.5em" }}
      >
        <div>
          <FcPrint />
        </div>
      </IconContext.Provider>
      <Row>
        <Col md={6} xl={12} className="m-b-30">
          <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
            <Tab
              eventKey="today"
              title="Todays's Purchase Report| Custom Purchase Report"
            >
              {tabContent}
            </Tab>
            <Tab eventKey="week" title="This Week's Purchase Report">
              {tabContent}
            </Tab>
            <Tab eventKey="all" title="Year Purchase Report">
              {tabContent}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Aux>
  );
};

export default PurchaseReport;
