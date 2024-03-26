import React, { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

// Cart-Context
const cartContext = createContext();

const initialState = {
    
};

// Cart-Provider Component
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, { cartItems: cart});

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData && cartData.length > 0) {
            setCart(cartData);
            cartData.forEach(item => {
                addItem(item);
            });
        }
    }, []);
    
    useEffect(() => {
        if (cart !== initialState) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);


    // Dispatched Actions
    const addItem = (item) => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: { item }
        });
    };

    const removeItem = (index) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { index }
        });
    };

    const removeAll = () => {
        return dispatch({
            type: 'REMOVE_ALL',
        });
    };

    const updateQuantity = (index, value) => {
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { index, value }
        })
    }

    const updateOptions = (index, optionNo, activeOpt) => {
        return dispatch({
            type: 'UPDATE_OPTIONS',
            payload: { index, optionNo, activeOpt }
        })
    }

    // Context values
    const values = {
        ...state,
        addItem,
        removeItem,
        removeAll,
        updateQuantity,
        updateOptions
    };

    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );
};


export default cartContext;
export { CartProvider };