import React from 'react';
import RSLogo from '../Images/RSLogo.jpg'

export default class Item {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
    show() {
        return (
            <div>
                <div id={'item' + this.id} className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="card-body" id='mycard'
                        style={{
                            backgroundImage: `url(${RSLogo})`,
                        }}>
                            <h4 className="card-title text-white ">{this.name}</h4>
                            <p className="card-text"></p><br /><br />
                            <p className="card-text text-muted">{this.price}$</p>
                            <button type="button" className="btn btn-danger" id={'superFunction' + this.id}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}