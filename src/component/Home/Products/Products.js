import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem'
import { AiOutlineMenuFold } from "react-icons/ai";

import classes from './Products.module.css';
import Spinner from '../../UI/Spinner/Spinner';


const Products = ({products, loading, error}) => {

   console.log(products, loading, error);
  const {id} = useParams();
 
   let content = products.map( (product) => <ProductItem 
   key={product.id}  
   product={product}/> );
  
  if (loading) content =<p><Spinner/></p>

  if(error)  content = <p>Something Went Wrong!</p>

  return (
    <ul className={classes.product}>
      {content}
    </ul>
  )
}

export default Products