import * as Types from './../constants/ActionTypes'

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteToCart = (cart) => {
    return {
        type : Types.DELETE_TO_CART,
        cart
    }
}

export const actUpdateCart = (cart, step) => {
    return {
        type : Types.UPDATE_CART,
        cart,
        step
    }
}