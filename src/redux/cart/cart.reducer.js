import { CartActionTypes } from "./cart.types";

const INITILA_STATE = {
    hidden: true
}

const cartReducer = (state = INITILA_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;

    }
}

export default cartReducer;