import React from 'react';
import { Link } from 'react-router-dom';

function Vendors ({store}) {

    return (
        <div className='panel panel-defaut'>
            
            <div className='panel-heading'>
                <h3 className='panel-title'>{store.name}</h3>
            </div>

            <div className='panel-footer'>
                <Link 
                    className='btn btn-xs btn-info' 
                    to={{ 
                        pathname: '/store',
                        state: {store}
                    }}
                > VISIT </Link>
            </div>
        </div>
    );
}

export default Vendors;
