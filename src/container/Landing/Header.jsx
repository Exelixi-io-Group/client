import { useNavigate } from "react-router-dom";
import { transparentLogo } from "../../assets";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="el-landing-header container">
        <nav className="el-landing_left">
          <ul className="el-landing-menu">
            <li className="landing-menu-items">
              <img
                className="el-landing-logo nav-start"
                src={transparentLogo}
                alt="logo"
              />
            </li>
            <li className="landing-menu-items ">For Companies</li>
            <li className="landing-menu-items">For Developers</li>
            <li className="landing-menu-items">Resources</li>
          </ul>
        </nav>
        <nav className="el-landing_right">
          <ul className="el-landing-menu">
            <li onClick={()=>navigate(`/admin`)} className="landing-menu-items">Log In</li>
            <li onClick={()=>{navigate(`/login/user-registration`)}} className="landing-menu-items glowing-button">
              <div  className="glowing-button-gradient"></div>
              <div className="glowing-button-inner">
                <div  className="glowing-button-text" >Join Exelixi today</div>
                <div className="glowing-button-inner-overlay"></div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
