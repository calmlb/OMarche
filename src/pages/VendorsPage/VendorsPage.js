import React from "react";
import { Link } from "react-router-dom";
import './VendorsPage.css';
import Vendors from "../../components/Vendors/Vendors";

function VendorsPage (props) {
    return (
        <>
            <div className='Vendors-page'>
            
                <Link className='link' to='/'>HOME</Link>
            
                <h1 className='title'>Vendors</h1>

                <div className='items'>
                    {props.store.map(store =>
                        <Vendors store={store} />
                    )}
                </div>
                
            </div>
        </>
    );
}

export default VendorsPage;
