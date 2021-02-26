import React from "react";
import { Link } from "react-router-dom";
import MainP from "../../components/MainP/MainP";
import NavBar from "../../components/NavBar/NavBar";


function MainPage (props) {
    return (
        <div className='Main-page'>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout} 
            />

            <MainP /> 
            
            <Link to='/vendors'>List of Vendors</Link>
            <br />
            <br />       
            {props.children}
        </div>
    )
}

export default MainPage;
