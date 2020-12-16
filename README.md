## 리액트 쇼핑카드 만들기 🛒

리액트와 함께 리덕스를 익히기 위해 강의를 보며 만든 간단한 쇼핑몰 프로젝트  
(참고영상 : <https://youtu.be/0skzNIckrvQ>)


### redux 


1. redux 설치
  * redux-thunk : action 을 비동기적으로 처리해줌
```
  npm i redux react-redux redux-thunk redux-devtools-extension
```


2. store.js 생성
```
  import { createStore, applyMiddleware } from 'redux'
  import { composeWithDevTools } from 'redux-devtools-extension'
  import thunk from 'redux-thunk'
  import rootReduxer from './reducers'

  const initialState = {};    // 빈 배열
  const middleware = [thunk]  // thunk 업데이트

  const store = createStore(
      rootReduxer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
  )

  export default store
```


3. app.js 에서 store 설정
  : 컴포넌트를 Provider 로 감싸 store를 전달준다.
```
  import { Provider } from 'react-redux'
  import store from './store'

  function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Home />
        </div>
      </Provider>
    );
  }
```


4. 컴포넌트에서 redux 설정
  * connect : redux 와 연결
```
  import { connect } from 'react-redux'
  import { addBasket } from '../../actions/addAction'

  function Home(props) {

      console.log(props);
      return (
        ...
      )
  }

  export default connect(null, { addBasket })(Home)
```
