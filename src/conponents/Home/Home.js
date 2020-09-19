import React, { useState } from 'react'
import Suit from '../../images/suit.jpg'
import BlackTshirts from '../../images/t-shirts-black.jpg'
import WhiteTshirts from '../../images/t-shirts-white.jpg'
import Sleeveless from '../../images/sleeveless.jpg'
import { connect } from 'react-redux'
import { addBasket } from '../../actions/addAction'

function Home(props) {
    console.log(props);
    /* 

    // 어떻게 상태를 업데이트 할 것인지 useState 를 사용해서 적어보고 redux 로 이동
    const [basketNumbers, setbasketNumbers] = useState(0)

    const addTodoBasket = () => {
        setbasketNumbers(basketNumbers + 1)
        console.log(basketNumbers);
    }
    */
    return (
        <div className="container">
            <div className="image">
                <img src={Suit} alt="" />
                <h3>Black Suit</h3>
                <h3>₩89,000</h3>
                <a onClick={() => props.addBasket('blackSuit')} className="addToCart" href="#" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={BlackTshirts} alt="" />
                <h3>Black Tshirts</h3>
                <h3>₩13,000</h3>
                <a onClick={() => props.addBasket('blackTshirts')} className="addToCart" href="#" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={WhiteTshirts} alt="" />
                <h3>White Tshirts</h3>
                <h3>₩9,000</h3>
                <a onClick={() => props.addBasket('whiteTshirts')} className="addToCart" href="#" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={Sleeveless} alt="" />
                <h3>Sleeveless(Black, chacole, gray, white)</h3>
                <h3>₩5,000</h3>
                <a onClick={() => props.addBasket('sleeveless')} className="addToCart" href="#" >Add to Cart</a>
            </div>
        </div>
    )
}

export default connect(null, { addBasket })(Home)
// 리덕스와 연결
// 첫 value 는 null state 에 아무것도 안넣고 action만 전달할 것이므로
// 숫자를 즉각 증가시키는 역할만 하기 때문에 state 는 안 넣어도 된다고 이해함