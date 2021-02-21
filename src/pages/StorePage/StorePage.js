import React from "react";
import { Link } from "react-router-dom";
import Stores from "../../components/Stores/Stores";

function StorePage (props) {
    return (
        <div>
            <Stores />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/vendors'>VENDORS</Link>
            <br />
            <Link to='/product'>PRODUCT</Link>
        </div>
    )
}

export default StorePage;
