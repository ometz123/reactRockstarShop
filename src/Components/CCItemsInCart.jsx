import React, { Component } from 'react';
import CCItem from './CCItem';

export default class CCItemsInCart extends Component {
    constructor(props) {
        super(props);
    };

    superFunction = (data) => {
        this.props.superFunction(data);
    }
    render() {
        let listItems = this.props.itemsInCart.map(item =>
            <li className="list-group-item" key={item.id} >
                <CCItem item={item} superFunction={this.superFunction} key={item.id}
                    sendData={this.getData} btnText={'X'}
                    parent='CCItemsInCart'/>
            </li>
        );

        let sum = 0;

        this.props.itemsInCart.forEach(item => {
            sum += item.price;
        });

        return (
            <div className="card text-white bg-info"  >
                <div className="card-header">
                    Items in cart
                </div>
                <ul className="list-group list-group-flush text-black" >
                    {listItems}
                    <li className="list-group list-group-flush text-black">
                        total is: {sum}$
                    </li>
                </ul>
            </div>
        );
    }
}
