import {logo} from "../../../assets";
import { Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export const CommonHeader = ()=>{
    return <header className="admin-header" >
        <div className="admin-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="admin-user" >
            Welcome Admin <Icon  name="user" />
        </div>
    </header>
}