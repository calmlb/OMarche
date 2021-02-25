import React from "react";
import { Link } from "react-router-dom";
import Vendors from "../../components/Vendors/Vendors";


function VendorsPage (props) {
    return (
        <>
            <h1>Vendors</h1>
            <div >
                {props.store.map(store =>
                    <Vendors store={store} />
                )}
            </div>
            <Link to='/'>HOME</Link>
        </>
    );
}

export default VendorsPage;
