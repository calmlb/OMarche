import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CreateStore extends Component {

    state = {
        name: '',
        address: '',
        description: '',
        image: '',
        
        formInvalid: false
    };

    formRef = React.createRef();

    // *** this code below is to be changed ***
    handleSubmit = async (evt) => {
        evt.preventDefault();

        await fetch('/api/store', {
            method: 'POST',
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
                <Link to='/editstore'>Edit Store</Link>

                <h2>Create Store</h2>

                <form ref={this.formRef} onSubmit={this.props.handleAddStore} >
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
                    
                </form>
    
            </div>
        );
    }
}

export default CreateStore;
