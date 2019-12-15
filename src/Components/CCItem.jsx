import React, { Component } from 'react';
import $ from 'jquery';
export default class CCItem extends Component {
    constructor(props) {
        super(props);
        this.id = props.item.id;
        this.name = props.item.name;
        this.price = props.item.price;
        this.image = props.item.image;
    }
    superFunction = (data) => {
        this.props.superFunction(data)
    }
    componentDidMount = () => {
        $(`#superFunction${this.id}`).click(() => this.superFunction(this.props.item));
        

    }
    render() {
        if (this.props.parent === 'CCItemsInCart') {
            return (
                <div>
                    {this.props.item.show()}
                </div >);
        } else {
            return (
                <div>
                    <div id={'item' + this.id} className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={this.image} className="card-img" alt={this.name + ' image'}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.name}</h5>
                                    <p className="card-text"></p><br /><br />
                                    <p className="card-text"><small className="text-muted">{this.price}$</small></p>
                                    <button type="button" id='superFunction'
                                        onClick={() => this.superFunction(this.props.item)}
                                        className="btn btn-primary float-md-right">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }



}
// render() {
//     // $('#superFunction').attr('onClick', this.props.superFunction(this.props.item))
//     return (
//         // <div>
//         //     {this.props.item.show()}
//         // </div >
//         <div>
//         <div id={'item' + this.id} className="card mb-3" >
//             <div className="row no-gutters">
//                 <div className="col-md-4">
//                     <img src={this.image} className="card-img" alt={this.name + ' image'}></img>
//                 </div>
//                 <div className="col-md-8">
//                     <div className="card-body">
//                         <h5 className="card-title">{this.name}</h5>
//                         <p className="card-text"></p><br /><br />
//                         <p className="card-text"><small className="text-muted">{this.price}$</small></p>
//                         <button type="button" id='superFunction'
//                         onClick={()=>this.props.superFunction(this.props.item)} 
//                         className="btn btn-primary float-md-right">Add To Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );

// }
