import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import Clear_notification from "../../../../../actions/Clear_notification";

import avatar1 from "../../../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../../../assets/images/user/avatar-3.jpg";

const NavRight = (props) => {
  const dispatch = useDispatch();
  const [listOpen, setListOpen] = useState(false);
  const state_data = useSelector((state) => state);
  const noti_count = state_data.noti_count;
  const notification = state_data.notifications;
  const myArray = [avatar1, avatar2, avatar3];
  const randAvatar = myArray[(Math.random() * myArray.length) | 0];

  return (
    <Aux>
      <ul className="navbar-nav ml-auto">
        <li>
          <Dropdown alignRight={!props.rtlLayout}>
            <Dropdown.Toggle variant={"link"} id="dropdown-basic">
              <Badge badgeContent={noti_count} color="error">
                <i className="icon feather icon-bell" />
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="notification">
              <div className="noti-head">
                <h6 className="d-inline-block m-b-0">Notifications</h6>
                <div className="float-right">
                  <a onClick={() => dispatch(Clear_notification())}>
                    clear all
                  </a>
                </div>
              </div>
              <ul className="noti-body">
                <li className="n-title">
                  <p className="m-b-0">NEW</p>
                </li>
                {notification.map((item) => {
                  return (
                    <li className="notification">
                      <div className="media">
                        <img
                          className="img-radius"
                          src={randAvatar}
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <p>
                            <strong>{item.account}</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock m-r-10" />
                              {item.time}
                            </span>
                          </p>
                          <Link
                            to={{
                              pathname: `${item.route}`,
                              state: { product: item.data },
                            }}
                          >
                            <p>{item.message}</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li>
          <Dropdown alignRight={!props.rtlLayout} className="drp-user">
            <Dropdown.Toggle variant={"link"} id="dropdown-basic">
              <i className="icon feather icon-settings" />
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="profile-notification">
              <div className="pro-head">
                <img src={avatar2} className="img-radius" alt="User Profile" />
                <span>John Doe</span>
                <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout">
                  <i className="feather icon-log-out" />
                </a>
              </div>
              <ul className="pro-body">
                {/* <li>
                  <a href={DEMO.BLANK_LINK} className="dropdown-item">
                    <i className="feather icon-settings" /> Settings
                  </a>
                </li> */}
                <li>
                  <Link to="/profile" className="dropdown-item">
                    <i className="feather icon-user" /> Profile
                  </Link>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </Aux>
  );
};

export default NavRight;
