import {logo, transparentLogo} from "../../assets";
import PropTypes from 'prop-types';
import "./style.css"

export const ELLandingBanner = ({bannerText,type="solid"})=>{
   return <>
    <aside className="el-landing-banner-wrapper" >
        <img className="logo" src={type=== "solid"?logo:transparentLogo} alt="" />
        <div className="el-landing-banner-text" >
            {bannerText}
        </div>
    </aside>
    </>
}

ELLandingBanner.propTypes={
    bannerText:PropTypes.string,
    type:PropTypes.string
}