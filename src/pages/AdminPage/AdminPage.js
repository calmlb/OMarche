import React from "react";
import { Link } from "react-router-dom";
import Admin from "../../components/Admin/Admin";


function AdminPage (props) {
    
    return (
        <div>
            <Admin 
                handleSignupOrLogin = {props.handleSignupOrLogin} 
                store = {props.store} 
            />
            <Link to='admin/createstore'>Create Store</Link>
        </div>
    )
}

export default AdminPage;
