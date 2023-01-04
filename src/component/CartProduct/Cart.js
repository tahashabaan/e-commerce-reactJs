import React from 'react'
import CartItem from './CartItem';
import { PaymentCart } from './PaymentCart';
import { Navigate, Route } from 'react-router-dom';
import classes from './Cart.module.css'


const Cart = ({products}) => {

  return (
  <div className={classes.cart}>  

    <PaymentCart/>

     {products.map( (product) => 
      <CartItem 
         key={product.id} 
         product={product}>
      </CartItem>)}
  </div>

  )
}

export default Cart
