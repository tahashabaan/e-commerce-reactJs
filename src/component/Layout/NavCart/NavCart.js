import React, { useContext } from 'react';
import {signOut } from 'firebase/auth';
import { FiAlignRight } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import { FiX } from "react-icons/fi";
import useAuth from '../../hooks/use-auth';
import classes from './NavCart.module.css';


 const NavCart = () => {

  const ctx = useContext(CartContext);
  
  let totalProduct = ctx.products.reduce( (preVal, curVal) => preVal + curVal.quantity, 0 );
  
  const {onShowCart} = useContext(CartContext);
  const {user, userAuthHandler:logOut} = useAuth();
   
  return (
    <nav className={classes.nav}>
      
      {/* <button>
         <BsCartCheck/>
      </button> */}
      
     {!user && <Link to='/login'> <p> Login </p></Link>}
     {!user && <Link to='/register'> <p> Register  </p>  </Link> }

     {(user) && <p onClick={()=>logOut(signOut,null,null,'/login')}> Sign Out </p>}
     {(user) && <p> {user.email}  </p>}

     <Link to='/cart'>
       <button className={classes.cart} onClick={onShowCart}>
       <BsCartCheck className={classes.icon}/>
       <span className={classes.badge}>{totalProduct}</span>
       </button>
     </Link>
 
    </nav>
  )
}

export default NavCart;
