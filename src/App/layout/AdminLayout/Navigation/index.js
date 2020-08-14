import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import windowSize from "react-window-size";

import NavLogo from "./NavLogo";
import NavContent from "./NavContent";
import OutsideClick from "./OutsideClick";
import Aux from "./../../../../hoc/_Aux";
import * as actionTypes from "./../../../../store/actions";
import navigation from "../../../../menu-items";
import navigation2 from "../../../../menu-item-user";

const Navigation = (props) => {
  const userdata = localStorage.getItem("usertoken");
  let user = 1;
  const resize = () => {
    const contentWidth = document.getElementById("root").clientWidth;

    if (props.layout === "horizontal" && contentWidth < 992) {
      props.onChangeLayout("vertical");
    }
  };
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  let navClass = ["pcoded-navbar"];

  if (
    props.preLayout !== null &&
    props.preLayout !== "" &&
    props.preLayout !== "layout-6" &&
    props.preLayout !== "layout-8"
  ) {
    navClass = [...navClass, props.preLayout];
  } else {
    navClass = [
      ...navClass,
      props.layoutType,
      props.navBackColor,
      props.navBrandColor,
      "drp-icon-" + props.navDropdownIcon,
      "menu-item-icon-" + props.navListIcon,
      props.navActiveListColor,
      props.navListTitleColor,
    ];

    if (props.layout === "horizontal") {
      navClass = [...navClass, "theme-horizontal"];
    }

    if (props.navBackImage) {
      navClass = [...navClass, props.navBackImage];
    }

    if (props.navIconColor) {
      navClass = [...navClass, "icon-colored"];
    }

    if (!props.navFixedLayout) {
      navClass = [...navClass, "menupos-static"];
    }

    if (props.navListTitleHide) {
      navClass = [...navClass, "caption-hide"];
    }
  }

  if (props.windowWidth < 992 && props.collapseMenu) {
    navClass = [...navClass, "mob-open"];
  } else if (props.collapseMenu) {
    navClass = [...navClass, "navbar-collapsed"];
  }

  if (props.preLayout === "layout-6") {
    document.body.classList.add("layout-6");
    document.body.style.backgroundImage = props.layout6Background;
    document.body.style.backgroundSize = props.layout6BackSize;
  }

  if (props.preLayout === "layout-8") {
    document.body.classList.add("layout-8");
  }

  if (props.layoutType === "dark") {
    document.body.classList.add("datta-dark");
  } else {
    document.body.classList.remove("datta-dark");
  }

  if (props.rtlLayout) {
    document.body.classList.add("datta-rtl");
  } else {
    document.body.classList.remove("datta-rtl");
  }

  if (props.boxLayout) {
    document.body.classList.add("container");
    document.body.classList.add("box-layout");
  } else {
    document.body.classList.remove("container");
    document.body.classList.remove("box-layout");
  }
  let navContent;
  if (user === 2) {
    navContent = (
      <div className="navbar-wrapper">
        <NavLogo
          collapseMenu={props.collapseMenu}
          windowWidth={props.windowWidth}
          onToggleNavigation={props.onToggleNavigation}
        />
        <NavContent navigation={navigation2.items} />
      </div>
    );
    if (props.windowWidth < 992) {
      navContent = (
        <OutsideClick>
          <div className="navbar-wrapper">
            <NavLogo
              collapseMenu={props.collapseMenu}
              windowWidth={props.windowWidth}
              onToggleNavigation={props.onToggleNavigation}
            />
            <NavContent navigation={navigation2.items} />
          </div>
        </OutsideClick>
      );
    }
  } else {
    navContent = (
      <div className="navbar-wrapper">
        <NavLogo
          collapseMenu={props.collapseMenu}
          windowWidth={props.windowWidth}
          onToggleNavigation={props.onToggleNavigation}
        />
        <NavContent navigation={navigation.items} />
      </div>
    );
    if (props.windowWidth < 992) {
      navContent = (
        <OutsideClick>
          <div className="navbar-wrapper">
            <NavLogo
              collapseMenu={props.collapseMenu}
              windowWidth={props.windowWidth}
              onToggleNavigation={props.onToggleNavigation}
            />
            <NavContent navigation={navigation.items} />
          </div>
        </OutsideClick>
      );
    }
  }

  return (
    <Aux>
      <nav className={navClass.join(" ")}>{navContent}</nav>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    preLayout: state.preLayout,
    collapseMenu: state.collapseMenu,
    layoutType: state.layoutType,
    navBackColor: state.navBackColor,
    navBackImage: state.navBackImage,
    navIconColor: state.navIconColor,
    navBrandColor: state.navBrandColor,
    layout6Background: state.layout6Background,
    layout6BackSize: state.layout6BackSize,
    rtlLayout: state.rtlLayout,
    navFixedLayout: state.navFixedLayout,
    boxLayout: state.boxLayout,
    navDropdownIcon: state.navDropdownIcon,
    navListIcon: state.navListIcon,
    navActiveListColor: state.navActiveListColor,
    navListTitleColor: state.navListTitleColor,
    navListTitleHide: state.navListTitleHide,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
    onChangeLayout: (layout) =>
      dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(Navigation))
);
