import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import useAuth from '../../hooks/use-auth';
import classes from './ProductItemForm.module.css';

const ProductItemForm = (props) => {

  const navigate = useNavigate()

  const {product} = props;
  const selectRef = useRef(1);
  const {onAddProduct} = useContext(CartContext);
  const {user} = useAuth()

  const addToCartHandler = () => {


    const quantity = +(selectRef.current.value);
      const data = {
       ...product,
       quantity
      }

      onAddProduct(data);
 }
  

  const onSubmitHandler = (e) => {


    e.preventDefault();

    if (user) {  addToCartHandler();    }
     else {  navigate('/login');  }

  }

  let options=[];
  for (let i=1; i<product.stock; i++)  options[i] = [i];
        


 

 

  return (

    <form onSubmit={onSubmitHandler}>
     <div className={classes.controls}>
     
       <label htmlFor='select'>Quantity</label>
        <select id='select' ref={selectRef}  
         defaultValue={product.quantity}>

          {options.map((option, index) => <option key={index}   value={option}>{option}</option>)}

       </select>

     </div>

     <div className={classes.actions}>
       <button>Add to Cart</button>
     </div>
     
    </form>
  )
}

export default ProductItemForm;

