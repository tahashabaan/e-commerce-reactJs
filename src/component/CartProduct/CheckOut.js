import React, { useState, useEffect, useContext } from 'react'
import { CardElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import Modal from '../UI/Modal/Modal'
import { useNavigate } from 'react-router-dom';
import classes from './CheckOut.module.css'
import CartContext from '../../store/cart-context';


const CheckOut = (props) => { 

  const [backend, setBackend] = useState(false);
  
  const [cardElement, setCardElement] = useState(null);
  const [secertKey, setSecertKey] = useState(null);
  const [sucessed, setSucessed ] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError ] = useState(null);
  const [loading, setLoading ] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();
  const navigate =  useNavigate();
  
  const {totalAmount} = useContext(CartContext)
  


  // useEffect(() => {
  //   const getClientSecret = async () => {

  //    const response = await axios.post({
        // method:'post',
  //       url:`/payment/create? amount=${totalAmount * 100}`,
  //     })

  //     setSecertKey(response.data.clientSecret);
  //     return response;
  //   }
  //   getClientSecret();
  
  // }, [totalAmount])
  
  const submitHandle = async (e) => {

    setLoading(true);
    setBackend(true);
    e.preventDefault();  

  }

  const changeHandle = (e) => {

  }

  //   const payload = await stripe.confirmCardPayment(secertKey,{
  //         payment_method:{
  //          card:elements.getElement(CardElement)
  //        }
  //   }).then((paymentIntent ) => {
  //      setSucessed(true);
  //      setLoading(false);
  //      setError(null);
  //      navigate('/cart', {replace:true})

  //   })
  // }

  // const changeHandle = (e) => {
  //   setDisable(false);
  //   setError(error? error.message :'');

    // setCardElement(e.target.value);
    // console.log(cardElement);
 

  

  
  return (
  
      <form onSubmit={submitHandle} className={classes.form}>
       
        <CardElement onChange={changeHandle} className={classes.cardElement}/>
      
        <button disabled={backend}>
           {loading? "laoding...":"BuyNow"}
        </button>

        {error && <p>{error}</p>}
        {backend && <Modal> 
        <p className={classes.back}>جاري تنفيذ الباك اند سيتم تشغليه في اقرب وقت</p>
          <button onClick={() => setBackend(false)}>ok</button>
         </Modal>}
       </form>
   
  )
}

export default CheckOut