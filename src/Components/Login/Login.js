import React, { useState } from 'react'
import Card from '../UI/Card/Card'

const Login = () => {
  const [enteredPassword, setEnteredPassword] = useState();
  const [vaildPssword, setVaildPssword] = useState(false);
  const [enteredEmail, setEnteredEmail] = 
  useState();
  const [validEmail, setValidEmail ] = 
  useState(false);
  
const onSubmitHandler = (e) => {
  e.preventDefault();
  setValidEmail(enteredEmail.includes('@'));
  setVaildPssword(enteredPassword.trim().length > 6);
}

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value); 
  }

  return (
    <Card > 
      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={emailChangeHandler}></input>
        <label htmlfor='password'>Password</label>
        <input type='password' id='password' onChange={passwordChangeHandler}>
        </input>
        <button type='submit'>login</button>
      </form>

    </Card>
  )
}

export default Login