import React from "react";
import { Link } from "react-router-dom";
import Store from "../../components/Store/Store";


function StorePage (props) {

    return (
        <div>
            
            <Link to='/vendors'>VENDORS</Link>

            <Store  />
        </div>
    );
}

export default StorePage;
