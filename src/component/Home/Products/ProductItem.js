import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import classes from './ProductItem.module.css';


const ProductItem = ({product}) => {
 
  const productId = product.id;

  return (
    <Card className={classes.item}>
     <Link to={`/${productId}`}>
      <img src={product.thumbnail}/>
      <h4>{product.title}</h4>
    
      <h5>{product.price}$</h5>
      <span>{product.rating}</span>
      </Link>
    </Card>
 
  )
}

export default ProductItem
