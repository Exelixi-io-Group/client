import {logo} from "../../assets";
import PropTypes from 'prop-types';
import "./style.css"

export const ELLandingBanner = ({bannerText})=>{
   return <>
    <aside className="el-landing-banner-wrapper" >
        <img className="logo" src={logo} alt="" />
        <div className="el-landing-banner-text" >
            {bannerText}
        </div>
    </aside>
    </>
}

ELLandingBanner.propTypes={
    bannerText:PropTypes.string
}