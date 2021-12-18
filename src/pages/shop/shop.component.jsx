import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItems} from "../../redux/shop/shop-selectors";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import './shop.styles.scss';

const  ShopPage = ({collections}) =>
(
   <div className="shop-page">
      {
         collections.map(({id, ...other}) => (
            <CollectionPreview key={id} {...other}/>
         ))
      }
   </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(ShopPage);