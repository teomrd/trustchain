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
import moment from "moment";
import faker from "faker";
import { grey400 } from "material-ui/styles/colors";

const Review = ({ review, name, title, avatar, mood }) => {
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
          <CardHeader
            title={name}
            subtitle={`${title} - posted on ${moment(new Date()).format(
              "Do MMM  YYYY"
            )}`}
            avatar={avatar}
          >
            {mood}
          </CardHeader>
          <CardText>{review}</CardText>
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
  review: PropTypes.string.isRequired,
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
