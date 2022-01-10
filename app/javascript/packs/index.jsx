import React from 'react';
import ReactDOM from 'react-dom';
import Order from './components/Order'

// ReactDOM.render(<Order orders={orders}/>, document.getElementById('root'));
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('orders_data')
  const orders = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Order orders={orders} />,
    document.body.appendChild(document.getElementById('root')),
  )
})