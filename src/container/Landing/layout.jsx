import PropTypes from 'prop-types';
import { ELLandingBanner } from '../../component';

export const LandingLayout = ({children})=>{
    return <>
    <main className="el-landing-layout" >

        <div className='left-panel center'>
           <ELLandingBanner/>
        </div>
        <div className='right-panel center' >
            {children}
        </div>

    </main>
    </>
}

LandingLayout.propTypes={
    children: PropTypes.element
}