import { ELLandingBanner } from "../../component"
import { Outlet } from "react-router-dom";


export const LoginLayout = ()=>{
    const BANNER_TEXT = "Get Job Ready 5x Faster."
    return <>
    <main className="el-login grid-layout" >
    <div className="center" >
        <ELLandingBanner bannerText={BANNER_TEXT} />
    </div>
    <div className="center" >
        <Outlet/>
    </div>
    </main>
    </>
}