
export function addTodo(todo) {
    console.log("todo", todo)
    return {
        type: "ADD_TODO",
        payload: todo,
    }
}

export function DeleteCart(todo) {
    console.log("delete" ,todo)
    return {
        type: 'DELETE_CART',
        payload : todo,
    }
}

export function EditCart(todo) {
    console.log("edit" ,todo)
    return {
        type: 'EDIT_CART',
        payload : todo,
    }
}


export default { addTodo ,DeleteCart,EditCart}