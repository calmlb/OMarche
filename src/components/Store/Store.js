import React from 'react';
import Product from '../Product/Product'

function Store (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Product />
        </div>
    );
}

export default Store;
