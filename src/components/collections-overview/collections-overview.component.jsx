import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-collection/collection-preview.component";
import {selectShopItems} from "../../redux/shop/shop-selectors";
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
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


export default connect(mapStateToProps)(CollectionOverview);

