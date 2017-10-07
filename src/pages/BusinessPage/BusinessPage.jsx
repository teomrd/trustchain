import React from "react";
import faker from "faker";
import BusinessProfile from "./BusinessProfile/BusinessProfile";
import Review from "./Review/Review";

import LikeIcon from "../../lib/Icons/LikeIcon";
import DislikeIcon from "../../lib/Icons/DislikeIcon";

const companyName = faker.company.companyName();
const companyDesc = faker.company.catchPhrase();

const BusinessPage = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <BusinessProfile companyName={companyName} companyDesc={companyDesc} />
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          padding: "5%"
        }}
      >
        <Review mood={<LikeIcon />} />
        <Review mood={<DislikeIcon />} />
      </div>
    </div>
  );
};

export default BusinessPage;
