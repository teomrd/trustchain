import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Badge from "material-ui/Badge";
import { indigo900, blue300 } from "material-ui/styles/colors";
import Avatar from "material-ui/Avatar";
import FontIcon from "material-ui/FontIcon";

const BusinessProfile = ({ companyName, companyDesc }) => {
  return (
    <div>
      <Card
        style={{
          maxWidth: "50%",
          margin: "0 auto"
        }}
        expanded
      >
        <CardTitle
          title={companyName}
          subtitle={companyDesc}
          expandable={true}
        />
        <CardText expandable={true}>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginBottom: "10px"
            }}
          >
            <Badge
              badgeContent={163}
              secondary={true}
              badgeStyle={{ top: 30, right: 30, width: "30px", height: "30px" }}
            >
              <Avatar
                icon={
                  <FontIcon className="material-icons">
                    account_balance
                  </FontIcon>
                }
                color={blue300}
                backgroundColor={indigo900}
                size={150}
                style={{}}
              />
            </Badge>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    </div>
  );
};

export default BusinessProfile;
