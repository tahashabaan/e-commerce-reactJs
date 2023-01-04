import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Card from '../UI/Card/Card';
import Input from './Input';
import classes from './Login.module.css';
import useAuth from '../hooks/use-auth';
import useForm from '../hooks/use-form';
import Spinner from '../UI/Spinner/Spinner';

const Login = () => {
   
  const {
    inputVal:email, 
    hasError:emailError, 
    onChangeHandler:onChangeEmailHandler, 
    onBlurHandler:onBlurEmailHandler} = useForm(e => e.includes('@'));

    const {
      inputVal:password, 
      hasError:passwordError, 
      onChangeHandler:onChangePasswordHandler, 
      onBlurHandler:onBlurPasswordHandler} = useForm(e => e.length >=6);
  
   const {user, isLoading, error,userAuthHandler:signIn, } =useAuth();

   console.log(isLoading, error)
  
  console.log(user)
  
  const onSubmitHandler =  (e) => {
    
    e.preventDefault();
    signIn(signInWithEmailAndPassword,email, password,"/");
  
  }

  return (
    <>
   <Card className={classes.login}>
     <form onSubmit={onSubmitHandler}>
       <Input 
        label='Email'
        type='email' 
        id='email' 
        placeholder='enter email'
        onChangeHandler={onChangeEmailHandler}
        className ={emailError}
        onBlurHandler={onBlurEmailHandler}  />

       <Input 
        label='Password'
        type='password' 
        id='password'
        placeholder='enter password'
        onChangeHandler={onChangePasswordHandler}
        onBlurHandler={onBlurPasswordHandler}
        className ={passwordError} />

       <button className={classes.btn}>Login</button>

     <Link to='/register' className={classes.link}> Sign Up </Link>
     </form>
    </Card>
    {/* {isLoading && error && <Spinner/>} */}
   </>
  
  )
}

export default Login
