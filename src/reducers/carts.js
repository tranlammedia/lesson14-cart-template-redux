import * as Types from '../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('CART'))

var initialState = data ? data : []
var findProductToCarts = (data, product) => {
    var index = -1;
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].product.id === product.id) {
                return index = i
            }
        }
    }
    return index
}

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            var { product, quantity } = action
            var index = findProductToCarts(state, product)
            if (index > -1) {
                state[index].quantity += 1
            } else (
                state.push({
                    product,
                    quantity
                })
            )
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.DELETE_TO_CART:
            var index = -1;
            for (var i = 0; i < state.length; i++) {
                if (state[i].product.id === action.cart.product.id) {
                    index = i
                }
            }
            state.splice(index, 1)
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.UPDATE_CART:
            index = findProductToCarts(state, action.cart.product)
            var step = action.step
            var quantity = state[index].quantity
            var inventory = state[index].product.inventory
            if (step === -1) {
                if (quantity > 1) {
                    state[index].quantity += step
                }
            } else if (quantity < inventory) {
                state[index].quantity += step
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default appReducer