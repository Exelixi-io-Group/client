import PropTypes from 'prop-types';
import { ELLandingBanner } from '../../component';
import { Outlet } from "react-router-dom";


export const LandingLayout = ()=>{
    return <>
    <main className="el-landing grid-layout" >

        <div className='left-panel center'>
           <ELLandingBanner type='transparent' />
        </div>
        <div className='right-panel center' >
            <Outlet/>
        </div>

    </main>
    </>
}

LandingLayout.propTypes={
    children: PropTypes.element
}