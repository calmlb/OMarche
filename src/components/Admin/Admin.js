import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to O Marche - My Store</h1>

                <Link 
                    to={{
                        pathname: '/editstore', 
                        state:this.props.store
                    }}
                > 
                EDIT STORE
                </Link>
                <br />

                <button onClick={() => this.props.handleDeleteStore(this.props.store._id)}
                >
                    DELETE STORE
                </button>
            </div>
        );
    }

}

export default Admin;
