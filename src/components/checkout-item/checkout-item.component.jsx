import React from "react";
import {connect} from "react-redux";
import './checkout-item.styles.scss';
import {addItemToCart, removeItemFromCart, clearItemFromCart} from "../../redux/cart/cart-actions";


const CheckoutItem = ({cartItem, clearItemFromCart, addItemToCart, removeItemFromCart}) => (
  <div className="checkout-item">
      <div className="image-container">
          <img src={cartItem.imageUrl} alt="item"/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
          <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
          <span className="value">{cartItem.quantity}</span>
          <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);