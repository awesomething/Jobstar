import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})