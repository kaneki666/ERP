import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FcPrint } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import PrintComponents from "react-print-components";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { IconContext } from "react-icons";

const Journal = (props) => {
  const journalDetails = props.journalDetails;

  const classes = useStyles();
  return (
    <Card>
      <Card.Header>
        <div className={classes.floatRight}>
          <h2>JOURNAL DETAIL</h2>
          <h6>No. #656</h6>
        </div>
        <div className={classes.floatLeft}>
          <h3>{journalDetails.date}</h3>
        </div>
      </Card.Header>

      <Card.Body>
        <Row>
          <Col sm={4}>
            <h4>Acount From:</h4>
            <h5>{journalDetails.from_account}</h5>
          </Col>
          <Col sm={4}>
            <h4>Acount To:</h4>
            <h5>{journalDetails.to_account}</h5>
          </Col>
          <Col sm={4}>
            <h4>
              Amount: <p>{journalDetails.amount}</p>
            </h4>
          </Col>
          <Col sm={4}>
            <h4>Journal Description:</h4>
            <p>{journalDetails.des}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const JournalDetail = (props) => {
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
        <Journal journalDetails={product} />
      </PrintComponents>

      <Journal journalDetails={product} />
    </div>
  );
};

export default JournalDetail;

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
