import React from "react";
import { Link } from "react-router-dom";
import MainP from "../../components/MainP/MainP";
import NavBar from "../../components/NavBar/NavBar";


function MainPage (props) {
    return (
        <div>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout} 
            />
            <MainP />            
            <Link to='/vendors'>VENDORS</Link>
        </div>
    )
}

export default MainPage;
