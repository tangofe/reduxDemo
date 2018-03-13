import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import themeReducer from './reducer/themeStyle'
import MyDemo from './container/MyDemo'
import './index.css';

const store = createStore(themeReducer)


ReactDOM.render(
  <Provider store={store}>
    <MyDemo/>
  </Provider>
  , document.getElementById('root')
);
