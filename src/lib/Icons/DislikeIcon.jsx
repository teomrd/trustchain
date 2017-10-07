import React from "react";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import { red600 } from "material-ui/styles/colors";

const DislikeIcon = () => {
  return (
    <FontIcon
      style={{
        float: "right",
        fontSize: "3em"
      }}
      color={red600}
      className="material-icons"
    >
      mood_bad
    </FontIcon>
  );
};

export default DislikeIcon;
