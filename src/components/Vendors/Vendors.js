import React, { useState, useEffect } from 'react';
import Store from '../../components/Store/Store';

function Vendors () {
    const [stores, setStores] = useState([]);

    // useEffect(() => {
    //     const fetchStores = async () => {
    //         const stores = await findAllVendors()
    //         setStores(stores)
    //     }
    //     fetchStores()
    // }, [])

    return (
        <div>
            <h1>Vendors Page</h1>
            {Array.isArray(stores) ? (
                stores.map((store, index) => {
                    return <Store name={store.name} />
                })
            ) : (
                <h5>No Store Yet</h5>
            )}
            
        </div>
    );
}

export default Vendors;
