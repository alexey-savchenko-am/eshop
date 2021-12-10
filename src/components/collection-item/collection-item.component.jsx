import React from 'react';
import {connect} from "react-redux";
import {CustomButton} from "../custom-button/custom-button.component";

import './collection-item.styles.scss';
import {addItemToCart} from "../../redux/cart/cart-actions";


const CollectionItem = ({id, item, addItemToCart}) => (
    <div className="collection-item">
        <div className="image"
             style={{
                 backgroundImage: `url(${item.imageUrl})`
             }}
        />
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        <CustomButton onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);