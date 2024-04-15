import { MenuItem, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";

export const NavMenu = ({activeItem,setActiveItem}) => {
  return <Menu>
    <MenuItem
      name="Dashboard"
      active={activeItem === "Dashboard"}
      onClick={()=>setActiveItem("Dashboard")}
    >
      Dashboard
    </MenuItem>

    <MenuItem
      name="Users"
      active={activeItem === "Users"}
      onClick={()=>setActiveItem("Users")}
    >
      Users
    </MenuItem>

    <MenuItem
      name="Referals"
      active={activeItem === "Referals"}
      onClick={()=>setActiveItem("Referals")}
    >
      Referals
    </MenuItem>
  </Menu>;
};

NavMenu.propTypes={
    activeItem:PropTypes.string,
    setActiveItem:PropTypes.func
}