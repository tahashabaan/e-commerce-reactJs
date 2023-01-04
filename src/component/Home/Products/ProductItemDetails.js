import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../../store/cart-context';
import classes from './ProductItemDetails.module.css';
import ProductItemForm from './ProductItemForm';



 const ProductItemDetails = ({products}) => {

  const ctx = useContext(CartContext);
  const [active, setActive] = useState(0);
  const {productId} = useParams();
  console.log(active)

  const product = products.find(product=>product.id == productId);

  if (!product) <p>Not Found</p>

  return (
    <div className={classes.wrapper}>
      <section className={classes.imgs}>
        {product.images.map((ele,i) => <img 
        src={ele} 
        key={i} 
        onClick={() => setActive(i)}/>)}
      </section>

      <section className={classes.desc}>
       <section  className={classes.left} >
          <img src={product.images[active]}/>
       </section>

      <section className={classes.right}>
         <h3>{product.title}</h3>
         <h4>{product.price}$</h4>
         <p>{product.description}</p>
         {/* <div>{Array(product.rating).fill(3)}</div> */}
         <ProductItemForm product={product} 
          onAddProduct={ctx.onAddProduct}/>
      </section>      
    </section>  
    </div> //wrappar
  )
}

export default ProductItemDetails