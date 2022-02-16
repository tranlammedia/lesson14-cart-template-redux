import * as Message from './../constants/Message'
import * as Types from './../constants/ActionTypes'

var initialState = Message.MSG_WELCOME

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
        // case Types.DELETE_TO_CART:
        //     console.log(action)
        //     return action.message
        default :
            return state
    }
}

export default appReducer