import "./style.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  Button,
  CardDescription,
  Image
} from "semantic-ui-react";
import Proptypes from "prop-types";

export const ELCardComponent = ({ item }) => {

  return (
    <>
      <Card className="el-card-component">
        <CardContent>
        <Image
          floated='right'
          size='mini'
          src={`https://ui-avatars.com/api/?name=${item?.firstName}+${item?.lastName}?background=random`}
        />
          <CardHeader>
            {item?.firstName} {item?.lastName}
          </CardHeader>
          <CardMeta>
            <span className="date">{item?.dob}</span>
          </CardMeta>
          <CardDescription>
            <div>Email - {item?.email}</div>
            <div>Phone Number - {item?.phoneNumber}</div>
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Show Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

ELCardComponent.propTypes = {
  item: Proptypes.object,
};
