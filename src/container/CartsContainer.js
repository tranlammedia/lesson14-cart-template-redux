import React, { Component } from 'react';
import { connect } from 'react-redux'
import Carts from './../components/Carts'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import PropTypes from 'prop-types';
import * as Message from './../constants/Message'
import { actDeleteToCart, actChangeMessage, actUpdateCart } from './../actions/index'

class CartsContainer extends Component {
    render() {
        var { carts } = this.props
        return (
            <Carts >
                { this.showCarts(carts) }
                { this.showTotal(carts)}
            </Carts>
        )
    }

    showCarts = (carts) => {
        var {onDeleteToCart, onChangeMessage, onUpdateCart } = this.props
        var result = <tr>
            <td>{Message.MSG_EMPTY_CART}</td>
        </tr>
        

        if(carts.length > 0) {
            result = carts.map((cart, index) => {
                return (
                    <CartItem 
                        key={index}
                        cart={cart}
                        index={index}
                        onDeleteToCart={onDeleteToCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateCart = {onUpdateCart}
                    />
                )
            })
            return result
        } else return result
    }
    
    showTotal = (carts) => {
        var result = null;
        if(carts.length > 0) {
            result = <CartResult carts={carts}/>
        }
        return result
    }
    
}

CartsContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteToCart : (cart) => {
            dispatch(actDeleteToCart(cart))
        },
        onUpdateCart : (cart, step) => {
            dispatch(actUpdateCart(cart, step))
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer)