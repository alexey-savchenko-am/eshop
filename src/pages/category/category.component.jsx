import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItemsByCategory} from "../../redux/shop/shop-selectors";
import './category.styles.scss';

const CategoryPage = ({collection}) => (
    <div className='category'>
        {
            collection.items.map(i => <div>{i.name}</div>)
        }
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItemsByCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);