import React from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";

function ProductPage (props) {
    return (
        <div>
            <Product />
            <Link to='/'>HOME</Link>
        </div>
    )
}

export default ProductPage;
