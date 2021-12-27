import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, EditCart } from '../Action/action';

function Data({ array, setSearchTerm, setArray, editRow, searchItem, searchData, searchTerm, click, searchResults, state, setObj, setUser }) {


    // console.log(array)
    const editArray = useSelector(state => state.editArray)
    const dispatch = useDispatch()

    const edithandler = (item) => {
        setObj(item)
        dispatch(EditCart(item))
        console.log("----------item-----------", item)
        setUser({ id: editArray.id, fname: editArray.fname, lname: editArray.lname, username: editArray.username, email: editArray.email, password: editArray.password, cpassword: editArray.cpassword, image: editArray.image })
    }


    return (
        <>


            {/* <div>
                <div class="input-group">
                    <div class="form-outline">
                        <input id="search-input" type="search" id="form1" class="form-control" onChange={searchItem} />
                    </div>
                    <button id="search-button" type="button" class="btn btn-primary" onClick={searchData}>
                        <p class="fas fa-search"> Search</p>
                    </button>
                </div>
            </div> */}

            <div>
                {/* {click == true ? ( */}

                {/* <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {searchTerm?.map((item, i) => {
                            console.log(item)
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{item.username}</th>
                                        <td>{item.email}</td>
                                        <td><img src={item.image} alt='' style={{ width: '50px', height: '50px' }}></img></td>
                                        <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => editRow(item, item.id, searchTerm, "saerch")}>Edit</button></td>
                                        <td> <button class="btn btn-primary" onClick={() => onHandleDelete(item.id, searchTerm)} >Delete</button></td>
                                    </tr>
                                </>
                            )
                        }
                        )}

                    </tbody>
                </table> */}

                {/* ): ( */}

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {state?.map((item, i) => {
                            console.log(item)
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{item.username}</th>
                                        <td>{item.email}</td>
                                        <td><img src={item.image} alt='' style={{ width: '50px', height: '50px' }}></img></td>
                                        {/* <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => editRow(item, item.id, array, "nosearch")}>Edit</button></td> */}
                                        <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => edithandler(item)} >Edit</button></td>

                                        {/* <td> <button class="btn btn-primary" onClick={() => onHandleDelete(item.id, array)} >Delete</button></td> */}
                                        <td> <button class="btn btn-primary" onClick={() => dispatch(DeleteCart(i))} >Delete</button></td>

                                    </tr>
                                </>
                            )
                        }
                        )}

                    </tbody>
                </table>

                {/* ) */}


            </div>






        </>

    )
}

export default Data






