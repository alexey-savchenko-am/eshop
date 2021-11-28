import React from 'react';
import {connect} from "react-redux";
import {CustomButton} from "../custom-button/custom-button.component";

import './collection-item.styles.scss';
import {addItemToCard} from "../../redux/cart/cart-actions";


const CollectionItem = ({id, item, addItemToCard}) => (
    <div className="collection-item">
        <div className="image"
             style={{
                 backgroundImage: `url(${item.imageURL})`
             }}
        />
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        <CustomButton onClick={() => addItemToCard(item)}>Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
   addItemToCard: (item) => dispatch(addItemToCard(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);