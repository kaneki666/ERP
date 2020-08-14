import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import navigation from "../../../../menu-items";
import navigation2 from "../../../../menu-item-user";
import DEMO from "../../../../store/constant";
import Aux from "../../../../hoc/_Aux";

const Breadcrumb = () => {
  let [state, setState] = useState({
    main: [],
    item: [],
  });
  const userdata = localStorage.getItem("usertoken");
  let user = 1;
  let main, item;

  let breadcrumb = "";
  let title = "Welcome to ERP";

  useEffect(() => {
    if (user === 2) {
      navigation2.items.map((item, index) => {
        if (item.type && item.type === "group") {
          getCollapse(item, index);
        }
        return false;
      });
      navigation2.items.map((item, index) => {
        if (item.type && item.type === "group") {
          getCollapse(item);
        }
        return false;
      });
    } else {
      navigation.items.map((item, index) => {
        if (item.type && item.type === "group") {
          getCollapse(item, index);
        }
        return false;
      });
      navigation.items.map((item, index) => {
        if (item.type && item.type === "group") {
          getCollapse(item);
        }
        return false;
      });
    }
  });

  const getCollapse = (item) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === "collapse") {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === "item") {
          if (document.location.pathname === collapse.url) {
            setState({ item: collapse, main: item });
          }
        }
        return false;
      });
    }
  };

  if (state.main && state.main.type === "collapse") {
    main = (
      <li className="breadcrumb-item">
        <a href={DEMO.BLANK_LINK}>{state.main.title}</a>
      </li>
    );
  }

  if (state.item && state.item.type === "item") {
    title = state.item.title;
    item = (
      <li className="breadcrumb-item">
        <a href={DEMO.BLANK_LINK}>{title}</a>
      </li>
    );

    if (state.item.breadcrumbs !== false) {
      breadcrumb = (
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h5 className="m-b-10">{title}</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="feather icon-home" />
                    </Link>
                  </li>
                  {main}
                  {item}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  document.title = title;

  return <Aux>{breadcrumb}</Aux>;
};

export default Breadcrumb;
