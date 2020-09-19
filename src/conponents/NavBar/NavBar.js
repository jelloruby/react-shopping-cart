import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNumbers } from '../../actions/getAction'
import { Link } from 'react-router-dom'

function NavBar(props) {

    console.log(props);

    useEffect(() => {
        getNumbers();
    }, [])

    return (
        <header>
            <nav>
            <h2>EB Shop</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart <span>{props.basketProps.basketNumbers}</span></Link></li>
            </ul>
            </nav>
            <div className="cover"></div>
        </header>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(NavBar)

// index.js 에서 온 값을 담아 전달한다.
// useefftect 를 사용해서 getNumber 를 실행시키고
// index.js 에서 받은 basketState 를 mapStateProps 로 받아서 basketProps 에 저장함
// 그 값은 props 로 받아온 것이므로 props 에서 불러야한다.
// props.basketProps.basketNumbers 에서 basketNumbers는 reducer에서 state 로 지정한 값
