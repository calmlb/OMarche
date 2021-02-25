import React from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";

function ProductPage (props) {
    return (
        <div>
            <Product />
            <Link to='/admin'>HOME</Link>
        </div>
    )
}

export default ProductPage;
