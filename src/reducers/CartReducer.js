const initialState = {
    cart:[]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                cart: state.cart.filter(item => item.id!==action.payload)
            }
        default:
            return state
    }
}

export {initialState,cartReducer}