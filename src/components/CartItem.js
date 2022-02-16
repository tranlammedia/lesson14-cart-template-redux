import React, { Component } from 'react'
import * as message from './../constants/Message'

class CartItem extends Component {
    onDeleteToCart = (cart) => {
        this.props.onDeleteToCart(cart)
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART)
    }

    onUpdateCart = (cart, step) => {
        this.props.onUpdateCart(cart, step)
        this.props.onChangeMessage(message.MSG_UPDATE_CART)
    }

    render() {
        var { cart } = this.props


        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateCart(cart,-1)}
                        >
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateCart(cart,1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subTotal(cart.quantity, cart.product.price)}$</td>
                <td>
                    <button
                        type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDeleteToCart(cart)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    subTotal = (quantity, price) => {
        return quantity * price
    }
}

export default CartItem;
