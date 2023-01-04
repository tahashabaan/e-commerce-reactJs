import React from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../hooks/use-auth';
import useForm from '../hooks/use-form';
import Card from '../UI/Card/Card'
import Input from './Input'
import classes from './Login.module.css';

const Register = () => {

 const {user, error, userAuthHandler:signUp} =useAuth();

 const { inputVal:fullNameValue, 
  hasError:NameError,
  onChangeHandler:onChangeNameHandler, 
  onBlurHandler:onBlurNameHandler, 
  resetHandler:resetNameHandler } = useForm((e) => e.length >= 8);

  const { inputVal:emailValue,
    hasError:emailError, 
    onChangeHandler:onChangeEmailHandler, 
    onBlurHandler:onBlurEmailHandler, 
    resetHandler:resetEmailHandler } = useForm( (e) =>  e.includes('@') );

    const { inputVal:passwordValue,         
      hasError:passwordError,
      onChangeHandler:onChangePasswordHandler, 
      onBlurHandler:onBlurPasswordHandler, 
      resetHandler:resetPasswordHandler } = useForm((e) => 
      e.length >= 6);
 
      // let formValided = false;
      // if ( !NameError && !emailError && !passwordError )  
      //      formValided = true
      // console.log(formValided);

    const onSubmitHandler = (e) => {

      e.preventDefault();
      signUp(createUserWithEmailAndPassword, emailValue, passwordValue, "/login")

      resetNameHandler();
      resetEmailHandler();
      resetPasswordHandler();

  }

  return (
   <Card className={classes.register}>
    <form onSubmit={onSubmitHandler}>
    <Input 
        label='full Name'
        type='text' 
        id='text' 
        placeholder='enter Full Name'
        onChangeHandler ={onChangeNameHandler}
        onBlurHandler={onBlurNameHandler}
        className ={NameError}/>

    <Input 
        label='Email'
        type='email' 
        id='email' 
        placeholder='enter email' 
        onChangeHandler ={onChangeEmailHandler}
        onBlurHandler ={onBlurEmailHandler}
        className ={emailError}/>

       <Input 
        label='Password'
        type='password' 
        id='password'
        placeholder='enter password'
        onChangeHandler ={onChangePasswordHandler}
        onBlurHandler  ={onBlurPasswordHandler}
        className ={passwordError} />

       <button className={classes.btn}>Register</button>
       <Link to='/login' > Sign In </Link>
    </form>
    </Card>
  )
}

export default Register;