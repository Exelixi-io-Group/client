import { useSelector } from "react-redux";
import { ELCardComponent } from "../../../component";
import { CardGroup } from "semantic-ui-react";

export const Users = () => {
  const userList = useSelector((state) => state.user.usersList);
  
  const renderProfileCard = userList?.map((item, id) => {
    return <ELCardComponent item={item} key={id} />;
  });

  return (
    <>
      <div className="admin-user-list">
        <CardGroup className="admin-user-card-group">
          {renderProfileCard}
        </CardGroup>
      </div>
    </>
  );
};
