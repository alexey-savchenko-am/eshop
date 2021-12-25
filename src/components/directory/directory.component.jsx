import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory-selector";
import {withRouter} from "react-router-dom";

const Directory =  ({sections, history}) => {
    const redirectToUrl = (linkUrl) => history.push(linkUrl);

    return (
        <div className="directory-menu">
            {
                sections.map(
                    ({title, imageUrl, id, size, linkUrl}) =>
                        <MenuItem
                            key={id}
                            onMenuItemClick={redirectToUrl}
                            title={title}
                            imageUrl={imageUrl}
                            linkUrl={linkUrl}
                            size={size}
                        />)
            }
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps)(Directory));