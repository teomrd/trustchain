import React from "react";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import { green600 } from "material-ui/styles/colors";

const LikeIcon = () => {
  return (
    <FontIcon
      style={{
        float: "right",
        fontSize: "3em"
      }}
      color={green600}
      className="material-icons"
    >
      mood
    </FontIcon>
  );
};

export default LikeIcon;
