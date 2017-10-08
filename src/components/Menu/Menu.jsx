import React from "react";
import AppBar from "material-ui/AppBar";
import logo from "../../logo.png";

const Menu = () => (
  <AppBar
    title="TrustChain"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      position: "fixed",
      top: "0"
    }}
  >
    <img src={logo} style={{ height: "58px", marginTop: "4px" }} />
  </AppBar>
);

export default Menu;
