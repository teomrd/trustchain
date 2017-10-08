import React from "react";
import { connect } from "react-redux";
import faker from "faker";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import { green600, red600 } from "material-ui/styles/colors";

import BusinessProfile from "./BusinessProfile/BusinessProfile";
import Review from "./Review/Review";

import LikeIcon from "../../lib/Icons/LikeIcon";
import DislikeIcon from "../../lib/Icons/DislikeIcon";
import ReviewForm from "./ReviewForm/ReviewFormContainer";

import GoodMood from "material-ui/svg-icons/social/mood";
import BadMood from "material-ui/svg-icons/social/mood-bad";

const companyName = faker.company.companyName();
const companyDesc = faker.company.catchPhrase();

const styles = {
  smallIcon: {
    width: 36,
    height: 36
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

const BusinessPage = ({ reviews }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <BusinessProfile companyName={companyName} companyDesc={companyDesc} />
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <IconButton
          tooltip="Like"
          iconStyle={{
            ...styles.mediumIcon,
            color: green600
          }}
          style={styles.medium}
        >
          <GoodMood />
        </IconButton>
        <IconButton
          tooltip="Dislike"
          iconStyle={{
            ...styles.mediumIcon,
            color: red600
          }}
          style={styles.medium}
        >
          <BadMood />
        </IconButton>
      </div>
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          marginTop: "50px"
        }}
      >
        <ReviewForm />
      </div>
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          padding: "5%"
        }}
      >
        {reviews.map(review => (
          <Review
            review={review.text}
            mood={review.isGood ? <LikeIcon /> : <DislikeIcon />}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews
});

export default connect(mapStateToProps, null)(BusinessPage);
