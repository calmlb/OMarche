import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function EditStore () {

    const [store, setStore] = useState();

    const {register, handleSubmit} = useForm({});

    const history = useHistory();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push('/admin')
    });

    return (
        <div className="container"> 
            <div className="mt-3">
                <h3>Edit Store</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name: 
                        <input ref={register} type="text" name="name" />
                        </label>
                        <br />
                        <label>Address: 
                        <input ref={register} type="text" name="address" />
                        </label>
                        <br />
                        <label>Description: 
                        <input ref={register} type="text" name="description" />
                        </label>
                        <br />
                        <label>Add Image Url: </label>
                        <input ref={register} type="text" name="image" />
                        <br />
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default EditStore;
