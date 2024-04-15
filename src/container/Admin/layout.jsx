import { useEffect, useState } from "react";
import { CommonHeader, NavMenu } from "./Shared";
import { Outlet, useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux";
import "./style.css";
import { Segment } from "semantic-ui-react";
import { useFetch } from "../../hooks";
import { setUserList } from "../../reduxStore/reducers";

export const AdminLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const dispatch = useDispatch()

  const { fetchData, data } = useFetch();

  const navigate = useNavigate();
  useEffect(() => {
    if (activeItem) {
      navigate(`/admin/${activeItem.toLowerCase()}`);
    }
  }, [activeItem, navigate]);

  useEffect(() => {
    (async () => {
      try {
        await fetchData(
          `${import.meta.env.VITE_REACT_APP_DATA_API}/userList`,
          "GET"
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(()=>{
    if(data){
      dispatch(setUserList(data))
    }
  },[data,dispatch])
  
  return (
    <>
      <section className="el-admin-layout">
        <CommonHeader />
        <div className="admin-menu">
          <NavMenu activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="menu-items">
          <Segment className="admin-content">
            <Outlet  />
          </Segment>
        </div>
      </section>
    </>
  );
};
