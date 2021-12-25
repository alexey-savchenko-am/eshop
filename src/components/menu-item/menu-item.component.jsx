import React from 'react';
import  './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, onMenuItemClick}) => (
    <div className={`${size} menu-item`} onClick={() => onMenuItemClick(linkUrl)}>
        <div
            className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;