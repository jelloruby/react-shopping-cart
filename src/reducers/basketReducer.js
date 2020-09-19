import { ADD_PRODUCT_BASKET, GET_NUMBERS_IN_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT } from '../actions/types'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        blackSuit: {
            name: 'BlackSuit',
            tagName: 'blackSuit',
            price: 89000,
            numbers: 0,
            inCart: false
        },
        blackTshirts: {
            name: 'BlackTshirts',
            tagName: 'blackTshirts',
            price: 13000,
            numbers: 0,
            inCart: false
        },
        whiteTshirts: {
            name: 'WhiteTshirts',
            tagName: 'whiteTshirts',
            price: 9000,
            numbers: 0,
            inCart: false
        },
        sleeveless: {
            name: 'Sleeveless',
            tagName: 'sleeveless',
            price: 5000,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload]}
            console.log(productSelected);
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload] : productSelected
                }
            }
        case GET_NUMBERS_IN_BASKET:
            return {
                ...state
            }

        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload] : productSelected
                }
            }

        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}

            let newCartCost = 0;
            let newBasketNumbers = 0;

            if(productSelected.numbers === 0) {
                productSelected.numbers = 0
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }

            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload] : productSelected
                }
            }

        case REMOVE_PRODUCT:
            productSelected = {...state.products[action.payload]}
            let productBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;

            return {
                ...state,
                basketNumbers: state.basketNumbers - 1,
                cartCost: state.cartCost - ( productBackup * productSelected.price ),
                products: {
                    ...state.products,
                    [action.payload] : productSelected
                }
            }

        default:
            return state;
    }
}