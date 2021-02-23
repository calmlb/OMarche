// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';


// function StoreForm ({ store, onSubmit}) {

//     const {register, handleSubmit} = useForm({});

//     const history = useHistory();

//     const submitHandler = handleSubmit((data) => {
//         onSubmit(data);
//         history.push('/admin')
//     });

//     return (

//         <form onSubmit={submitHandler}>
//             <div className="form-group">
//                 <label>Name: 
//                 <input ref={register} type="text" name="name" />
//                 </label>
//                 <br />
//                 <label>Address: 
//                 <input ref={register} type="text" name="address" />
//                 </label>
//                 <br />
//                 <label>Description: 
//                 <input ref={register} type="text" name="description" />
//                 </label>
//                 <br />
//                 <label>Add Image Url: </label>
//                 <input ref={register} type="text" name="image" />
//                 <br />
//                 <button type="submit" className="btn btn-primary">Save</button>
//                 </div>
//         </form>
      
//     );
// }

// export default StoreForm;
