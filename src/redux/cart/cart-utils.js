
export const addItemToCard = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const deleteItem = (cartItems, itemToRemove) => {

    const cartItemIndex = cartItems.findIndex(cartItem => cartItem.id === itemToRemove.id);

    if(cartItemIndex > -1){
        return [...cartItems.slice(0, cartItemIndex), ...cartItems.slice(cartItemIndex + 1)];
    }
};