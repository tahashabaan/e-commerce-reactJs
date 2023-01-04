import React from 'react'
import classes from './Input.module.css';

 const Input = (props) => {

 const {label, id, type, placeholder, onChangeHandler, className, onBlurHandler} = props;
  
 const checkInput = className? classes.error:'';

  return (

    <div className={`${classes.controls} ${checkInput}`}>
      <label htmlFor={id}> {label} </label>
      <input 
       id={id}
       type={type}
       name={type} 
       placeholder={placeholder}
       onChange={onChangeHandler}
       onBlur={onBlurHandler} />

    </div>      )
    
  }

export default Input;