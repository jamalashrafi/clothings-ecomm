import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'

export default class shopComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shopData: SHOP_DATA,
        }
    }

    render() {
        const shopData = this.state.shopData;
        return (
            <div>
                {
                    shopData.map(({ id, ...shopProps }) => (
                        <CollectionPreview key={id} {...shopProps} />
                    ))
                }
            </div>
        )
    }
}
