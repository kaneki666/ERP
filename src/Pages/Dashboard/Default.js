import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcShop, FcDebt, FcFactory } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import RiseLoader from "react-spinners/RiseLoader";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import MultiBarChart from "../Charts/Nvd3Chart/PieChart3D";
import WeeklyChart from "../Charts/Nvd3Chart/WeeklySaleLineChart";
import { Dashboard_api } from "../../Api_calls";
import Dashboard_action from "../../actions/Dashboard_action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const id = 1;
    Dashboard_api(id).then((res) => {
      setData(res.data);
      setFetched(true);
      dispatch(Dashboard_action(res.data));
    });
  }, []);
  const notifications = useSelector((state) => {
    return state.notifications;
  });

  var myArray = [avatar1, avatar2, avatar3];
  var randAvatar = myArray[(Math.random() * myArray.length) | 0];
  if (fetched) {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Daily Sales</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      {data.daily_sale_total}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">70%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4">Monthly Sales</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                      {data.monthly_sale_total}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">85%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme2"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4"> Daily Expense</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      {data.daily_expense_total}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">100%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme3"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4"> Monthly Expense</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      {data.monthly_expense_total}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">100%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme3"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4"> Daily Purchase</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      {data.daily_purchase}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">100%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme3"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <h6 className="mb-4"> Monthly Purchase</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                      {data.monthly_purchase}
                    </h3>
                  </div>

                  <div className="col-3 text-right">
                    <p className="m-b-0">100%</p>
                  </div>
                </div>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme3"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={4}>
            <Card>
              <Card.Body className="border-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-auto">
                    <IconContext.Provider
                      value={{ className: "global-class-name", size: "1.5em" }}
                    >
                      <div>
                        <FcShop />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="col">
                    <h3 className="f-w-300">{data.daily_sale.length}</h3>
                    <span className="d-block text-uppercase">total sales</span>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className="border-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-auto">
                    <IconContext.Provider
                      value={{ className: "global-class-name", size: "1.5em" }}
                    >
                      <div>
                        <FcDebt />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="col">
                    <h3 className="f-w-300">{data.weekly_expense.length}</h3>
                    <span className="d-block text-uppercase">
                      total expense
                    </span>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className="border-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-auto">
                    <IconContext.Provider
                      value={{ className: "global-class-name", size: "1.5em" }}
                    >
                      <div>
                        <FcFactory />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="col">
                    <h3 className="f-w-300">{data.total_brands}</h3>
                    <span className="d-block text-uppercase">total brands</span>
                  </div>
                </div>
              </Card.Body>
              <Card.Body className="border-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-auto">
                    <IconContext.Provider
                      value={{ className: "global-class-name", size: "1.5em" }}
                    >
                      <div>
                        <FcFactory />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="col">
                    <h3 className="f-w-300">{data.total_products}</h3>
                    <span className="d-block text-uppercase">
                      total products type
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={{ backgroundColor: "#007bff" }}>
              <Card.Body>
                <WeeklyChart />
              </Card.Body>
              <Card.Footer>
                <h4 style={{ textAlign: "center", color: "#fff" }}>
                  Fig: Weekly Sales Chart
                </h4>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={12}>
            <Card>
              <Card.Body>
                <MultiBarChart />
              </Card.Body>
              <Card.Footer>
                <h4 style={{ textAlign: "center" }}>
                  Fig: Monthly Sales, Purchase, Expense 3dPieChart
                </h4>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6} xl={8}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Recent Activity</Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                {notifications.map((item) => {
                  return (
                    <Table responsive hover>
                      <tbody>
                        <tr className="unread">
                          <td>
                            <img
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              src={randAvatar}
                              alt="activity-user"
                            />
                          </td>
                          <td>
                            <h6 className="mb-1">{item.account}</h6>
                            <p className="m-0">{item.message}</p>
                          </td>
                          <td>
                            <h6 className="text-muted">
                              <i className="fa fa-circle text-c-green f-10 m-r-15" />
                              {item.time}
                            </h6>
                          </td>
                          <td>
                            <Link
                              to={{
                                pathname: `{item.route}`,
                                state: { product: item.data },
                              }}
                              className="label theme-bg text-white f-12"
                            >
                              See Details
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <RiseLoader size={40} color={"#3f4d67"} loading={true} />
      </div>
    );
  }
};

export default Dashboard;
