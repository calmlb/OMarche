import React from "react";
import { Link } from "react-router-dom";
import Store from "../../components/Store/Store";


function StorePage (props) {
    // const store = props.state.store;
    return (
        <div>
            <h1>Store Details</h1>
            <Store 
                // key={store._id}
                // store={store}
                // name={name}
            />
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/vendors'>VENDORS</Link>
        </div>
    )
}

export default StorePage;
