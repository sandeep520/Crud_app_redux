// import React, { useState, useEffect } from 'react'
// import '../App.css'
// import Data from './data'
// import EditUserForm from './validation'


// const Form = props => {
//     const [nameError, setNameError] = useState("")
//     const [emailError, setemailError] = useState("")
//     const [passwordError, setpassError] = useState("")
//     const [lastError, setlastError] = useState("")
//     const [userError, setuserError] = useState("")
//     const [conpassError, setconpasError] = useState("")
//     const initialFormState = { id: null, fname: '', lname: '', username: '', email: '', password: '', cpassword: '', image: '' }
//     const [editForm, setEditForm] = useState(false);
//     const [id, setId] = useState(null);

//     const [user, setUser] = useState(initialFormState)
//     const [array, setArray] = useState([])
//     const [image, setMyImage] = React.useState(null);


//     const [currentUser, setCurrentUser] = useState(initialFormState)
//     const [editing, setEditing] = useState(false)


//     const [currentTodo, setCurrentTodo] = useState({})
//     const [isEditing, setIsEditing] = useState(false)



//     const checkValidation = (name, value, tempData) => {
//         let isValid = true;

//         if (name === 'fname') {
//             let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
//             !regex.test(value) ? setNameError("first name Required*") : setNameError("");
//             isValid = regex.test(value) && isValid;
//         }

//         if (name === 'lname') {
//             let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
//             !regex.test(value) ? setlastError("last name  Required*") : setlastError("")
//             isValid = regex.test(value) && isValid;
//         }

//         if (name === 'username') {
//             let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
//             !regex.test(value) ? setuserError("username Required*") : setuserError("");
//             isValid = regex.test(value) && isValid;
//         }

//         if (name === 'email') {
//             let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             !regex.test(value) ? setemailError("Email is not valid*") : setemailError("")
//             isValid = regex.test(value) && isValid;
//         }

//         if (name === 'password') {
//             let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//             !regex.test(value) ? setpassError("password is not valid*") : setpassError("")
//             isValid = regex.test(value) && isValid;
//         }

//         if (name === 'cpassword') {
//             value === tempData?.password ? setconpasError("") : setconpasError("password is not Matched")
//             isValid = (value === tempData?.password) && isValid;
//         }

//         return isValid;
//     }



//     const onchange = (event) => {
//         const { name, value } = event.target;
//         const tempData = { ...user, [name]: value };
//         setUser(tempData);
//         let valid = checkValidation(name, value, tempData);
//     }

//     const handleFileUpload = (event) => {
//         const { files, name } = event.target;
//         const tempData = { ...user, [name]: URL.createObjectURL(files[0]) };
//         setUser(tempData);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault("");
//         let obj = {
//             fname: user.fname,
//             lname: user.lname,
//             username: user.username,
//             email: user.email,
//             password: user.password,
//             cpassword: user.cpassword,
//             image: user.image
//             // file: file
//         }

//         if (user.fname && user.lname && user.username && user.email && user.password && user.cpassword !== "") {
//             array.push(obj)
//             setArray([...array])
//         }
//         console.log(...array)
//         user.fname == "" ? setNameError("first name Required*") : setNameError("")
//         user.lname == "" ? setlastError("last name  Required*") : setlastError("")
//         user.username == "" ? setuserError("username Required*") : setuserError("")
//         user.password == "" ? setpassError("password Required*") : setpassError("")
//         user.cpassword == "" ? setconpasError("confirm password Required*") : setconpasError("")
//         user.email == "" ? setemailError("email address Required*") : setemailError("")
//         setUser(initialFormState);


//     }


//     // =================================================================================================================


//     const updateUser = (id, updatedUser) => {
//         setEditing(false)

//         setUser(array.map(user => (user.id === id ? updatedUser : user)))
//     }

//     const editRow = (item, i) => {
//         setEditing(true)
//         setEditForm(true)
//         setId(i);
//         const tempId = array.findIndex((data,index) => index === i);
//         let tempFormData = array[tempId];
//         setUser({ id: tempFormData.id, fname: tempFormData.fname, lname: tempFormData.lname, username: tempFormData.username, email: tempFormData.email, password: tempFormData.password, cpassword: tempFormData.cpassword, image: tempFormData.image })
//     }




//     function handleUpdateTodo(updatedTodo) {
//         console.log(updatedTodo)
//         const updateItem = array.map((todo, i) => {
//             return i === updatedTodo.i ? updatedTodo : todo
//         });
//         setIsEditing(false)
//         setArray(updateItem)
//         console.log(updateItem)
//     }

//     function handleEditSubmit(e) {
//         e.preventDefault();

//         handleUpdateTodo(currentTodo)
//         console.log(currentTodo)
//     }

//     // const editRow = user => {
//     //     setEditing(true)
//     //     setUser({ id: user.id, fname: user.fname, lname: user.lname, username: user.username, email: user.email, password: user.password, cpassword: user.cpassword, image: user.image })
//     // }

//     const updateFormhandler = (e, id) => {
//         console.log("====================", id, array)
//         const tempId = array.findIndex((data,index) => index === id);
//         let tempFormData = user;
//         let tempArray = array.map((item,index) => {
//             index === id && (item = tempFormData);
//             return item;
//         })
//         setArray(tempArray)
//         setEditForm(false)
//         setUser(initialFormState);
//     }

//     // =================================================================================================================



//     return (
//         <>
//             <div class="container">
//                 <h2>Add Form</h2>

//                 <form
//                     onSubmit={event => {
//                         event.preventDefault()

//                         // props.updateUser(user.id, user)
//                     }}

//                     style={{ marginBottom: '50px' }} >
//                     <div class="form-group">
//                         <label for="name">First Name:</label>
//                         <input type="text" class="form-control" id="name" value={user.fname} placeholder="Enter first name" name="fname" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{nameError}</h6></span>
//                     </div>
//                     <div class="form-group">
//                         <label for="lname">Last Name:</label>
//                         <input type="text" class="form-control" id="lname" value={user.lname} placeholder="Enter last name" name="lname" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{lastError}</h6></span>

//                     </div>
//                     <div class="form-group">
//                         <label for="username">UserName:</label>
//                         <input type="text" class="form-control" id="username" value={user.username} placeholder="Enter user name" name="username" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{userError}</h6></span>

//                     </div>
//                     <div class="form-group">
//                         <label for="email">Email ID:</label>
//                         <input type="email" class="form-control" id="email" value={user.email} placeholder="Enter email" name="email" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{emailError}</h6></span>

//                     </div>
//                     <div class="form-group">
//                         <label for="pwd">Password:</label>
//                         <input type="password" class="form-control" id="pwd" value={user.password} placeholder="Enter password" name="password" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{passwordError}</h6></span>
//                     </div>
//                     <div class="form-group">
//                         <label for="pwd">Confirm Password:</label>
//                         <input type="password" class="form-control" id="pwd" value={user.conpassError} placeholder="Enter confirm password" name="cpassword" onChange={onchange} />
//                         <span style={{ color: "red" }}><h6>{conpassError}</h6></span>

//                     </div>
//                     <div class="form-group">
//                         <label for="image">File upload</label>
//                         <input type="file" class="form-control" id="image" placeholder="upload Image" name="image" onChange={(e) => handleFileUpload(e)} />
//                         <span style={{ color: "red" }}><h6></h6></span>
//                     </div>

//                     {!editForm && <button class="btn btn-primary" onClick={(e) => onSubmit(e)}>submit</button>}
//                     {editForm && <button class="btn btn-primary" onClick={(e) => updateFormhandler(e, id)}>Edit</button>}
//                     {editForm && <button class="btn btn-primary" onClick={() => setEditForm(false)}>Cancel</button>}
//                     {/* {editForm && <button type="button" class="btn btn-primary" onClick={handleUpdateTodo}>Save changes</button>} */}
//                 </form>

//                 <Data array={[...array]} setArray={setArray} myImage={image} editRow={editRow} />

//             </div>

//         </>
//     )
// }

// export default Form
