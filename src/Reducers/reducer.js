

const initialState = {
    formarray: {},
    cart: [],
    editArray: {}
}

const addTodo = (state, action) => {
    console.log(action.payload)
    let temp = { ...state }
    let tempForm = temp.cart
    tempForm.push(action.payload)
    temp.cart = tempForm
    console.log(tempForm)
    console.log(temp)
    return temp
}

const remove = (state, action) => {
    console.log(action.payload)
    let temp = { ...state }
    let temparr = [...temp.cart]
    const removeCart = temparr.filter((todo, index) => {
        console.log(index, action.payload)
        return index !== action.payload
    })
    temp.cart = removeCart
    console.log(temp)
    // temp.formarray = tempForm
    return temp
}

const edit = (state, action,todo) => {

    console.log(action.payload)
    let temp = { ...state }
    let tempData = [temp.cart]
    console.log(tempData)
    const tempId = tempData.findIndex((todo, index) => console.log(todo));
    // console.log(tempId)
    let edtArr = { editArray: action.payload }
    console.log(edtArr)

    // const tempId = tempData.findIndex((data, index) => data.id === i);
    // let editData = dataArray[tempId];
    // console.log(editData)
    // setUpdateArray(dataArray)
    // setUser({ id: editData.id, fname: editData.fname, lname: editData.lname, username: editData.username, email: editData.email, password: editData.password, cpassword: editData.cpassword, image: editData.image })
    return temp;
}







export let reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_TODO":
            return addTodo(state, action)
        case "DELETE_CART":
            return remove(state, action)
        case "EDIT_CART":
            return edit(state, action)
    }
    return state;
}
