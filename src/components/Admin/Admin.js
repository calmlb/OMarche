import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {

    async componentDidMount() {
        this.props.handleSignupOrLogin()

        await fetch('/api/store/userstore/:id', {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        }).then(res => res.json());
        this.props.history.push('/admin')
    }

    render() {
        return (
            <div>
                <h1>Welcome to O Marche</h1>

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
