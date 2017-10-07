import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import VotingMechanism from "../VotingMechanism/VotingMechanism";
import faker from "faker";

const Review = ({ name, title, avatar, mood }) => {
  return (
    <div>
      <div
        style={{
          width: "90%",
          float: "left",
          marginBottom: "10px"
        }}
      >
        <Card
          style={{
            minHeight: "175px"
          }}
        >
          <CardHeader title={name} subtitle={title} avatar={avatar}>
            {mood}
          </CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
        </Card>
      </div>
      <div
        style={{
          width: "10%",
          float: "right",
          textAlign: "center"
        }}
      >
        <VotingMechanism />
      </div>
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string
};

Review.defaultProps = {
  name: faker.name.findName(),
  title: faker.internet.email(),
  avatar: faker.image.avatar()
};

export default Review;
