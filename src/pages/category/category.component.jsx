import React from "react";
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component"
import {selectShopItemsByCategory} from "../../redux/shop/shop-selectors";
import './category.styles.scss';

const CategoryPage = ({collection}) => {

    if(!collection)
        return (<p>No such category!</p>);
    const {title, items } = collection;

    return (
        <div className='category'>
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(i => (<CollectionItem key={i.id} item={i}/>))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItemsByCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);