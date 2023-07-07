import CartContext from "./cartContext";
import { useReducer } from "react";

const deaultCartState = { 
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action)  => {
    if(action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        return {items: updatedItems, totalAmount: updateAmount}
    }
    else if(action.type === "REMOVE") {

    }
        return deaultCartState
}

const CartProvider = (props) => { 
   const [cartState, dispatchCartAction] = useReducer(cartReducer,deaultCartState)
   
   const addItemToCart = item => {
        dispatchCartAction({type: "ADD", item})
    }
    const removeItemToCart = id => {
        dispatchCartAction({type: "REMOVE", id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemToCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;