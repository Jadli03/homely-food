import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
const Cart = (props) => {
    const cartItems = [{
        id:'c1',
        name:'sushi',
        amount: 2,
        price: 12.99
    }];

   const items = <ul className={classes['cart-items']}>{cartItems.map(item => <li key={item.id} >{item.name}</li>)}</ul>

  return (
    <Modal>
    {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.92</span>
      </div>
      <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart