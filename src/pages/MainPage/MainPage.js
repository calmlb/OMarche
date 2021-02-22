import React from "react";
import { Link } from "react-router-dom";
import MainP from "../../components/MainP/MainP";

function MainPage (props) {
    return (
        <div>
            <MainP />
            <Link to='/vendors'>VENDORS</Link>
        </div>
    )
}

export default MainPage;
