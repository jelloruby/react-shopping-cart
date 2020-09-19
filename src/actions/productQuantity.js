import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT } from './types'

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("productQuantity...")
        console.log(action, name);

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}


export const removeProduct = (name) => {
    return (dispatch) => {
        console.log(name)
        dispatch({
            type: REMOVE_PRODUCT,
            payload: name
        })
    }
}
