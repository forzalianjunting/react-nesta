# react-nesta
连接 react 和 [nesta](https://github.com/forzalianjunting/nesta) 的工具库。

[![npm version](https://img.shields.io/npm/v/react-nesta.svg?style=flat-square)](https://www.npmjs.com/package/react-nesta)
[![npm downloads](https://img.shields.io/npm/dm/react-nesta.svg?style=flat-square)](https://www.npmjs.com/package/react-nesta)

## 📦 安装
```bash
npm install react-nesta
```
```bash
yarn add react-nesta
```

## 🔨 试例
使用方法和 React-Redux 一样，通过 Provider 传递 store，接着使用 connect 方法包裹组件即可将 state 和 put 映射到组件的 props 中。

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'nesta'
import { Provider, connect } from 'react-nesta'
import PropTypes from 'prop-types'

const store = createStore({
  count: 0
})

class App extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  }

  handlePlus = () => {
    this.props.put(state => {
      state.count = state.count + 1
    })
  }

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.handlePlus}>plus</button>
      </div>
    )
  }
}

const WrappedApp = connect(state => ({ count: state.count }))(App)

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root'))
```