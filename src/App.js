import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/Layout/Header/Header';
import Products from './component/Home/Products/Products';
import ProductItemDetails from './component/Home/Products/ProductItemDetails';
import Cart from './component/CartProduct/Cart';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Modal from './component/UI/Modal/Modal';
import NotFound from './component/NotFound';
import CartContext from './store/cart-context';
import CheckOut from './component/CartProduct/CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';





const App = () => {
  
  const {items, showCart, products, error, loading} = useContext(CartContext);

  const stripePromise = loadStripe('pk_test_51MHiC0DaMD3XgP50FUzXjtOflju8kfXBl5CCmKeXhnCWsim7JlIx6IEdg9wIlgzvyZw48eqRElcHSUdtEI8WgkZw003TfP27pE');
  
  // const options = {
  //   clientSecret:"sk_test_51MHiC0DaMD3XgP50EqMe7P7IlN4xaTkYFChhHqpDZReKlcQXyjD195YSFiJ0SpYXqsjPprgv9hXJGp7fLrqbd1SW00HQNRoUVE",
  // };

  return (
    <Router>
      <Header/>
      
      {/* {showCart && <Modal/>} */}

       <Routes> 
        <Route path='/'   //props?
          element={<Products 
                       products={items.products} 
                       loading={loading} 
                       error={error} />} />
          {/* path element  */}
        <Route path='/:productId' 
          element={<ProductItemDetails  
                  products={items.products}/>}/>

        <Route path='/cart' 
          element={products.length <1 ? <Navigate to='/'/> : <Cart products={products}/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={
          //options={options}
         <Elements stripe={stripePromise} >
           <CheckOut/>
         </Elements>}/>
       
       </Routes>
     </Router>
  )
}
export default App;
