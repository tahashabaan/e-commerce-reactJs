import React, { useContext } from 'react'
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ProductItemForm from '../Home/Products/ProductItemForm';
import Card from '../UI/Card/Card';
import classes from './CartItem.module.css';



 const CartItem = ({product}) => {

  console.log(product)
   const {onRemoveProduct} = useContext(CartContext);
   let id = product.id;
   const onRemoveProductHandler = () =>{ 
    onRemoveProduct(id)
    console.log(id)
  }


  return (
     <div className={classes.cartItem}>

<button className={classes.close}  
          onClick={onRemoveProductHandler}>
                <MdClose/>
          </button>

         <section className={classes.wrapper}>



          <div className={classes.left}>
           <img src={product.images[0]} alt='Image'/>
          </div>

          <div className={classes.right}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <ProductItemForm product={product} />
          </div>
          
         </section>

    </div>
     )
}

export default CartItem
