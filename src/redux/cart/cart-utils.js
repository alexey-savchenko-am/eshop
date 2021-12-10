export const changeItemQuantity = (cartItems, item, count) => {

    const cartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newItem = {...item, quantity: cartItemIndex > -1 ? cartItems[cartItemIndex].quantity + count : 1};

    if(cartItemIndex > -1){
        if(newItem.quantity <= 0)
            return [...cartItems.slice(0, cartItemIndex), ...cartItems.slice(cartItemIndex + 1)];
        return [...cartItems.slice(0, cartItemIndex), newItem, ...cartItems.slice(cartItemIndex + 1)];
    }
    return [...cartItems, newItem];

};