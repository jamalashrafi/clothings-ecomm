import React from 'react';
import CollectionItem from './collection-items/collection-items'
import './collection-preview.styles.scss';

const collectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4)
                    .map(({ id, ...collectionProps }) => (
                        <CollectionItem key={id} {...collectionProps} />
                    ))}
            </div>
        </div>
    )
}

export default collectionPreview
