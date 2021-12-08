import React from "react";
import {connect} from "react-redux";
import './checkout-item.styles.scss';
import {clearItemFromCart} from "../../redux/cart/cart-actions";


const CheckoutItem = ({cartItem, clearItemFromCart}) => (
  <div className="checkout-item">
      <div className="image-container">
          <img src={cartItem.imageUrl} alt="item"/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);