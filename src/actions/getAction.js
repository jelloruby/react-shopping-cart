import { GET_NUMBERS_IN_BASKET } from './types'

export const getNumbers = () => {
    return (dispatch) => {
        console.log("getting all Basket Numbers...")
        dispatch({
            type: GET_NUMBERS_IN_BASKET
        })
    }
}