import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EditStore extends Component {

    state = {
        name: '',
        address: '',
        description: '',
        image: '',
        
        formInvalid: false
    };

    formRef = React.createRef();

    // *** this code is to be changed as well ***
    handleSubmit = async (evt) => {
        evt.preventDefault();

        await fetch('/api/store/:id', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(this.state)
        }).then(res => res.json());
        this.props.history.push('/admin')

    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    };

    render() {
        return (
            <div className="container"> 

                <h2>Edit Store</h2>

                <form ref={this.formRef} onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                            className='form-control'  
                            name="name" 
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Address: </label>
                        <input 
                            className='form-control' 
                            name="address" 
                            onChange={this.handleChange}
                            value={this.state.address}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input 
                            className='form-control' 
                            name="description" 
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                    </div> 
                    <div className='form-group'>
                        <label>Add an Image url: </label>
                        <input 
                            className='form-control' 
                            name="image" 
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div> 
                    
                    <button
                        onClick={this.handleSubmit} 
                        type="submit" 
                        className="btn"
                        disabled={this.state.formInvalid}
                    >
                        Submit
                    </button>
                    <br />
                    <Link to='/admin'>CANCEL</Link>
                    
                </form>
    
            </div>
        );
    }
}

export default EditStore;
