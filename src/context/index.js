import React from 'react';
import shopCartReducers, { initialShopCart } from '../reducers/reducers';
import { combineReducers } from '../reducers/combineReducers';

export const Context = React.createContext();

const initialState = {
    shop: initialShopCart
}

const rootReducer = combineReducers({ shop: shopCartReducers });

const saveStateToLocalStorage = (state) => {
    try{
        localStorage.setItem('shop', JSON.stringify(state))
    }catch(err){
        console.log(err)
    }
}

const ShopCartContext = (props) => {
    const [state,dispatch] = React.useReducer(rootReducer, initialState, () => {
        const value = localStorage.getItem('shop')
        return value ? JSON.parse(value) : initialState;
    });

    React.useEffect(() => {
        saveStateToLocalStorage(state);
    }, [state]);

    return(
        <Context.Provider
            value={{ state, dispatch }}
        >
            {props.children}
        </Context.Provider>
    );
}
export default ShopCartContext;