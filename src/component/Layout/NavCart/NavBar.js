import React, { useContext, useState } from 'react';
import {signOut } from 'firebase/auth';
import { FiX } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import useAuth from '../../hooks/use-auth';
import classes from './NavCart.module.css';
import Modal from '../../UI/Modal_/Modal';

const NavBar = (props) => { 

  const ctx = useContext(CartContext);

  let totalProduct = ctx.products.reduce( (preVal, curVal) => preVal + curVal.quantity, 0 );
  
  const {onShowCart} = useContext(CartContext);
  const {user, userAuthHandler:logOut} = useAuth();

  return (
   <Modal className={classes.modal}>
    <nav className={classes.navBar}>
     {!user && <Link to='/login' > 
       <p onClick={props.closeMenu}> Login </p>
       </Link>}
       
     {!user && <Link to='/register'> 
     <p onClick={props.closeMenu}> Register  </p>  
     </Link> }

     {(user) && <p 
     onClick={()=> {

       logOut(signOut,null,null,'/login')
       props.closeMenu();

      }}> Sign Out </p>}
     {(user) && <p> {user.email}  </p>}

     <Link to='/cart'>
       <button className={classes.cart} onClick={() => {
         onShowCart();
         props.closeMenu();
       }}>
         <BsCartCheck className={classes.icon}/>
         <span className={classes.badge}>{totalProduct}</span>
       </button>
     </Link>
    </nav>
  </Modal> 
  )
}

export default NavBar;
