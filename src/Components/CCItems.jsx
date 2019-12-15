import React, { Component } from 'react';
import CCItem from './CCItem';

export default class CCItems extends Component {
    constructor(props) {
        super(props);
    };

    superFunction = (data) => {
        this.props.superFunction(data);
    }
    render() {
        this.listItems = this.props.items.map((item) => (
            < CCItem item={item} superFunction={this.superFunction} key={item.id}
            btnText={'Add To Cart'} 
            parent='CCItems'/>
        ));

        return (
            <div >
                {this.listItems}
            </div >
        );
    }

}