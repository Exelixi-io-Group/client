import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import { Header } from './Header';
import "./style.css"


export const LandingLayout = ()=>{
    return <>
    <main className="el-landing" >

        <div className='el-landing-header-container'>
           <Header/>
        </div>
        <div className='landing-page-children' >
            <Outlet/>
        </div>

    </main>
    </>
}

LandingLayout.propTypes={
    children: PropTypes.element
}