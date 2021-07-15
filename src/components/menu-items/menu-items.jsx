import React from 'react';
import './menu-items.scss';

const menuItems = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>Some text</span>
            </div>
        </div>
    )
}

export default menuItems
