import React from "react";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";

const VotingMechanism = () => {
  return (
    <div>
      <IconButton>
        <FontIcon className="material-icons">keyboard_arrow_up</FontIcon>
      </IconButton>
      <h1>137</h1>
      <IconButton>
        <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
      </IconButton>
    </div>
  );
};

export default VotingMechanism;
