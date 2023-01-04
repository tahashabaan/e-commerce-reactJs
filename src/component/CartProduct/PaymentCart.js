import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import Card from '../UI/Card/Card';
import classes from './Payment.module.css';

  export const PaymentCart = () => {
  
   const {totalAmount} = useContext(CartContext);
 
   const Navigate = useNavigate();
  
  return (
    <Card className={classes.payment}>

      <header>
        totalAmount: {totalAmount}$
      </header>

      <footer>
       <button className={classes.close} 
        onClick={() => {Navigate('/')}}> Close </button>
        
       <button onClick={()=>{Navigate('/checkout')}}>Order</button>
      </footer>
    </Card>
  )
}
