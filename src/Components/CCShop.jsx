import React, { Component } from 'react';
import JSCItem from '../CJSlass/JSCItem'
import RDR2 from '../Images/RDR_2.png';
import GTAV from '../Images/GTA_V.png';
import GTASA from '../Images/GTA_SA.png';
import CCItemsInCart from './CCItemsInCart';
import CCItems from './CCItems';

export default class CCShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: [],
            items: [new JSCItem(1, 'Red Dead Redemption II', 270, RDR2),
            new JSCItem(2, 'GTA V', 50, GTAV),
            new JSCItem(3, 'GTA San Andreas', 70, GTASA)]
            
        }
    }

    addToCart = (data) => {
        this.state.itemsInCart.push(data);
        let newItemsInCart = this.state.itemsInCart;
        this.setState({
            itemsInCart: newItemsInCart,
        });

        let newItems = this.state.items.filter(item =>
            item.id !== data.id);
        this.setState({
            items: newItems
        })

    }
    removeFromCart = (data) => {
        let newItemsInCart = this.state.itemsInCart.filter(item =>
            item.id !== data.id);
        this.setState({
            itemsInCart: newItemsInCart
        });

        this.state.items.push(data);
        let newItems = this.state.items;
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <div id='cart' className={'float-md-left col-lg-4'} >
                    <CCItemsInCart 
                    itemsInCart={this.state.itemsInCart} 
                    superFunction={this.removeFromCart}/>

                </div>
                <div id='items' className='float-right col-lg-8'>
                    <CCItems  
                    items={this.state.items} 
                    superFunction={this.addToCart}/>
                </div>
            </div>
        );
    }
}