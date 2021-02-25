import React from "react";
import { Link } from "react-router-dom";
import Store from "../../components/Store/Store";

function StorePage () {
    return (
        <div>
            <Store />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/vendors'>VENDORS</Link>
            <br />
            <Link to='/product'>PRODUCT</Link>
        </div>
    )
}

export default StorePage;
