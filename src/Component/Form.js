import React, { useState, useEffect } from 'react'
import '../App.css'
import Data from './data'
import { v4 as uuidv4 } from 'uuid';
import Pagination from './Pagination';
import { reducer } from '../Reducers/reducer';
import { addTodo, EditCart } from '../Action/action';
import { useDispatch, useSelector } from 'react-redux';


const Form = props => {
    const [nameError, setNameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [passwordError, setpassError] = useState("")
    const [lastError, setlastError] = useState("")
    const [userError, setuserError] = useState("")
    const [conpassError, setconpasError] = useState("")
    const initialFormState = { id: null, fname: '', lname: '', username: '', email: '', password: '', cpassword: '', image: '' }
    const [user, setUser] = useState(initialFormState)
    const [array, setArray] = useState()
    const [edit, setEdit] = useState(false)

    const [obj, setObj] = useState({})




    const state = useSelector(state => state.cart)
    const editArray = useSelector(state => state.editArray)
    console.log(state)
    console.log(editArray)

    //  check  validation code with regex
    const checkValidation = (name, value, tempData) => {
        let isValid = true;
        if (name === 'fname') {
            let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
            !regex.test(value) ? setNameError("first name Required*") : setNameError("");
            isValid = regex.test(value) && isValid;
        }

        if (name === 'lname') {
            let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
            !regex.test(value) ? setlastError("last name  Required*") : setlastError("")
            isValid = regex.test(value) && isValid;
        }

        if (name === 'username') {
            let regex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
            !regex.test(value) ? setuserError("username Required*") : setuserError("");
            isValid = regex.test(value) && isValid;
        }

        if (name === 'email') {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            !regex.test(value) ? setemailError("Email is not valid*") : setemailError("")
            isValid = regex.test(value) && isValid;
        }

        if (name === 'password') {
            let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            !regex.test(value) ? setpassError("password is not valid*") : setpassError("")
            isValid = regex.test(value) && isValid;
        }

        if (name === 'cpassword') {
            value === tempData?.password ? setconpasError("") : setconpasError("password is not Matched")
            isValid = (value === tempData?.password) && isValid;
        }

        return isValid;
    }

    // validation check
    const onchange = (event) => {
        const { name, value } = event.target;
        const tempData = { ...user, [name]: value };
        setUser(tempData);
        let valid = checkValidation(name, value, tempData);
        console.log(valid)
    }

    // image upload
    const handleFileUpload = (event) => {
        const { files, name } = event.target;
        const tempData = { ...user, [name]: URL.createObjectURL(files[0]) };
        setUser(tempData);
    }

    //    add product

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault("");
        let obj = {
            id: uuidv4(),
            fname: user.fname,
            lname: user.lname,
            username: user.username,
            email: user.email,
            password: user.password,
            cpassword: user.cpassword,
            image: user.image
        }

        if (user.fname && user.lname && user.username && user.email && user.password && user.cpassword !== "") {
            // array.push(obj)
            // setArray([...array])
            // console.log(array)
            dispatch(addTodo(obj))
        }
        // console.log(...array)
        // console.log(array)


        user.fname == "" ? setNameError("first name Required*") : setNameError("")
        user.lname == "" ? setlastError("last name  Required*") : setlastError("")
        user.username == "" ? setuserError("username Required*") : setuserError("")
        user.password == "" ? setpassError("password Required*") : setpassError("")
        user.cpassword == "" ? setconpasError("confirm password Required*") : setconpasError("")
        user.email == "" ? setemailError("email address Required*") : setemailError("")
        setUser(initialFormState);

    }



    // edit input field









    // edit input field
    // const editRow = (item, i, dataArray) => {
    //     setEditForm(true)
    //     setId(i);
    //     const tempId = dataArray.findIndex((data, index) => data.id === i);
    //     let editData = dataArray[tempId];
    //     console.log(editData)
    //     setUpdateArray(dataArray)
    //     setUser({ id: editData.id, fname: editData.fname, lname: editData.lname, username: editData.username, email: editData.email, password: editData.password, cpassword: editData.cpassword, image: editData.image })
    // }

    // const updateFormhandler = (e, id, searchResults, arrayUpdate) => {
    //     e.preventDefault();
    //     const tempId = arrayUpdate.findIndex((data, index) => data.id === id);
    //     let tempFormData = user;
    //     console.log(tempFormData, tempId, id, searchResults, array)
    //     let tempArray = arrayUpdate.map((item, index) => {
    //         item.id === id && (item = tempFormData);
    //         return item;
    //     })
    //     let tempOrigionalArray = array.map((item, index) => {
    //         item.id === id && (item = tempFormData);
    //         return item;
    //     })
    //     searchResults !== "" && setSearchTerm([...tempArray]);
    //     setArray([...tempOrigionalArray])
    //     setEditForm(false)
    //     setUser(initialFormState);
    // }

    // // const entries = Object.entries(initialFormState);
    // // console.log(entries)

    // const searchItem = (e) => {
    //     setSearchResults(e.target.value)
    // }

    // const searchData = () => {
    //     let data = array?.filter((search) =>
    //         search?.username.toLowerCase().includes(searchResults?.toLowerCase())
    //     )
    //     console.log(searchResults)
    //     setClick(true)
    //     setSearchTerm([...data])
    //     console.log(data)
    // }
    // console.log(searchTerm)

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);
    // // setCurrentPage(currentPosts)

    // // Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);

    // console.log(currentPage)

    // const edithandler = () => {
    // }

    //      const edithandler = () => {
    //        dispatch(EditCart)
    // }


    console.log("-----------------obj-----------------", obj)

    return (
        <>
            <div class="container">
                <h2>Add Form</h2>

                <form style={{ marginBottom: '50px' }} >
                    <div class="form-group">
                        <label for="name">First Name:</label>
                        <input type="text" class="form-control" id="name" value={user.fname} placeholder="Enter first name" name="fname" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{nameError}</h6></span>
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name:</label>
                        <input type="text" class="form-control" id="lname" value={user.lname} placeholder="Enter last name" name="lname" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{lastError}</h6></span>

                    </div>
                    <div class="form-group">
                        <label for="username">UserName:</label>
                        <input type="text" class="form-control" id="username" value={user.username} placeholder="Enter user name" name="username" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{userError}</h6></span>

                    </div>
                    <div class="form-group">
                        <label for="email">Email ID:</label>
                        <input type="email" class="form-control" id="email" value={user.email} placeholder="Enter email" name="email" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{emailError}</h6></span>

                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" value={user.password} placeholder="Enter password" name="password" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{passwordError}</h6></span>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" value={user.conpassError} placeholder="Enter confirm password" name="cpassword" onChange={onchange} />
                        <span style={{ color: "red" }}><h6>{conpassError}</h6></span>

                    </div>
                    <div class="form-group">
                        <label for="image">File upload</label>
                        <input type="file" class="form-control" id="image" placeholder="upload Image" name="image" onChange={(e) => handleFileUpload(e)} />
                        <span style={{ color: "red" }}><h6></h6></span>
                    </div>

                    <button class="btn btn-primary" onClick={onSubmit}>submit</button>




                    {/* {!editForm && <button style={{ marginRight: '20px' }}  onClick={(e) => updateFormhandler(e, id, searchResults, updateArray)}>Saved Changes</button>}
                    {editForm && <button class="btn btn-primary" onClick={() => setEditForm(false)}>Cancel</button>}
                    {editForm && <button type="button" class="btn btn-primary" onClick={handleUpdateTodo}>Save changes</button>} */}

                </form>

                <Data array={array} setArray={setArray} state={state} setObj={setObj} setUser={setUser} />


                {/* <Pagination
                    array={currentPosts}
                    postsPerPage={postsPerPage}
                    totalPosts={array.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> */}
            </div>

        </>
    )
}

export default Form
