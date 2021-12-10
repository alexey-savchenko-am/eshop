import CartActionTypes from "./cart-types";
import {changeItemQuantity} from "./cart-utils";

const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
      case CartActionTypes.ADD_ITEM:
          return {
            ...state,
            cartItems: changeItemQuantity(state.cartItems, action.payload, 1)
          };
      case CartActionTypes.REMOVE_ITEM:
          return {
              ...state,
              cartItems: changeItemQuantity(state.cartItems, action.payload, -1)
          };
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
          return {
              ...state,
              cartItems: changeItemQuantity(state.cartItems, action.payload, -state.cartItems.find(i => i.id === action.payload.id).quantity)
          };
      default:
          return state;
  }
};

export default cartReducer;
