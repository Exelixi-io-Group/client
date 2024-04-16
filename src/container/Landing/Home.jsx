import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="container el-hero-section">
        <div className="el-hero-header">
          <h1>
            Find remote jobs with companies
            <span className="meta-data-span-1"> that care </span>
            <span className="meta-data-span-2"> about your work </span>
            more than your resume.
          </h1>
        </div>
        <div className="el-hero-sub-header">
          Break into a successful remote tech career with Pesto. Get flexible
          jobs with direct access to top companies.
        </div>
        <div className="el-hero-meta-data">
            <div className="meta-data-items">
            <i className="fa-regular fa-money-bill"></i><span> Average salaries of 10 LPA </span>
            </div>
            <div className="meta-data-items" >
          <span> For Developers in India  </span>
          <span className="india">
          <img  width="18" height="18" src="https://img.icons8.com/color/18/india.png" alt="india"/>
          </span>
            </div>
          
        </div>
        <div onClick={()=>{navigate(`/login/user-registration`)}} className="el-hero-button">
          <div className="el-hero-button-text">Join Exelixi Today</div>
          <div className="colored-button-gradient-layer"> </div>
          <div className="colored-button-border-layer"></div>
          <div></div>
        </div>
      </section>
    </>
  );
};
