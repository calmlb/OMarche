import React from "react";
import { Link } from "react-router-dom";
import Store from "../../components/Store/Store";

function StorePage (props) {
    return (
        <div>
            <Store />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/vendors'>VENDORS</Link>
        </div>
    )
}
export default StorePage;