import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { FcPrint } from "react-icons/fc";
import { IconContext } from "react-icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

import {
  Get_report_api,
  Get_product_report_api,
  Get_employee_report_api,
  Get_products,
  Get_employee_api,
} from "../../Api_calls";
import Aux from "../../hoc/_Aux";
import DateReport from "./DateReport";
import ProductReport from "./ProductReport";
import EmployeeReport from "./EmployeeReport";

const SalesReport = () => {
  const classes = useStyles();

  const [toDate, setTodate] = useState("2020-08-04");
  const [fromDate, setfromdate] = useState("2020-08-03");
  const [data, setData] = useState([]);
  const [productdata, setProductData] = useState([]);
  const [employeedata, setEmloyeeData] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(1);
  let date_data = {
    fromDate: fromDate,
    toDate: toDate,
    product_id: product,
    employee_id: employee,
  };
  console.log(fromDate);

  useEffect(() => {
    Get_report_api(date_data).then((res) => setData(res.data));
    Get_product_report_api(date_data).then((res) => setProductData(res.data));
    Get_employee_report_api(date_data).then((res) => setEmloyeeData(res.data));
    Get_products().then((res) => setProducts(res.data));
    Get_employee_api().then((res) => setEmployees(res.data));
  }, [toDate, fromDate, product, employee]);

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
            <Tab eventKey="today" title="Sales Report By Date">
              <Row>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label="From Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={fromDate}
                    onChange={(e) => setfromdate(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label=" To Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={toDate}
                    onChange={(e) => setTodate(e.target.value)}
                  />
                </Col>
              </Row>
              {data && <DateReport reportdata={data} />}
            </Tab>
            <Tab eventKey="week" title="Sales Report By Product">
              <Row>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label="From Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={fromDate}
                    onChange={(e) => setfromdate(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label=" To Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={toDate}
                    onChange={(e) => setTodate(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Choose Product
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    >
                      {products.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              {productdata && <ProductReport reportdata={productdata} />}
            </Tab>
            <Tab eventKey="all" title="Sales Report By Employee">
              <Row>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label="From Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={fromDate}
                    onChange={(e) => setfromdate(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <TextField
                    required
                    id="date"
                    label=" To Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={toDate}
                    onChange={(e) => setTodate(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Choose Employee
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={employee}
                      onChange={(e) => setEmployee(e.target.value)}
                    >
                      {employees.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              {employeedata && <EmployeeReport reportdata={employeedata} />}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Aux>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default SalesReport;
