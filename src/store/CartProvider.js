import { useState, useEffect, useReducer } from "react";
import useCart from "../component/hooks/use-cart";
import CartContext from './cart-context';

 const intialProduct ={
   products:[],
   totalAmount:0
}

const productReducer = (state, action) => {

  if (action.type === 'Add') {

    let updatesTotalAmount = state.totalAmount + action.payload.quantity * action.payload.price;

    const existingProductIndex = state.products.findIndex(
      product => product.id === action.payload.id)
    const existingProduct = state.products[existingProductIndex];

    let updateProducts;
    if (existingProduct) {
      let updateProduct = {
        ...existingProduct,
        quantity: action.payload.quantity
      }

     updateProducts = [...state.products];
     updateProducts [existingProductIndex] = updateProduct; 
      

        updatesTotalAmount = (state.totalAmount - existingProduct.quantity * existingProduct.price) + action.payload.quantity * action.payload.price;
    
    }

    else { 
      updateProducts = state.products.concat(action.payload); }
    return {
      products: updateProducts,
      totalAmount: updatesTotalAmount
    }
  }


  if (action.type === 'Remove') {

     const existingProduct = state.products.find(product => product.id === action.id);
     

    let updateProducts;
    let updateTotalAmount;
    if (existingProduct) {
        updateProducts = state.products.filter( product => 
              product.id !== action.id ) 
       updateTotalAmount = state.totalAmount - existingProduct.price * existingProduct.quantity;  }

      else {updateProducts = [...state.products]}
    
      return {
        products:updateProducts,
        totalAmount:updateTotalAmount
      }
  }

  return {intialProduct}

}

const CartProvider = (props) => {

  const [stateProduct, dispatchProduct] = useReducer(productReducer, intialProduct);
  const [showCart, setShowCart] = useState(false);

  const url = `https://dummyjson.com/products`;
  const {reqData, items, loading, error} = useCart({url});

   useEffect(() => {
    reqData();
  },[]);


  // const [items, setItems] = useState({
  //   products:[],
  //   total:0,
  //   skip:2,
  //   limit:40,
  // });
  
  // const fetchData = async () => {
  //  const response = await fetch('https://dummyjson.com/products');
  //  const data = await response.json();
  //  setItems(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

  const AddProductHandler = (payload) => {
    dispatchProduct({type:'Add',payload})
  }

  const updateCartHandler = (payload) => {
    dispatchProduct({type:'updateCart', payload})
  }

  const removeProductHandler = (id) => {
    dispatchProduct({type:'Remove', id})
  }

  const showCartHandler = () => {  setShowCart(true);  }

  const hideCartHandler = () => {  setShowCart(false);  }

  return (
   <CartContext.Provider value={{
    items,
    products:stateProduct.products,
    totalAmount:stateProduct.totalAmount,
    showCart,
    error,
    loading,
    onShowCart:showCartHandler,
    onHideCart:hideCartHandler,
    onAddProduct:AddProductHandler,
    onUpdateCart:updateCartHandler,
    onRemoveProduct:removeProductHandler
    }}>
         {props.children}
   </CartContext.Provider>)
}

export default CartProvider;