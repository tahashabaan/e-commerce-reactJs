import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavCart from '../NavCart/NavCart';
import NavBar from '../NavCart/NavBar'
import classes from './Header.module.css';
import { FiAlignRight } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { FiX } from "react-icons/fi";


const Header = (props) => {
  const [navBar, setNavBar] =useState(false);

  const openMenuHandler = () => {
    setNavBar(true);
  }

  const closeMenuHandler = () => {
    setNavBar(false);
  }

  return (
  <>
   <header className={classes.head}>
     <Link to='/'>
       <h3 onClick={closeMenuHandler}>Shoping Store</h3>
     </Link>

     <NavCart/>

     <div className={classes.navbar}>
      {!navBar && <button onClick={openMenuHandler}>
          <FiAlignRight className={classes.icon_bar}/>
        </button>}

        {navBar && <button onClick={closeMenuHandler}>
          <FiX className={classes.icon_bar}/>
        </button>}
     </div>

     {navBar && <NavBar closeMenu={closeMenuHandler}/>}
   </header>
   
 </>
  )
}

export default Header