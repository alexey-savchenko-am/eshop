import React from "react";
import {connect} from "react-redux";
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart-actions";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="items-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((q, i) => q + i.quantity, 0)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);