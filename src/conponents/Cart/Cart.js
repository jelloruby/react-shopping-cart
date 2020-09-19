import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { IoMdRemoveCircle, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { productQuantity, removeProduct } from '../../actions/productQuantity'
import Suit from '../../images/suit.jpg'
import BlackTshirts from '../../images/t-shirts-black.jpg'
import WhiteTshirts from '../../images/t-shirts-white.jpg'
import Sleeveless from '../../images/sleeveless.jpg'

function Cart({ basketProps, productQuantity, removeProduct }) {
    console.log(basketProps);

    let productsInCart = [];

    const productImages = (product) => {
        if( product.tagName === 'blackSuit' ) {
            return Suit;
        } else if ( product.tagName === 'blackTshirts' ) {
            return BlackTshirts;
        } else if ( product.tagName === 'whiteTshirts' ) {
            return WhiteTshirts;
        } else if ( product.tagName === 'sleeveless' ) {
            return Sleeveless;
        } 
    }

    Object.keys(basketProps.products).forEach(function(item) {
        //console.log(item, basketProps.products[item].inCart)
        if(basketProps.products[item].inCart === true) {
            productsInCart.push(basketProps.products[item])
        }
    })

    productsInCart = productsInCart.map( (product, index) => {
        return (
            <Fragment key={index}>
                <div className="product">
                    <IoMdRemoveCircle onClick={() => removeProduct(product.tagName)} className="icon circle"/>
                    <img src={productImages(product)} />
                    <span>{product.name}</span>
                </div>
                <div className="price">
                    <span>₩{product.price}</span>
                </div>
                <div className="quantity">
                    <IoIosArrowDropleft onClick={() => productQuantity('decrease', product.tagName)} className="icon arrow-down"/>
                    <span>{product.numbers}</span>
                    <IoIosArrowDropright onClick={() => productQuantity('increase', product.tagName)} className="icon arrow-up"/>
                </div>
                <div className="total">
                    <span>₩{product.numbers * product.price}</span>
                </div>
            </Fragment>
        )
    })

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product">상품</h5>
                <h5 className="price">가격</h5>
                <h5 className="numbers">수량</h5>
                <h5 className="total">합계</h5>
            </div>
            <div className="product-main">
                {productsInCart}
            </div>
            <div className="product-total-price">
                <h4>총합</h4>
                <h4>{basketProps.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { productQuantity, removeProduct })(Cart)
