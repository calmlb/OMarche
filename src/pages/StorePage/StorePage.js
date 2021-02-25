import React from "react";
import { Link } from "react-router-dom";
import Store from "../../components/Store/Store";


function StorePage (props) {
    // const store = props.state;
    return (
        <div>
            <Store 
                // store={store}
            />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/vendors'>VENDORS</Link>
        </div>
    )
}

export default StorePage;
