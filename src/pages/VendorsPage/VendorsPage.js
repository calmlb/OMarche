import React from "react";
import { Link } from "react-router-dom";
import Vendors from "../../components/Vendors/Vendors";

function VendorsPage (props) {
    return (
        <div>
            <Vendors />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/store'>STORES</Link>
        </div>
    )
}

export default VendorsPage;
