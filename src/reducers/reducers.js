export const initialShopCart = {
    cart: []
};

const add_item = (cart,item) => cart.filter(i => i.id !== item.id)
const exists_item = (cart,item) => cart.find(i => i.id === item.id)

const addToCart = (cart,item) => {
    const result = exists_item(cart,item)
    return result === undefined
    ? [...add_item(cart,item), { ...item, qty: 1 }]
    : [...add_item(cart,item), { ...result, qty: result.qty + 1 }]
}

const removeItemFromCart = (cart,item) => {
    return item.qty === 1
     ? [...add_item(cart,item)]
     : [...add_item(cart,item), { ...item, qty: item.qty -1 }]
}

const removeAllItemsFromCart = (cart,item) => {
 return item.qty === 1
  ? [...add_item(cart,item)]
  : [...add_item(cart,item)]
}


export default function (state = initialShopCart, action) {
console.log(state)
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return {
                ...state, cart: addToCart(state.cart, action.payload)
            };
        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state, cart: removeItemFromCart(state.cart, action.payload)
            }
        case "REMOVE_ALL_ITEMS_FROM_CART":
            return {
                ...state, cart: removeAllItemsFromCart(state.cart, action.payload)
            }
        case "CLEAR_CART":
            return {
                ...state, cart: []
            };
        default:
            return state;
    }
}