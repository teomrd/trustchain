import React from "react";
import AppBar from "material-ui/AppBar";

const Menu = () => (
  <AppBar
    title="TrustChain"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      position: "fixed",
      top: "0"
    }}
  />
);

export default Menu;
